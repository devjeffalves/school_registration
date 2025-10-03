

// // src/routes/enrollmentRoutes.js
// import express from "express";
// import multer from "multer";
// import Enrollment from "../models/Enrollment.js";
// import { bucket } from "../firebase.js";

// const router = express.Router();

// // multer (memória) + limite 5MB por arquivo
// const upload = multer({
//   storage: multer.memoryStorage(),
//   limits: { fileSize: 5 * 1024 * 1024 } // 5 MB
// });

// // util: tenta dar parse se for string JSON, senão retorna valor original
// function tryParseJSON(value) {
//   if (!value) return value;
//   if (typeof value !== "string") return value;
//   try {
//     return JSON.parse(value);
//   } catch (err) {
//     return value;
//   }
// }

// // função que faz upload para o bucket e retorna URL (signed URL longa duração)
// async function uploadBufferToFirebase(file) {
//   const uniquePart = `${Date.now()}_${Math.random().toString(36).slice(2, 8)}`;
//   const safeName = file.originalname.replace(/\s+/g, "_");
//   const destination = `matriculas/${uniquePart}_${safeName}`;

//   const fileRef = bucket.file(destination);
//   const stream = fileRef.createWriteStream({
//     metadata: { contentType: file.mimetype }
//   });

//   await new Promise((resolve, reject) => {
//     stream.on("finish", resolve);
//     stream.on("error", reject);
//     stream.end(file.buffer);
//   });

//   const expiresInMs = 1000 * 60 * 60 * 24 * 365 * 10; // 10 anos
//   const [signedUrl] = await fileRef.getSignedUrl({
//     action: "read",
//     expires: Date.now() + expiresInMs
//   });

//   return signedUrl;
// }

// router.post("/", upload.array("documents", 12), async (req, res) => {
//   try {
//     // --- Student ---
//     const genderMap = {
//       masculino: "male",
//       feminino: "female",
//       male: "male",
//       female: "female"
//     };

//     const student = tryParseJSON(req.body.student) || {
//       fullName: req.body.fullName || "",
//       birthDate: req.body.birthDate || "",
//       cpf: req.body.cpf || "",
//       gender: genderMap[req.body.gender?.toLowerCase()] || "male", // valor default
//       naturalidade: req.body.naturalidade || "",
//       previousSchool: req.body.previousSchool || "",
//       grade: req.body.grade || "",
//       healthInfo: tryParseJSON(req.body.healthInfo) || {}
//     };


//     const parents = tryParseJSON(req.body.parents) || tryParseJSON(req.body.parent) || [];
// const responsible = Array.isArray(parents)
//   ? parents.map(p => ({ name: p.name || "", cpf: p.cpf || "", relation: p.relation || "" }))
//   : [{ name: "", cpf: "", relation: "" }];

//    const address = {
//   zipCode: req.body.zipCode || req.body.address?.zipCode,
//   street: req.body.street || req.body.address?.street,
//   number: req.body.number || req.body.address?.number,
//   complement: req.body.complement || req.body.address?.complement,
//   neighborhood: req.body.neighborhood || req.body.address?.neighborhood,
//   city: req.body.city || req.body.address?.city,
//   state: req.body.state || req.body.address?.state
// };


//     // --- Documents ---
//     let documents = tryParseJSON(req.body.documents) || [];
//     if (req.files && req.files.length > 0) {
//       for (const file of req.files) {
//         const allowed = ["application/pdf", "image/jpeg", "image/jpg", "image/png"];
//         if (!allowed.includes(file.mimetype)) {
//           return res.status(400).json({ message: `Tipo de arquivo não permitido: ${file.originalname}` });
//         }
//         const url = await uploadBufferToFirebase(file);
//         documents.push({
//           name: file.originalname,
//           url,
//           type: file.mimetype
//         });
//       }
//     }

//     // --- Payload final ---
//     const enrollmentPayload = {
//       student,
//       responsible: parents,
//       address,
//       documents,
//       createdAt: new Date()
//     };

//     const enrollment = await Enrollment.create(enrollmentPayload);

//     return res.status(201).json({
//       message: "✅ Matrícula registrada com sucesso!",
//       enrollment
//     });

//   } catch (error) {
//     console.error("Erro ao registrar matrícula:", error);
//     return res.status(500).json({ error: error.message || "Erro interno" });
//   }
// });

// // GET / -> lista todas as matrículas
// router.get("/", async (req, res) => {
//   try {
//     const enrollments = await Enrollment.find().sort({ createdAt: -1 });
//     res.json(enrollments);
//   } catch (error) {
//     console.error("Erro GET enrollments:", error);
//     res.status(500).json({ error: error.message });
//   }
// });

// export default router;


// src/routes/enrollmentRoutes.js
import express from "express";
import multer from "multer";
import Enrollment from "../models/Enrollment.js";
import { bucket } from "../firebase.js";

const router = express.Router();

// multer (memória) + limite 5MB por arquivo
const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 5 * 1024 * 1024 } // 5 MB
});

// util: tenta dar parse se for string JSON, senão retorna valor original
function tryParseJSON(value) {
  if (!value) return value;
  if (typeof value !== "string") return value;
  try {
    return JSON.parse(value);
  } catch {
    return value;
  }
}

// função que faz upload para o bucket e retorna URL (signed URL longa duração)
async function uploadBufferToFirebase(file) {
  const uniquePart = `${Date.now()}_${Math.random().toString(36).slice(2, 8)}`;
  const safeName = file.originalname.replace(/\s+/g, "_");
  const destination = `matriculas/${uniquePart}_${safeName}`;

  const fileRef = bucket.file(destination);
  const stream = fileRef.createWriteStream({
    metadata: { contentType: file.mimetype }
  });

  await new Promise((resolve, reject) => {
    stream.on("finish", resolve);
    stream.on("error", reject);
    stream.end(file.buffer);
  });

  const expiresInMs = 1000 * 60 * 60 * 24 * 365 * 10; // 10 anos
  const [signedUrl] = await fileRef.getSignedUrl({
    action: "read",
    expires: Date.now() + expiresInMs
  });

  return signedUrl;
}

router.post("/", upload.array("documents", 12), async (req, res) => {
  try {
    // --- Student ---
    const genderMap = {
      masculino: "male",
      feminino: "female",
      male: "male",
      female: "female"
    };

    const student = tryParseJSON(req.body.student) || {
      fullName: req.body.fullName || "",
      birthDate: req.body.birthDate || "",
      cpf: req.body.cpf || "",
      gender: genderMap[req.body.gender?.toLowerCase()] || "male",
      naturalidade: req.body.naturalidade || "",
      previousSchool: req.body.previousSchool || "",
      grade: req.body.grade || "",
      healthInfo: tryParseJSON(req.body.healthInfo) || {}
    };

    // --- Parents / Responsible ---
    const parents = tryParseJSON(req.body.parents) || tryParseJSON(req.body.parent) || [];
    const responsible = Array.isArray(parents)
      ? parents.map(p => ({
          name: p.name || "",
          cpf: p.cpf || "",
          relation: p.relation || "",
          phone: p.phone || "",
          email: p.email || ""
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

    // Validação mínima para evitar erro do Mongoose
    if (!address.street || !address.city || !address.state || !address.zipCode) {
      return res.status(400).json({
        message: "❌ Campos obrigatórios do endereço estão faltando (street, city, state, zipCode)."
      });
    }

    // --- Documents ---
    let documents = tryParseJSON(req.body.documents) || [];
    if (req.files && req.files.length > 0) {
      for (const file of req.files) {
        const allowed = ["application/pdf", "image/jpeg", "image/jpg", "image/png"];
        if (!allowed.includes(file.mimetype)) {
          return res
            .status(400)
            .json({ message: `Tipo de arquivo não permitido: ${file.originalname}` });
        }
        const url = await uploadBufferToFirebase(file);
        documents.push({
          name: file.originalname,
          url,
          type: file.mimetype
        });
      }
    }

    // --- Payload final ---
    const enrollmentPayload = {
      student,
      responsible,   // ✅ Corrigido: antes estava "parents"
      address,
      documents,
      createdAt: new Date()
    };

    const enrollment = await Enrollment.create(enrollmentPayload);

    return res.status(201).json({
      message: "✅ Matrícula registrada com sucesso!",
      enrollment
    });

  } catch (error) {
    console.error("Erro ao registrar matrícula:", error);
    return res.status(500).json({ error: error.message || "Erro interno" });
  }
});

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

export default router;
