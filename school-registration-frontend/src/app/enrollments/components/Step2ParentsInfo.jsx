
// // // // "use client";
// // // // import React from "react";


// // // // export default function Step2ParentsInfo({ formData, handleInputChange, onNext, onPrevious }) {

// // // //   const handleNextStep = () => {
// // // //     const parents = [
// // // //       {
// // // //         name: formData.parent1Name,
// // // //         cpf: formData.parent1CPF,
// // // //         phone: formData.parent1Phone,
// // // //         email: formData.parent1Email,
// // // //         relation: formData.parent1Relation,
// // // //         job: formData.parent1Job,
// // // //       },
// // // //       {
// // // //         name: formData.parent2Name,
// // // //         cpf: formData.parent2CPF,
// // // //         phone: formData.parent2Phone,
// // // //         email: formData.parent2Email,
// // // //         relation: formData.parent2Relation,
// // // //         job: formData.parent2Job,
// // // //       },
// // // //     ];


// // // //     // // Responsável principal (obrigatório)
// // // //     // if (formData.parent1Name?.trim()) {
// // // //     //   responsible.push({
// // // //     //     name: formData.parent1Name,
// // // //     //     cpf: formData.parent1CPF,
// // // //     //     phone: formData.parent1Phone,
// // // //     //     email: formData.parent1Email,
// // // //     //     relation: formData.parent1Relation,
// // // //     //     job: formData.parent1Job,
// // // //     //   });
// // // //     // }

// // // //     // // Responsável secundário (opcional)
// // // //     // if (formData.parent2Name?.trim()) {
// // // //     //   responsible.push({
// // // //     //     name: formData.parent2Name,
// // // //     //     cpf: formData.parent2CPF,
// // // //     //     phone: formData.parent2Phone,
// // // //     //     email: formData.parent2Email,
// // // //     //     relation: formData.parent2Relation,
// // // //     //     job: formData.parent2Job,
// // // //     //   });
// // // //     // }

// // // //     onNext({ ...formData, parents });
// // // //   };



// // // //   return (
// // // //     <div id="step2" className="fade-in max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-8">
// // // //       <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
// // // //         👨‍👩‍👧‍👦 Dados dos Responsáveis
// // // //       </h2>

// // // //       <div className="space-y-8">
// // // //         {/* Responsável I */}
// // // //         <div className="bg-gray-50 p-6 rounded-lg">
// // // //           <h3 className="text-lg font-semibold text-gray-800 mb-4">Responsável I</h3>
// // // //           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
// // // //             <div>
// // // //               <label className="block text-sm font-medium text-gray-700 mb-2">Nome Completo *</label>
// // // //               <input
// // // //                 type="text"
// // // //                 value={formData.parent1Name || ""}
// // // //                 onChange={(e) => handleInputChange("parent1Name", e.target.value)}
// // // //                 className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
// // // //               />
// // // //             </div>
// // // //             <div>
// // // //               <label className="block text-sm font-medium text-gray-700 mb-2">CPF *</label>
// // // //               <input
// // // //                 type="text"
// // // //                 placeholder="000.000.000-00"
// // // //                 value={formData.parent1CPF || ""}
// // // //                 onChange={(e) => {
// // // //                   let value = e.target.value.replace(/\D/g, ""); // remove tudo que não for número
// // // //                   if (value.length > 11) value = value.slice(0, 11); // limita a 11 dígitos

// // // //                   // aplica formatação CPF: 000.000.000-00
// // // //                   value = value.replace(/(\d{3})(\d)/, "$1.$2");
// // // //                   value = value.replace(/(\d{3})(\d)/, "$1.$2");
// // // //                   value = value.replace(/(\d{3})(\d{1,2})$/, "$1-$2");

// // // //                   handleInputChange("parent1CPF", value);
// // // //                 }}
// // // //                 className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
// // // //               />
// // // //             </div>
// // // //             <div>
// // // //               <label className="block text-sm font-medium text-gray-700 mb-2">Telefone *</label>
// // // //               <input
// // // //                 type="tel"
// // // //                 placeholder="(11) 99999-9999"
// // // //                 value={formData.parent1Phone || ""}
// // // //                 onChange={(e) => {
// // // //                   let value = e.target.value.replace(/\D/g, ""); // remove tudo que não for número
// // // //                   if (value.length > 11) value = value.slice(0, 11); // limita a 11 dígitos

// // // //                   // Adiciona máscara: (00) 00000-0000
// // // //                   if (value.length > 0) {
// // // //                     value = value.replace(/^(\d{2})(\d)/g, "($1) $2");
// // // //                   }
// // // //                   if (value.length >= 7) {
// // // //                     value = value.replace(/(\d{5})(\d{4})$/, "$1-$2");
// // // //                   }

// // // //                   handleInputChange("parent1Phone", value);
// // // //                 }}
// // // //                 className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
// // // //               />

// // // //             </div>
// // // //             <div>
// // // //               <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
// // // //               <input
// // // //                 type="email"
// // // //                 value={formData.parent1Email || ""}
// // // //                 onChange={(e) => handleInputChange("parent1Email", e.target.value)}
// // // //                 className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
// // // //               />
// // // //             </div>
// // // //             <div>
// // // //               <label className="block text-sm font-medium text-gray-700 mb-2">Parentesco *</label>
// // // //               <select
// // // //                 value={formData.parent1Relation || ""}
// // // //                 onChange={(e) => handleInputChange("parent1Relation", e.target.value)}
// // // //                 className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
// // // //               >
// // // //                 <option value="">Selecione</option>
// // // //                 <option value="pai">Pai</option>
// // // //                 <option value="mae">Mãe</option>
// // // //                 <option value="avo">Avô/Avó</option>
// // // //                 <option value="tio">Tio/Tia</option>
// // // //                 <option value="responsavel">Responsável Legal</option>
// // // //               </select>
// // // //             </div>
// // // //             <div>
// // // //               <label className="block text-sm font-medium text-gray-700 mb-2">Profissão</label>
// // // //               <input
// // // //                 type="text"
// // // //                 value={formData.parent1Job || ""}
// // // //                 onChange={(e) => handleInputChange("parent1Job", e.target.value)}
// // // //                 className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
// // // //               />
// // // //             </div>
// // // //           </div>
// // // //         </div>

// // // //         {/* Responsável II */}
// // // //         <div className="bg-gray-50 p-6 rounded-lg">
// // // //           <h3 className="text-lg font-semibold text-gray-800 mb-4">Responsável II</h3>
// // // //           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
// // // //             <div>
// // // //               <label className="block text-sm font-medium text-gray-700 mb-2">Nome Completo *</label>
// // // //               <input
// // // //                 type="text"
// // // //                 value={formData.parent2Name || ""}
// // // //                 onChange={(e) => handleInputChange("parent2Name", e.target.value)}
// // // //                 className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
// // // //               />
// // // //             </div>
// // // //             <div>
// // // //               <label className="block text-sm font-medium text-gray-700 mb-2">CPF *</label>
// // // //               <input
// // // //                 type="text"
// // // //                 placeholder="000.000.000-00"
// // // //                 value={formData.parent2CPF || ""}
// // // //                 onChange={(e) => {
// // // //                   let value = e.target.value.replace(/\D/g, ""); // remove tudo que não for número
// // // //                   if (value.length > 11) value = value.slice(0, 11); // limita a 11 dígitos

// // // //                   // aplica formatação CPF: 000.000.000-00
// // // //                   value = value.replace(/(\d{3})(\d)/, "$1.$2");
// // // //                   value = value.replace(/(\d{3})(\d)/, "$1.$2");
// // // //                   value = value.replace(/(\d{3})(\d{1,2})$/, "$1-$2");

// // // //                   handleInputChange("parent2CPF", value);
// // // //                 }}
// // // //                 className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
// // // //               />
// // // //             </div>
// // // //             <div>
// // // //               <label className="block text-sm font-medium text-gray-700 mb-2">Telefone *</label>
// // // //               <input
// // // //                 type="tel"
// // // //                 placeholder="(11) 99999-9999"
// // // //                 value={formData.parent2Phone || ""}
// // // //                 onChange={(e) => {
// // // //                   let value = e.target.value.replace(/\D/g, ""); // remove tudo que não for número
// // // //                   if (value.length > 11) value = value.slice(0, 11); // limita a 11 dígitos

// // // //                   // Adiciona máscara: (00) 00000-0000
// // // //                   if (value.length > 0) {
// // // //                     value = value.replace(/^(\d{2})(\d)/g, "($1) $2");
// // // //                   }
// // // //                   if (value.length >= 7) {
// // // //                     value = value.replace(/(\d{5})(\d{4})$/, "$1-$2");
// // // //                   }

// // // //                   handleInputChange("parent2Phone", value);
// // // //                 }}
// // // //                 className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
// // // //               />

// // // //             </div>
// // // //             <div>
// // // //               <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
// // // //               <input
// // // //                 type="email"
// // // //                 value={formData.parent2Email || ""}
// // // //                 onChange={(e) => handleInputChange("parent2Email", e.target.value)}
// // // //                 className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
// // // //               />
// // // //             </div>
// // // //             <div>
// // // //               <label className="block text-sm font-medium text-gray-700 mb-2">Parentesco *</label>
// // // //               <select
// // // //                 value={formData.parent2Relation || ""}
// // // //                 onChange={(e) => handleInputChange("parent2Relation", e.target.value)}
// // // //                 className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
// // // //               >
// // // //                 <option value="">Selecione</option>
// // // //                 <option value="pai">Pai</option>
// // // //                 <option value="mae">Mãe</option>
// // // //                 <option value="avo">Avô/Avó</option>
// // // //                 <option value="tio">Tio/Tia</option>
// // // //                 <option value="responsavel">Responsável Legal</option>
// // // //               </select>
// // // //             </div>
// // // //             <div>
// // // //               <label className="block text-sm font-medium text-gray-700 mb-2">Profissão</label>
// // // //               <input
// // // //                 type="text"
// // // //                 value={formData.parent2Job || ""}
// // // //                 onChange={(e) => handleInputChange("parent2Job", e.target.value)}
// // // //                 className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
// // // //               />
// // // //             </div>
// // // //           </div>
// // // //         </div>
// // // //       </div>

// // // //       {/* Botões Navegação */}
// // // //       <div className="flex justify-between mt-8">
// // // //         <button
// // // //           onClick={onPrevious}
// // // //           className="bg-gray-500 hover:bg-gray-600 text-white px-8 py-3 rounded-lg font-medium transition-colors"
// // // //         >
// // // //           ← Anterior
// // // //         </button>
// // // //         <button
// // // //           onClick={handleNextStep}
// // // //           className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors"
// // // //         >
// // // //           Próximo →
// // // //         </button>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // }

// // // // "use client";
// // // // import React from "react";

// // // // export default function Step2ParentsInfo({ formData, handleParentChange, onNext, onPrevious }) {
// // // //   return (
// // // //     <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-8">
// // // //       <h2 className="text-2xl font-bold text-gray-800 mb-6">👨‍👩‍👧 Informações dos Pais/Responsáveis</h2>

// // // //       {formData.parents.map((parent, index) => (
// // // //         <div key={index} className="bg-gray-50 p-6 rounded-lg mb-6">
// // // //           <h3 className="text-lg font-semibold text-gray-800 mb-4">
// // // //             Responsável {index + 1}
// // // //           </h3>

// // // //           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
// // // //             <div>
// // // //               <label className="block text-sm font-medium text-gray-700 mb-2">Nome Completo *</label>
// // // //               <input
// // // //                 type="text"
// // // //                 value={parent.name}
// // // //                 onChange={e => handleParentChange(index, "name", e.target.value)}
// // // //                 className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
// // // //               />
// // // //             </div>

// // // //             <div>
// // // //               <label className="block text-sm font-medium text-gray-700 mb-2">CPF *</label>
// // // //               <input
// // // //                 type="text"
// // // //                 value={parent.cpf}
// // // //                 onChange={e => {
// // // //                   let value = e.target.value.replace(/\D/g, "").slice(0, 11);
// // // //                   value = value.replace(/(\d{3})(\d)/, "$1.$2")
// // // //                     .replace(/(\d{3})(\d)/, "$1.$2")
// // // //                     .replace(/(\d{3})(\d{1,2})$/, "$1-$2");
// // // //                   handleParentChange(index, "cpf", value);
// // // //                 }}
// // // //                 className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
// // // //               />
// // // //             </div>

// // // //             <div>
// // // //               <label className="block text-sm font-medium text-gray-700 mb-2">Telefone *</label>
// // // //               <input
// // // //                 type="tel"
// // // //                 value={parent.phone}
// // // //                 onChange={e => {
// // // //                   let value = e.target.value.replace(/\D/g, "").slice(0, 11);
// // // //                   if (value.length > 0) value = value.replace(/^(\d{2})(\d)/g, "($1) $2");
// // // //                   if (value.length >= 7) value = value.replace(/(\d{5})(\d{4})$/, "$1-$2");
// // // //                   handleParentChange(index, "phone", value);
// // // //                 }}
// // // //                 className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
// // // //               />
// // // //             </div>

// // // //             <div>
// // // //               <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
// // // //               <input
// // // //                 type="email"
// // // //                 value={parent.email}
// // // //                 onChange={e => handleParentChange(index, "email", e.target.value)}
// // // //                 className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
// // // //               />
// // // //             </div>

// // // //             <div>
// // // //               <label className="block text-sm font-medium text-gray-700 mb-2">Parentesco *</label>
// // // //               <select
// // // //                 value={parent.relation}
// // // //                 onChange={e => handleParentChange(index, "relation", e.target.value)}
// // // //                 className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
// // // //               >
// // // //                 <option value="">Selecione</option>
// // // //                 <option value="pai">Pai</option>
// // // //                 <option value="mae">Mãe</option>
// // // //                 <option value="avo">Avô/Avó</option>
// // // //                 <option value="tio">Tio/Tia</option>
// // // //                 <option value="responsavel">Responsável Legal</option>
// // // //               </select>
// // // //             </div>

// // // //             <div>
// // // //               <label className="block text-sm font-medium text-gray-700 mb-2">Profissão</label>
// // // //               <input
// // // //                 type="text"
// // // //                 value={parent.job}
// // // //                 onChange={e => handleParentChange(index, "job", e.target.value)}
// // // //                 className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
// // // //               />
// // // //             </div>
// // // //           </div>
// // // //         </div>
// // // //       ))}

// // // //       <div className="flex justify-between mt-8">
// // // //         <button
// // // //           type="button"
// // // //           onClick={onPrevious}
// // // //           className="bg-gray-300 hover:bg-gray-400 text-gray-800 px-6 py-3 rounded-lg font-medium"
// // // //         >
// // // //           ← Anterior
// // // //         </button>
// // // //         <button
// // // //           type="button"
// // // //           onClick={onNext}
// // // //           className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium"
// // // //         >
// // // //           Próximo →
// // // //         </button>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // }

// // // // "use client";
// // // // import React from "react";

// // // // export default function Step2ParentsInfo({ formData, handleParentChange, onNext, onPrevious }) {
// // // //   // Certifica que temos pelo menos dois responsáveis
// // // //   const responsible = [
// // // //   {
// // // //     name: formData.parent1Name,
// // // //     cpf: formData.parent1CPF,
// // // //     phone: formData.parent1Phone,
// // // //     email: formData.parent1Email,
// // // //     relation: formData.parent1Relation,
// // // //     job: formData.parent1Job,
// // // //   },
// // // //   {
// // // //     name: formData.parent2Name,
// // // //     cpf: formData.parent2CPF,
// // // //     phone: formData.parent2Phone,
// // // //     email: formData.parent2Email,
// // // //     relation: formData.parent2Relation,
// // // //     job: formData.parent2Job,
// // // //   },
// // // // ].filter(r => r.name && r.name.trim() !== "");


// // // //   const formatCPF = (value) => {
// // // //     let v = value.replace(/\D/g, "");
// // // //     if (v.length > 11) v = v.slice(0, 11);
// // // //     v = v.replace(/(\d{3})(\d)/, "$1.$2");
// // // //     v = v.replace(/(\d{3})(\d)/, "$1.$2");
// // // //     v = v.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
// // // //     return v;
// // // //   };

// // // //   const formatPhone = (value) => {
// // // //     let v = value.replace(/\D/g, "");
// // // //     if (v.length > 11) v = v.slice(0, 11);
// // // //     if (v.length > 0) v = v.replace(/^(\d{2})(\d)/g, "($1) $2");
// // // //     if (v.length >= 7) v = v.replace(/(\d{5})(\d{4})$/, "$1-$2");
// // // //     return v;
// // // //   };

// // // //   return (
// // // //     <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-8">
// // // //       <h2 className="text-2xl font-bold text-gray-800 mb-6">👪 Informações dos Pais/Responsáveis</h2>

// // // //       {parents.map((parent, index) => (
// // // //         <div key={index} className="bg-gray-50 p-6 rounded-lg mb-6">
// // // //           <h3 className="text-lg font-semibold text-gray-800 mb-4">
// // // //             Responsável {index + 1}
// // // //           </h3>

// // // //           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
// // // //             {/* Nome */}
// // // //             <div>
// // // //               <label className="block text-sm font-medium text-gray-700 mb-2">
// // // //                 Nome Completo *
// // // //               </label>
// // // //               <input
// // // //                 type="text"
// // // //                 value={parent.name || ""}
// // // //                 onChange={(e) => handleParentChange(index, "name", e.target.value)}
// // // //                 className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
// // // //               />
// // // //             </div>

// // // //             {/* CPF */}
// // // //             <div>
// // // //               <label className="block text-sm font-medium text-gray-700 mb-2">CPF *</label>
// // // //               <input
// // // //                 type="text"
// // // //                 placeholder="000.000.000-00"
// // // //                 value={parent.cpf || ""}
// // // //                 onChange={(e) =>
// // // //                   handleParentChange(index, "cpf", formatCPF(e.target.value))
// // // //                 }
// // // //                 className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
// // // //               />
// // // //             </div>

// // // //             {/* Telefone */}
// // // //             <div>
// // // //               <label className="block text-sm font-medium text-gray-700 mb-2">Telefone *</label>
// // // //               <input
// // // //                 type="tel"
// // // //                 placeholder="(11) 99999-9999"
// // // //                 value={parent.phone || ""}
// // // //                 onChange={(e) =>
// // // //                   handleParentChange(index, "phone", formatPhone(e.target.value))
// // // //                 }
// // // //                 className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
// // // //               />
// // // //             </div>

// // // //             {/* Email */}
// // // //             <div>
// // // //               <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
// // // //               <input
// // // //                 type="email"
// // // //                 value={parent.email || ""}
// // // //                 onChange={(e) => handleParentChange(index, "email", e.target.value)}
// // // //                 className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
// // // //               />
// // // //             </div>

// // // //             {/* Parentesco */}
// // // //             <div>
// // // //               <label className="block text-sm font-medium text-gray-700 mb-2">Parentesco *</label>
// // // //               <select
// // // //                 value={parent.relation || ""}
// // // //                 onChange={(e) => handleParentChange(index, "relation", e.target.value)}
// // // //                 className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
// // // //               >
// // // //                 <option value="">Selecione</option>
// // // //                 <option value="pai">Pai</option>
// // // //                 <option value="mae">Mãe</option>
// // // //                 <option value="avo">Avô/Avó</option>
// // // //                 <option value="tio">Tio/Tia</option>
// // // //                 <option value="responsavel">Responsável Legal</option>
// // // //               </select>
// // // //             </div>

// // // //             {/* Profissão */}
// // // //             <div>
// // // //               <label className="block text-sm font-medium text-gray-700 mb-2">Profissão</label>
// // // //               <input
// // // //                 type="text"
// // // //                 value={parent.job || ""}
// // // //                 onChange={(e) => handleParentChange(index, "job", e.target.value)}
// // // //                 className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
// // // //               />
// // // //             </div>
// // // //           </div>
// // // //         </div>
// // // //       ))}

// // // //       {/* Botões de navegação */}
// // // //       <div className="flex justify-between mt-8">
// // // //         <button
// // // //           type="button"
// // // //           onClick={onPrevious}
// // // //           className="bg-gray-400 hover:bg-gray-500 text-white px-6 py-3 rounded-lg font-medium transition-colors"
// // // //         >
// // // //           ← Anterior
// // // //         </button>
// // // //         <button
// // // //           type="button"
// // // //           onClick={onNext}
// // // //           className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
// // // //         >
// // // //           Próximo →
// // // //         </button>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // }

// // // // "use client";
// // // // import React, { useState, useEffect } from "react";

// // // // export default function Step2ParentsInfo({ formData, setFormData, onNext, onPrevious }) {
// // // //   // Estado local para manter lista de responsáveis (2 por padrão)
// // // //   const [parents, setParents] = useState([
// // // //     {
// // // //       name: formData.parent1Name || "",
// // // //       cpf: formData.parent1CPF || "",
// // // //       phone: formData.parent1Phone || "",
// // // //       email: formData.parent1Email || "",
// // // //       relation: formData.parent1Relation || "",
// // // //       job: formData.parent1Job || "",
// // // //     },
// // // //     {
// // // //       name: formData.parent2Name || "",
// // // //       cpf: formData.parent2CPF || "",
// // // //       phone: formData.parent2Phone || "",
// // // //       email: formData.parent2Email || "",
// // // //       relation: formData.parent2Relation || "",
// // // //       job: formData.parent2Job || "",
// // // //     },
// // // //   ]);

// // // //   // 📝 Atualiza o estado local e o formData ao digitar
// // // //   const handleParentChange = (index, field, value) => {
// // // //     const updated = [...parents];
// // // //     updated[index][field] = value;
// // // //     setParents(updated);

// // // //     // também atualiza no formData (importante para o envio final)
// // // //     setFormData((prev) => ({
// // // //       ...prev,
// // // //       responsible: updated.filter((p) => p.name && p.name.trim() !== ""),
// // // //     }));
// // // //   };

// // // //   // 🧼 Formatação de CPF
// // // //   const formatCPF = (value) => {
// // // //     let v = value.replace(/\D/g, "");
// // // //     if (v.length > 11) v = v.slice(0, 11);
// // // //     v = v.replace(/(\d{3})(\d)/, "$1.$2");
// // // //     v = v.replace(/(\d{3})(\d)/, "$1.$2");
// // // //     v = v.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
// // // //     return v;
// // // //   };

// // // //   // 🧼 Formatação de telefone
// // // //   const formatPhone = (value) => {
// // // //     let v = value.replace(/\D/g, "");
// // // //     if (v.length > 11) v = v.slice(0, 11);
// // // //     if (v.length > 0) v = v.replace(/^(\d{2})(\d)/g, "($1) $2");
// // // //     if (v.length >= 7) v = v.replace(/(\d{5})(\d{4})$/, "$1-$2");
// // // //     return v;
// // // //   };

// // // //   return (
// // // //     <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-8">
// // // //       <h2 className="text-2xl font-bold text-gray-800 mb-6">
// // // //         👪 Informações dos Pais/Responsáveis
// // // //       </h2>

// // // //       {parents.map((parent, index) => (
// // // //         <div key={index} className="bg-gray-50 p-6 rounded-lg mb-6">
// // // //           <h3 className="text-lg font-semibold text-gray-800 mb-4">
// // // //             Responsável {index + 1}
// // // //           </h3>

// // // //           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
// // // //             {/* Nome */}
// // // //             <div>
// // // //               <label className="block text-sm font-medium text-gray-700 mb-2">
// // // //                 Nome Completo *
// // // //               </label>
// // // //               <input
// // // //                 type="text"
// // // //                 value={parent.name}
// // // //                 onChange={(e) => handleParentChange(index, "name", e.target.value)}
// // // //                 className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
// // // //               />
// // // //             </div>

// // // //             {/* CPF */}
// // // //             <div>
// // // //               <label className="block text-sm font-medium text-gray-700 mb-2">
// // // //                 CPF *
// // // //               </label>
// // // //               <input
// // // //                 type="text"
// // // //                 placeholder="000.000.000-00"
// // // //                 value={parent.cpf}
// // // //                 onChange={(e) => handleParentChange(index, "cpf", formatCPF(e.target.value))}
// // // //                 className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
// // // //               />
// // // //             </div>

// // // //             {/* Telefone */}
// // // //             <div>
// // // //               <label className="block text-sm font-medium text-gray-700 mb-2">
// // // //                 Telefone *
// // // //               </label>
// // // //               <input
// // // //                 type="tel"
// // // //                 placeholder="(11) 99999-9999"
// // // //                 value={parent.phone}
// // // //                 onChange={(e) => handleParentChange(index, "phone", formatPhone(e.target.value))}
// // // //                 className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
// // // //               />
// // // //             </div>

// // // //             {/* Email */}
// // // //             <div>
// // // //               <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
// // // //               <input
// // // //                 type="email"
// // // //                 value={parent.email}
// // // //                 onChange={(e) => handleParentChange(index, "email", e.target.value)}
// // // //                 className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
// // // //               />
// // // //             </div>

// // // //             {/* Parentesco */}
// // // //             <div>
// // // //               <label className="block text-sm font-medium text-gray-700 mb-2">Parentesco *</label>
// // // //               <select
// // // //                 value={parent.relation}
// // // //                 onChange={(e) => handleParentChange(index, "relation", e.target.value)}
// // // //                 className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
// // // //               >
// // // //                 <option value="">Selecione</option>
// // // //                 <option value="pai">Pai</option>
// // // //                 <option value="mae">Mãe</option>
// // // //                 <option value="avo">Avô/Avó</option>
// // // //                 <option value="tio">Tio/Tia</option>
// // // //                 <option value="responsavel">Responsável Legal</option>
// // // //               </select>
// // // //             </div>

// // // //             {/* Profissão */}
// // // //             <div>
// // // //               <label className="block text-sm font-medium text-gray-700 mb-2">Profissão</label>
// // // //               <input
// // // //                 type="text"
// // // //                 value={parent.job}
// // // //                 onChange={(e) => handleParentChange(index, "job", e.target.value)}
// // // //                 className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
// // // //               />
// // // //             </div>
// // // //           </div>
// // // //         </div>
// // // //       ))}

// // // //       {/* Botões de navegação */}
// // // //       <div className="flex justify-between mt-8">
// // // //         <button
// // // //           type="button"
// // // //           onClick={onPrevious}
// // // //           className="bg-gray-400 hover:bg-gray-500 text-white px-6 py-3 rounded-lg font-medium transition-colors"
// // // //         >
// // // //           ← Anterior
// // // //         </button>
// // // //         <button
// // // //           type="button"
// // // //           onClick={onNext}
// // // //           className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
// // // //         >
// // // //           Próximo →
// // // //         </button>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // }

// "use client";
// import React, { useState, useEffect } from "react";

// export default function Step2ParentsInfo({ formData, handleParentChange, onNext, onPrevious }) {
//   // Estado local apenas para exibição dos inputs
//   const [parents, setParents] = useState([
//     { name: "", cpf: "", phone: "", email: "", relation: "", job: "" },
//     { name: "", cpf: "", phone: "", email: "", relation: "", job: "" },
//   ]);

//   useEffect(() => {
//     if (formData) {
//       setParents([
//         {
//           name: formData.parent1Name || "",
//           cpf: formData.parent1CPF || "",
//           phone: formData.parent1Phone || "",
//           email: formData.parent1Email || "",
//           relation: formData.parent1Relation || "",
//           job: formData.parent1Job || "",
//         },
//         {
//           name: formData.parent2Name || "",
//           cpf: formData.parent2CPF || "",
//           phone: formData.parent2Phone || "",
//           email: formData.parent2Email || "",
//           relation: formData.parent2Relation || "",
//           job: formData.parent2Job || "",
//         },
//       ]);
//     }
//   }, [formData]);


//   const formatCPF = (value) => {
//     let v = value.replace(/\D/g, "");
//     if (v.length > 11) v = v.slice(0, 11);
//     v = v.replace(/(\d{3})(\d)/, "$1.$2");
//     v = v.replace(/(\d{3})(\d)/, "$1.$2");
//     v = v.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
//     return v;
//   };

//   const formatPhone = (value) => {
//     let v = value.replace(/\D/g, "");
//     if (v.length > 11) v = v.slice(0, 11);
//     if (v.length > 0) v = v.replace(/^(\d{2})(\d)/g, "($1) $2");
//     if (v.length >= 7) v = v.replace(/(\d{5})(\d{4})$/, "$1-$2");
//     return v;
//   };

//   // Atualiza tanto o estado local quanto o formData via handleParentChange do pai
//   const handleChange = (index, field, value) => {
//     const updated = [...parents];
//     updated[index][field] = value;
//     setParents(updated);

//     // Atualiza o estado no pai
//     if (handleParentChange) {
//       handleParentChange(index, field, value);
//     }
//   };

//   return (
//     <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-8">
//       <h2 className="text-2xl font-bold text-gray-800 mb-6">
//         👪 Informações dos Pais/Responsáveis
//       </h2>

//       {parents.map((parent, index) => (
//         <div key={index} className="bg-gray-50 p-6 rounded-lg mb-6">
//           <h3 className="text-lg font-semibold text-gray-800 mb-4">
//             Responsável {index + 1}
//           </h3>

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             {/* Nome */}
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-2">
//                 Nome Completo *
//               </label>
//               <input
//                 type="text"
//                 value={parent.name}
//                 onChange={(e) => handleChange(index, "name", e.target.value)}
//                 className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//               />
//             </div>

//             {/* CPF */}
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-2">
//                 CPF *
//               </label>
//               <input
//                 type="text"
//                 placeholder="000.000.000-00"
//                 value={parent.cpf || ""}     // <-- garante que o valor inicial é string vazia
//                 onChange={(e) => handleParentChange(index, "cpf", e.target.value)}
//                 className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
//               />

//             </div>

//             {/* Telefone */}
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-2">
//                 Telefone *
//               </label>
//               <input
//                 type="tel"
//                 placeholder="(11) 99999-9999"
//                 value={parent.phone}
//                 onChange={(e) => handleChange(index, "phone", formatPhone(e.target.value))}
//                 className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//               />
//             </div>

//             {/* Email */}
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
//               <input
//                 type="email"
//                 value={parent.email}
//                 onChange={(e) => handleChange(index, "email", e.target.value)}
//                 className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//               />
//             </div>

//             {/* Parentesco */}
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-2">Parentesco *</label>
//               <select
//                 value={parent.relation}
//                 onChange={(e) => handleChange(index, "relation", e.target.value)}
//                 className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//               >
//                 <option value="">Selecione</option>
//                 <option value="pai">Pai</option>
//                 <option value="mae">Mãe</option>
//                 <option value="avo">Avô/Avó</option>
//                 <option value="tio">Tio/Tia</option>
//                 <option value="responsavel">Responsável Legal</option>
//               </select>
//             </div>

//             {/* Profissão */}
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-2">Profissão</label>
//               <input
//                 type="text"
//                 value={parent.job}
//                 onChange={(e) => handleChange(index, "job", e.target.value)}
//                 className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//               />
//             </div>
//           </div>
//         </div>
//       ))}

//       {/* Botões de navegação */}
//       <div className="flex justify-between mt-8">
//         <button
//           type="button"
//           onClick={onPrevious}
//           className="bg-gray-400 hover:bg-gray-500 text-white px-6 py-3 rounded-lg font-medium transition-colors"
//         >
//           ← Anterior
//         </button>
//         <button
//           type="button"
//           onClick={onNext}
//           className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
//         >
//           Próximo →
//         </button>
//       </div>
//     </div>
//   );
// }

// "use client";
// import React, { useState, useEffect } from "react";

// export default function Step2ParentsInfo({
//   formData,
//   handleParentChange,
//   onNext,
//   onPrevious,
// }) {
//   // Estado local para os responsáveis
//   const [parents, setParents] = useState([
//     { name: "", cpf: "", phone: "", email: "", relationship: "", job: "" },
//     { name: "", cpf: "", phone: "", email: "", relationship: "", job: "" },
//   ]);

//   // Atualiza o estado inicial com base no formData vindo do componente pai
//   useEffect(() => {
//     if (formData) {
//       setParents([
//         {
//           name: formData.parent1Name || "",
//           cpf: formData.parent1CPF || "",
//           phone: formData.parent1Phone || "",
//           email: formData.parent1Email || "",
//           relationship: formData.parent1Relation || "",
//           job: formData.parent1Job || "",
//         },
//         {
//           name: formData.parent2Name || "",
//           cpf: formData.parent2CPF || "",
//           phone: formData.parent2Phone || "",
//           email: formData.parent2Email || "",
//           relationship: formData.parent2Relation || "",
//           job: formData.parent2Job || "",
//         },
//       ]);
//     }
//   }, [formData]);

//   // Formata CPF
//   const formatCPF = (value) => {
//     let v = value.replace(/\D/g, "");
//     if (v.length > 11) v = v.slice(0, 11);
//     v = v.replace(/(\d{3})(\d)/, "$1.$2");
//     v = v.replace(/(\d{3})(\d)/, "$1.$2");
//     v = v.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
//     return v;
//   };

//   // Formata telefone
//   const formatPhone = (value) => {
//     let v = value.replace(/\D/g, "");
//     if (v.length > 11) v = v.slice(0, 11);
//     if (v.length > 0) v = v.replace(/^(\d{2})(\d)/g, "($1) $2");
//     if (v.length >= 7) v = v.replace(/(\d{5})(\d{4})$/, "$1-$2");
//     return v;
//   };

//   // Atualiza o estado local e o formData global
//   const handleChange = (index, field, value) => {
//     const updated = [...parents];
//     updated[index][field] = value;
//     setParents(updated);

//     // Atualiza o estado global via prop
//     if (handleParentChange) {
//       handleParentChange(index, field, value);
//     }
//   };

//   return (
//     <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-8">
//       <h2 className="text-2xl font-bold text-gray-800 mb-6">
//         👪 Informações dos Pais/Responsáveis
//       </h2>

//       {parents.map((parent, index) => (
//         <div key={index} className="bg-gray-50 p-6 rounded-lg mb-6">
//           <h3 className="text-lg font-semibold text-gray-800 mb-4">
//             Responsável {index + 1}
//           </h3>

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             {/* Nome */}
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-2">
//                 Nome Completo *
//               </label>
//               <input
//                 type="text"
//                 value={parent.name}
//                 onChange={(e) => handleChange(index, "name", e.target.value)}
//                 className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//               />
//             </div>

//             {/* CPF */}
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-2">
//                 CPF *
//               </label>
//               <input
//                 type="text"
//                 placeholder="000.000.000-00"
//                 value={parent.cpf}
//                 onChange={(e) =>
//                   handleChange(index, "cpf", formatCPF(e.target.value))
//                 }
//                 className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//               />
//             </div>

//             {/* Telefone */}
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-2">
//                 Telefone *
//               </label>
//               <input
//                 type="tel"
//                 placeholder="(11) 99999-9999"
//                 value={parent.phone}
//                 onChange={(e) =>
//                   handleChange(index, "phone", formatPhone(e.target.value))
//                 }
//                 className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//               />
//             </div>

//             {/* Email */}
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-2">
//                 Email
//               </label>
//               <input
//                 type="email"
//                 value={parent.email}
//                 onChange={(e) =>
//                   handleChange(index, "email", e.target.value)
//                 }
//                 className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//               />
//             </div>

//             {/* Parentesco */}
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-2">
//                 Parentesco *
//               </label>
//               <select
//                 value={parent.relationship}
//                 onChange={(e) =>
//                   handleChange(index, "relationship", e.target.value)
//                 }
//                 className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//               >
//                 <option value="">Selecione</option>
//                 <option value="pai">Pai</option>
//                 <option value="mae">Mãe</option>
//                 <option value="avo">Avô/Avó</option>
//                 <option value="tio/tia">Tio/Tia</option>
//                 <option value="responsavel">Responsável Legal</option>
//               </select>
//             </div>

//             {/* Profissão */}
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-2">
//                 Profissão
//               </label>
//               <input
//                 type="text"
//                 value={parent.job}
//                 onChange={(e) => handleChange(index, "job", e.target.value)}
//                 className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//               />
//             </div>
//           </div>
//         </div>
//       ))}

//       {/* Botões de navegação */}
//       <div className="flex justify-between mt-8">
//         <button
//           type="button"
//           onClick={onPrevious}
//           className="bg-gray-400 hover:bg-gray-500 text-white px-6 py-3 rounded-lg font-medium transition-colors"
//         >
//           ← Anterior
//         </button>
//         <button
//           type="button"
//           onClick={onNext}
//           className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
//         >
//           Próximo →
//         </button>
//       </div>
//     </div>
//   );
// }

"use client";
import React, { useEffect } from "react";

export default function Step2ParentsInfo({
  formData,
  setFormData, // agora usamos setFormData diretamente
  onNext,
  onPrevious,
}) {
  // Inicializa os responsáveis caso ainda não existam
  const responsibles = formData.responsibles || [
    { name: "", cpf: "", phone: "", email: "", relationship: "", job: "" },
    { name: "", cpf: "", phone: "", email: "", relationship: "", job: "" },
  ];

  // Formata CPF
  const formatCPF = (value) => {
    let v = value.replace(/\D/g, "");
    if (v.length > 11) v = v.slice(0, 11);
    v = v.replace(/(\d{3})(\d)/, "$1.$2");
    v = v.replace(/(\d{3})(\d)/, "$1.$2");
    v = v.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
    return v;
  };

  // Formata telefone
  const formatPhone = (value) => {
    let v = value.replace(/\D/g, "");
    if (v.length > 11) v = v.slice(0, 11);
    if (v.length > 0) v = v.replace(/^(\d{2})(\d)/g, "($1) $2");
    if (v.length >= 7) v = v.replace(/(\d{5})(\d{4})$/, "$1-$2");
    return v;
  };

  // Atualiza o estado global diretamente
  const handleParentChange = (index, field, value) => {
    const updated = [...responsibles];
    updated[index][field] = value;
    setFormData({ ...formData, responsibles: updated });
  };

  return (
    <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">
        👪 Informações dos Pais/Responsáveis
      </h2>

      {responsibles.map((responsible, index) => (
        <div key={index} className="bg-gray-50 p-6 rounded-lg mb-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">
            Responsável {index + 1}
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Nome */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Nome Completo *
              </label>
              <input
                type="text"
                value={responsible.name}
                onChange={(e) => handleParentChange(index, "name", e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* CPF */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                CPF *
              </label>
              <input
                type="text"
                placeholder="000.000.000-00"
                value={responsible.cpf}
                onChange={(e) =>
                  handleParentChange(index, "cpf", formatCPF(e.target.value))
                }
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Telefone */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Telefone *
              </label>
              <input
                type="tel"
                placeholder="(11) 99999-9999"
                value={responsible.phone}
                onChange={(e) =>
                  handleParentChange(index, "phone", formatPhone(e.target.value))
                }
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                value={responsible.email}
                onChange={(e) => handleParentChange(index, "email", e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Parentesco */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Parentesco *
              </label>
              <select
                value={responsible.relationship}
                onChange={(e) =>
                  handleParentChange(index, "relationship", e.target.value)
                }
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">Selecione</option>
                <option value="pai">Pai</option>
                <option value="mae">Mãe</option>
                <option value="avo">Avô/Avó</option>
                <option value="tio/tia">Tio/Tia</option>
                <option value="responsavel">Responsável Legal</option>
              </select>
            </div>

            {/* Profissão */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Profissão
              </label>
              <input
                type="text"
                value={responsible.job}
                onChange={(e) => handleParentChange(index, "job", e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>
        </div>
      ))}

      {/* Botões de navegação */}
      <div className="flex justify-between mt-8">
        <button
          type="button"
          onClick={onPrevious}
          className="bg-gray-400 hover:bg-gray-500 text-white px-6 py-3 rounded-lg font-medium transition-colors"
        >
          ← Anterior
        </button>
        <button
          type="button"
          onClick={onNext}
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
        >
          Próximo →
        </button>
      </div>
    </div>
  );
}

