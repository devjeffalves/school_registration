// "use client";
// import React, { useState } from "react";
// import axios from "axios";
// import Step1StudentInfo from "./components/Step1StudentInfo";
// import Step2ParentsInfo from "./components/Step2ParentsInfo";
// import Step3AddressInfo from "./components/Step3AddressInfo";
// import Step4Documents from "./components/Step4Documents";

// const API_BASE = process.env.NEXT_PUBLIC_API_BASE_URL;

// export default function EnrollmentPage() {
//   const [step, setStep] = useState(1);

//   const [formData, setFormData] = useState({
//     studentName: "",
//     birthDate: "",
//     studentCPF: "",
//     gender: "",
//     previousSchool: "",
//     desiredGrade: "",
//     // Informações médicas
//     medicineAllergy: "",
//     medicineAllergyDetails: "",
//     insectAllergy: "",
//     insectAllergyDetails: "",
//     productAllergy: "",
//     productAllergyDetails: "",
//     regularMedicine: "",
//     regularMedicineDetails: "",
//     feverMedicine: "",
//     // Pessoas autorizadas
//     authorizedPersons: [
//       {
//         name: "",
//         phone: "",
//         relation: "",
//         documentFile: null,
//         documentName: "",
//       },
//     ],
//      // Step 2
//     parent1Name: "",
//     parent1CPF: "",
//     parent1Phone: "",
//     parent1Email: "",
//     parent1Relation: "",
//     parent1Job: "",
//     parent2Name: "",
//     parent2Phone: "",
//     // Step 3: endereço
//     cep: "",
//     address: "",
//     number: "",
//     complement: "",
//     neighborhood: "",
//     city: "",
//     state: "",
//      // Step 4: arquivos
//     birthCertificate: null,
//     parentCPF: null,
//     addressProof: null,
//     schoolHistory: null,
//     vaccinationCard: null,
//   });

//   const nextStep = () => setStep((prev) => Math.min(prev + 1, 4));
//   const previousStep = () => setStep((prev) => Math.max(prev - 1, 1));

//   // Atualiza campos simples (texto, selects)
//   const handleInputChange = (key, value) => {
//     setFormData((prev) => ({ ...prev, [key]: value }));
//   };

//   // Atualiza radios (sim/não)
//   const handleRadioChange = (key, value) => {
//     setFormData((prev) => ({
//       ...prev,
//       [key]: value,
//       [`${key}Details`]: "", // limpa detalhes ao mudar para "não"
//     }));
//   };

//   // Atualiza campos das pessoas autorizadas
//   const handleAuthorizedPersonChange = (index, key, value) => {
//     const updated = [...formData.authorizedPersons];
//     updated[index][key] = value;
//     setFormData((prev) => ({ ...prev, authorizedPersons: updated }));
//   };

//   // Upload de arquivo para pessoa autorizada
//   const handleFileChange = (e, index) => {
//     const file = e.target.files[0];
//     if (!file) return;
//     const updated = [...formData.authorizedPersons];
//     updated[index].documentFile = file;
//     updated[index].documentName = file.name;
//     setFormData((prev) => ({ ...prev, authorizedPersons: updated }));
//   };

//   // Adiciona nova pessoa autorizada
//   const addAuthorizedPerson = () => {
//     setFormData((prev) => ({
//       ...prev,
//       authorizedPersons: [
//         ...prev.authorizedPersons,
//         { name: "", phone: "", relation: "", documentFile: null, documentName: "" },
//       ],
//     }));
//   };

//   const handleFinalSubmit = async () => {
//   try {
//     const formDataToSend = new FormData();

//     // 1️⃣ Adicionar os campos de texto
//     Object.entries(formData).forEach(([key, value]) => {
//       if (key !== "documents") {
//         formDataToSend.append(key, value);
//       }
//     });

//     // 2️⃣ Adicionar os arquivos (documentos)
//     if (formData.documents) {
//       Object.entries(formData.documents).forEach(([field, file]) => {
//         if (file) {
//           formDataToSend.append(field, file);
//         }
//       });
//     }

//     // 3️⃣ Enviar para o backend
//     const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/enrollments`, {
//       method: "POST",
//       body: formDataToSend,
//     });

//     if (!res.ok) throw new Error("Falha ao enviar matrícula");

//     const result = await res.json();
//     alert("✅ Matrícula enviada com sucesso!");
//     console.log("Resposta da API:", result);

//     // opcional: resetar formulário
//     // setFormData({});
//     // setStep(1);
//   } catch (error) {
//     console.error("❌ Erro ao finalizar matrícula:", error);
//     alert("Erro ao enviar matrícula. Tente novamente.");
//   }
// };


//   return (
//     <div className="bg-gradient-to-br from-blue-50 to-indigo-100 min-h-screen">
//       <div className="container mx-auto px-4 py-8">
//         {/* Header */}
//         <div className="text-center mb-8">
//           <h1 className="text-4xl font-bold text-gray-800 mb-2">
//             📚 Sistema de Matrícula Escolar
//           </h1>
//           <p className="text-gray-600">Ensino Fundamental - Ano Letivo 2024</p>
//         </div>

//         {/* Progress Steps */}
//         <div className="flex justify-center mb-8">
//           <div className="flex items-center space-x-4">
//             {[1, 2, 3, 4].map((n) => (
//               <div key={n} className="flex items-center space-x-4">
//                 <div
//                   className={`step-indicator w-10 h-10 rounded-full flex items-center justify-center font-bold ${
//                     step === n
//                       ? "step-active bg-blue-600 text-white"
//                       : step > n
//                       ? "step-completed bg-green-500 text-white"
//                       : "bg-gray-300 text-gray-600"
//                   }`}
//                 >
//                   {n}
//                 </div>
//                 {n < 4 && <div className="w-16 h-1 bg-gray-300"></div>}
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Conteúdo das etapas */}
//         {step === 1 && (
//           <Step1StudentInfo
//             formData={formData}
//             handleInputChange={handleInputChange}
//             handleRadioChange={handleRadioChange}
//             handleAuthorizedPersonChange={handleAuthorizedPersonChange}
//             addAuthorizedPerson={addAuthorizedPerson}
//             handleFileChange={handleFileChange}
//             nextStep={nextStep}
//           />
//         )}

//          {step === 2 && (
//   <Step2ParentsInfo
//     formData={formData}
//     handleInputChange={handleInputChange}
//     onNext={nextStep}
//     onPrevious={previousStep} // usar previousStep aqui
//   />
// )}

// {step === 3 && (
//   <Step3AddressInfo
//     formData={formData}
//     handleInputChange={handleInputChange}
//     onNext={nextStep}
//     onPrevious={previousStep} // idem
//   />
// )}

// {step === 4 && (
//   <Step4Documents
//     formData={formData}
//     handleInputChange={handleInputChange}
//     onNext={() => alert("Formulário finalizado!")}
//     onPrevious={previousStep}
//   />
// )}

//       </div>
//     </div>
//   );
// }


"use client";
import React, { useState } from "react";
import Step1StudentInfo from "./components/Step1StudentInfo";
import Step2ParentsInfo from "./components/Step2ParentsInfo";
import Step3AddressInfo from "./components/Step3AddressInfo";
import Step4Documents from "./components/Step4Documents";
import Step5Success from "./components/Step5Success";

export default function EnrollmentPage() {
  const [step, setStep] = useState(1);

  const [formData, setFormData] = useState({
    studentName: "",
    birthDate: "",
    studentCPF: "",
    gender: "",
    previousSchool: "",
    desiredGrade: "",
    // Informações médicas
    medicineAllergy: "",
    medicineAllergyDetails: "",
    insectAllergy: "",
    insectAllergyDetails: "",
    productAllergy: "",
    productAllergyDetails: "",
    regularMedicine: "",
    regularMedicineDetails: "",
    feverMedicine: "",
    // Pessoas autorizadas
    authorizedPersons: [
      {
        name: "",
        phone: "",
        relation: "",
        documentFile: null,
        documentName: "",
      },
    ],
    // Step 2
    parent1Name: "",
    parent1CPF: "",
    parent1Phone: "",
    parent1Email: "",
    parent1Relation: "",
    parent1Job: "",
    parent2Name: "",
    parent2Phone: "",
    // Step 3: endereço
    address: {
  zipCode: "",
  street: "",
  number: "",
  complement: "",
  neighborhood: "",
  city: "",
  state: "",
},
    // Step 4: arquivos
    birthCertificate: null,
    parentCPF: null,
    addressProof: null,
    schoolHistory: null,
    vaccinationCard: null,
  });

  const nextStep = () => setStep((prev) => Math.min(prev + 1, 4));
  const previousStep = () => setStep((prev) => Math.max(prev - 1, 1));

  // Atualiza campos simples (texto, selects)
  const handleInputChange = (key, value) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  // Atualiza radios (sim/não)
  const handleRadioChange = (key, value) => {
    setFormData((prev) => ({
      ...prev,
      [key]: value,
      [`${key}Details`]: "",
    }));
  };

  // Pessoas autorizadas
  const handleAuthorizedPersonChange = (index, key, value) => {
    const updated = [...formData.authorizedPersons];
    updated[index][key] = value;
    setFormData((prev) => ({ ...prev, authorizedPersons: updated }));
  };

  const handleFileChangeAuthorized = (e, index) => {
    const file = e.target.files[0];
    if (!file) return;
    const updated = [...formData.authorizedPersons];
    updated[index].documentFile = file;
    updated[index].documentName = file.name;
    setFormData((prev) => ({ ...prev, authorizedPersons: updated }));
  };

  const addAuthorizedPerson = () => {
    setFormData((prev) => ({
      ...prev,
      authorizedPersons: [
        ...prev.authorizedPersons,
        { name: "", phone: "", relation: "", documentFile: null, documentName: "" },
      ],
    }));
  };

  // ✅ Finalização e envio para backend
  const handleFinalSubmit = async () => {
    try {
      const formDataToSend = new FormData();

      // 1️⃣ Adicionar todos os campos de texto e arrays simples
      Object.entries(formData).forEach(([key, value]) => {
        if (
          key !== "birthCertificate" &&
          key !== "parentCPF" &&
          key !== "addressProof" &&
          key !== "schoolHistory" &&
          key !== "vaccinationCard" &&
          key !== "authorizedPersons"
        ) {
          formDataToSend.append(key, value);
        }
      });

      // 2️⃣ Adicionar as pessoas autorizadas como JSON
      formDataToSend.append("authorizedPersons", JSON.stringify(formData.authorizedPersons));

      // 3️⃣ Adicionar os arquivos obrigatórios e opcionais
      ["birthCertificate", "parentCPF", "addressProof", "schoolHistory", "vaccinationCard"].forEach(
        (field) => {
          if (formData[field]) {
            formDataToSend.append(field, formData[field]);
          }
        }
      );

      // 4️⃣ Enviar para o backend
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/enrollments`, {
        method: "POST",
        body: formDataToSend,
      });

      if (!res.ok) throw new Error("Falha ao enviar matrícula");

      const result = await res.json();
      alert("✅ Matrícula enviada com sucesso!");
      console.log("📌 Resposta da API:", result);

      // opcional: resetar formulário
      // setFormData({});
      // setStep(1);
    } catch (error) {
      console.error("❌ Erro ao finalizar matrícula:", error);
      alert("Erro ao enviar matrícula. Tente novamente.");
    }
  };

  return (
    <div className="bg-gradient-to-br from-blue-50 to-indigo-100 min-h-screen">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            📚 Sistema de Matrícula Escolar
          </h1>
          <p className="text-gray-600">Ensino Fundamental - Ano Letivo 2024</p>
        </div>

        {/* Progress Steps */}
        <div className="flex justify-center mb-8">
          <div className="flex items-center space-x-4">
            {[1, 2, 3, 4].map((n) => (
              <div key={n} className="flex items-center space-x-4">
                <div
                  className={`step-indicator w-10 h-10 rounded-full flex items-center justify-center font-bold ${
                    step === n
                      ? "step-active bg-blue-600 text-white"
                      : step > n
                      ? "step-completed bg-green-500 text-white"
                      : "bg-gray-300 text-gray-600"
                  }`}
                >
                  {n}
                </div>
                {n < 4 && <div className="w-16 h-1 bg-gray-300"></div>}
              </div>
            ))}
          </div>
        </div>

        {/* Etapas */}
        {step === 1 && (
          <Step1StudentInfo
            formData={formData}
            handleInputChange={handleInputChange}
            handleRadioChange={handleRadioChange}
            handleAuthorizedPersonChange={handleAuthorizedPersonChange}
            addAuthorizedPerson={addAuthorizedPerson}
            handleFileChange={handleFileChangeAuthorized}
            nextStep={nextStep}
          />
        )}
        {step === 2 && (
          <Step2ParentsInfo
            formData={formData}
            handleInputChange={handleInputChange}
            onNext={nextStep}
            onPrevious={previousStep}
          />
        )}
        {step === 3 && (
          <Step3AddressInfo
            formData={formData}
            handleInputChange={handleInputChange}
            onNext={nextStep}
            onPrevious={previousStep}
          />
        )}
        {step === 4 && (
          <Step4Documents
            formData={formData}
            handleInputChange={handleInputChange}
            onNext={handleFinalSubmit} // ✅ Envia os dados ao backend
            onPrevious={previousStep}
          />
        )}

         {step === 5 && (
          <Step5Success enrollmentId={enrollmentId} onRestart={restartEnrollment} />
        )}
      </div>
    </div>
  );
}
