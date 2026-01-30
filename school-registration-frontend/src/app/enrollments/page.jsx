
// "use client";
// import React, { useState } from "react";
// import Step1StudentInfo from "./components/Step1StudentInfo";
// import Step2ParentsInfo from "./components/Step2ParentsInfo";
// import Step3AddressInfo from "./components/Step3AddressInfo";
// import Step4Documents from "./components/Step4Documents";
// import Step5Success from "./components/Step5Success";

// export default function EnrollmentPage() {
//   const [currentStep, setCurrentStep] = useState(1);

//   const [formData, setFormData] = useState({
//     // 👧 Dados do aluno
//     studentName: "",
//     studentBirthDate: "",
//     studentGender: "",
//     studentGrade: "",
//     studentSchool: "",

//     // 👪 Dados dos responsáveis
//     parent1Name: "",
//     parent1CPF: "",
//     parent1Phone: "",
//     parent1Email: "",
//     parent1Relation: "",
//     parent1Job: "",

//     parent2Name: "",
//     parent2CPF: "",
//     parent2Phone: "",
//     parent2Email: "",
//     parent2Relation: "",
//     parent2Job: "",

//     // 🏠 Endereço
//     zipCode: "",
//     street: "",
//     number: "",
//     complement: "",
//     neighborhood: "",
//     city: "",
//     state: "",

//     // 📄 Documentos
//     documents: [],
//   });

//   // Função para atualizar campos genéricos (usada nas outras etapas)
//   const handleInputChange = (field, value) => {
//     setFormData((prev) => ({
//       ...prev,
//       [field]: value,
//     }));
//   };

//   const nextStep = () => setStep((prev) => prev + 1);
//   const prevStep = () => setStep((prev) => prev - 1);

//   // Função específica para atualizar os responsáveis
//   const handleParentChange = (index, field, value) => {
//     const parentKey = index === 0 ? "parent1" : "parent2";
//     const key = `${parentKey}${field.charAt(0).toUpperCase()}${field.slice(1)}`;

//     setFormData((prev) => ({
//       ...prev,
//       [key]: value,
//     }));
//   };

//   const handleNext = () => setCurrentStep((prev) => prev + 1);
//   const handlePrevious = () => setCurrentStep((prev) => prev - 1);

//   const handleSubmit = async () => {
//     try {
//       const responsible = [
//         {
//           name: formData.parent1Name,
//           cpf: formData.parent1CPF,
//           phone: formData.parent1Phone,
//           email: formData.parent1Email,
//           relation: formData.parent1Relation,
//           job: formData.parent1Job,
//         },
//         {
//           name: formData.parent2Name,
//           cpf: formData.parent2CPF,
//           phone: formData.parent2Phone,
//           email: formData.parent2Email,
//           relation: formData.parent2Relation,
//           job: formData.parent2Job,
//         },
//       ].filter((r) => r.name.trim() !== "");

//       const address = {
//         zipCode: formData.zipCode,
//         street: formData.street,
//         number: formData.number,
//         complement: formData.complement,
//         neighborhood: formData.neighborhood,
//         city: formData.city,
//         state: formData.state,
//       };

//       const payload = {
//         student: {
//           name: formData.studentName,
//           birthDate: formData.studentBirthDate,
//           gender: formData.studentGender,
//           grade: formData.studentGrade,
//           school: formData.studentSchool,
//         },
//         responsible,
//         address,
//         documents: formData.documents || [],
//       };

//       console.log("📤 Enviando dados da matrícula:", payload);

//       // Aqui você pode fazer o envio via fetch/axios para o backend
//       // await axios.post("/api/enrollments", payload);
//     } catch (error) {
//       console.error("Erro ao enviar matrícula:", error);
//     }
//   };

//   return (
//     <div className="p-6">
//       {currentStep === 1 && (
//         <Step1StudentInfo
//           formData={formData}
//           setFormData={setFormData}
//           handleInputChange={handleInputChange}
//           nextStep={nextStep}
//         />
//       )}

//       {currentStep === 2 && (
//         <Step2ParentsInfo
//           formData={formData}
//           handleParentChange={handleParentChange}
//           onNext={handleNext}
//           onPrevious={handlePrevious}
//         />
//       )}

//       {currentStep === 3 && (
//         <Step3AddressInfo
//           formData={formData}
//           setFormData={setFormData}
//           onNext={handleNext}
//           onPrevious={handlePrevious}
//         />
//       )}

//       {currentStep === 4 && (
//         <Step4Documents
//           formData={formData}
//           setFormData={setFormData}
//           onNext={handleNext}
//           onPrevious={handlePrevious}
//         />
//       )}

//       {currentStep === 5 && (
//         <Step5Review
//           formData={formData}
//           onPrevious={handlePrevious}
//           onSubmit={handleSubmit}
//         />
//       )}
//     </div>
//   );
// }


// "use client";
// import React, { useState } from "react";
// import StepIndicator from "./components/StepIndicator";
// import EnrollmentHeader from "./components/EnrollmentHeader";
// import Step1StudentInfo from "./components/Step1StudentInfo";
// import Step2ParentsInfo from "./components/Step2ParentsInfo";
// import Step3AddressInfo from "./components/Step3AddressInfo";
// import Step4Documents from "./components/Step4Documents";
// import Step5Review from "./components/Step5Review"; // ✅ corrigido nome do componente final
// import Step5Success from "./components/Step5Success"; // (opcional, caso queira uma tela de sucesso)

// // ✅ COMPONENTE PRINCIPAL
// export default function EnrollmentPage() {
//   const [currentStep, setCurrentStep] = useState(1);

//   const [formData, setFormData] = useState({
//     // 👧 Dados do aluno
//     studentName: "",
//     studentCPF: "",
//     studentBirthDate: "",
//     studentGender: "",
//     nationality: "",
//     previousSchool: "",
//     desiredGrade: "",

//     // 👪 Dados dos responsáveis
//     parent1Name: "",
//     parent1CPF: "",
//     parent1Phone: "",
//     parent1Email: "",
//     parent1Relation: "",
//     parent1Job: "",

//     parent2Name: "",
//     parent2CPF: "",
//     parent2Phone: "",
//     parent2Email: "",
//     parent2Relation: "",
//     parent2Job: "",

//     // 🏠 Endereço
//     zipCode: "",
//     street: "",
//     number: "",
//     complement: "",
//     neighborhood: "",
//     city: "",
//     state: "",

//     // 📄 Documentos
//     documents: [],
//   });

//   // ✅ Atualiza campos genéricos
//   const handleInputChange = (field, value) => {
//     setFormData((prev) => ({
//       ...prev,
//       [field]: value,
//     }));
//   };

//   // ✅ Atualiza campos específicos dos pais/responsáveis
//   const handleParentChange = (index, field, value) => {
//     const parentKey = index === 0 ? "parent1" : "parent2";
//     const key = `${parentKey}${field.charAt(0).toUpperCase()}${field.slice(1)}`;
//     setFormData((prev) => ({
//       ...prev,
//       [key]: value,
//     }));
//   };

//   // ✅ Controle de etapas
//   const nextStep = () => setCurrentStep((prev) => prev + 1);
//   const prevStep = () => setCurrentStep((prev) => prev - 1);

//   // ✅ Envio final dos dados
//   const handleSubmit = async () => {
//     try {
//       const responsible = [
//         {
//           name: formData.parent1Name,
//           cpf: formData.parent1CPF,
//           phone: formData.parent1Phone,
//           email: formData.parent1Email,
//           relation: formData.parent1Relation,
//           job: formData.parent1Job,
//         },
//         {
//           name: formData.parent2Name,
//           cpf: formData.parent2CPF,
//           phone: formData.parent2Phone,
//           email: formData.parent2Email,
//           relation: formData.parent2Relation,
//           job: formData.parent2Job,
//         },
//       ].filter((r) => r.name.trim() !== "");

//       const address = {
//         zipCode: formData.zipCode,
//         street: formData.street,
//         number: formData.number,
//         complement: formData.complement,
//         neighborhood: formData.neighborhood,
//         city: formData.city,
//         state: formData.state,
//       };

//       const payload = {
//         student: {
//           name: formData.studentName,
//           studentCPF: formData.studentCPF,
//           birthDate: formData.studentBirthDate,
//           gender: formData.studentGender,
//           nationality: formData.nationality,
//           grade: formData.desiredGrade,
//           school: formData.previousSchool,
//         },
//         responsible,
//         address,
//         documents: formData.documents || [],
//       };

//       console.log("📤 Enviando dados da matrícula:", payload);

//       // Exemplo de envio ao backend:
//       // await axios.post("/api/enrollments", payload);

//       // Avança para tela de sucesso (opcional)
//       nextStep();
//     } catch (error) {
//       console.error("❌ Erro ao enviar matrícula:", error);
//     }
//   };

//   // ✅ Renderização condicional por etapa
//   return (
//     <div className="p-6">
//       {currentStep === 1 && (
//         <Step1StudentInfo
//           formData={formData}
//           handleInputChange={handleInputChange}
//           nextStep={nextStep} // ✅ corrige erro: antes usava setStep incorretamente
//         />
//       )}

//       {currentStep === 2 && (
//         <Step2ParentsInfo
//           formData={formData}
//           handleParentChange={handleParentChange}
//           onNext={nextStep}
//           onPrevious={prevStep}
//         />
//       )}

//       {currentStep === 3 && (
//         <Step3AddressInfo
//           formData={formData}
//           handleInputChange={handleInputChange} // ✅ adicione esta linha
//           onNext={nextStep}
//           onPrevious={prevStep}
//         />
//       )}

//       {currentStep === 4 && (
//         <Step4Documents
//           formData={formData}
//           setFormData={setFormData}
//           onNext={nextStep}
//           onPrevious={prevStep}
//         />
//       )}

//       {currentStep === 5 && (
//         <Step5Review
//           formData={formData}
//           onPrevious={prevStep}
//           onSubmit={handleSubmit}
//         />
//       )}

//       {currentStep === 6 && <Step5Success />} ✅ tela de sucesso opcional
//     </div>
//   );
// }

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
