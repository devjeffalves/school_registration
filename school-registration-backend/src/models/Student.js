import mongoose from "mongoose";

const addressSchema = new mongoose.Schema({
  street: { type: String, required: true, trim: true },
  city: { type: String, required: true, trim: true },
  state: { type: String, required: true, trim: true },
  zipCode: { type: String, required: true, trim: true }
}, { _id: false });

const parentContactSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  phone: { type: String, required: true, trim: true },
  email: { type: String, trim: true }
}, { _id: false });

const studentSchema = new mongoose.Schema({
  fullName: { type: String, required: true, trim: true },
  birthDate: { type: Date, required: true },
  gender: { 
    type: String, 
    enum: ["M", "F"], 
    required: true 
  },
  cpf: { type: String, unique: true, sparse: true, trim: true }, // sparse permite nulos sem violar unicidade
  address: { type: addressSchema, required: true },
  parentContact: { type: parentContactSchema, required: true },
  createdAt: { type: Date, default: Date.now }
}, { versionKey: false });

export default mongoose.model("Student", studentSchema);
