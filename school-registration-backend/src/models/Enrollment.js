import mongoose from "mongoose";

const healthInfoSchema = new mongoose.Schema({
  allergies: { type: String, trim: true },
  medications: { type: String, trim: true },
  notes: { type: String, trim: true }
}, { _id: false });

const documentSchema = new mongoose.Schema({
  type: { type: String, required: true, trim: true },
  url: { type: String, required: true }
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
  zipCode: { type: String, required: true, trim: true }
}, { _id: false });

const studentSchema = new mongoose.Schema({
  fullName: { type: String, required: true, trim: true },
  birthDate: { type: Date, required: true },
  gender: { type: String, enum: ["male", "female"], required: true },
  naturalidade: { type: String, trim: true },
  previousSchool: { type: String, trim: true },
  grade: { type: String, trim: true }, // série/ano pretendido
  healthInfo: { type: healthInfoSchema }
}, { _id: false });

const enrollmentSchema = new mongoose.Schema({
  student: { type: studentSchema, required: true },
  responsible: { type: [responsibleSchema], required: true },
  address: { type: addressSchema, required: true },
  documents: { type: [documentSchema] },
  createdAt: { type: Date, default: Date.now }
}, { versionKey: false });

export default mongoose.model("Enrollment", enrollmentSchema);
