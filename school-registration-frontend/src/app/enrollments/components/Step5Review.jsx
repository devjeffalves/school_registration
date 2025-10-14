// "use client";
// import React from "react";

// export default function Step5Review({ formData, onPrevious, onSubmit }) {
//     return (
//         <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-8">
//             <h2 className="text-2xl font-bold text-gray-800 mb-6">📋 Revisar Dados</h2>

//             <div className="space-y-4">
//                 <h3 className="text-lg font-semibold text-gray-700">👧 Aluno(a)</h3>
//                 <p><strong>Nome:</strong> {formData.studentName}</p>
//                 <p><strong>Nascimento:</strong> {formData.studentBirthDate}</p>
//                 <p><strong>Gênero:</strong> {formData.studentGender}</p>
//                 <p><strong>Série:</strong> {formData.studentGrade}</p>
//                 <p><strong>Escola:</strong> {formData.studentSchool}</p>

//                 <h3 className="text-lg font-semibold text-gray-700 mt-6">👪 Responsáveis</h3>
//                 {[1, 2].map((i) => (
//                     <div key={i}>
//                         <p><strong>Nome:</strong> {formData[`parent${i}Name`]}</p>
//                         <p><strong>CPF:</strong> {formData[`parent${i}CPF`]}</p>
//                         <p><strong>Telefone:</strong> {formData[`parent${i}Phone`]}</p>
//                         <p><strong>Email:</strong> {formData[`parent${i}Email`]}</p>
//                         <p><strong>Parentesco:</strong> {formData[`parent${i}Relation`]}</p>
//                         <p><strong>Profissão:</strong> {formData[`parent${i}Job`]}</p>
//                     </div>
//                 ))}

//                 <h3 className="text-lg font-semibold text-gray-700 mt-6">🏠 Endereço</h3>
//                 <p>
//                     {formData.street}, {formData.number} — {formData.neighborhood}, {formData.city} - {formData.state}
//                 </p>
//                 <p><strong>CEP:</strong> {formData.zipCode}</p>
//             </div>

//             <div className="flex justify-between mt-8">
//                 <button
//                     onClick={onPrevious}
//                     className="bg-gray-500 hover:bg-gray-600 text-white px-8 py-3 rounded-lg"
//                 >
//                     ← Anterior
//                 </button>
//                 <button
//                     onClick={onSubmit}
//                     className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg"
//                 >
//                     Confirmar e Enviar ✓
//                 </button>
//             </div>
//         </div>
//     );
// }

// "use client";
// import React from "react";

// export default function Step5Review({ formData, onPrevious, onSubmit }) {
//     const { responsibles = [] } = formData;

//     return (
//         <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-8">
//             <h2 className="text-2xl font-bold text-gray-800 mb-6">📋 Revisar Dados</h2>

//             <div className="space-y-4">
//                 {/* 👧 Aluno */}
//                 <h3 className="text-lg font-semibold text-gray-700">👧 Aluno(a)</h3>
//                 <p><strong>Nome:</strong> {formData.studentName}</p>
//                 <p><strong>CPF:</strong> {formData.studentCPF}</p>
//                 <p><strong>Nascimento:</strong> {formData.studentBirthDate}</p>
//                 <p><strong>Gênero:</strong> {formData.studentGender}</p>
//                 <p><strong>Nacionalidade:</strong> {formData.nationality}</p>
//                 <p><strong>Escola Anterior:</strong> {formData.previousSchool}</p>
//                 <p><strong>Série Desejada:</strong> {formData.desiredGrade}</p>

//                 {/* 👪 Responsáveis */}
//                 <h3 className="text-lg font-semibold text-gray-700 mt-6">👪 Responsáveis</h3>
//                 {responsibles.length > 0 ? (
//                     responsibles.map((resp, i) => (
//                         <div key={i} className="border border-gray-200 rounded-lg p-4 mb-4">
//                             <h4 className="font-semibold text-gray-700 mb-2">Responsável {i + 1}</h4>
//                             <p><strong>Nome:</strong> {resp.name}</p>
//                             <p><strong>CPF:</strong> {resp.cpf}</p>
//                             <p><strong>Telefone:</strong> {resp.phone}</p>
//                             <p><strong>Email:</strong> {resp.email}</p>
//                             <p><strong>Parentesco:</strong> {resp.relationship}</p>
//                             <p><strong>Profissão:</strong> {resp.job}</p>
//                         </div>
//                     ))
//                 ) : (
//                     <p className="text-gray-600 italic">Nenhum responsável cadastrado.</p>
//                 )}

//                 {/* 🏠 Endereço */}
//                 <h3 className="text-lg font-semibold text-gray-700 mt-6">🏠 Endereço</h3>
//                 <p>
//                     {formData.street}, {formData.number} — {formData.neighborhood},{" "}
//                     {formData.city} - {formData.state}
//                 </p>
//                 <p><strong>CEP:</strong> {formData.zipCode}</p>
//                 {formData.complement && <p><strong>Complemento:</strong> {formData.complement}</p>}
//             </div>

//             {/* Botões */}
//             <div className="flex justify-between mt-8">
//                 <button
//                     onClick={onPrevious}
//                     className="bg-gray-500 hover:bg-gray-600 text-white px-8 py-3 rounded-lg"
//                 >
//                     ← Anterior
//                 </button>
//                 <button
//                     onClick={onSubmit}
//                     className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg"
//                 >
//                     Confirmar e Enviar ✓
//                 </button>
//             </div>
//         </div>
//     );
// }

"use client";
import React from "react";

export default function Step5Review({ formData, onPrevious, onSubmit }) {
    return (
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">📋 Revisar Dados</h2>

            <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-700">👧 Aluno(a)</h3>
                <p><strong>Nome:</strong> {formData.studentName}</p>
                <p><strong>Nascimento:</strong> {formData.studentBirthDate}</p>
                <p><strong>Gênero:</strong> {formData.studentGender}</p>
                <p><strong>Série:</strong> {formData.studentGrade}</p>
                <p><strong>Escola:</strong> {formData.studentSchool}</p>

                <h3 className="text-lg font-semibold text-gray-700 mt-6">👪 Responsáveis</h3>
                {formData.responsibles && formData.responsibles.length > 0 ? (
                    formData.responsibles.map((r, index) => (
                        <div key={index} className="mb-2">
                            <p><strong>Nome:</strong> {r.name}</p>
                            <p><strong>CPF:</strong> {r.cpf}</p>
                            <p><strong>Telefone:</strong> {r.phone}</p>
                            <p><strong>Email:</strong> {r.email}</p>
                            <p><strong>Parentesco:</strong> {r.relationship}</p>
                            <p><strong>Profissão:</strong> {r.job}</p>
                        </div>
                    ))
                ) : (
                    <p className="text-red-500">Nenhum responsável cadastrado</p>
                )}

                <h3 className="text-lg font-semibold text-gray-700 mt-6">🏠 Endereço</h3>
                <p>
                    {formData.street}, {formData.number} — {formData.neighborhood}, {formData.city} - {formData.state}
                </p>
                <p><strong>CEP:</strong> {formData.zipCode}</p>
            </div>

            <div className="flex justify-between mt-8">
                <button
                    onClick={onPrevious}
                    className="bg-gray-500 hover:bg-gray-600 text-white px-8 py-3 rounded-lg"
                >
                    ← Anterior
                </button>
                <button
                    onClick={onSubmit}
                    className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg"
                >
                    Confirmar e Enviar ✓
                </button>
            </div>
        </div>
    );
}
