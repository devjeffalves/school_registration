

import express from "express";
import multer from "multer";
import Enrollment from "../models/Enrollment.js";
import { bucket } from "../firebase.js";
import { handleUpload } from "../controllers/uploadController.js";
import { uploadFileToFirebase, generateFirebasePath } from "../services/upload.js";

const router = express.Router();

// Multer (memória) + limite 5MB
const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 5 * 1024 * 1024 }
}).fields([
  { name: "documents" },
  { name: "authorizedPersonDocuments" },
  { name: "birthCertificate" },
  { name: "parentCPF" },
  { name: "addressProof" },
  { name: "vaccinationCard" }
]);

// Helper para parse seguro de JSON
function tryParseJSON(str) {
  try {
    return str ? JSON.parse(str) : null;
  } catch {
    return null;
  }
}

// Upload para Firebase Storage usando a nova função organizada
async function uploadBufferToFirebase(file, studentName, protocol, documentType) {
  console.log("🚀 Chamando uploadFileToFirebase com:", {
    fileName: file.originalname,
    studentName,
    protocol,
    documentType
  });
  
  try {
    const result = await uploadFileToFirebase(file, studentName, protocol, documentType);
    console.log("✅ uploadFileToFirebase retornou:", result?.substring(0, 100));
    return result;
  } catch (error) {
    console.error("❌ Erro em uploadFileToFirebase:", error);
    throw error;
  }
}

// POST / -> cria nova matrícula
router.post("/", upload, async (req, res) => {
  try {
    console.log("📥 BODY RECEBIDO NO BACKEND:", req.body);

    const genderMap = {
      male: "Masculino",
      female: "Feminino",
      masculino: "male",
      feminino: "female"
    };

    // --- Student ---
    const studentBody = tryParseJSON(req.body.student) || {};
    let studentName = studentBody.fullName || "";
    let protocol = studentBody.protocol || "";
    
    console.log("👤 DEBUG INICIAL:", {
      reqBodyStudent: req.body.student,
      studentBody,
      originalName: studentBody.fullName,
      studentNameAntes: studentName
    });
    
    // Garante nome válido do aluno (VERIFICAÇÃO PRIMEIRO)
    if (!studentName || studentName.trim().length < 2) {
      console.warn("⚠️ Nome do aluno inválido, usando padrão");
      studentName = "aluno-sem-nome";
    }
    
    // Gera protocolo se não existir
    if (!protocol) {
      const date = new Date();
      const datePart = date.toISOString().slice(0, 10).replace(/-/g, "");
      const randomPart = Math.random().toString(36).substring(2, 6).toUpperCase();
      protocol = `MAT-${datePart}-${randomPart}`;
      
      console.log("🎫 Protocolo gerado:", protocol);
      // Atualiza o studentBody com o protocolo gerado
      studentBody.protocol = protocol;
    }
    
    // NOVA VERIFICAÇÃO - garante que o nome ainda é válido
    if (!studentName || studentName.trim().length < 2) {
      console.error("❌ Nome do aluno inválido após processamento");
      studentName = "aluno-sem-nome";
    }
    
    console.log("🔍 DADOS EXTRAÍDOS ANTES DA VALIDAÇÃO:", {
      studentNameOriginal: studentBody.fullName,
      studentName,
      protocolOriginal: studentBody.protocol,
      protocol,
      studentBodyKeys: Object.keys(studentBody),
      hasAuthorizedPersons: !!studentBody.authorizedPersons,
      authorizedPersonsCount: Array.isArray(studentBody.authorizedPersons) ? studentBody.authorizedPersons.length : 0
    });

    // Processa authorizedPersons do JSON
    const authorizedPersonsArray = Array.isArray(studentBody.authorizedPersons)
      ? studentBody.authorizedPersons
      : [];

    // Associa arquivos das pessoas autorizadas
    console.log("🔍 VERIFICANDO DOCUMENTOS AUTORIZADOS:", {
      hasAuthorizedPersonDocuments: !!req.files?.authorizedPersonDocuments,
      count: req.files?.authorizedPersonDocuments?.length || 0,
      authorizedPersonsArrayLength: authorizedPersonsArray.length
    });
    
    if (req.files?.authorizedPersonDocuments?.length) {
      const uploadTimestamp = Date.now(); // Usa mesmo timestamp para evitar duplicatas
      
      for (let i = 0; i < req.files.authorizedPersonDocuments.length; i++) {
        const file = req.files.authorizedPersonDocuments[i];
        const documentType = `documento-autorizado-${i + 1}`;
        
        console.log(`📄 Processando documento autorizado ${i}:`, {
          fileName: file.originalname,
          documentType,
          studentName,
          protocol,
          hasPerson: !!authorizedPersonsArray[i]
        });
        
        // Verifica se já existe documento para esta pessoa
        if (authorizedPersonsArray[i]) {
          try {
            console.log(`📄 Fazendo upload do documento ${i}: ${file.originalname} para ${studentName}`);
            const url = await uploadBufferToFirebase(file, studentName, protocol, documentType);
            
            console.log(`🔗 URL recebida: ${url}`);
            console.log(`🔗 Tipo da URL: ${typeof url}`);
            console.log(`🔗 URL vazia? ${!url}`);
            
            authorizedPersonsArray[i].document = { 
              type: file.mimetype, 
              url,
              name: file.originalname,
              documentType: documentType
            };
            
            console.log(`✅ Documento associado à pessoa ${i}:`, authorizedPersonsArray[i].document);
            
            // Adiciona à lista geral de documentos também
            const docObj = {
              name: file.originalname,
              url,
              type: file.mimetype,
              documentType: documentType,
              firebasePath: generateFirebasePath(studentName, protocol, documentType, uploadTimestamp + i, file.originalname.split('.').pop()),
              category: 'pessoa-autorizada',
              personIndex: i,
              personName: authorizedPersonsArray[i]?.name || `Pessoa Autorizada ${i + 1}`
            };
            
            console.log(`📋 Adicionando à lista de documentos:`, docObj);
            documents.push(docObj);
          } catch (error) {
            console.error(`❌ Erro no upload do documento autorizado ${i}:`, error);
          }
        } else {
          console.warn(`⚠️ Pessoa autorizada ${i} não encontrada, ignorando documento ${file.originalname}`);
        }
      }
    }

    const student = {
      fullName: studentBody.fullName || "",
      birthDate: studentBody.birthDate || "",
      cpf: studentBody.cpf || "",
      gender: genderMap[studentBody.gender?.toLowerCase()] || studentBody.gender || "Não informado",
      nationality: studentBody.nationality || "",
      previousSchool: studentBody.previousSchool || "",
      grade: studentBody.grade || "",
      healthInfo: studentBody.healthInfo || {},
      studentInterests: studentBody.studentInterests || "",
      studentSkills: studentBody.studentSkills || "",
      studentDifficulties: studentBody.studentDifficulties || "",
      authorizedPersons: authorizedPersonsArray.map(p => ({
        name: p.name || "",
        phone: p.phone || "",
        relation: p.relation || "",
        document: p.document || null
      }))
    };

    if (student.authorizedPersons.length === 0) {
      return res.status(400).json({ message: "❌ Deve haver ao menos uma pessoa autorizada a buscar o aluno." });
    }

    // --- Responsible ---
    const responsibleBody = tryParseJSON(req.body.responsible) || [];
    const responsible = Array.isArray(responsibleBody)
      ? responsibleBody.map(p => ({
        name: p.name || "",
        cpf: p.cpf || "",
        relation: p.relation || "",
        phone: p.phone || "",
        email: p.email || "",
        job: p.job || ""
      }))
      : [];

    // --- Address ---
    const addressData = tryParseJSON(req.body.address) || {};
    const address = {
      zipCode: req.body.zipCode || addressData.zipCode || "",
      street: req.body.street || addressData.street || "",
      number: req.body.number || addressData.number || "",
      complement: req.body.complement || addressData.complement || "",
      neighborhood: req.body.neighborhood || addressData.neighborhood || "",
      city: req.body.city || addressData.city || "",
      state: req.body.state || addressData.state || ""
    };

    if (!address.street || !address.city || !address.state || !address.zipCode) {
      return res.status(400).json({
        message: "❌ Campos obrigatórios do endereço estão faltando (street, city, state, zipCode)."
      });
    }

    // --- Documents ---
    let documents = [];
    // Nota: authorizedPersonDocuments já foram processados nas linhas 62-70

    if (req.files?.documents?.length) {
      const uploadTimestamp = Date.now(); // Usa mesmo timestamp base
      
      for (let i = 0; i < req.files.documents.length; i++) {
        const file = req.files.documents[i];
        const allowed = ["application/pdf", "image/jpeg", "image/jpg", "image/png"];
        if (!allowed.includes(file.mimetype)) {
          return res.status(400).json({ message: `Tipo de arquivo não permitido: ${file.originalname}` });
        }
        
        // Identifica o tipo de documento pelo nome ou ordem
        let documentType = `documento-${i}`;
        const fileName = file.originalname.toLowerCase();
        
        if (fileName.includes('certid') || fileName.includes('nascimento')) {
          documentType = 'certidao-nascimento';
        } else if (fileName.includes('cpf')) {
          documentType = 'cpf-responsavel';
        } else if (fileName.includes('comprov') || fileName.includes('resid')) {
          documentType = 'comprovante-residencia';
        } else if (fileName.includes('vacina')) {
          documentType = 'carteira-vacinacao';
        } else if (fileName.includes('historic') || fileName.includes('escolar')) {
          documentType = 'historico-escolar';
        }
        
        console.log(`📄 Fazendo upload do documento principal ${i}: ${file.originalname} para ${studentName}`);
        const url = await uploadBufferToFirebase(file, studentName, protocol, documentType);
        
        console.log(`🔗 URL recebida: ${url}`);
        
        const docObj = {
          name: file.originalname,
          url,
          type: file.mimetype,
          documentType: documentType,
          category: 'documento-aluno',
          firebasePath: generateFirebasePath(studentName, protocol, documentType, uploadTimestamp + i, file.originalname.split('.').pop())
        };
        
        console.log(`📋 Adicionando documento principal à lista:`, docObj);
        documents.push(docObj);
      }
    }



// --- Payload final ---
    const enrollmentPayload = { student, responsible, address, documents, createdAt: new Date() };
    
    console.log("💾 SALVANDO NO MONGODB:", {
      studentName: student.fullName,
      protocol: studentBody.protocol,
      documentsCount: documents.length,
      authorizedPersonsArrayLength: authorizedPersonsArray.length,
      documents: documents.map((d, index) => ({
        index,
        name: d.name,
        hasUrl: !!d.url,
        url: d.url ? d.url.substring(0, 50) + "..." : "SEM_URL",
        urlLength: d.url ? d.url.length : 0,
        category: d.category
      }))
    });
    
    const enrollment = await Enrollment.create(enrollmentPayload);

    console.log("✅ Matrícula salva com sucesso no MongoDB!");
    return res.status(201).json({ message: "✅ Matrícula registrada com sucesso!", enrollment });
  } catch (error) {
    console.error("Erro ao registrar matrícula:", error);
    return res.status(500).json({ error: error.message || "Erro interno" });
  }
});

const singleUpload = multer({ storage: multer.memoryStorage() });
router.post("/upload", singleUpload.single("file"), handleUpload);

// GET / -> lista todas as matrículas
router.get("/", async (req, res) => {
  try {
    const enrollments = await Enrollment.find().sort({ createdAt: -1 });
    res.json(enrollments);
  } catch (error) {
    console.error("Erro GET enrollments:", error);
    res.status(500).json({ error: error.message });
  }
});

// GET /documents/:studentName/:protocol -> lista documentos de um aluno específico
router.get("/documents/:studentName/:protocol", async (req, res) => {
  try {
    const { studentName, protocol } = req.params;
    const { listStudentDocuments } = await import("../services/upload.js");

    const documents = await listStudentDocuments(studentName, protocol);
    res.json({ studentName, protocol, documents });
  } catch (error) {
    console.error("Erro ao listar documentos:", error);
    res.status(500).json({ error: error.message });
  }
});

export default router;
