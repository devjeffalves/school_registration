// school-registration-frontend/src/api/enrollmentApi.js
import axios from "axios";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL, // pega a URL do backend definida no .env.local
});

export const createEnrollment = async (enrollmentData) => {
  try {
    const response = await api.post("/enrollments", enrollmentData);
    return response.data;
  } catch (error) {
    console.error("Erro ao criar matrícula:", error);
    throw error.response?.data || { message: "Erro desconhecido" };
  }
};

// Upload de documento para o backend/Firebase
export const uploadDocument = async (file) => {
  try {
    const formData = new FormData();
    formData.append("file", file);

    const response = await api.post("/enrollments/upload", formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });

    // retorna a URL do Firebase
    return response.data.url;
  } catch (error) {
    console.error("Erro ao enviar documento:", error);
    throw error;
  }
};