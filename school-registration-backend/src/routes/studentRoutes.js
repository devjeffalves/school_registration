import express from "express";
import Student from "../models/Student.js";

const router = express.Router();

// Teste: cadastro rápido de aluno
router.post("/test", async (req, res) => {
  try {
    const newStudent = await Student.create(req.body);
    res.status(201).json(newStudent);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

export default router;
