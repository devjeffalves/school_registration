

import express from "express";
import multer from "multer";
import Enrollment from "../models/Enrollment.js";
import { bucket } from "../firebase.js";
import { handleUpload } from "../controllers/uploadController.js";
import { uploadFileToFirebase } from "../services/upload.js";

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
  return await uploadFileToFirebase(file, studentName, protocol, documentType);
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
    const studentName = studentBody.fullName || "aluno-nao-informado";
    const protocol = studentBody.protocol || "sem-protocolo";

    // Processa authorizedPersons do JSON
    const authorizedPersonsArray = Array.isArray(studentBody.authorizedPersons)
      ? studentBody.authorizedPersons
      : [];

    // Associa arquivos das pessoas autorizadas
    if (req.files?.authorizedPersonDocuments?.length) {
      for (let i = 0; i < req.files.authorizedPersonDocuments.length; i++) {
        const file = req.files.authorizedPersonDocuments[i];
        const url = await uploadBufferToFirebase(file, studentName, protocol, `documento-autorizado-${i}`);
        if (authorizedPersonsArray[i]) {
          authorizedPersonsArray[i].document = { type: file.mimetype, url };
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
    if (req.files?.authorizedPersonDocuments?.length) {
      for (let i = 0; i < req.files.authorizedPersonDocuments.length; i++) {
        const file = req.files.authorizedPersonDocuments[i];
        const url = await uploadBufferToFirebase(file);
        if (authorizedPersonsArray[i]) {
          authorizedPersonsArray[i].document = { type: file.mimetype, url };
        }
      }
    }


    if (req.files?.documents?.length) {
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
        
        const url = await uploadBufferToFirebase(file, studentName, protocol, documentType);
        documents.push({ 
          name: file.originalname, 
          url, 
          type: file.mimetype,
          documentType: documentType,
          firebasePath: `matriculas/${new Date().getFullYear()}-${String(new Date().getMonth() + 1).padStart(2, '0')}/${studentName.toLowerCase().replace(/\s+/g, '-')}/${protocol}/${documentType}_${Date.now()}.${file.originalname.split('.').pop()}`
        });
      }
    }

    // --- Payload final ---
    const enrollmentPayload = { student, responsible, address, documents, createdAt: new Date() };
    const enrollment = await Enrollment.create(enrollmentPayload);

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
