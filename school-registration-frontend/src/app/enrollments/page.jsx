
"use client";
import React, { useState } from "react";
import StepIndicator from "./components/StepIndicator";
import EnrollmentHeader from "./components/EnrollmentHeader";
import Step1StudentInfo from "./components/Step1StudentInfo";
import Step2ParentsInfo from "./components/Step2ParentsInfo";
import Step3AddressInfo from "./components/Step3AddressInfo";
import Step4Documents from "./components/Step4Documents";
import Step5Review from "./components/Step5Review";
import Step5Success from "./components/Step5Success";
import axios from "axios";

export default function EnrollmentPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [protocol, setProtocol] = useState(null);


  const [formData, setFormData] = useState({
    // 👧 Aluno
    studentName: "",
    studentCPF: "",
    studentBirthDate: "",
    gender: "",
    nationality: "",
    previousSchool: "",
    desiredGrade: "",
    authorizedPersons: "",

    // 👪 Responsáveis
    responsibles: [
      { name: "", cpf: "", phone: "", email: "", relationship: "", job: "" },
      { name: "", cpf: "", phone: "", email: "", relationship: "", job: "" },
    ],


    // 🏠 Endereço
    zipCode: "",
    street: "",
    number: "",
    complement: "",
    neighborhood: "",
    city: "",
    state: "",

    // 📄 Documentos
    documents: [],
  });

  // ✅ Atualiza campos genéricos
  const handleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  // ✅ Controle de etapas
  const nextStep = () => setCurrentStep((prev) => prev + 1);
  const prevStep = () => setCurrentStep((prev) => prev - 1);

  // ✅ Envio final dos dados
  const handleSubmit = async () => {
    try {

      const responsible = (formData.responsibles || []).filter(
        (r) => r.name.trim() !== ""
      );



      const address = {
        zipCode: formData.zipCode,
        street: formData.street,
        number: formData.number,
        complement: formData.complement,
        neighborhood: formData.neighborhood,
        city: formData.city,
        state: formData.state,
      };

      const payload = {
        student: {
          fullName: formData.studentName,
          cpf: formData.studentCPF,
          birthDate: formData.studentBirthDate,
          gender: formData.gender,
          nationality: formData.nationality,
          previousSchool: formData.previousSchool,
          grade: formData.desiredGrade,
          authorizedPersons: formData.authorizedPersons
        },
        responsible,
        address,
        documents: formData.documents || [],
      };

      console.log("📤 Enviando dados da matrícula:", payload);

      // await axios.post("http://localhost:3001/api/enrollments", payload);

      nextStep(); // Vai para tela de sucesso
    } catch (error) {
      console.error("❌ Erro ao enviar matrícula:", error);
    }
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <EnrollmentHeader />
      <StepIndicator currentStep={currentStep} />

      {currentStep === 1 && (
        <Step1StudentInfo
          formData={formData}
          setFormData={setFormData}
          handleInputChange={handleInputChange}
          nextStep={nextStep}
        />
      )}

      {currentStep === 2 && (
        <Step2ParentsInfo
          formData={formData}
          setFormData={setFormData}
          onNext={nextStep}
          onPrevious={prevStep}
        />
      )}


      {currentStep === 3 && (
        <Step3AddressInfo
          formData={formData}
          handleInputChange={handleInputChange}
          onNext={nextStep}
          onPrevious={prevStep}
        />
      )}

      {currentStep === 4 && (
        <Step4Documents
          formData={formData}
          setFormData={setFormData}
          onNext={nextStep}
          onPrevious={prevStep}
        />
      )}

      {currentStep === 5 && (
        <Step5Review
          formData={formData}
          onPrevious={() => setCurrentStep(4)}
          onSuccess={(generatedProtocol) => {
            setProtocol(generatedProtocol);
            setCurrentStep(6); // Vai para tela de sucesso
          }}
        />
      )}

      {currentStep === 6 && (
        <Step5Success
          protocol={protocol}
          onRestart={() => {
            setFormData({
              // reinicia todos os campos necessários
              studentName: "",
              studentCPF: "",
              studentBirthDate: "",
              gender: "",
              nationality: "",
              previousSchool: "",
              desiredGrade: "",
              authorizedPersons: "",
              responsibles: [
                { name: "", cpf: "", phone: "", email: "", relationship: "", job: "" },
                { name: "", cpf: "", phone: "", email: "", relationship: "", job: "" },
              ],
              zipCode: "",
              street: "",
              number: "",
              complement: "",
              neighborhood: "",
              city: "",
              state: "",
              documents: [],
            });
            setProtocol(null);
            setCurrentStep(1);
          }}
        />
      )}

    </div>
  );
}
