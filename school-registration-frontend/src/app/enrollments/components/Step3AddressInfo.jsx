



// "use client";
// import React from "react";

// export default function Step3AddressInfo({ formData, handleInputChange, onNext, onPrevious }) {
//   return (
//     <div id="step3" className="fade-in max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-8">
//       <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
//         🏠 Endereço Residencial
//       </h2>

//       {/* Container */}
//       <div className="bg-gray-50 p-6 rounded-lg">
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           {/* CEP */}
//           <div className="md:col-span-2">
//             <label className="block text-sm font-medium text-gray-700 mb-2">CEP *</label>
//             <input
//               type="text"
//               value={formData.zipCode || ""}
//               onChange={(e) => handleInputChange("zipCode", e.target.value)}
//               placeholder="00000-000"
//               className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//               required
//             />
//           </div>

//           {/* Rua / Endereço */}
//           <div className="md:col-span-2">
//             <label className="block text-sm font-medium text-gray-700 mb-2">Endereço *</label>
//             <input
//               type="text"
//               value={formData.street || ""}
//               onChange={(e) => handleInputChange("street", e.target.value)}
//               className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//               required
//             />
//           </div>

//           {/* Número */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-2">Número *</label>
//             <input
//               type="text"
//               value={formData.number || ""}
//               onChange={(e) => handleInputChange("number", e.target.value)}
//               className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//               required
//             />
//           </div>

//           {/* Complemento */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-2">Complemento</label>
//             <input
//               type="text"
//               value={formData.complement || ""}
//               onChange={(e) => handleInputChange("complement", e.target.value)}
//               placeholder="Apto, Bloco, etc."
//               className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//             />
//           </div>

//           {/* Bairro */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-2">Bairro *</label>
//             <input
//               type="text"
//               value={formData.neighborhood || ""}
//               onChange={(e) => handleInputChange("neighborhood", e.target.value)}
//               className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//               required
//             />
//           </div>

//           {/* Cidade */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-2">Cidade *</label>
//             <input
//               type="text"
//               value={formData.city || ""}
//               onChange={(e) => handleInputChange("city", e.target.value)}
//               className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//               required
//             />
//           </div>

//           {/* Estado */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-2">Estado *</label>
//             <select
//               value={formData.state || ""}
//               onChange={(e) => handleInputChange("state", e.target.value)}
//               className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//               required
//             >
//               <option value="">Selecione</option>
//               <option value="SP">São Paulo</option>
//               <option value="RJ">Rio de Janeiro</option>
//               <option value="MG">Minas Gerais</option>
//               <option value="RS">Rio Grande do Sul</option>
//               <option value="PR">Paraná</option>
//               <option value="SC">Santa Catarina</option>
//               <option value="BA">Bahia</option>
//               <option value="GO">Goiás</option>
//               <option value="PE">Pernambuco</option>
//               <option value="CE">Ceará</option>
//             </select>
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
//             onClick={onNext}
//             className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors"
//           >
//             Próximo →
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }


// "use client";
// import React from "react";

// export default function Step3AddressInfo({ formData, handleInputChange, onNext, onPrevious }) {

//   const handleNextStep = () => {
//     const address = {
//       street: formData.street,
//       number: formData.number,
//       complement: formData.complement,
//       neighborhood: formData.neighborhood,
//       city: formData.city,
//       state: formData.state,
//       zipCode: formData.zipCode,
//     };

//     // Passa os dados completos para o backend
//     onNext({ ...formData, address });
//   };

//   return (
//     <div id="step3" className="fade-in max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-8">
//       <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
//         🏠 Endereço Residencial
//       </h2>

//       <div className="bg-gray-50 p-6 rounded-lg">
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

//           {/* CEP */}
//           <div className="md:col-span-2">
//             <label className="block text-sm font-medium text-gray-700 mb-2">CEP *</label>
//             <input
//               type="text"
//               value={formData.zipCode || ""}
//               onChange={(e) => handleInputChange("zipCode", e.target.value)}
//               placeholder="00000-000"
//               className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//               required
//             />
//           </div>

//           {/* Rua / Endereço */}
//           <div className="md:col-span-2">
//             <label className="block text-sm font-medium text-gray-700 mb-2">Endereço *</label>
//             <input
//               type="text"
//               value={formData.street || ""}
//               onChange={(e) => handleInputChange("street", e.target.value)}
//               className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//               required
//             />
//           </div>

//           {/* Número */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-2">Número *</label>
//             <input
//               type="text"
//               value={formData.number || ""}
//               onChange={(e) => handleInputChange("number", e.target.value)}
//               className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//               required
//             />
//           </div>

//           {/* Complemento */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-2">Complemento</label>
//             <input
//               type="text"
//               value={formData.complement || ""}
//               onChange={(e) => handleInputChange("complement", e.target.value)}
//               placeholder="Apto, Bloco, etc."
//               className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//             />
//           </div>

//           {/* Bairro */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-2">Bairro *</label>
//             <input
//               type="text"
//               value={formData.neighborhood || ""}
//               onChange={(e) => handleInputChange("neighborhood", e.target.value)}
//               className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//               required
//             />
//           </div>

//           {/* Cidade */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-2">Cidade *</label>
//             <input
//               type="text"
//               value={formData.city || ""}
//               onChange={(e) => handleInputChange("city", e.target.value)}
//               className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//               required
//             />
//           </div>

//           {/* Estado */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-2">Estado *</label>
//             <select
//               value={formData.state || ""}
//               onChange={(e) => handleInputChange("state", e.target.value)}
//               className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//               required
//             >
//               <option value="">Selecione</option>
//               <option value="SP">São Paulo</option>
//               <option value="RJ">Rio de Janeiro</option>
//               <option value="MG">Minas Gerais</option>
//               <option value="RS">Rio Grande do Sul</option>
//               <option value="PR">Paraná</option>
//               <option value="SC">Santa Catarina</option>
//               <option value="BA">Bahia</option>
//               <option value="GO">Goiás</option>
//               <option value="PE">Pernambuco</option>
//               <option value="CE">Ceará</option>
//             </select>
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
//             onClick={onNext}
//             className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors"
//           >
//             Próximo →
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }


"use client";
import React from "react";

export default function Step3AddressInfo({ formData, handleInputChange, onNext, onPrevious }) {

  const handleNextStep = () => {
    const address = {
      street: formData.street,
      number: formData.number,
      complement: formData.complement,
      neighborhood: formData.neighborhood,
      city: formData.city,
      state: formData.state,
      zipCode: formData.zipCode,
    };

    onNext({ ...formData, address });
  };

  return (
    <div id="step3" className="fade-in max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
        🏠 Endereço Residencial
      </h2>

      <div className="bg-gray-50 p-6 rounded-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* CEP */}
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-2">CEP *</label>
            <input
              type="text"
              value={formData.zipCode || ""}
              onChange={(e) => handleInputChange("zipCode", e.target.value)}
              placeholder="00000-000"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            />
          </div>

          {/* Rua / Endereço */}
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-2">Endereço *</label>
            <input
              type="text"
              value={formData.street || ""}
              onChange={(e) => handleInputChange("street", e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            />
          </div>

          {/* Número */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Número *</label>
            <input
              type="text"
              value={formData.number || ""}
              onChange={(e) => handleInputChange("number", e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            />
          </div>

          {/* Complemento */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Complemento</label>
            <input
              type="text"
              value={formData.complement || ""}
              onChange={(e) => handleInputChange("complement", e.target.value)}
              placeholder="Apto, Bloco, etc."
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          {/* Bairro */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Bairro *</label>
            <input
              type="text"
              value={formData.neighborhood || ""}
              onChange={(e) => handleInputChange("neighborhood", e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            />
          </div>

          {/* Cidade */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Cidade *</label>
            <input
              type="text"
              value={formData.city || ""}
              onChange={(e) => handleInputChange("city", e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            />
          </div>

          {/* Estado */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Estado *</label>
            <select
              value={formData.state || ""}
              onChange={(e) => handleInputChange("state", e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            >
              <option value="">Selecione</option>
              <option value="SP">São Paulo</option>
              <option value="RJ">Rio de Janeiro</option>
              <option value="MG">Minas Gerais</option>
              <option value="RS">Rio Grande do Sul</option>
              <option value="PR">Paraná</option>
              <option value="SC">Santa Catarina</option>
              <option value="BA">Bahia</option>
              <option value="GO">Goiás</option>
              <option value="PE">Pernambuco</option>
              <option value="CE">Ceará</option>
            </select>
          </div>
        </div>

        {/* Botões */}
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
    </div>
  );
}
