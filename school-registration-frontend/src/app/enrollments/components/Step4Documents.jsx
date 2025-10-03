// // // "use client";
// // // import React from "react";

// // // export default function Step4Documents({ formData, handleFileChange, onPrevious, onNext }) {
// // //   return (
// // //     <div id="step4" className="fade-in max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-8">
// // //       <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
// // //         📄 Upload de Documentos
// // //       </h2>

// // //       {/* Container branco */}
// // //       <div className="bg-white p-6 rounded-lg shadow-md space-y-6">
// // //         {/* Documento 1: Certidão de Nascimento */}
// // //         <div className="border border-gray-200 rounded-lg p-6">
// // //           <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
// // //             <span className="text-red-500 mr-2">*</span>
// // //             Certidão de Nascimento do Aluno
// // //           </h3>
// // //           <div
// // //             className="file-drop-zone p-8 rounded-lg text-center cursor-pointer"
// // //             onClick={() => document.getElementById("birthCertificate").click()}
// // //           >
// // //             <div className="text-4xl mb-4">📄</div>
// // //             <p className="text-gray-600 mb-2">Clique aqui ou arraste o arquivo</p>
// // //             <p className="text-sm text-gray-500">PDF, JPG ou PNG (máx. 5MB)</p>
// // //             <input
// // //               type="file"
// // //               id="birthCertificate"
// // //               accept=".pdf,.jpg,.jpeg,.png"
// // //               className="hidden"
// // //               onChange={(e) => handleFileChange(e, "birthCertificate")}
// // //             />
// // //           </div>
// // //         </div>

// // //         {/* Documento 2: CPF do Responsável */}
// // //         <div className="border border-gray-200 rounded-lg p-6">
// // //           <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
// // //             <span className="text-red-500 mr-2">*</span>
// // //             CPF do Responsável
// // //           </h3>
// // //           <div
// // //             className="file-drop-zone p-8 rounded-lg text-center cursor-pointer"
// // //             onClick={() => document.getElementById("parentCPF").click()}
// // //           >
// // //             <div className="text-4xl mb-4">🆔</div>
// // //             <p className="text-gray-600 mb-2">Clique aqui ou arraste o arquivo</p>
// // //             <p className="text-sm text-gray-500">PDF, JPG ou PNG (máx. 5MB)</p>
// // //             <input
// // //               type="file"
// // //               id="parentCPF"
// // //               accept=".pdf,.jpg,.jpeg,.png"
// // //               className="hidden"
// // //               onChange={(e) => handleFileChange(e, "parentCPF")}
// // //             />
// // //           </div>
// // //         </div>

// // //         {/* Documento 3: Comprovante de Residência */}
// // //         <div className="border border-gray-200 rounded-lg p-6">
// // //           <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
// // //             <span className="text-red-500 mr-2">*</span>
// // //             Comprovante de Residência
// // //           </h3>
// // //           <div
// // //             className="file-drop-zone p-8 rounded-lg text-center cursor-pointer"
// // //             onClick={() => document.getElementById("addressProof").click()}
// // //           >
// // //             <div className="text-4xl mb-4">🏠</div>
// // //             <p className="text-gray-600 mb-2">Clique aqui ou arraste o arquivo</p>
// // //             <p className="text-sm text-gray-500">PDF, JPG ou PNG (máx. 5MB)</p>
// // //             <input
// // //               type="file"
// // //               id="addressProof"
// // //               accept=".pdf,.jpg,.jpeg,.png"
// // //               className="hidden"
// // //               onChange={(e) => handleFileChange(e, "addressProof")}
// // //             />
// // //           </div>
// // //         </div>

// // //         {/* Documento 4: Histórico Escolar (Opcional) */}
// // //         <div className="border border-gray-200 rounded-lg p-6">
// // //           <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
// // //             Histórico Escolar (se houver)
// // //           </h3>
// // //           <div
// // //             className="file-drop-zone p-8 rounded-lg text-center cursor-pointer"
// // //             onClick={() => document.getElementById("schoolHistory").click()}
// // //           >
// // //             <div className="text-4xl mb-4">📚</div>
// // //             <p className="text-gray-600 mb-2">Clique aqui ou arraste o arquivo</p>
// // //             <p className="text-sm text-gray-500">PDF, JPG ou PNG (máx. 5MB)</p>
// // //             <input
// // //               type="file"
// // //               id="schoolHistory"
// // //               accept=".pdf,.jpg,.jpeg,.png"
// // //               className="hidden"
// // //               onChange={(e) => handleFileChange(e, "schoolHistory")}
// // //             />
// // //           </div>
// // //         </div>

// // //         {/* Documento 5: Cartão de Vacinação (Opcional) */}
// // //         <div className="border border-gray-200 rounded-lg p-6">
// // //           <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
// // //             Cartão de Vacinação
// // //           </h3>
// // //           <div
// // //             className="file-drop-zone p-8 rounded-lg text-center cursor-pointer"
// // //             onClick={() => document.getElementById("vaccinationCard").click()}
// // //           >
// // //             <div className="text-4xl mb-4">💉</div>
// // //             <p className="text-gray-600 mb-2">Clique aqui ou arraste o arquivo</p>
// // //             <p className="text-sm text-gray-500">PDF, JPG ou PNG (máx. 5MB)</p>
// // //             <input
// // //               type="file"
// // //               id="vaccinationCard"
// // //               accept=".pdf,.jpg,.jpeg,.png"
// // //               className="hidden"
// // //               onChange={(e) => handleFileChange(e, "vaccinationCard")}
// // //             />
// // //           </div>
// // //         </div>

// // //         {/* Botões */}
// // //         <div className="flex justify-between mt-8">
// // //           <button
// // //             onClick={onPrevious}
// // //             className="bg-gray-500 hover:bg-gray-600 text-white px-8 py-3 rounded-lg font-medium transition-colors"
// // //           >
// // //             ← Anterior
// // //           </button>
// // //           <button
// // //             onClick={onNext}
// // //             className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-medium transition-colors"
// // //           >
// // //             Finalizar Matrícula ✓
// // //           </button>
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // }


// // "use client";
// // import React, { useState } from "react";

// // export default function Step4Documents({ formData, handleFileChange, onPrevious }) {
// //   const [isSubmitting, setIsSubmitting] = useState(false);

// //   const handleFinalSubmit = async () => {
// //     try {
// //       setIsSubmitting(true);

// //       const formDataToSend = new FormData();

// //       // 🧠 1. Dados do aluno
// //       formDataToSend.append("student", JSON.stringify(formData.student));
// //       formDataToSend.append("parents", JSON.stringify(formData.parents));
// //       formDataToSend.append("address", JSON.stringify(formData.address));

// //       // 📎 2. Documentos (arquivos)
// //       if (formData.documents) {
// //         Object.entries(formData.documents).forEach(([key, file]) => {
// //           if (file) {
// //             formDataToSend.append("documents", file);
// //           }
// //         });
// //       }

// //       // 🌐 3. Envio para a API
// //       const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/enrollments`, {
// //         method: "POST",
// //         body: formDataToSend,
// //       });

// //       if (!res.ok) {
// //         const errorText = await res.text();
// //         throw new Error(`Falha ao enviar matrícula: ${errorText}`);
// //       }

// //       const result = await res.json();
// //       console.log("✅ Matrícula enviada com sucesso:", result);
// //       alert("✅ Matrícula enviada com sucesso!");

// //       // Opcional: limpar formulário ou redirecionar
// //       window.location.reload();
// //     } catch (error) {
// //       console.error("❌ Erro ao enviar matrícula:", error);
// //       alert("Erro ao enviar matrícula. Tente novamente.");
// //     } finally {
// //       setIsSubmitting(false);
// //     }
// //   };

// //   // 📌 Preview de arquivo selecionado (nome)
// //   const renderFileName = (field) => {
// //     const file = formData.documents?.[field];
// //     if (file) {
// //       return <p className="text-sm text-green-700 mt-2 truncate">📎 {file.name}</p>;
// //     }
// //     return null;
// //   };

// //   return (
// //     <div id="step4" className="fade-in max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-8">
// //       <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
// //         📄 Upload de Documentos
// //       </h2>

// //       <div className="bg-white p-6 rounded-lg shadow-md space-y-6">
// //         {/* Documento 1 */}
// //         <div className="border border-gray-200 rounded-lg p-6">
// //           <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
// //             <span className="text-red-500 mr-2">*</span>
// //             Certidão de Nascimento do Aluno
// //           </h3>
// //           <div
// //             className="file-drop-zone p-8 rounded-lg text-center cursor-pointer hover:bg-gray-50"
// //             onClick={() => document.getElementById("birthCertificate").click()}
// //           >
// //             <div className="text-4xl mb-4">📄</div>
// //             <p className="text-gray-600 mb-2">Clique aqui ou arraste o arquivo</p>
// //             <p className="text-sm text-gray-500">PDF, JPG ou PNG (máx. 5MB)</p>
// //             <input
// //               type="file"
// //               id="birthCertificate"
// //               accept=".pdf,.jpg,.jpeg,.png"
// //               className="hidden"
// //               onChange={(e) => handleFileChange(e, "birthCertificate")}
// //             />
// //             {renderFileName("birthCertificate")}
// //           </div>
// //         </div>

// //         {/* Documento 2 */}
// //         <div className="border border-gray-200 rounded-lg p-6">
// //           <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
// //             <span className="text-red-500 mr-2">*</span>
// //             CPF do Responsável
// //           </h3>
// //           <div
// //             className="file-drop-zone p-8 rounded-lg text-center cursor-pointer hover:bg-gray-50"
// //             onClick={() => document.getElementById("parentCPF").click()}
// //           >
// //             <div className="text-4xl mb-4">🆔</div>
// //             <p className="text-gray-600 mb-2">Clique aqui ou arraste o arquivo</p>
// //             <p className="text-sm text-gray-500">PDF, JPG ou PNG (máx. 5MB)</p>
// //             <input
// //               type="file"
// //               id="parentCPF"
// //               accept=".pdf,.jpg,.jpeg,.png"
// //               className="hidden"
// //               onChange={(e) => handleFileChange(e, "parentCPF")}
// //             />
// //             {renderFileName("parentCPF")}
// //           </div>
// //         </div>

// //         {/* Documento 3 */}
// //         <div className="border border-gray-200 rounded-lg p-6">
// //           <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
// //             <span className="text-red-500 mr-2">*</span>
// //             Comprovante de Residência
// //           </h3>
// //           <div
// //             className="file-drop-zone p-8 rounded-lg text-center cursor-pointer hover:bg-gray-50"
// //             onClick={() => document.getElementById("addressProof").click()}
// //           >
// //             <div className="text-4xl mb-4">🏠</div>
// //             <p className="text-gray-600 mb-2">Clique aqui ou arraste o arquivo</p>
// //             <p className="text-sm text-gray-500">PDF, JPG ou PNG (máx. 5MB)</p>
// //             <input
// //               type="file"
// //               id="addressProof"
// //               accept=".pdf,.jpg,.jpeg,.png"
// //               className="hidden"
// //               onChange={(e) => handleFileChange(e, "addressProof")}
// //             />
// //             {renderFileName("addressProof")}
// //           </div>
// //         </div>

// //         {/* Documento 4 */}
// //         <div className="border border-gray-200 rounded-lg p-6">
// //           <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
// //             Histórico Escolar (se houver)
// //           </h3>
// //           <div
// //             className="file-drop-zone p-8 rounded-lg text-center cursor-pointer hover:bg-gray-50"
// //             onClick={() => document.getElementById("schoolHistory").click()}
// //           >
// //             <div className="text-4xl mb-4">📚</div>
// //             <p className="text-gray-600 mb-2">Clique aqui ou arraste o arquivo</p>
// //             <p className="text-sm text-gray-500">PDF, JPG ou PNG (máx. 5MB)</p>
// //             <input
// //               type="file"
// //               id="schoolHistory"
// //               accept=".pdf,.jpg,.jpeg,.png"
// //               className="hidden"
// //               onChange={(e) => handleFileChange(e, "schoolHistory")}
// //             />
// //             {renderFileName("schoolHistory")}
// //           </div>
// //         </div>

// //         {/* Documento 5 */}
// //         <div className="border border-gray-200 rounded-lg p-6">
// //           <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
// //             Cartão de Vacinação
// //           </h3>
// //           <div
// //             className="file-drop-zone p-8 rounded-lg text-center cursor-pointer hover:bg-gray-50"
// //             onClick={() => document.getElementById("vaccinationCard").click()}
// //           >
// //             <div className="text-4xl mb-4">💉</div>
// //             <p className="text-gray-600 mb-2">Clique aqui ou arraste o arquivo</p>
// //             <p className="text-sm text-gray-500">PDF, JPG ou PNG (máx. 5MB)</p>
// //             <input
// //               type="file"
// //               id="vaccinationCard"
// //               accept=".pdf,.jpg,.jpeg,.png"
// //               className="hidden"
// //               onChange={(e) => handleFileChange(e, "vaccinationCard")}
// //             />
// //             {renderFileName("vaccinationCard")}
// //           </div>
// //         </div>

// //         {/* Botões */}
// //         <div className="flex justify-between mt-8">
// //           <button
// //             onClick={onPrevious}
// //             className="bg-gray-500 hover:bg-gray-600 text-white px-8 py-3 rounded-lg font-medium transition-colors"
// //           >
// //             ← Anterior
// //           </button>
// //           <button
// //             onClick={handleFinalSubmit}
// //             disabled={isSubmitting}
// //             className={`px-8 py-3 rounded-lg font-medium transition-colors ${
// //               isSubmitting
// //                 ? "bg-green-400 cursor-not-allowed"
// //                 : "bg-green-600 hover:bg-green-700 text-white"
// //             }`}
// //           >
// //             {isSubmitting ? "Enviando..." : "Finalizar Matrícula ✓"}
// //           </button>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }


// "use client";
// import React from "react";

// export default function Step4Documents({ formData, handleFileChange, onPrevious, onSubmitFinal }) {
//   return (
//     <div id="step4" className="fade-in max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-8">
//       <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
//         📄 Upload de Documentos
//       </h2>

//       <div className="bg-white p-6 rounded-lg shadow-md space-y-6">
//         {/* Documento 1: Certidão de Nascimento */}
//         <div className="border border-gray-200 rounded-lg p-6">
//           <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
//             <span className="text-red-500 mr-2">*</span>
//             Certidão de Nascimento do Aluno
//           </h3>
//           <div
//             className="file-drop-zone p-8 rounded-lg text-center cursor-pointer"
//             onClick={() => document.getElementById("birthCertificate").click()}
//           >
//             <div className="text-4xl mb-4">📄</div>
//             <p className="text-gray-600 mb-2">Clique aqui ou arraste o arquivo</p>
//             <input
//               type="file"
//               id="birthCertificate"
//               accept=".pdf,.jpg,.jpeg,.png"
//               className="hidden"
//               onChange={(e) => handleFileChange(e, "birthCertificate")}
//             />
//           </div>
//         </div>

//         {/* Documento 2: CPF */}
//         <div className="border border-gray-200 rounded-lg p-6">
//           <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
//             <span className="text-red-500 mr-2">*</span>
//             CPF do Responsável
//           </h3>
//           <div
//             className="file-drop-zone p-8 rounded-lg text-center cursor-pointer"
//             onClick={() => document.getElementById("parentCPF").click()}
//           >
//             <div className="text-4xl mb-4">🆔</div>
//             <p className="text-gray-600 mb-2">Clique aqui ou arraste o arquivo</p>
//             <input
//               type="file"
//               id="parentCPF"
//               accept=".pdf,.jpg,.jpeg,.png"
//               className="hidden"
//               onChange={(e) => handleFileChange(e, "parentCPF")}
//             />
//           </div>
//         </div>

//         {/* Documento 3: Comprovante de Residência */}
//         <div className="border border-gray-200 rounded-lg p-6">
//           <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
//             <span className="text-red-500 mr-2">*</span>
//             Comprovante de Residência
//           </h3>
//           <div
//             className="file-drop-zone p-8 rounded-lg text-center cursor-pointer"
//             onClick={() => document.getElementById("addressProof").click()}
//           >
//             <div className="text-4xl mb-4">🏠</div>
//             <p className="text-gray-600 mb-2">Clique aqui ou arraste o arquivo</p>
//             <input
//               type="file"
//               id="addressProof"
//               accept=".pdf,.jpg,.jpeg,.png"
//               className="hidden"
//               onChange={(e) => handleFileChange(e, "addressProof")}
//             />
//           </div>
//         </div>

//         {/* Botões */}
//         <div className="flex justify-between mt-8">
//           <button
//             onClick={onPrevious}
//             className="bg-gray-500 hover:bg-gray-600 text-white px-8 py-3 rounded-lg font-medium transition-colors"
//           >
//             ← Anterior
//           </button>
//           <button
//             onClick={onSubmitFinal}
//             className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-medium transition-colors"
//           >
//             Finalizar Matrícula ✓
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }


"use client";
import React, { useState } from "react";

export default function Step4Documents({ formData, handleInputChange, onPrevious }) {
  const [loading, setLoading] = useState(false);

  const handleFinalSubmit = async () => {
    try {
      setLoading(true);
      const formDataToSend = new FormData();

      // 1️⃣ Campos do aluno
      const student = {
        fullName: formData.studentName,
        birthDate: formData.birthDate,
        cpf: formData.studentCPF,
        gender: formData.gender,
        previousSchool: formData.previousSchool,
        grade: formData.desiredGrade,
      };
      formDataToSend.append("student", JSON.stringify(student));

      // 2️⃣ Campos dos responsáveis
      const parents = [
        {
          name: formData.parent1Name,
          cpf: formData.parent1CPF,
          phone: formData.parent1Phone,
          email: formData.parent1Email,
          relation: formData.parent1Relation,
          job: formData.parent1Job,
        },
        {
          name: formData.parent2Name,
          phone: formData.parent2Phone,
        },
      ];
      formDataToSend.append("parents", JSON.stringify(parents));

      // 3️⃣ Endereço
      const address = {
        zipCode: formData.zipCode,
        street: formData.street,
        number: formData.number,
        complement: formData.complement,
        neighborhood: formData.neighborhood,
        city: formData.city,
        state: formData.state,
      };
      formDataToSend.append("address", JSON.stringify(address));

      // 4️⃣ Arquivos
      ["birthCertificate","parentCPF","addressProof","schoolHistory","vaccinationCard"].forEach(
        (field) => {
          if (formData[field]) {
            formDataToSend.append("documents", formData[field]);
          }
        }
      );

      // 5️⃣ Envia para o backend
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/enrollments`, {
        method: "POST",
        body: formDataToSend,
      });

      if (!res.ok) throw new Error("Falha ao enviar matrícula");

      const result = await res.json();
      alert("✅ Matrícula enviada com sucesso!");
      console.log("Resposta da API:", result);

      // opcional: resetar formulário
      // window.location.reload();
    } catch (error) {
      console.error("❌ Erro ao finalizar matrícula:", error);
      alert("Erro ao enviar matrícula. Tente novamente.");
    } finally {
      setLoading(false);
    }
  };

  // Manipula seleção de arquivos
  const handleFileChange = (e, key) => {
    const file = e.target.files[0];
    if (!file) return;
    handleInputChange(key, file);
  };

  return (
    <div id="step4" className="fade-in max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">📄 Upload de Documentos</h2>

      <div className="bg-white p-6 rounded-lg shadow-md space-y-6">
        {[
          { label: "Certidão de Nascimento do Aluno", key: "birthCertificate", icon: "📄", required: true },
          { label: "CPF do Responsável", key: "parentCPF", icon: "🆔", required: true },
          { label: "Comprovante de Residência", key: "addressProof", icon: "🏠", required: true },
          { label: "Histórico Escolar (se houver)", key: "schoolHistory", icon: "📚" },
          { label: "Cartão de Vacinação", key: "vaccinationCard", icon: "💉" },
        ].map(({ label, key, icon, required }) => (
          <div key={key} className="border border-gray-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
              {required && <span className="text-red-500 mr-2">*</span>}
              {label}
            </h3>
            <div
              className="file-drop-zone p-8 rounded-lg text-center cursor-pointer"
              onClick={() => document.getElementById(key).click()}
            >
              <div className="text-4xl mb-4">{icon}</div>
              <p className="text-gray-600 mb-2">Clique aqui ou arraste o arquivo</p>
              <p className="text-sm text-gray-500">PDF, JPG ou PNG (máx. 5MB)</p>
              <input
                type="file"
                id={key}
                accept=".pdf,.jpg,.jpeg,.png"
                className="hidden"
                onChange={(e) => handleFileChange(e, key)}
              />
              {formData[key] && <p className="mt-2 text-green-600 font-medium">{formData[key].name}</p>}
            </div>
          </div>
        ))}

        <div className="flex justify-between mt-8">
          <button
            onClick={onPrevious}
            className="bg-gray-500 hover:bg-gray-600 text-white px-8 py-3 rounded-lg font-medium transition-colors"
          >
            ← Anterior
          </button>
          <button
            onClick={handleFinalSubmit}
            disabled={loading}
            className={`${
              loading ? "bg-gray-400 cursor-not-allowed" : "bg-green-600 hover:bg-green-700"
            } text-white px-8 py-3 rounded-lg font-medium transition-colors`}
          >
            {loading ? "Enviando..." : "Finalizar Matrícula ✓"}
          </button>
        </div>
      </div>
    </div>
  );
}
