// // // // "use client";
// // // // import React from "react";

// // // // export default function Step4Documents({ formData, handleFileChange, onPrevious, onNext }) {
// // // //   return (
// // // //     <div id="step4" className="fade-in max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-8">
// // // //       <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
// // // //         📄 Upload de Documentos
// // // //       </h2>

// // // //       {/* Container branco */}
// // // //       <div className="bg-white p-6 rounded-lg shadow-md space-y-6">
// // // //         {/* Documento 1: Certidão de Nascimento */}
// // // //         <div className="border border-gray-200 rounded-lg p-6">
// // // //           <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
// // // //             <span className="text-red-500 mr-2">*</span>
// // // //             Certidão de Nascimento do Aluno
// // // //           </h3>
// // // //           <div
// // // //             className="file-drop-zone p-8 rounded-lg text-center cursor-pointer"
// // // //             onClick={() => document.getElementById("birthCertificate").click()}
// // // //           >
// // // //             <div className="text-4xl mb-4">📄</div>
// // // //             <p className="text-gray-600 mb-2">Clique aqui ou arraste o arquivo</p>
// // // //             <p className="text-sm text-gray-500">PDF, JPG ou PNG (máx. 5MB)</p>
// // // //             <input
// // // //               type="file"
// // // //               id="birthCertificate"
// // // //               accept=".pdf,.jpg,.jpeg,.png"
// // // //               className="hidden"
// // // //               onChange={(e) => handleFileChange(e, "birthCertificate")}
// // // //             />
// // // //           </div>
// // // //         </div>

// // // //         {/* Documento 2: CPF do Responsável */}
// // // //         <div className="border border-gray-200 rounded-lg p-6">
// // // //           <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
// // // //             <span className="text-red-500 mr-2">*</span>
// // // //             CPF do Responsável
// // // //           </h3>
// // // //           <div
// // // //             className="file-drop-zone p-8 rounded-lg text-center cursor-pointer"
// // // //             onClick={() => document.getElementById("parentCPF").click()}
// // // //           >
// // // //             <div className="text-4xl mb-4">🆔</div>
// // // //             <p className="text-gray-600 mb-2">Clique aqui ou arraste o arquivo</p>
// // // //             <p className="text-sm text-gray-500">PDF, JPG ou PNG (máx. 5MB)</p>
// // // //             <input
// // // //               type="file"
// // // //               id="parentCPF"
// // // //               accept=".pdf,.jpg,.jpeg,.png"
// // // //               className="hidden"
// // // //               onChange={(e) => handleFileChange(e, "parentCPF")}
// // // //             />
// // // //           </div>
// // // //         </div>

// // // //         {/* Documento 3: Comprovante de Residência */}
// // // //         <div className="border border-gray-200 rounded-lg p-6">
// // // //           <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
// // // //             <span className="text-red-500 mr-2">*</span>
// // // //             Comprovante de Residência
// // // //           </h3>
// // // //           <div
// // // //             className="file-drop-zone p-8 rounded-lg text-center cursor-pointer"
// // // //             onClick={() => document.getElementById("addressProof").click()}
// // // //           >
// // // //             <div className="text-4xl mb-4">🏠</div>
// // // //             <p className="text-gray-600 mb-2">Clique aqui ou arraste o arquivo</p>
// // // //             <p className="text-sm text-gray-500">PDF, JPG ou PNG (máx. 5MB)</p>
// // // //             <input
// // // //               type="file"
// // // //               id="addressProof"
// // // //               accept=".pdf,.jpg,.jpeg,.png"
// // // //               className="hidden"
// // // //               onChange={(e) => handleFileChange(e, "addressProof")}
// // // //             />
// // // //           </div>
// // // //         </div>

// // // //         {/* Documento 4: Histórico Escolar (Opcional) */}
// // // //         <div className="border border-gray-200 rounded-lg p-6">
// // // //           <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
// // // //             Histórico Escolar (se houver)
// // // //           </h3>
// // // //           <div
// // // //             className="file-drop-zone p-8 rounded-lg text-center cursor-pointer"
// // // //             onClick={() => document.getElementById("schoolHistory").click()}
// // // //           >
// // // //             <div className="text-4xl mb-4">📚</div>
// // // //             <p className="text-gray-600 mb-2">Clique aqui ou arraste o arquivo</p>
// // // //             <p className="text-sm text-gray-500">PDF, JPG ou PNG (máx. 5MB)</p>
// // // //             <input
// // // //               type="file"
// // // //               id="schoolHistory"
// // // //               accept=".pdf,.jpg,.jpeg,.png"
// // // //               className="hidden"
// // // //               onChange={(e) => handleFileChange(e, "schoolHistory")}
// // // //             />
// // // //           </div>
// // // //         </div>

// // // //         {/* Documento 5: Cartão de Vacinação (Opcional) */}
// // // //         <div className="border border-gray-200 rounded-lg p-6">
// // // //           <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
// // // //             Cartão de Vacinação
// // // //           </h3>
// // // //           <div
// // // //             className="file-drop-zone p-8 rounded-lg text-center cursor-pointer"
// // // //             onClick={() => document.getElementById("vaccinationCard").click()}
// // // //           >
// // // //             <div className="text-4xl mb-4">💉</div>
// // // //             <p className="text-gray-600 mb-2">Clique aqui ou arraste o arquivo</p>
// // // //             <p className="text-sm text-gray-500">PDF, JPG ou PNG (máx. 5MB)</p>
// // // //             <input
// // // //               type="file"
// // // //               id="vaccinationCard"
// // // //               accept=".pdf,.jpg,.jpeg,.png"
// // // //               className="hidden"
// // // //               onChange={(e) => handleFileChange(e, "vaccinationCard")}
// // // //             />
// // // //           </div>
// // // //         </div>

// // // //         {/* Botões */}
// // // //         <div className="flex justify-between mt-8">
// // // //           <button
// // // //             onClick={onPrevious}
// // // //             className="bg-gray-500 hover:bg-gray-600 text-white px-8 py-3 rounded-lg font-medium transition-colors"
// // // //           >
// // // //             ← Anterior
// // // //           </button>
// // // //           <button
// // // //             onClick={onNext}
// // // //             className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-medium transition-colors"
// // // //           >
// // // //             Finalizar Matrícula ✓
// // // //           </button>
// // // //         </div>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // }


// // // "use client";
// // // import React, { useState } from "react";

// // // export default function Step4Documents({ formData, handleFileChange, onPrevious }) {
// // //   const [isSubmitting, setIsSubmitting] = useState(false);

// // //   const handleFinalSubmit = async () => {
// // //     try {
// // //       setIsSubmitting(true);

// // //       const formDataToSend = new FormData();

// // //       // 🧠 1. Dados do aluno
// // //       formDataToSend.append("student", JSON.stringify(formData.student));
// // //       formDataToSend.append("parents", JSON.stringify(formData.parents));
// // //       formDataToSend.append("address", JSON.stringify(formData.address));

// // //       // 📎 2. Documentos (arquivos)
// // //       if (formData.documents) {
// // //         Object.entries(formData.documents).forEach(([key, file]) => {
// // //           if (file) {
// // //             formDataToSend.append("documents", file);
// // //           }
// // //         });
// // //       }

// // //       // 🌐 3. Envio para a API
// // //       const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/enrollments`, {
// // //         method: "POST",
// // //         body: formDataToSend,
// // //       });

// // //       if (!res.ok) {
// // //         const errorText = await res.text();
// // //         throw new Error(`Falha ao enviar matrícula: ${errorText}`);
// // //       }

// // //       const result = await res.json();
// // //       console.log("✅ Matrícula enviada com sucesso:", result);
// // //       alert("✅ Matrícula enviada com sucesso!");

// // //       // Opcional: limpar formulário ou redirecionar
// // //       window.location.reload();
// // //     } catch (error) {
// // //       console.error("❌ Erro ao enviar matrícula:", error);
// // //       alert("Erro ao enviar matrícula. Tente novamente.");
// // //     } finally {
// // //       setIsSubmitting(false);
// // //     }
// // //   };

// // //   // 📌 Preview de arquivo selecionado (nome)
// // //   const renderFileName = (field) => {
// // //     const file = formData.documents?.[field];
// // //     if (file) {
// // //       return <p className="text-sm text-green-700 mt-2 truncate">📎 {file.name}</p>;
// // //     }
// // //     return null;
// // //   };

// // //   return (
// // //     <div id="step4" className="fade-in max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-8">
// // //       <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
// // //         📄 Upload de Documentos
// // //       </h2>

// // //       <div className="bg-white p-6 rounded-lg shadow-md space-y-6">
// // //         {/* Documento 1 */}
// // //         <div className="border border-gray-200 rounded-lg p-6">
// // //           <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
// // //             <span className="text-red-500 mr-2">*</span>
// // //             Certidão de Nascimento do Aluno
// // //           </h3>
// // //           <div
// // //             className="file-drop-zone p-8 rounded-lg text-center cursor-pointer hover:bg-gray-50"
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
// // //             {renderFileName("birthCertificate")}
// // //           </div>
// // //         </div>

// // //         {/* Documento 2 */}
// // //         <div className="border border-gray-200 rounded-lg p-6">
// // //           <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
// // //             <span className="text-red-500 mr-2">*</span>
// // //             CPF do Responsável
// // //           </h3>
// // //           <div
// // //             className="file-drop-zone p-8 rounded-lg text-center cursor-pointer hover:bg-gray-50"
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
// // //             {renderFileName("parentCPF")}
// // //           </div>
// // //         </div>

// // //         {/* Documento 3 */}
// // //         <div className="border border-gray-200 rounded-lg p-6">
// // //           <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
// // //             <span className="text-red-500 mr-2">*</span>
// // //             Comprovante de Residência
// // //           </h3>
// // //           <div
// // //             className="file-drop-zone p-8 rounded-lg text-center cursor-pointer hover:bg-gray-50"
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
// // //             {renderFileName("addressProof")}
// // //           </div>
// // //         </div>

// // //         {/* Documento 4 */}
// // //         <div className="border border-gray-200 rounded-lg p-6">
// // //           <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
// // //             Histórico Escolar (se houver)
// // //           </h3>
// // //           <div
// // //             className="file-drop-zone p-8 rounded-lg text-center cursor-pointer hover:bg-gray-50"
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
// // //             {renderFileName("schoolHistory")}
// // //           </div>
// // //         </div>

// // //         {/* Documento 5 */}
// // //         <div className="border border-gray-200 rounded-lg p-6">
// // //           <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
// // //             Cartão de Vacinação
// // //           </h3>
// // //           <div
// // //             className="file-drop-zone p-8 rounded-lg text-center cursor-pointer hover:bg-gray-50"
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
// // //             {renderFileName("vaccinationCard")}
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
// // //             onClick={handleFinalSubmit}
// // //             disabled={isSubmitting}
// // //             className={`px-8 py-3 rounded-lg font-medium transition-colors ${
// // //               isSubmitting
// // //                 ? "bg-green-400 cursor-not-allowed"
// // //                 : "bg-green-600 hover:bg-green-700 text-white"
// // //             }`}
// // //           >
// // //             {isSubmitting ? "Enviando..." : "Finalizar Matrícula ✓"}
// // //           </button>
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // }


// // "use client";
// // import React from "react";

// // export default function Step4Documents({ formData, handleFileChange, onPrevious, onSubmitFinal }) {
// //   return (
// //     <div id="step4" className="fade-in max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-8">
// //       <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
// //         📄 Upload de Documentos
// //       </h2>

// //       <div className="bg-white p-6 rounded-lg shadow-md space-y-6">
// //         {/* Documento 1: Certidão de Nascimento */}
// //         <div className="border border-gray-200 rounded-lg p-6">
// //           <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
// //             <span className="text-red-500 mr-2">*</span>
// //             Certidão de Nascimento do Aluno
// //           </h3>
// //           <div
// //             className="file-drop-zone p-8 rounded-lg text-center cursor-pointer"
// //             onClick={() => document.getElementById("birthCertificate").click()}
// //           >
// //             <div className="text-4xl mb-4">📄</div>
// //             <p className="text-gray-600 mb-2">Clique aqui ou arraste o arquivo</p>
// //             <input
// //               type="file"
// //               id="birthCertificate"
// //               accept=".pdf,.jpg,.jpeg,.png"
// //               className="hidden"
// //               onChange={(e) => handleFileChange(e, "birthCertificate")}
// //             />
// //           </div>
// //         </div>

// //         {/* Documento 2: CPF */}
// //         <div className="border border-gray-200 rounded-lg p-6">
// //           <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
// //             <span className="text-red-500 mr-2">*</span>
// //             CPF do Responsável
// //           </h3>
// //           <div
// //             className="file-drop-zone p-8 rounded-lg text-center cursor-pointer"
// //             onClick={() => document.getElementById("parentCPF").click()}
// //           >
// //             <div className="text-4xl mb-4">🆔</div>
// //             <p className="text-gray-600 mb-2">Clique aqui ou arraste o arquivo</p>
// //             <input
// //               type="file"
// //               id="parentCPF"
// //               accept=".pdf,.jpg,.jpeg,.png"
// //               className="hidden"
// //               onChange={(e) => handleFileChange(e, "parentCPF")}
// //             />
// //           </div>
// //         </div>

// //         {/* Documento 3: Comprovante de Residência */}
// //         <div className="border border-gray-200 rounded-lg p-6">
// //           <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
// //             <span className="text-red-500 mr-2">*</span>
// //             Comprovante de Residência
// //           </h3>
// //           <div
// //             className="file-drop-zone p-8 rounded-lg text-center cursor-pointer"
// //             onClick={() => document.getElementById("addressProof").click()}
// //           >
// //             <div className="text-4xl mb-4">🏠</div>
// //             <p className="text-gray-600 mb-2">Clique aqui ou arraste o arquivo</p>
// //             <input
// //               type="file"
// //               id="addressProof"
// //               accept=".pdf,.jpg,.jpeg,.png"
// //               className="hidden"
// //               onChange={(e) => handleFileChange(e, "addressProof")}
// //             />
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
// //             onClick={onSubmitFinal}
// //             className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-medium transition-colors"
// //           >
// //             Finalizar Matrícula ✓
// //           </button>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }


// "use client";
// import React, { useState } from "react";

// export default function Step4Documents({ formData, handleInputChange, onPrevious }) {
//   const [loading, setLoading] = useState(false);

//   const handleFinalSubmit = async () => {
//     try {
//       setLoading(true);
//       const formDataToSend = new FormData();

//       // 1️⃣ Campos do aluno
//       const student = {
//         fullName: formData.studentName,
//         birthDate: formData.birthDate,
//         cpf: formData.studentCPF,
//         gender: formData.gender,
//         previousSchool: formData.previousSchool,
//         grade: formData.desiredGrade,
//       };
//       formDataToSend.append("student", JSON.stringify(student));

//       // 2️⃣ Campos dos responsáveis
//       const parents = [
//         {
//           name: formData.parent1Name || "",
//           cpf: formData.parent1CPF || "",
//           phone: formData.parent1Phone || "",
//           email: formData.parent1Email || "",
//           job: formData.parent1Job || "",
//           relationship: formData.parent1Relation || "",
//         },
//         {
//           name: formData.parent2Name || "",
//           cpf: formData.parent2CPF || "",
//           phone: formData.parent2Phone || "",
//           email: formData.parent2Email || "",
//           job: formData.parent2Job || "",
//           relationship: formData.parent2Relation || "",
//         },
//       ];
//       formDataToSend.append("parents", JSON.stringify(parents));

//       // 3️⃣ Endereço
//       const address = {
//         zipCode: formData.zipCode,
//         street: formData.street,
//         number: formData.number,
//         complement: formData.complement,
//         neighborhood: formData.neighborhood,
//         city: formData.city,
//         state: formData.state,
//       };
//       formDataToSend.append("address", JSON.stringify(address));

//       // 4️⃣ Arquivos
//       ["birthCertificate", "parentCPF", "addressProof", "schoolHistory", "vaccinationCard"].forEach(
//         (field) => {
//           if (formData[field]) {
//             formDataToSend.append("documents", formData[field]);
//           }
//         }
//       );

//       // 5️⃣ Envia para o backend
//       const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/enrollments`, {
//         method: "POST",
//         body: formDataToSend,
//       });

//       if (!res.ok) throw new Error("Falha ao enviar matrícula");

//       const result = await res.json();
//       alert("✅ Matrícula enviada com sucesso!");
//       console.log("Resposta da API:", result);

//       // opcional: resetar formulário
//       // window.location.reload();
//     } catch (error) {
//       console.error("❌ Erro ao finalizar matrícula:", error);
//       alert("Erro ao enviar matrícula. Tente novamente.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Manipula seleção de arquivos
//   const handleFileChange = (e, key) => {
//     const file = e.target.files[0];
//     if (!file) return;
//     setFormData((prev) => ({
//       ...prev,
//       [key]: file,
//     }));
//   };
//   return (
//     <div id="step4" className="fade-in max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-8">
//       <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">📄 Upload de Documentos</h2>

//       <div className="bg-white p-6 rounded-lg shadow-md space-y-6">
//         {[
//           { label: "Certidão de Nascimento do Aluno", key: "birthCertificate", icon: "📄", required: true },
//           { label: "CPF do Responsável", key: "parentCPF", icon: "🆔", required: true },
//           { label: "Comprovante de Residência", key: "addressProof", icon: "🏠", required: true },
//           { label: "Histórico Escolar (se houver)", key: "schoolHistory", icon: "📚" },
//           { label: "Cartão de Vacinação", key: "vaccinationCard", icon: "💉" },
//         ].map(({ label, key, icon, required }) => (
//           <div key={key} className="border border-gray-200 rounded-lg p-6">
//             <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
//               {required && <span className="text-red-500 mr-2">*</span>}
//               {label}
//             </h3>
//             <div
//               className="file-drop-zone p-8 rounded-lg text-center cursor-pointer"
//               onClick={() => document.getElementById(key).click()}
//             >
//               <div className="text-4xl mb-4">{icon}</div>
//               <p className="text-gray-600 mb-2">Clique aqui ou arraste o arquivo</p>
//               <p className="text-sm text-gray-500">PDF, JPG ou PNG (máx. 5MB)</p>
//               <input
//                 type="file"
//                 id={key}
//                 accept=".pdf,.jpg,.jpeg,.png"
//                 className="hidden"
//                 onChange={(e) => handleFileChange(e, key)}
//               />
//               {formData[key] && <p className="mt-2 text-green-600 font-medium">{formData[key].name}</p>}
//             </div>
//           </div>
//         ))}

//         <div className="flex justify-between mt-8">
//           <button
//             onClick={onPrevious}
//             className="bg-gray-500 hover:bg-gray-600 text-white px-8 py-3 rounded-lg font-medium transition-colors"
//           >
//             ← Anterior
//           </button>
//           <button
//             onClick={handleFinalSubmit}
//             disabled={loading}
//             className={`${loading ? "bg-gray-400 cursor-not-allowed" : "bg-green-600 hover:bg-green-700"
//               } text-white px-8 py-3 rounded-lg font-medium transition-colors`}
//           >
//             {loading ? "Enviando..." : "Finalizar Matrícula ✓"}
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// "use client";
// import React, { useState } from "react";

// export default function Step4Documents({ formData, setFormData, onPrevious }) {
//   const [loading, setLoading] = useState(false);

//   // Manipula seleção de arquivos
//   const handleFileChange = (e, key) => {
//     const file = e.target.files[0];
//     if (!file) return;
//     setFormData((prev) => ({
//       ...prev,
//       [key]: file,
//     }));
//   };

//   const handleFinalSubmit = async () => {
//     try {
//       setLoading(true);
//       const formDataToSend = new FormData();

//       // 1️⃣ Campos do aluno
//       const student = {
//         fullName: formData.studentName,
//         birthDate: formData.studentBirthDate,
//         cpf: formData.studentCPF,
//         gender: formData.gender,
//         nationality: formData.nationality,
//         previousSchool: formData.previousSchool,
//         grade: formData.desiredGrade,
//         healthInfo,
//         authorizedPersons: authorizedPersons.map(p => ({
//           name: p.name,
//           phone: p.phone,
//           relation: p.relation,
//           documentName: p.document ? p.document.name : null,
//         }))
//       };
//       formDataToSend.append("student", JSON.stringify(student));

//       // 2️⃣ Campos dos responsáveis
//       const parents = [
//         {
//           name: formData.parent1Name || "",
//           cpf: formData.parent1CPF || "",
//           phone: formData.parent1Phone || "",
//           email: formData.parent1Email || "",
//           job: formData.parent1Job || "",
//           relationship: formData.parent1Relation || "",
//         },
//         {
//           name: formData.parent2Name || "",
//           cpf: formData.parent2CPF || "",
//           phone: formData.parent2Phone || "",
//           email: formData.parent2Email || "",
//           job: formData.parent2Job || "",
//           relationship: formData.parent2Relation || "",
//         },
//       ].filter((p) => p.name.trim() !== "");
//       formDataToSend.append("parents", JSON.stringify(parents));

//       // 3️⃣ Endereço
//       const address = {
//         zipCode: formData.zipCode,
//         street: formData.street,
//         number: formData.number,
//         complement: formData.complement,
//         neighborhood: formData.neighborhood,
//         city: formData.city,
//         state: formData.state,
//       };
//       formDataToSend.append("address", JSON.stringify(address));

//       // 4️⃣ Arquivos
//       ["birthCertificate", "parentCPF", "addressProof", "schoolHistory", "vaccinationCard"].forEach(
//         (field) => {
//           if (formData[field]) {
//             formDataToSend.append("documents", formData[field]);
//           }
//         }
//       );

//       // 5️⃣ Envio para o backend
//       const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/enrollments`, {
//         method: "POST",
//         body: formDataToSend,
//       });

//       if (!res.ok) throw new Error("Falha ao enviar matrícula");

//       const result = await res.json();
//       alert("✅ Matrícula enviada com sucesso!");
//       console.log("Resposta da API:", result);
//     } catch (error) {
//       console.error("❌ Erro ao finalizar matrícula:", error);
//       alert("Erro ao enviar matrícula. Tente novamente.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div id="step4" className="fade-in max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-8">
//       <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">📄 Upload de Documentos</h2>

//       <div className="bg-white p-6 rounded-lg shadow-md space-y-6">
//         {[
//           { label: "Certidão de Nascimento do Aluno", key: "birthCertificate", icon: "📄", required: true },
//           { label: "CPF do Responsável", key: "parentCPF", icon: "🆔", required: true },
//           { label: "Comprovante de Residência", key: "addressProof", icon: "🏠", required: true },
//           { label: "Histórico Escolar (se houver)", key: "schoolHistory", icon: "📚" },
//           { label: "Cartão de Vacinação", key: "vaccinationCard", icon: "💉" },
//         ].map(({ label, key, icon, required }) => (
//           <div key={key} className="border border-gray-200 rounded-lg p-6">
//             <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
//               {required && <span className="text-red-500 mr-2">*</span>}
//               {label}
//             </h3>
//             <div
//               className="file-drop-zone p-8 rounded-lg text-center cursor-pointer"
//               onClick={() => document.getElementById(key).click()}
//             >
//               <div className="text-4xl mb-4">{icon}</div>
//               <p className="text-gray-600 mb-2">Clique aqui ou arraste o arquivo</p>
//               <p className="text-sm text-gray-500">PDF, JPG ou PNG (máx. 5MB)</p>
//               <input
//                 type="file"
//                 id={key}
//                 accept=".pdf,.jpg,.jpeg,.png"
//                 className="hidden"
//                 onChange={(e) => handleFileChange(e, key)}
//               />
//               {formData[key] && <p className="mt-2 text-green-600 font-medium">{formData[key].name}</p>}
//             </div>
//           </div>
//         ))}

//         <div className="flex justify-between mt-8">
//           <button
//             onClick={onPrevious}
//             className="bg-gray-500 hover:bg-gray-600 text-white px-8 py-3 rounded-lg font-medium transition-colors"
//           >
//             ← Anterior
//           </button>
//           <button
//             onClick={handleFinalSubmit}
//             disabled={loading}
//             className={`${loading ? "bg-gray-400 cursor-not-allowed" : "bg-green-600 hover:bg-green-700"} text-white px-8 py-3 rounded-lg font-medium transition-colors`}
//           >
//             {loading ? "Enviando..." : "Finalizar Matrícula ✓"}
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// "use client";
// import React, { useState } from "react";

// export default function Step4Documents({ formData, setFormData, onPrevious, onNext }) {
//   const [loading, setLoading] = useState(false);

//   // Manipula seleção de arquivos
//   const handleFileChange = (e, key) => {
//     const file = e.target.files[0];
//     if (!file) return;
//     setFormData((prev) => ({
//       ...prev,
//       [key]: file,
//     }));
//   };

//   const handleFinalSubmit = async () => {
//     try {
//       setLoading(true);

//       const formDataToSend = new FormData();

//       // ✅ Health Info
//       const healthInfo = {
//         allergies: [
//           formData.medicineAllergyDetails,
//           formData.insectAllergyDetails,
//           formData.productAllergyDetails,
//         ].filter(Boolean).join("; "),
//         medications: [
//           formData.regularMedicineDetails,

//         ].filter(Boolean).join("; "),
//         notesfeverMedicine: formData.notesfeverMedicine || "",
//       };

//       const authorizedPersonsArray = Array.isArray(formData.authorizedPersons)
//         ? formData.authorizedPersons
//         : JSON.parse(formData.authorizedPersons || "[]");


//       // 1️⃣ Campos do aluno
//       const student = {
//         fullName: formData.studentName,
//         birthDate: formData.studentBirthDate,
//         cpf: formData.studentCPF,
//         gender: formData.gender,
//         nationality: formData.nationality,
//         previousSchool: formData.previousSchool,
//         grade: formData.desiredGrade,
//         healthInfo,
//         authorizedPersons: formData.authorizedPersons.map((p) => ({
//           name: p.name,
//           phone: p.phone,
//           relation: p.relation,
//           document: p.document ? p.document.name : null,
//         })),
//       };
//       formDataToSend.append("student", JSON.stringify(student));

//       authorizedPersonsArray.forEach((p, index) => {
//         if (p.document?.file) {
//           formDataToSend.append(`authorizedPersonDocument_${index}`, p.document.file);
//         }
//       });

//       formData.documents?.forEach((doc) => formDataToSend.append("documents", doc.file));

//       // 2️⃣ Campos dos responsáveis
//       const responsibles = (formData.responsibles || []).filter(
//         (r) => r.name.trim() !== ""
//       );
//       formDataToSend.append("responsible", JSON.stringify(responsibles));


//       // 3️⃣ Endereço
//       const address = {
//         zipCode: formData.zipCode,
//         street: formData.street,
//         number: formData.number,
//         complement: formData.complement,
//         neighborhood: formData.neighborhood,
//         city: formData.city,
//         state: formData.state,
//       };
//       formDataToSend.append("address", JSON.stringify(address));

//       // 4️⃣ Arquivos
//       ["birthCertificate", "parentCPF", "addressProof", "vaccinationCard"].forEach(
//         (field) => {
//           if (formData[field]) {
//             formDataToSend.append("documents", formData[field]);
//           }
//         }
//       );

//       // 5️⃣ Envio para o backend
//       const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/enrollments`, {
//         method: "POST",
//         body: formDataToSend,
//       });

//       if (!res.ok) throw new Error("Falha ao enviar matrícula");

//       const result = await res.json();
//       console.log("Resposta da API:", result);
//       alert("✅ Matrícula enviada com sucesso!");

//       // ✅ Avança para a Step5Review
//       if (typeof onNext === "function") onNext();

//     } catch (error) {
//       console.error("❌ Erro ao finalizar matrícula:", error);
//       alert("Erro ao enviar matrícula. Tente novamente.");
//     } finally {
//       setLoading(false);
//     };
//   }

//   return (
//     <div id="step4" className="fade-in max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-8">
//       <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">📄 Upload de Documentos</h2>

//       <div className="bg-white p-6 rounded-lg shadow-md space-y-6">
//         {[
//           { label: "Certidão de Nascimento do Aluno", key: "birthCertificate", icon: "📄", required: true },
//           { label: "CPF do Responsável", key: "parentCPF", icon: "🆔", required: true },
//           { label: "Comprovante de Residência", key: "addressProof", icon: "🏠", required: true },
//           { label: "Cartão de Vacinação", key: "vaccinationCard", icon: "💉" },
//         ].map(({ label, key, icon, required }) => (
//           <div key={key} className="border border-gray-200 rounded-lg p-6">
//             <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
//               {required && <span className="text-red-500 mr-2">*</span>}
//               {label}
//             </h3>
//             <div
//               className="file-drop-zone p-8 rounded-lg text-center cursor-pointer"
//               onClick={() => document.getElementById(key).click()}
//             >
//               <div className="text-4xl mb-4">{icon}</div>
//               <p className="text-gray-600 mb-2">Clique aqui ou arraste o arquivo</p>
//               <p className="text-sm text-gray-500">PDF, JPG ou PNG (máx. 5MB)</p>
//               <input
//                 type="file"
//                 id={key}
//                 accept=".pdf,.jpg,.jpeg,.png"
//                 className="hidden"
//                 onChange={(e) => handleFileChange(e, key)}
//               />
//               {formData[key] && <p className="mt-2 text-green-600 font-medium">{formData[key].name}</p>}
//             </div>
//           </div>
//         ))}

//         <div className="flex justify-between mt-8">
//           <button
//             onClick={onPrevious}
//             className="bg-gray-500 hover:bg-gray-600 text-white px-8 py-3 rounded-lg font-medium transition-colors"
//           >
//             ← Anterior
//           </button>
//           <button
//             onClick={onNext} // apenas avança para Step5Review
//             className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors"
//           >
//             Próximo → Revisar Dados
//           </button>
//         </div>

//       </div>
//     </div>
//   );
// }

// "use client";
// import React, { useState } from "react";

// export default function Step4Documents({ formData, setFormData, onPrevious, onNext }) {
//   const [loading, setLoading] = useState(false);

//   // Manipula seleção de arquivos
//   const handleFileChange = (e, key) => {
//     const file = e.target.files[0];
//     if (!file) return;
//     setFormData((prev) => ({
//       ...prev,
//       [key]: file,
//     }));
//   };

//   const handleFinalSubmit = async () => {
//     try {
//       setLoading(true);

//       const formDataToSend = new FormData();

//       // ✅ 1. Informações de saúde
//       const healthInfo = {
//         allergies: [
//           formData.medicineAllergyDetails,
//           formData.insectAllergyDetails,
//           formData.productAllergyDetails,
//         ].filter(Boolean).join("; "),
//         medications: [formData.regularMedicineDetails].filter(Boolean).join("; "),
//         notesfeverMedicine: formData.notesfeverMedicine || "",
//       };

//       // ✅ 2. Pessoas autorizadas — garante sempre um array válido
//       const authorizedPersonsArray = Array.isArray(formData.authorizedPersons)
//         ? formData.authorizedPersons
//         : JSON.parse(formData.authorizedPersons || "[]");

//       if (!authorizedPersonsArray.length) {
//         alert("⚠️ Adicione pelo menos uma pessoa autorizada a buscar o aluno.");
//         setLoading(false);
//         return;
//       }

//       // ✅ 3. Campos do aluno
//       const student = {
//         fullName: formData.studentName,
//         birthDate: formData.studentBirthDate,
//         cpf: formData.studentCPF,
//         gender: formData.gender,
//         nationality: formData.nationality,
//         previousSchool: formData.previousSchool,
//         grade: formData.desiredGrade,
//         healthInfo,
//         authorizedPersons: authorizedPersonsArray.map((p) => ({
//           name: p.name,
//           phone: p.phone,
//           relation: p.relation,
//           document: p.document ? p.document.name : null,
//         })),
//       };
//       console.log("🚀 Dados do aluno enviados:", student);

//       formDataToSend.append("student", JSON.stringify(student));

//       // ✅ 4. Arquivos das pessoas autorizadas
//       authorizedPersonsArray.forEach((p, index) => {
//         if (p.document?.file) {
//           formDataToSend.append(`authorizedPersonDocument_${index}`, p.document.file);
//         }
//       });

//       // ✅ 5. Documentos gerais
//       formData.documents?.forEach((doc) => formDataToSend.append("documents", doc.file));

//       ["birthCertificate", "parentCPF", "addressProof", "vaccinationCard"].forEach(
//         (field) => {
//           if (formData[field]) {
//             formDataToSend.append("documents", formData[field]);
//           }
//         }
//       );

//       // ✅ 6. Responsáveis
//       const responsibles = (formData.responsibles || []).filter(
//         (r) => r.name?.trim() !== ""
//       );
//       formDataToSend.append("responsible", JSON.stringify(responsibles));

//       // ✅ 7. Endereço
//       const address = {
//         zipCode: formData.zipCode,
//         street: formData.street,
//         number: formData.number,
//         complement: formData.complement,
//         neighborhood: formData.neighborhood,
//         city: formData.city,
//         state: formData.state,
//       };
//       formDataToSend.append("address", JSON.stringify(address));

//       // ✅ 8. Envio para o backend
//       const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/enrollments`, {
//         method: "POST",
//         body: formDataToSend,
//       });

//       if (!res.ok) throw new Error("Falha ao enviar matrícula");

//       const result = await res.json();
//       console.log("Resposta da API:", result);
//       alert("✅ Matrícula enviada com sucesso!");

//       // Avança para revisão
//       if (typeof onNext === "function") onNext();
//     } catch (error) {
//       console.error("❌ Erro ao finalizar matrícula:", error);
//       alert("Erro ao enviar matrícula. Tente novamente.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div id="step4" className="fade-in max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-8">
//       <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
//         📄 Upload de Documentos
//       </h2>

//       <div className="bg-white p-6 rounded-lg shadow-md space-y-6">
//         {[
//           { label: "Certidão de Nascimento do Aluno", key: "birthCertificate", icon: "📄", required: true },
//           { label: "CPF do Responsável", key: "parentCPF", icon: "🆔", required: true },
//           { label: "Comprovante de Residência", key: "addressProof", icon: "🏠", required: true },
//           { label: "Cartão de Vacinação", key: "vaccinationCard", icon: "💉" },
//         ].map(({ label, key, icon, required }) => (
//           <div key={key} className="border border-gray-200 rounded-lg p-6">
//             <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
//               {required && <span className="text-red-500 mr-2">*</span>}
//               {label}
//             </h3>
//             <div
//               className="file-drop-zone p-8 rounded-lg text-center cursor-pointer"
//               onClick={() => document.getElementById(key).click()}
//             >
//               <div className="text-4xl mb-4">{icon}</div>
//               <p className="text-gray-600 mb-2">Clique aqui ou arraste o arquivo</p>
//               <p className="text-sm text-gray-500">PDF, JPG ou PNG (máx. 5MB)</p>
//               <input
//                 type="file"
//                 id={key}
//                 accept=".pdf,.jpg,.jpeg,.png"
//                 className="hidden"
//                 onChange={(e) => handleFileChange(e, key)}
//               />
//               {formData[key] && (
//                 <p className="mt-2 text-green-600 font-medium">{formData[key].name}</p>
//               )}
//             </div>
//           </div>
//         ))}

//         <div className="flex justify-between mt-8">
//           <button
//             onClick={onPrevious}
//             className="bg-gray-500 hover:bg-gray-600 text-white px-8 py-3 rounded-lg font-medium transition-colors"
//           >
//             ← Anterior
//           </button>

//           <button
//             disabled={loading}
//             onClick={handleFinalSubmit} // agora realmente envia os dados
//             className={`px-8 py-3 rounded-lg font-medium transition-colors ${loading
//               ? "bg-blue-400 cursor-not-allowed"
//               : "bg-blue-600 hover:bg-blue-700 text-white"
//               }`}
//           >
//             {loading ? "Enviando..." : "Enviar Matrícula"}
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// "use client";
// import React, { useState } from "react";

// export default function Step4Documents({ formData, setFormData, onPrevious, onNext }) {
//   const [loading, setLoading] = useState(false);

//   // Manipula seleção de arquivos
//   const handleFileChange = (e, key) => {
//     const file = e.target.files[0];
//     if (!file) return;
//     setFormData((prev) => ({
//       ...prev,
//       [key]: file,
//     }));
//   };

//   const handleFinalSubmit = async () => {
//     try {
//       setLoading(true);

//       const formDataToSend = new FormData();

//       // ✅ Health Info
//       const healthInfo = {
//         allergies: [
//           formData.medicineAllergyDetails,
//           formData.insectAllergyDetails,
//           formData.productAllergyDetails,
//         ].filter(Boolean).join("; "),
//         medications: [
//           formData.regularMedicineDetails,
//         ].filter(Boolean).join("; "),
//         notesfeverMedicine: formData.notesfeverMedicine || "",
//       };

//       // Garantindo array real
//       const authorizedPersonsArray = Array.isArray(formData.authorizedPersons)
//         ? formData.authorizedPersons
//         : JSON.parse(formData.authorizedPersons || "[]");

//       // 1️⃣ Campos do aluno
//       const student = {
//         fullName: formData.studentName,
//         birthDate: formData.studentBirthDate,
//         cpf: formData.studentCPF,
//         gender: formData.gender,
//         nationality: formData.nationality,
//         previousSchool: formData.previousSchool,
//         grade: formData.desiredGrade,
//         healthInfo,
//         authorizedPersons: authorizedPersonsArray.map((p) => ({
//           name: p.name,
//           phone: p.phone,
//           relation: p.relation,
//           document: p.document ? p.document.name : null,
//         })),
//       };
//       formDataToSend.append("student", JSON.stringify(student));

//       // Arquivos de pessoas autorizadas
//       authorizedPersonsArray.forEach((p) => {
//         if (p.document?.file) {
//           formDataToSend.append("authorizedPersonDocuments", p.document.file);
//         }
//       });

//       // Arquivos adicionais do aluno
//       formData.documents?.forEach((doc) => formDataToSend.append("documents", doc.file));

//       // 2️⃣ Campos dos responsáveis
//       const responsibles = (formData.responsibles || []).filter((r) => r.name.trim() !== "");
//       formDataToSend.append("responsible", JSON.stringify(responsibles));

//       // 3️⃣ Endereço
//       const address = {
//         zipCode: formData.zipCode,
//         street: formData.street,
//         number: formData.number,
//         complement: formData.complement,
//         neighborhood: formData.neighborhood,
//         city: formData.city,
//         state: formData.state,
//       };
//       formDataToSend.append("address", JSON.stringify(address));

//       // 4️⃣ Outros arquivos fixos
//       ["birthCertificate", "parentCPF", "addressProof", "vaccinationCard"].forEach((field) => {
//         if (formData[field]) formDataToSend.append("documents", formData[field]);
//       });

//       // 5️⃣ Envio para o backend
//       const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/enrollments`, {
//         method: "POST",
//         body: formDataToSend,
//       });

//       if (!res.ok) throw new Error("Falha ao enviar matrícula");

//       const result = await res.json();
//       console.log("Resposta da API:", result);
//       alert("✅ Matrícula enviada com sucesso!");
//       if (typeof onNext === "function") onNext();

//     } catch (error) {
//       console.error("❌ Erro ao finalizar matrícula:", error);
//       alert("Erro ao enviar matrícula. Tente novamente.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div id="step4" className="fade-in max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-8">
//       <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">📄 Upload de Documentos</h2>

//       <div className="bg-white p-6 rounded-lg shadow-md space-y-6">
//         {[
//           { label: "Certidão de Nascimento do Aluno", key: "birthCertificate", icon: "📄", required: true },
//           { label: "CPF do Responsável", key: "parentCPF", icon: "🆔", required: true },
//           { label: "Comprovante de Residência", key: "addressProof", icon: "🏠", required: true },
//           { label: "Cartão de Vacinação", key: "vaccinationCard", icon: "💉" },
//         ].map(({ label, key, icon, required }) => (
//           <div key={key} className="border border-gray-200 rounded-lg p-6">
//             <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
//               {required && <span className="text-red-500 mr-2">*</span>}
//               {label}
//             </h3>
//             <div
//               className="file-drop-zone p-8 rounded-lg text-center cursor-pointer"
//               onClick={() => document.getElementById(key).click()}
//             >
//               <div className="text-4xl mb-4">{icon}</div>
//               <p className="text-gray-600 mb-2">Clique aqui ou arraste o arquivo</p>
//               <p className="text-sm text-gray-500">PDF, JPG ou PNG (máx. 5MB)</p>
//               <input
//                 type="file"
//                 id={key}
//                 accept=".pdf,.jpg,.jpeg,.png"
//                 className="hidden"
//                 onChange={(e) => handleFileChange(e, key)}
//               />
//               {formData[key] && <p className="mt-2 text-green-600 font-medium">{formData[key].name}</p>}
//             </div>
//           </div>
//         ))}

//         <div className="flex justify-between mt-8">
//           <button
//             onClick={onPrevious}
//             className="bg-gray-500 hover:bg-gray-600 text-white px-8 py-3 rounded-lg font-medium transition-colors"
//           >
//             ← Anterior
//           </button>
//           <button
//             onClick={handleFinalSubmit}
//             className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors"
//           >
//             Enviar Matrícula →
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }


// "use client";
// import React, { useState } from "react";

// export default function Step4Documents({ formData, setFormData, onPrevious, onNext }) {
//   const [loading, setLoading] = useState(false);

//   // Manipula seleção de arquivos
//   const handleFileChange = (e, key) => {
//     const file = e.target.files[0];
//     if (!file) return;
//     setFormData((prev) => ({
//       ...prev,
//       [key]: file,
//     }));
//   };

//   const handleNextStep = async () => {


//     // Valida se os documentos obrigatórios foram adicionados
//     if (!formData.birthCertificate || !formData.parentCPF || !formData.addressProof) {
//       alert("⚠️ Certifique-se de enviar todos os documentos obrigatórios antes de continuar.");
//       return;
//     }

//     setLoading(true);
//     setTimeout(() => {
//       setLoading(false);
//       if (typeof onNext === "function") onNext(); // Avança para o Step5Review
//     }, 300);
//   };

//   return (
//     <div id="step4" className="fade-in max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-8">
//       <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">📄 Upload de Documentos</h2>

//       <div className="bg-white p-6 rounded-lg shadow-md space-y-6">
//         {[
//           { label: "Certidão de Nascimento do Aluno", key: "birthCertificate", icon: "📄", required: true },
//           { label: "CPF do Responsável", key: "parentCPF", icon: "🆔", required: true },
//           { label: "Comprovante de Residência", key: "addressProof", icon: "🏠", required: true },
//           { label: "Cartão de Vacinação", key: "vaccinationCard", icon: "💉" },
//         ].map(({ label, key, icon, required }) => (
//           <div key={key} className="border border-gray-200 rounded-lg p-6">
//             <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
//               {required && <span className="text-red-500 mr-2">*</span>}
//               {label}
//             </h3>
//             <div
//               className="file-drop-zone p-8 rounded-lg text-center cursor-pointer"
//               onClick={() => document.getElementById(key).click()}
//             >
//               <div className="text-4xl mb-4">{icon}</div>
//               <p className="text-gray-600 mb-2">Clique aqui ou arraste o arquivo</p>
//               <p className="text-sm text-gray-500">PDF, JPG ou PNG (máx. 5MB)</p>
//               <input
//                 type="file"
//                 id={key}
//                 accept=".pdf,.jpg,.jpeg,.png"
//                 className="hidden"
//                 onChange={(e) => handleFileChange(e, key)}
//               />
//               {formData[key] && <p className="mt-2 text-green-600 font-medium">{formData[key].name}</p>}
//             </div>
//           </div>
//         ))}

//         <div className="flex justify-between mt-8">
//           <button
//             onClick={onPrevious}
//             className="bg-gray-500 hover:bg-gray-600 text-white px-8 py-3 rounded-lg font-medium transition-colors"
//           >
//             ← Anterior
//           </button>
//           <button
//             onClick={handleNextStep}
//             disabled={loading}
//             className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors"
//           >
//             {loading ? "Carregando..." : "Próximo →"}
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// "use client";
// import React, { useState } from "react";

// export default function Step4Documents({ formData, setFormData, onPrevious, onNext }) {
//   const [loading, setLoading] = useState(false);

//   // Manipula seleção de arquivos do aluno
//   const handleFileChange = (e, key) => {
//     const file = e.target.files[0];
//     if (!file) return;
//     setFormData((prev) => ({
//       ...prev,
//       [key]: file,
//     }));
//   };

//   // Manipula seleção de arquivos das pessoas autorizadas
//   const handleAuthorizedPersonFileChange = (e, index) => {
//     const file = e.target.files[0];
//     if (!file) return;

//     setFormData((prev) => {
//       const updatedAuthorizedPersons = [...(prev.authorizedPersons || [])];
//       if (!updatedAuthorizedPersons[index]) updatedAuthorizedPersons[index] = {};
//       updatedAuthorizedPersons[index].document = {
//         file,
//         type: file.type,
//         name: file.name,
//         url: "", // Será preenchido pelo backend após upload
//       };

//       return {
//         ...prev,
//         authorizedPersons: updatedAuthorizedPersons,
//       };
//     });
//   };

//   // Validação e avanço para o próximo passo
//   const handleNextStep = () => {
//     // Valida se os documentos obrigatórios do aluno foram adicionados
//     if (!formData.birthCertificate || !formData.parentCPF || !formData.addressProof) {
//       alert("⚠️ Certifique-se de enviar todos os documentos obrigatórios do aluno antes de continuar.");
//       return;
//     }

//     // Valida se pelo menos uma pessoa autorizada possui documento
//     const missingDocs = (formData.authorizedPersons || []).some((p) => !p.document?.file);
//     if (missingDocs) {
//       alert("⚠️ Certifique-se de enviar o documento de todas as pessoas autorizadas.");
//       return;
//     }

//     setLoading(true);

//     setTimeout(() => {
//       setLoading(false);
//       if (typeof onNext === "function") onNext();
//     }, 300);
//   };

//   return (
//     <div id="step4" className="fade-in max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-8">
//       <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">📄 Upload de Documentos</h2>

//       {/* Documentos do aluno */}
//       <div className="bg-white p-6 rounded-lg shadow-md space-y-6">
//         {[
//           { label: "Certidão de Nascimento do Aluno", key: "birthCertificate", icon: "📄", required: true },
//           { label: "CPF do Responsável", key: "parentCPF", icon: "🆔", required: true },
//           { label: "Comprovante de Residência", key: "addressProof", icon: "🏠", required: true },
//           { label: "Cartão de Vacinação", key: "vaccinationCard", icon: "💉" },
//         ].map(({ label, key, icon, required }) => (
//           <div key={key} className="border border-gray-200 rounded-lg p-6">
//             <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
//               {required && <span className="text-red-500 mr-2">*</span>}
//               {label}
//             </h3>
//             <div
//               className="file-drop-zone p-8 rounded-lg text-center cursor-pointer"
//               onClick={() => document.getElementById(key).click()}
//             >
//               <div className="text-4xl mb-4">{icon}</div>
//               <p className="text-gray-600 mb-2">Clique aqui ou arraste o arquivo</p>
//               <p className="text-sm text-gray-500">PDF, JPG ou PNG (máx. 5MB)</p>
//               <input
//                 type="file"
//                 id={key}
//                 accept=".pdf,.jpg,.jpeg,.png"
//                 className="hidden"
//                 onChange={(e) => handleFileChange(e, key)}
//               />
//               {formData[key] && <p className="mt-2 text-green-600 font-medium">{formData[key].name}</p>}
//             </div>
//           </div>
//         ))}

//         {/* Documentos das pessoas autorizadas */}
//         <h2 className="text-xl font-bold text-gray-800 mt-6 mb-4">👪 Documentos das Pessoas Autorizadas</h2>
//         {(formData.authorizedPersons || []).map((p, index) => (
//           <div key={index} className="border border-gray-200 rounded-lg p-6 mb-4">
//             <h3 className="text-lg font-semibold text-gray-800 mb-2">{p.name || `Autorizado #${index + 1}`}</h3>
//             <p><strong>Telefone:</strong> {p.phone}</p>
//             <p><strong>Parentesco:</strong> {p.relation}</p>

//             <div
//               className="file-drop-zone p-4 rounded-lg text-center cursor-pointer mt-2"
//               onClick={() => document.getElementById(`authorizedFile_${index}`).click()}
//             >
//               <p className="text-gray-600 mb-2">Clique aqui ou arraste o documento</p>
//               <input
//                 type="file"
//                 id={`authorizedFile_${index}`}
//                 accept=".pdf,.jpg,.jpeg,.png"
//                 className="hidden"
//                 onChange={(e) => handleAuthorizedPersonFileChange(e, index)}
//               />
//               {p.document?.file && <p className="mt-2 text-green-600 font-medium">{p.document.file.name}</p>}
//             </div>
//           </div>
//         ))}

//         <div className="flex justify-between mt-8">
//           <button
//             onClick={onPrevious}
//             className="bg-gray-500 hover:bg-gray-600 text-white px-8 py-3 rounded-lg font-medium transition-colors"
//           >
//             ← Anterior
//           </button>
//           <button
//             onClick={handleNextStep}
//             disabled={loading}
//             className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors"
//           >
//             {loading ? "Carregando..." : "Próximo →"}
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// "use client";
// import React, { useState } from "react";

// // Função genérica para upload via backend
// async function uploadFileToFirebase(file) {
//   if (!file) return "";
//   try {
//     const formData = new FormData();
//     formData.append("file", file);

//     const response = await fetch("/api/upload", {
//       method: "POST",
//       body: formData,
//     });

//     const data = await response.json();
//     return data.url; // URL retornada pelo backend
//   } catch (err) {
//     console.error("Erro ao enviar arquivo:", err);
//     return "";
//   }
// }

// export default function Step4Documents({ formData, setFormData, onPrevious, onNext }) {
//   const [loading, setLoading] = useState(false);

//   // Upload e atualização de documentos do aluno
//   const handleFileChange = async (e, key) => {
//     const file = e.target.files[0];
//     if (!file) return;

//     setLoading(true);
//     const url = await uploadFileToFirebase(file);
//     setLoading(false);

//     setFormData(prev => ({
//       ...prev,
//       [key]: { file, url }, // salva arquivo e URL
//     }));
//   };

//   // Upload e atualização de documentos das pessoas autorizadas
//   const handleAuthorizedPersonFileChange = async (e, index) => {
//     const file = e.target.files[0];
//     if (!file) return;

//     setLoading(true);
//     const url = await uploadFileToFirebase(file);
//     setLoading(false);

//     setFormData(prev => {
//       const updated = [...(prev.authorizedPersons || [])];
//       if (!updated[index]) updated[index] = {};
//       updated[index].document = { file, name: file.name, type: file.type, url };
//       return { ...prev, authorizedPersons: updated };
//     });
//   };

//   const handleNextStep = () => {
//     // Valida documentos obrigatórios do aluno
//     const requiredDocs = ["birthCertificate", "parentCPF", "addressProof"];
//     const missingDocs = requiredDocs.some(key => !formData[key]?.url);
//     if (missingDocs) {
//       alert("⚠️ Certifique-se de enviar todos os documentos obrigatórios do aluno antes de continuar.");
//       return;
//     }

//     // Valida documentos das pessoas autorizadas
//     const missingAuthorizedDocs = (formData.authorizedPersons || []).some(p => !p.document?.url);
//     if (missingAuthorizedDocs) {
//       alert("⚠️ Certifique-se de enviar o documento de todas as pessoas autorizadas.");
//       return;
//     }

//     if (typeof onNext === "function") onNext();
//   };

//   return (
//     <div id="step4" className="fade-in max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-8">
//       <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">📄 Upload de Documentos</h2>

//       {/* Documentos do aluno */}
//       <div className="bg-white p-6 rounded-lg shadow-md space-y-6">
//         {[
//           { label: "Certidão de Nascimento do Aluno", key: "birthCertificate", icon: "📄", required: true },
//           { label: "CPF do Responsável", key: "parentCPF", icon: "🆔", required: true },
//           { label: "Comprovante de Residência", key: "addressProof", icon: "🏠", required: true },
//           { label: "Cartão de Vacinação", key: "vaccinationCard", icon: "💉" },
//         ].map(({ label, key, icon }) => (
//           <div key={key} className="border border-gray-200 rounded-lg p-6">
//             <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
//               {label}
//             </h3>
//             <div
//               className="file-drop-zone p-8 rounded-lg text-center cursor-pointer"
//               onClick={() => document.getElementById(key).click()}
//             >
//               <div className="text-4xl mb-4">{icon}</div>
//               <p className="text-gray-600 mb-2">Clique aqui ou arraste o arquivo</p>
//               <p className="text-sm text-gray-500">PDF, JPG ou PNG (máx. 5MB)</p>
//               <input
//                 type="file"
//                 id={key}
//                 accept=".pdf,.jpg,.jpeg,.png"
//                 className="hidden"
//                 onChange={(e) => handleFileChange(e, key)}
//               />
//               {formData[key]?.file && (
//                 <p className="mt-2 text-green-600 font-medium">{formData[key].file.name}</p>
//               )}
//               {formData[key]?.url && (
//                 <p className="mt-1 text-blue-600 text-sm">✅ URL pronta</p>
//               )}
//             </div>
//           </div>
//         ))}

//         {/* Documentos das pessoas autorizadas */}
//         <h2 className="text-xl font-bold text-gray-800 mt-6 mb-4">👪 Documentos das Pessoas Autorizadas</h2>
//         {(formData.authorizedPersons || []).map((p, index) => (
//           <div key={index} className="border border-gray-200 rounded-lg p-6 mb-4">
//             <h3 className="text-lg font-semibold text-gray-800 mb-2">{p.name || `Autorizado #${index + 1}`}</h3>
//             <p><strong>Telefone:</strong> {p.phone}</p>
//             <p><strong>Parentesco:</strong> {p.relation}</p>

//             <div
//               className="file-drop-zone p-4 rounded-lg text-center cursor-pointer mt-2"
//               onClick={() => document.getElementById(`authorizedFile_${index}`).click()}
//             >
//               <p className="text-gray-600 mb-2">Clique aqui ou arraste o documento</p>
//               <input
//                 type="file"
//                 id={`authorizedFile_${index}`}
//                 accept=".pdf,.jpg,.jpeg,.png"
//                 className="hidden"
//                 onChange={(e) => handleAuthorizedPersonFileChange(e, index)}
//               />
//               {p.document?.file && (
//                 <p className="mt-2 text-green-600 font-medium">{p.document.file.name}</p>
//               )}
//               {p.document?.url && (
//                 <p className="mt-1 text-blue-600 text-sm">✅ URL pronta</p>
//               )}
//             </div>
//           </div>
//         ))}

//         <div className="flex justify-between mt-8">
//           <button
//             onClick={onPrevious}
//             className="bg-gray-500 hover:bg-gray-600 text-white px-8 py-3 rounded-lg font-medium transition-colors"
//           >
//             ← Anterior
//           </button>
//           <button
//             onClick={handleNextStep}
//             disabled={loading}
//             className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors"
//           >
//             {loading ? "Carregando..." : "Próximo →"}
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// "use client";
// import React, { useState } from "react";
// import { uploadDocument } from "@/api/enrollmentApi"; // função de upload que criamos

// export default function Step4Documents({ formData, setFormData, onPrevious, onNext }) {
//   const [loading, setLoading] = useState(false);

//   // Manipula seleção de arquivos do aluno
//   const handleFileChange = (e, key) => {
//     const file = e.target.files[0];
//     if (!file) return;
//     setFormData((prev) => ({
//       ...prev,
//       [key]: file,
//     }));
//   };


//   // Manipula seleção de arquivos das pessoas autorizadas
//   const handleAuthorizedPersonFileChange = (e, index) => {
//     const file = e.target.files[0];
//     if (!file) return;

//     setFormData((prev) => {
//       const updatedAuthorizedPersons = [...(prev.authorizedPersons || [])];
//       if (!updatedAuthorizedPersons[index]) updatedAuthorizedPersons[index] = {};
//       updatedAuthorizedPersons[index].document = {
//         file,
//         type: file.type,
//         name: file.name,
//         url: "", // será preenchido após upload
//       };
//       return { ...prev, authorizedPersons: updatedAuthorizedPersons };
//     });
//   };

//   // Função para enviar todos os documentos para o backend e obter URLs
//   const uploadAllDocuments = async () => {
//     const newFormData = { ...formData };

//     // Upload dos documentos do aluno
//     const studentKeys = ["birthCertificate", "parentCPF", "addressProof", "vaccinationCard"];
//     for (const key of studentKeys) {
//       if (newFormData[key] && newFormData[key] instanceof File) {
//         const url = await uploadDocument(newFormData[key]);
//         newFormData[key] = { file: newFormData[key], url }; // mantém o arquivo e salva a URL
//       }
//     }

//     // Upload dos documentos das pessoas autorizadas
//     if (newFormData.authorizedPersons) {
//       for (let i = 0; i < newFormData.authorizedPersons.length; i++) {
//         const person = newFormData.authorizedPersons[i];
//         if (person.document?.file) {
//           const url = await uploadDocument(person.document.file);
//           newFormData.authorizedPersons[i].document.url = url;
//         }
//       }
//     }

//     return newFormData;
//   };

//   // Validação e avanço para o próximo passo
//   const handleNextStep = async () => {
//     if (!formData.birthCertificate || !formData.parentCPF || !formData.addressProof) {
//       alert("⚠️ Certifique-se de enviar todos os documentos obrigatórios do aluno antes de continuar.");
//       return;
//     }

//     const missingDocs = (formData.authorizedPersons || []).some((p) => !p.document?.file);
//     if (missingDocs) {
//       alert("⚠️ Certifique-se de enviar o documento de todas as pessoas autorizadas.");
//       return;
//     }

//     try {
//       setLoading(true);
//       const updatedFormData = await uploadAllDocuments();
//       setFormData(updatedFormData);

//       if (typeof onNext === "function") onNext();
//     } catch (error) {
//       console.error("Erro no upload:", error);
//       alert("❌ Erro ao enviar documentos. Tente novamente.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div id="step4" className="fade-in max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-8">
//       <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">📄 Upload de Documentos</h2>

//       {/* Documentos do aluno */}
//       <div className="bg-white p-6 rounded-lg shadow-md space-y-6">
//         {[
//           { label: "Certidão de Nascimento do Aluno", key: "birthCertificate", icon: "📄", required: true },
//           { label: "CPF do Responsável", key: "parentCPF", icon: "🆔", required: true },
//           { label: "Comprovante de Residência", key: "addressProof", icon: "🏠", required: true },
//           { label: "Cartão de Vacinação", key: "vaccinationCard", icon: "💉" },
//         ].map(({ label, key, icon, required }) => (
//           <div key={key} className="border border-gray-200 rounded-lg p-6">
//             <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
//               {required && <span className="text-red-500 mr-2">*</span>}
//               {label}
//             </h3>
//             <div
//               className="file-drop-zone p-8 rounded-lg text-center cursor-pointer"
//               onClick={() => document.getElementById(key).click()}
//             >
//               <div className="text-4xl mb-4">{icon}</div>
//               <p className="text-gray-600 mb-2">Clique aqui ou arraste o arquivo</p>
//               <p className="text-sm text-gray-500">PDF, JPG ou PNG (máx. 5MB)</p>
//               <input
//                 type="file"
//                 id={key}
//                 accept=".pdf,.jpg,.jpeg,.png"
//                 className="hidden"
//                 onChange={(e) => handleFileChange(e, key)}
//               />
//               {formData[key]?.file && <p className="mt-2 text-green-600 font-medium">{formData[key].file.name}</p>}
//               {formData[key]?.url && <p className="mt-1 text-blue-600 text-sm">URL: {formData[key].url}</p>}
//             </div>
//           </div>
//         ))}

//         {/* Documentos das pessoas autorizadas */}
//         <h2 className="text-xl font-bold text-gray-800 mt-6 mb-4">👪 Documentos das Pessoas Autorizadas</h2>
//         {(formData.authorizedPersons || []).map((p, index) => (
//           <div key={index} className="border border-gray-200 rounded-lg p-6 mb-4">
//             <h3 className="text-lg font-semibold text-gray-800 mb-2">{p.name || `Autorizado #${index + 1}`}</h3>
//             <p><strong>Telefone:</strong> {p.phone}</p>
//             <p><strong>Parentesco:</strong> {p.relation}</p>

//             <div
//               className="file-drop-zone p-4 rounded-lg text-center cursor-pointer mt-2"
//               onClick={() => document.getElementById(`authorizedFile_${index}`).click()}
//             >
//               <p className="text-gray-600 mb-2">Clique aqui ou arraste o documento</p>
//               <input
//                 type="file"
//                 id={`authorizedFile_${index}`}
//                 accept=".pdf,.jpg,.jpeg,.png"
//                 className="hidden"
//                 onChange={(e) => handleAuthorizedPersonFileChange(e, index)}
//               />
//               {p.document?.file && <p className="mt-2 text-green-600 font-medium">{p.document.file.name}</p>}
//               {p.document?.url && <p className="mt-1 text-blue-600 text-sm">URL: {p.document.url}</p>}
//             </div>
//           </div>
//         ))}

//         <div className="flex justify-between mt-8">
//           <button
//             onClick={onPrevious}
//             className="bg-gray-500 hover:bg-gray-600 text-white px-8 py-3 rounded-lg font-medium transition-colors"
//           >
//             ← Anterior
//           </button>
//           <button
//             onClick={handleNextStep}
//             disabled={loading}
//             className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors"
//           >
//             {loading ? "Carregando..." : "Próximo →"}
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// "use client";
// import React, { useState } from "react";
// import { uploadDocument } from "../../../../api/enrollmentApi";


// // função que envia arquivos para backend

// export default function Step4Documents({ formData, setFormData, onPrevious, onNext }) {
//   const [loading, setLoading] = useState(false);

//   // Manipula seleção de arquivos do aluno
//   const handleFileChange = (e, key) => {
//     const file = e.target.files[0];
//     if (!file) return;
//     setFormData((prev) => ({
//       ...prev,
//       [key]: file,
//     }));
//   };

//   // Manipula seleção de arquivos das pessoas autorizadas
//   const handleAuthorizedPersonFileChange = (e, index) => {
//     const file = e.target.files[0];
//     if (!file) return;

//     setFormData((prev) => {
//       const updatedAuthorizedPersons = [...(prev.authorizedPersons || [])];
//       if (!updatedAuthorizedPersons[index]) updatedAuthorizedPersons[index] = {};
//       updatedAuthorizedPersons[index].document = {
//         file,
//         type: file.type,
//         name: file.name,
//         url: "", // Será preenchido após upload
//       };

//       return {
//         ...prev,
//         authorizedPersons: updatedAuthorizedPersons,
//       };
//     });
//   };

//   // Faz upload de todos os arquivos e atualiza URLs
//   const uploadAllDocuments = async () => {
//     const updatedFormData = { ...formData };

//     // Upload dos arquivos do aluno
//     const studentFilesKeys = ["birthCertificate", "parentCPF", "addressProof", "vaccinationCard"];
//     for (let key of studentFilesKeys) {
//       if (formData[key] && formData[key] instanceof File) {
//         updatedFormData[key] = await uploadDocument(formData[key]);
//       }
//     }

//     // Upload dos documentos das pessoas autorizadas
//     if (formData.authorizedPersons) {
//       for (let i = 0; i < formData.authorizedPersons.length; i++) {
//         const person = formData.authorizedPersons[i];
//         if (person.document?.file instanceof File) {
//           const url = await uploadDocument(person.document.file);
//           updatedFormData.authorizedPersons[i].document.url = url;
//           // remove a referência local para economizar memória
//           delete updatedFormData.authorizedPersons[i].document.file;
//         }
//       }
//     }

//     setFormData(updatedFormData);
//   };

//   // Validação e avanço para o próximo passo
//   const handleNextStep = async () => {
//     // Valida documentos obrigatórios do aluno
//     if (!formData.birthCertificate || !formData.parentCPF || !formData.addressProof) {
//       alert("⚠️ Certifique-se de enviar todos os documentos obrigatórios do aluno antes de continuar.");
//       return;
//     }

//     // Valida documentos das pessoas autorizadas
//     const missingDocs = (formData.authorizedPersons || []).some((p) => !p.document?.file && !p.document?.url);
//     if (missingDocs) {
//       alert("⚠️ Certifique-se de enviar o documento de todas as pessoas autorizadas.");
//       return;
//     }

//     setLoading(true);

//     try {
//       await uploadAllDocuments();
//       if (typeof onNext === "function") onNext();
//     } catch (error) {
//       console.error(error);
//       alert("❌ Erro ao enviar arquivos. Tente novamente.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div id="step4" className="fade-in max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-8">
//       <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">📄 Upload de Documentos</h2>

//       {/* Documentos do aluno */}
//       <div className="bg-white p-6 rounded-lg shadow-md space-y-6">
//         {[
//           { label: "Certidão de Nascimento do Aluno", key: "birthCertificate", icon: "📄", required: true },
//           { label: "CPF do Responsável", key: "parentCPF", icon: "🆔", required: true },
//           { label: "Comprovante de Residência", key: "addressProof", icon: "🏠", required: true },
//           { label: "Cartão de Vacinação", key: "vaccinationCard", icon: "💉" },
//         ].map(({ label, key, icon, required }) => (
//           <div key={key} className="border border-gray-200 rounded-lg p-6">
//             <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
//               {required && <span className="text-red-500 mr-2">*</span>}
//               {label}
//             </h3>
//             <div
//               className="file-drop-zone p-8 rounded-lg text-center cursor-pointer"
//               onClick={() => document.getElementById(key).click()}
//             >
//               <div className="text-4xl mb-4">{icon}</div>
//               <p className="text-gray-600 mb-2">Clique aqui ou arraste o arquivo</p>
//               <p className="text-sm text-gray-500">PDF, JPG ou PNG (máx. 5MB)</p>
//               <input
//                 type="file"
//                 id={key}
//                 accept=".pdf,.jpg,.jpeg,.png"
//                 className="hidden"
//                 onChange={(e) => handleFileChange(e, key)}
//               />
//               {formData[key] && typeof formData[key] === "string" ? (
//                 <p className="mt-2 text-green-600 font-medium">Arquivo enviado ✅</p>
//               ) : formData[key] instanceof File ? (
//                 <p className="mt-2 text-green-600 font-medium">{formData[key].name}</p>
//               ) : null}
//             </div>
//           </div>
//         ))}

//         {/* Documentos das pessoas autorizadas */}
//         <h2 className="text-xl font-bold text-gray-800 mt-6 mb-4">👪 Documentos das Pessoas Autorizadas</h2>
//         {(formData.authorizedPersons || []).map((p, index) => (
//           <div key={index} className="border border-gray-200 rounded-lg p-6 mb-4">
//             <h3 className="text-lg font-semibold text-gray-800 mb-2">{p.name || `Autorizado #${index + 1}`}</h3>
//             <p><strong>Telefone:</strong> {p.phone}</p>
//             <p><strong>Parentesco:</strong> {p.relation}</p>

//             <div
//               className="file-drop-zone p-4 rounded-lg text-center cursor-pointer mt-2"
//               onClick={() => document.getElementById(`authorizedFile_${index}`).click()}
//             >
//               <p className="text-gray-600 mb-2">Clique aqui ou arraste o documento</p>
//               <input
//                 type="file"
//                 id={`authorizedFile_${index}`}
//                 accept=".pdf,.jpg,.jpeg,.png"
//                 className="hidden"
//                 onChange={(e) => handleAuthorizedPersonFileChange(e, index)}
//               />
//               {p.document?.url ? (
//                 <p className="mt-2 text-green-600 font-medium">Arquivo enviado ✅</p>
//               ) : p.document?.file ? (
//                 <p className="mt-2 text-green-600 font-medium">{p.document.file.name}</p>
//               ) : null}
//             </div>
//           </div>
//         ))}

//         <div className="flex justify-between mt-8">
//           <button
//             onClick={onPrevious}
//             className="bg-gray-500 hover:bg-gray-600 text-white px-8 py-3 rounded-lg font-medium transition-colors"
//           >
//             ← Anterior
//           </button>
//           <button
//             onClick={handleNextStep}
//             disabled={loading}
//             className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors"
//           >
//             {loading ? "Carregando..." : "Próximo →"}
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// "use client";
// import React, { useState } from "react";
// import { uploadDocument } from "../../../api/enrollmentApi"; // caminho correto para o api folder

// export default function Step4Documents({ formData, setFormData, onPrevious, onNext }) {
//   const [loading, setLoading] = useState(false);

//   // Manipula seleção de arquivos
//   const handleFileChange = (e, key, index = null) => {
//     const file = e.target.files[0];
//     if (!file) return;

//     if (key === "authorizedPersons" && index !== null) {
//       // Atualiza documento da pessoa autorizada
//       const newAuthorized = [...formData.authorizedPersons];
//       newAuthorized[index].document = { file, url: null };
//       setFormData((prev) => ({ ...prev, authorizedPersons: newAuthorized }));
//     } else {
//       setFormData((prev) => ({
//         ...prev,
//         [key]: { file, url: null },
//       }));
//     }
//   };

//   const uploadAllDocuments = async () => {
//     const newFormData = { ...formData };

//     // 1️⃣ Upload documentos principais
//     for (const key of ["birthCertificate", "parentCPF", "addressProof", "schoolHistory", "vaccinationCard"]) {
//       if (newFormData[key]?.file) {
//         const url = await uploadDocument(newFormData[key].file);
//         newFormData[key].url = url;
//       }
//     }

//     // 2️⃣ Upload documentos das pessoas autorizadas
//     if (Array.isArray(newFormData.authorizedPersons)) {
//       for (let i = 0; i < newFormData.authorizedPersons.length; i++) {
//         const person = newFormData.authorizedPersons[i];
//         if (person.document?.file) {
//           const url = await uploadDocument(person.document.file);
//           newFormData.authorizedPersons[i].document.url = url;
//         }
//       }
//     }

//     setFormData(newFormData);
//     return newFormData;
//   };

//   const handleNextStep = async () => {
//     // Valida documentos obrigatórios
//     if (!formData.birthCertificate || !formData.parentCPF || !formData.addressProof) {
//       alert("⚠️ Certifique-se de enviar todos os documentos obrigatórios antes de continuar.");
//       return;
//     }

//     setLoading(true);
//     try {
//       await uploadAllDocuments();
//       onNext(); // Avança para Step5Review
//     } catch (error) {
//       console.error("Erro ao enviar documentos:", error);
//       alert("Erro ao enviar documentos. Tente novamente.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="fade-in max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-8">
//       <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">📄 Upload de Documentos</h2>

//       <div className="bg-white p-6 rounded-lg shadow-md space-y-6">
//         {/* Documentos do aluno */}
//         {[
//           { label: "Certidão de Nascimento do Aluno", key: "birthCertificate", icon: "📄", required: true },
//           { label: "CPF do Responsável", key: "parentCPF", icon: "🆔", required: true },
//           { label: "Comprovante de Residência", key: "addressProof", icon: "🏠", required: true },
//           { label: "Cartão de Vacinação", key: "vaccinationCard", icon: "💉" },
//         ].map(({ label, key, icon, required }) => (
//           <div key={key} className="border border-gray-200 rounded-lg p-6">
//             <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
//               {required && <span className="text-red-500 mr-2">*</span>}
//               {label}
//             </h3>
//             <div
//               className="file-drop-zone p-8 rounded-lg text-center cursor-pointer"
//               onClick={() => document.getElementById(key).click()}
//             >
//               <div className="text-4xl mb-4">{icon}</div>
//               <p className="text-gray-600 mb-2">Clique aqui ou arraste o arquivo</p>
//               <p className="text-sm text-gray-500">PDF, JPG ou PNG (máx. 5MB)</p>
//               <input
//                 type="file"
//                 id={key}
//                 accept=".pdf,.jpg,.jpeg,.png"
//                 className="hidden"
//                 onChange={(e) => handleFileChange(e, key)}
//               />
//               {formData[key]?.file && <p className="mt-2 text-green-600 font-medium">{formData[key].file.name}</p>}
//             </div>
//           </div>
//         ))}

//         {/* Documentos das pessoas autorizadas */}
//         {formData.authorizedPersons?.map((person, index) => (
//           <div key={index} className="border border-gray-200 rounded-lg p-6">
//             <h3 className="text-lg font-semibold text-gray-800 mb-4">{person.name || "Pessoa Autorizada"}</h3>
//             <div
//               className="file-drop-zone p-8 rounded-lg text-center cursor-pointer"
//               onClick={() => document.getElementById(`authorized-${index}`).click()}
//             >
//               <div className="text-4xl mb-4">🆔</div>
//               <p className="text-gray-600 mb-2">Clique aqui ou arraste o arquivo da pessoa autorizada</p>
//               <input
//                 type="file"
//                 id={`authorized-${index}`}
//                 accept=".pdf,.jpg,.jpeg,.png"
//                 className="hidden"
//                 onChange={(e) => handleFileChange(e, "authorizedPersons", index)}
//               />
//               {person.document?.file && <p className="mt-2 text-green-600 font-medium">{person.document.file.name}</p>}
//             </div>
//           </div>
//         ))}

//         <div className="flex justify-between mt-8">
//           <button
//             onClick={onPrevious}
//             className="bg-gray-500 hover:bg-gray-600 text-white px-8 py-3 rounded-lg font-medium transition-colors"
//           >
//             ← Anterior
//           </button>
//           <button
//             onClick={handleNextStep}
//             disabled={loading}
//             className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors"
//           >
//             {loading ? "Carregando..." : "Próximo →"}
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// "use client";
// import React, { useState } from "react";
// import { uploadDocument } from "../../../api/enrollmentApi"; // função que envia arquivos para o backend/Firebase

// export default function Step4Documents({ formData, setFormData, onPrevious, onNext }) {
//   const [loading, setLoading] = useState(false);

//   // Manipula seleção de arquivos
//   const handleFileChange = (e, key, index = null) => {
//     const file = e.target.files[0];
//     if (!file) return;

//     if (key === "authorizedPersons" && index !== null) {
//       // Atualiza documento da pessoa autorizada
//       const newAuthorized = [...formData.authorizedPersons];
//       newAuthorized[index].document = { file, url: null };
//       setFormData((prev) => ({ ...prev, authorizedPersons: newAuthorized }));
//     } else {
//       setFormData((prev) => ({
//         ...prev,
//         [key]: { file, url: null },
//       }));
//     }
//   };

//   const uploadAllDocuments = async () => {
//     const newFormData = { ...formData };

//     // 1️⃣ Upload documentos principais
//     const mainDocsKeys = ["birthCertificate", "parentCPF", "addressProof", "schoolHistory", "vaccinationCard"];
//     await Promise.all(
//       mainDocsKeys.map(async (key) => {
//         if (newFormData[key]?.file) {
//           const url = await uploadDocument(newFormData[key].file);
//           newFormData[key].url = url;
//         }
//       })
//     );

//     // 2️⃣ Upload documentos das pessoas autorizadas
//     if (Array.isArray(newFormData.authorizedPersons)) {
//       await Promise.all(
//         newFormData.authorizedPersons.map(async (person, index) => {
//           if (person.document?.file) {
//             const url = await uploadDocument(person.document.file);
//             newFormData.authorizedPersons[index].document.url = url;
//           }
//         })
//       );
//     }

//     setFormData(newFormData);
//     return newFormData;
//   };

//   const handleNextStep = async () => {
//     // Valida documentos obrigatórios
//     if (!formData.birthCertificate || !formData.parentCPF || !formData.addressProof) {
//       alert("⚠️ Certifique-se de enviar todos os documentos obrigatórios antes de continuar.");
//       return;
//     }

//     setLoading(true);
//     try {
//       await uploadAllDocuments();
//       onNext(); // Avança para Step5Review
//     } catch (error) {
//       console.error("Erro ao enviar documentos:", error);
//       alert("Erro ao enviar documentos. Tente novamente.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="fade-in max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-8">
//       <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">📄 Upload de Documentos</h2>

//       <div className="bg-white p-6 rounded-lg shadow-md space-y-6">
//         {/* Documentos do aluno */}
//         {[
//           { label: "Certidão de Nascimento do Aluno", key: "birthCertificate", icon: "📄", required: true },
//           { label: "CPF do Responsável", key: "parentCPF", icon: "🆔", required: true },
//           { label: "Comprovante de Residência", key: "addressProof", icon: "🏠", required: true },
//           { label: "Cartão de Vacinação", key: "vaccinationCard", icon: "💉" },
//         ].map(({ label, key, icon, required }) => (
//           <div key={key} className="border border-gray-200 rounded-lg p-6">
//             <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
//               {required && <span className="text-red-500 mr-2">*</span>}
//               {label}
//             </h3>
//             <div
//               className="file-drop-zone p-8 rounded-lg text-center cursor-pointer"
//               onClick={() => document.getElementById(key).click()}
//             >
//               <div className="text-4xl mb-4">{icon}</div>
//               <p className="text-gray-600 mb-2">Clique aqui ou arraste o arquivo</p>
//               <p className="text-sm text-gray-500">PDF, JPG ou PNG (máx. 5MB)</p>
//               <input
//                 type="file"
//                 id={key}
//                 accept=".pdf,.jpg,.jpeg,.png"
//                 className="hidden"
//                 onChange={(e) => handleFileChange(e, key)}
//               />
//               {formData[key]?.file && <p className="mt-2 text-green-600 font-medium">{formData[key].file.name}</p>}
//             </div>
//           </div>
//         ))}

//         {/* Documentos das pessoas autorizadas */}
//         {formData.authorizedPersons?.map((person, index) => (
//           <div key={index} className="border border-gray-200 rounded-lg p-6">
//             <h3 className="text-lg font-semibold text-gray-800 mb-4">{person.name || "Pessoa Autorizada"}</h3>
//             <div
//               className="file-drop-zone p-8 rounded-lg text-center cursor-pointer"
//               onClick={() => document.getElementById(`authorized-${index}`).click()}
//             >
//               <div className="text-4xl mb-4">🆔</div>
//               <p className="text-gray-600 mb-2">Clique aqui ou arraste o arquivo da pessoa autorizada</p>
//               <input
//                 type="file"
//                 id={`authorized-${index}`}
//                 accept=".pdf,.jpg,.jpeg,.png"
//                 className="hidden"
//                 onChange={(e) => handleFileChange(e, "authorizedPersons", index)}
//               />
//               {person.document?.file && <p className="mt-2 text-green-600 font-medium">{person.document.file.name}</p>}
//             </div>
//           </div>
//         ))}

//         <div className="flex justify-between mt-8">
//           <button
//             onClick={onPrevious}
//             className="bg-gray-500 hover:bg-gray-600 text-white px-8 py-3 rounded-lg font-medium transition-colors"
//           >
//             ← Anterior
//           </button>
//           <button
//             onClick={handleNextStep}
//             disabled={loading}
//             className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors"
//           >
//             {loading ? "Carregando..." : "Próximo →"}
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

"use client";
import React, { useState } from "react";
import { uploadDocument } from "../../../api/enrollmentApi"; // rota backend que envia arquivos para Firebase

export default function Step4Documents({ formData, setFormData, onPrevious, onNext }) {
  const [loading, setLoading] = useState(false);

  // Atualiza seleção de arquivos
  const handleFileChange = (e, key, index = null) => {
    const file = e.target.files[0];
    if (!file) return;

    if (key === "authorizedPersons" && index !== null) {
      const newAuthorized = [...formData.authorizedPersons];
      newAuthorized[index].document = { file, url: null };
      setFormData(prev => ({ ...prev, authorizedPersons: newAuthorized }));
    } else {
      setFormData(prev => ({ ...prev, [key]: { file, url: null } }));
    }
  };

  // Faz upload de todos os arquivos e preenche o URL
  const uploadAllDocuments = async () => {
    const newFormData = { ...formData };

    // 1️⃣ Documentos principais do aluno
    const mainDocsKeys = ["birthCertificate", "parentCPF", "addressProof", "vaccinationCard"];
    for (const key of mainDocsKeys) {
      if (newFormData[key]?.file) {
        const url = await uploadDocument(newFormData[key].file);
        newFormData[key].url = url;
      }
    }

    // 2️⃣ Documentos das pessoas autorizadas
    if (Array.isArray(newFormData.authorizedPersons)) {
      for (let i = 0; i < newFormData.authorizedPersons.length; i++) {
        const person = newFormData.authorizedPersons[i];
        if (person.document?.file) {
          const url = await uploadDocument(person.document.file);
          newFormData.authorizedPersons[i].document.url = url;
        }
      }
    }

    setFormData(newFormData);
    return newFormData;
  };

  const handleNextStep = async () => {
    // Valida documentos obrigatórios
    if (!formData.birthCertificate?.file || !formData.parentCPF?.file || !formData.addressProof?.file) {
      alert("⚠️ Certifique-se de enviar todos os documentos obrigatórios antes de continuar.");
      return;
    }

    setLoading(true);
    try {
      await uploadAllDocuments();
      onNext(); // avança para Step5Review
    } catch (error) {
      console.error("Erro ao enviar documentos:", error);
      alert("Erro ao enviar documentos. Tente novamente.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fade-in max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">📄 Upload de Documentos</h2>

      <div className="bg-white p-6 rounded-lg shadow-md space-y-6">
        {/* Documentos do aluno */}
        {[
          { label: "Certidão de Nascimento do Aluno", key: "birthCertificate", icon: "📄", required: true },
          { label: "CPF do Responsável", key: "parentCPF", icon: "🆔", required: true },
          { label: "Comprovante de Residência", key: "addressProof", icon: "🏠", required: true },
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
                onChange={e => handleFileChange(e, key)}
              />
              {formData[key]?.file && (
                <p className="mt-2 text-green-600 font-medium">{formData[key].file.name}</p>
              )}
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
            onClick={handleNextStep}
            disabled={loading}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors"
          >
            {loading ? "Carregando..." : "Próximo →"}
          </button>
        </div>
      </div>
    </div>
  );
}
