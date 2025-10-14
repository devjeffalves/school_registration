import mongoose from "mongoose";
import { type } from "os";

const healthInfoSchema = new mongoose.Schema({
  allergies: { type: String, trim: true },
  medications: { type: String, trim: true },
  notes: { type: String, trim: true }
}, { _id: false });

const documentSchema = new mongoose.Schema({
  type: { type: String, required: true, trim: true },
  url: { type: String, required: true }
}, { _id: false });

const authorizedPersonsSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  phone: { type: String, trim: true },
  relationship: { type: String, trim: true }, // Ex: pai, mãe, tutor
  documents: { type: [documentSchema] }
}, { _id: false });

const responsibleSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  cpf: { type: String, trim: true },
  phone: { type: String, trim: true },
  email: { type: String, trim: true },
  relationship: { type: String, trim: true } // Ex: pai, mãe, tutor
}, { _id: false });

const addressSchema = new mongoose.Schema({
  street: { type: String, required: true, trim: true },
  city: { type: String, required: true, trim: true },
  state: { type: String, required: true, trim: true },
  zipCode: { type: String, required: true, trim: true },
  number: { type: String, trim: true },        // opcional
  complement: { type: String, trim: true },    // opcional
  neighborhood: { type: String, trim: true }   // opcional
}, { _id: false });

const studentSchema = new mongoose.Schema(
  {
    fullName: { type: String, required: true },
    birthDate: { type: Date, required: true },
    cpf: { type: String, required: true },
    gender: { type: String, required: true },
    nationality: { type: String, required: true },
    previousSchool: { type: String, default: "" },
    grade: { type: String, default: "" },
    healthInfo: { type: healthInfoSchema, default: {} },
    authorizedPersons: {
      type: [authorizedPersonsSchema],
      default: [], // ✅ Agora aceita [] sem erro
    },
  },
  { _id: false }
);


// 📌 Modelo principal de matrícula
const enrollmentSchema = new mongoose.Schema(
  {
    student: { type: studentSchema, required: true },
    responsible: {
      type: [responsibleSchema],
      required: true,
      validate: [
        (arr) => arr.length > 0,
        "É necessário ao menos um responsável cadastrado.",
      ],
    },
    address: { type: addressSchema, required: true },
    documents: { type: [documentSchema], default: [] },
    createdAt: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

export default mongoose.model("Enrollment", enrollmentSchema);
