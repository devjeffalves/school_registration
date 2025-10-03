import { Enrollment } from "../models/Enrollment.js";

export const createEnrollment = async (req, res) => {
  try {
    const enrollment = new Enrollment(req.body);
    await enrollment.save();
    res.status(201).json({ message: "Matrícula cadastrada com sucesso", enrollment });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Erro ao salvar matrícula" });
  }
};

export const getEnrollments = async (req, res) => {
  try {
    const enrollments = await Enrollment.find();
    res.json(enrollments);
  } catch (error) {
    res.status(500).json({ message: "Erro ao buscar matrículas" });
  }
};
