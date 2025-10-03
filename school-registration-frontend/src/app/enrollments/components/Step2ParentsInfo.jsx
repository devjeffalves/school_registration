
// "use client";
// import React from "react";

// export default function Step2ParentsInfo({ formData, handleInputChange, onNext, onPrevious }) {

//   const handleNextStep = () => {
//     // Monta o array de responsáveis
//     const responsible = [];

//     if (formData.parent1Name && formData.parent1Name.trim() !== "") {
//       responsible.push({
//         name: formData.parent1Name,
//         cpf: formData.parent1CPF,
//         phone: formData.parent1Phone,
//         email: formData.parent1Email,
//         relation: formData.parent1Relation,
//         job: formData.parent1Job,
//       });
//     }

//     if (formData.parent2Name && formData.parent2Name.trim() !== "") {
//       responsible.push({
//         name: formData.parent2Name,
//         phone: formData.parent2Phone,
//       });
//     }

//     // Passa os dados atualizados para o próximo passo
//     onNext({ ...formData, responsible });
//   };

//   return (
//     <div id="step2" className="fade-in max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-8">
//       <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
//         👨‍👩‍👧‍👦 Dados dos Responsáveis
//       </h2>

//       <div className="space-y-8">
//         {/* Responsável Principal */}
//         <div className="bg-gray-50 p-6 rounded-lg">
//           <h3 className="text-lg font-semibold text-gray-800 mb-4">Responsável Principal</h3>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-2">Nome Completo *</label>
//               <input
//                 type="text"
//                 value={formData.parent1Name || ""}
//                 onChange={(e) => handleInputChange("parent1Name", e.target.value)}
//                 className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//               />
//             </div>
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-2">CPF *</label>
//               <input
//                 type="text"
//                 placeholder="000.000.000-00"
//                 value={formData.parent1CPF || ""}
//                 onChange={(e) => handleInputChange("parent1CPF", e.target.value)}
//                 className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//               />
//             </div>
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-2">Telefone *</label>
//               <input
//                 type="tel"
//                 placeholder="(11) 99999-9999"
//                 value={formData.parent1Phone || ""}
//                 onChange={(e) => handleInputChange("parent1Phone", e.target.value)}
//                 className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//               />
//             </div>
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
//               <input
//                 type="email"
//                 value={formData.parent1Email || ""}
//                 onChange={(e) => handleInputChange("parent1Email", e.target.value)}
//                 className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//               />
//             </div>
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-2">Parentesco *</label>
//               <select
//                 value={formData.parent1Relation || ""}
//                 onChange={(e) => handleInputChange("parent1Relation", e.target.value)}
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
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-2">Profissão</label>
//               <input
//                 type="text"
//                 value={formData.parent1Job || ""}
//                 onChange={(e) => handleInputChange("parent1Job", e.target.value)}
//                 className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//               />
//             </div>
//           </div>
//         </div>

//         {/* Responsável Secundário */}
//         <div className="bg-gray-50 p-6 rounded-lg">
//           <h3 className="text-lg font-semibold text-gray-800 mb-4">Responsável Secundário (Opcional)</h3>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-2">Nome Completo</label>
//               <input
//                 type="text"
//                 value={formData.parent2Name || ""}
//                 onChange={(e) => handleInputChange("parent2Name", e.target.value)}
//                 className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//               />
//             </div>
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-2">Telefone</label>
//               <input
//                 type="tel"
//                 placeholder="(11) 99999-9999"
//                 value={formData.parent2Phone || ""}
//                 onChange={(e) => handleInputChange("parent2Phone", e.target.value)}
//                 className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//               />
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Botões Navegação */}
//       <div className="flex justify-between mt-8">
//         <button
//           onClick={onPrevious}
//           className="bg-gray-500 hover:bg-gray-600 text-white px-8 py-3 rounded-lg font-medium transition-colors"
//         >
//           ← Anterior
//         </button>
//         <button
//           onClick={handleNextStep}
//           className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors"
//         >
//           Próximo →
//         </button>
//       </div>
//     </div>
//   );
// }


"use client";
import React from "react";

export default function Step2ParentsInfo({ formData, handleInputChange, onNext, onPrevious }) {

  const handleNextStep = () => {
    const responsible = [];

    // Responsável principal (obrigatório)
    if (formData.parent1Name?.trim()) {
      responsible.push({
        name: formData.parent1Name,
        cpf: formData.parent1CPF,
        phone: formData.parent1Phone,
        email: formData.parent1Email,
        relation: formData.parent1Relation,
        job: formData.parent1Job,
      });
    }

    // Responsável secundário (opcional)
    if (formData.parent2Name?.trim()) {
      responsible.push({
        name: formData.parent2Name,
        phone: formData.parent2Phone,
      });
    }

    onNext({ ...formData, responsible });
  };

  return (
    <div id="step2" className="fade-in max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
        👨‍👩‍👧‍👦 Dados dos Responsáveis
      </h2>

      <div className="space-y-8">
        {/* Responsável Principal */}
        <div className="bg-gray-50 p-6 rounded-lg">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Responsável Principal</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Nome Completo *</label>
              <input
                type="text"
                value={formData.parent1Name || ""}
                onChange={(e) => handleInputChange("parent1Name", e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">CPF *</label>
              <input
                type="text"
                placeholder="000.000.000-00"
                value={formData.parent1CPF || ""}
                onChange={(e) => handleInputChange("parent1CPF", e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Telefone *</label>
              <input
                type="tel"
                placeholder="(11) 99999-9999"
                value={formData.parent1Phone || ""}
                onChange={(e) => handleInputChange("parent1Phone", e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
              <input
                type="email"
                value={formData.parent1Email || ""}
                onChange={(e) => handleInputChange("parent1Email", e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Parentesco *</label>
              <select
                value={formData.parent1Relation || ""}
                onChange={(e) => handleInputChange("parent1Relation", e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">Selecione</option>
                <option value="pai">Pai</option>
                <option value="mae">Mãe</option>
                <option value="avo">Avô/Avó</option>
                <option value="tio">Tio/Tia</option>
                <option value="responsavel">Responsável Legal</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Profissão</label>
              <input
                type="text"
                value={formData.parent1Job || ""}
                onChange={(e) => handleInputChange("parent1Job", e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>
        </div>

        {/* Responsável Secundário */}
        <div className="bg-gray-50 p-6 rounded-lg">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Responsável Secundário (Opcional)</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Nome Completo</label>
              <input
                type="text"
                value={formData.parent2Name || ""}
                onChange={(e) => handleInputChange("parent2Name", e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Telefone</label>
              <input
                type="tel"
                placeholder="(11) 99999-9999"
                value={formData.parent2Phone || ""}
                onChange={(e) => handleInputChange("parent2Phone", e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Botões Navegação */}
      <div className="flex justify-between mt-8">
        <button
          onClick={onPrevious}
          className="bg-gray-500 hover:bg-gray-600 text-white px-8 py-3 rounded-lg font-medium transition-colors"
        >
          ← Anterior
        </button>
        <button
          onClick={handleNextStep}
          className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors"
        >
          Próximo →
        </button>
      </div>
    </div>
  );
}
