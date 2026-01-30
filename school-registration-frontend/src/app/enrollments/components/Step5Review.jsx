

// "use client";
// import React from "react";
// export default function Step5Review({ formData, onPrevious }) {
//     const [loading, setLoading] = useState(false);

//     const handleFinalSubmit = async () => {
//         try {
//             setLoading(true);

//             const formDataToSend = new FormData();

//             // ✅ Health Info
//             const healthInfo = {
//                 allergies: [
//                     formData.medicineAllergyDetails,
//                     formData.insectAllergyDetails,
//                     formData.productAllergyDetails,
//                 ].filter(Boolean).join("; "),
//                 medications: [
//                     formData.regularMedicineDetails,
//                     formData.feverMedicine,
//                 ].filter(Boolean).join("; "),
//                 notesfeverMedicine: formData.feverMedicine || "",
//             };

//             // 1️⃣ Campos do aluno
//             const student = {
//                 fullName: formData.studentName,
//                 cpf: formData.studentCPF,
//                 birthDate: formData.studentBirthDate,
//                 gender: formData.studentGender,
//                 nationality: formData.nationality,
//                 previousSchool: formData.previousSchool,
//                 grade: formData.desiredGrade,
//                 healthInfo,
//                 studentInterests: formData.studentInterests || "",
//                 studentSkills: formData.studentSkills || "",
//                 studentDifficulties: formData.studentDifficulties || "",
//                 authorizedPersons: formData.authorizedPersons?.map((p) => ({
//                     name: p.name,
//                     phone: p.phone,
//                     relationship: p.relation,
//                     documentName: p.document ? p.document.name : null,
//                 })) || [],
//             };
//             formDataToSend.append("student", JSON.stringify(student));

//             // 2️⃣ Campos dos responsáveis
//             const responsibles = (formData.responsibles || []).filter(
//                 (r) => r.name.trim() !== ""
//             );
//             formDataToSend.append("responsible", JSON.stringify(responsibles));

//             // 3️⃣ Endereço
//             const address = {
//                 zipCode: formData.zipCode,
//                 street: formData.street,
//                 number: formData.number,
//                 complement: formData.complement,
//                 neighborhood: formData.neighborhood,
//                 city: formData.city,
//                 state: formData.state,
//             };
//             formDataToSend.append("address", JSON.stringify(address));

//             // 4️⃣ Arquivos
//             ["birthCertificate", "parentCPF", "addressProof", "schoolHistory", "vaccinationCard"].forEach(
//                 (field) => {
//                     if (formData[field]) {
//                         formDataToSend.append("documents", formData[field]);
//                     }
//                 }
//             );

//             // 5️⃣ Envio para o backend
//             const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/enrollments`, {
//                 method: "POST",
//                 body: formDataToSend,
//             });

//             if (!res.ok) throw new Error("Falha ao enviar matrícula");

//             const result = await res.json();
//             alert("✅ Matrícula enviada com sucesso!");
//             console.log("Resposta da API:", result);

//             // Avançar para a tela de sucesso
//             window.location.href = "/enrollments/success"; // ou use um setCurrentStep se for multi-step
//         } catch (error) {
//             console.error("❌ Erro ao enviar matrícula:", error);
//             alert("Erro ao enviar matrícula. Tente novamente.");
//         } finally {
//             setLoading(false);
//         }
//     };

//     return (
//         <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-8">
//             <h2 className="text-2xl font-bold text-gray-800 mb-6">📋 Revisar Dados</h2>

//             <div className="space-y-4">
//                 <h3 className="text-lg font-semibold text-gray-700">👧 Aluno(a)</h3>
//                 <div className="mb-2">
//                     <p><strong>Nome:</strong> {formData.studentName}</p>
//                     <p><strong>CPF:</strong> {formData.studentCPF}</p>
//                     <p><strong>Nascimento:</strong> {formData.studentBirthDate}</p>
//                     <p><strong>Naturalidade:</strong> {formData.nationality}</p>
//                     <p><strong>Escola:</strong> {formData.previousSchool}</p>
//                     <p><strong>Série:</strong> {formData.desiredGrade}</p>
//                 </div>


//                 <h3 className="text-lg font-semibold text-gray-700 mt-6">👪 Responsáveis</h3>
//                 {formData.responsibles && formData.responsibles.length > 0 ? (
//                     formData.responsibles.map((r, index) => (
//                         <div key={index} className="mb-2">
//                             <p><strong>Nome:</strong> {r.name}</p>
//                             <p><strong>CPF:</strong> {r.cpf}</p>
//                             <p><strong>Telefone:</strong> {r.phone}</p>
//                             <p><strong>Email:</strong> {r.email}</p>
//                             <p><strong>Parentesco:</strong> {r.relationship}</p>
//                             <p><strong>Profissão:</strong> {r.job}</p>
//                         </div>
//                     ))
//                 ) : (
//                     <p className="text-red-500">Nenhum responsável cadastrado</p>
//                 )}

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
//                     onClick={handleFinalSubmit}
//                     disabled={loading}
//                     className={`${loading ? "bg-gray-400 cursor-not-allowed" : "bg-green-600 hover:bg-green-700"
//                         } text-white px-8 py-3 rounded-lg`}
//                 >
//                     {loading ? "Enviando..." : "Confirmar e Enviar ✓"}
//                 </button>
//             </div>
//         </div>
//     );
// }

// "use client";
// import React, { useState } from "react"; // ✅ Correção aqui

// export default function Step5Review({ formData, onPrevious, onSuccess }) {
//     const [loading, setLoading] = useState(false);

//     const handleFinalSubmit = async () => {
//         try {
//             setLoading(true);

//             // 🧾 Gera código de protocolo
//             const generateProtocol = () => {
//                 const date = new Date();
//                 const datePart = date.toISOString().slice(0, 10).replace(/-/g, "");
//                 const randomPart = Math.random().toString(36).substring(2, 6).toUpperCase();
//                 return `MAT-${datePart}-${randomPart}`;
//             };
//             const protocol = generateProtocol();

//             // 🧠 Cria o FormData final
//             const formDataToSend = new FormData();

//             // ✅ Health Info
//             const healthInfo = {
//                 allergies: [
//                     formData.medicineAllergyDetails,
//                     formData.insectAllergyDetails,
//                     formData.productAllergyDetails,
//                 ].filter(Boolean).join("; "),
//                 medications: [
//                     formData.regularMedicineDetails,
//                     formData.feverMedicine,
//                 ].filter(Boolean).join("; "),
//                 notesfeverMedicine: formData.notesfeverMedicine || "",
//             };

//             // 👧 Dados do aluno
//             const student = {
//                 fullName: formData.studentName,
//                 cpf: formData.studentCPF,
//                 birthDate: formData.studentBirthDate,
//                 gender: formData.gender,
//                 nationality: formData.nationality,
//                 previousSchool: formData.previousSchool,
//                 grade: formData.desiredGrade,
//                 healthInfo,
//                 protocol,
//                 // 🔥 Normaliza arrays e strings
//                 studentInterests: Array.isArray(formData.studentInterests)
//                     ? formData.studentInterests.join("; ")
//                     : formData.studentInterests || "",
//                 studentSkills: Array.isArray(formData.studentSkills)
//                     ? formData.studentSkills.join("; ")
//                     : formData.studentSkills || "",
//                 studentDifficulties: Array.isArray(formData.studentDifficulties)
//                     ? formData.studentDifficulties.join("; ")
//                     : formData.studentDifficulties || "",
//                 authorizedPersons: Array.isArray(formData.authorizedPersons)
//                     ? formData.authorizedPersons.map((p) => ({
//                         name: p.name || "",
//                         phone: p.phone || "",
//                         relation: p.relation || "",
//                     }))
//                     : [],
//             };
//             formDataToSend.append("student", JSON.stringify(student));

//             // 👨‍👩‍👧 Responsáveis
//             const responsibles = (formData.responsibles || []).filter((r) => r.name?.trim() !== "");
//             formDataToSend.append("responsible", JSON.stringify(responsibles));

//             // 🏠 Endereço
//             const address = {
//                 zipCode: formData.zipCode,
//                 street: formData.street,
//                 number: formData.number,
//                 complement: formData.complement,
//                 neighborhood: formData.neighborhood,
//                 city: formData.city,
//                 state: formData.state,
//             };
//             formDataToSend.append("address", JSON.stringify(address));

//             // 📎 Documentos
//             ["birthCertificate", "parentCPF", "addressProof", "schoolHistory", "vaccinationCard"].forEach((field) => {
//                 if (formData[field]) {
//                     formDataToSend.append("documents", formData[field]);
//                 }
//             });

//             // 🚀 Envio final
//             const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/enrollments`, {
//                 method: "POST",
//                 body: formDataToSend,
//             });

//             if (!res.ok) throw new Error("Falha ao enviar matrícula");

//             const result = await res.json();
//             console.log("✅ Resposta da API:", result);
//             alert(`✅ Matrícula enviada com sucesso! Protocolo: ${protocol}`);

//             if (typeof onSuccess === "function") onSuccess(protocol);

//         } catch (error) {
//             console.error("❌ Erro ao enviar matrícula:", error);
//             alert("Erro ao enviar matrícula. Tente novamente.");
//         } finally {
//             setLoading(false);
//         }
//     };

// }

// "use client";
// import React, { useState } from "react";

// export default function Step5Review({ formData, onPrevious, onSuccess }) {
//     const [loading, setLoading] = useState(false);

//     const handleFinalSubmit = async () => {
//         try {
//             setLoading(true);

//             // 🧾 Gera código de protocolo
//             const generateProtocol = () => {
//                 const date = new Date();
//                 const datePart = date.toISOString().slice(0, 10).replace(/-/g, "");
//                 const randomPart = Math.random().toString(36).substring(2, 6).toUpperCase();
//                 return `MAT-${datePart}-${randomPart}`;
//             };
//             const protocol = generateProtocol();

//             // 🧠 Cria o FormData final
//             const formDataToSend = new FormData();

//             // ✅ Health Info
//             const healthInfo = {
//                 allergies: [
//                     formData.medicineAllergyDetails,
//                     formData.insectAllergyDetails,
//                     formData.productAllergyDetails,
//                 ]
//                     .filter(Boolean)
//                     .join("; "),
//                 medications: [formData.regularMedicineDetails, formData.feverMedicine]
//                     .filter(Boolean)
//                     .join("; "),
//                 notesfeverMedicine: formData.notesfeverMedicine || "",
//             };

//             // 👧 Dados do aluno
//             const student = {
//                 fullName: formData.studentName,
//                 cpf: formData.studentCPF,
//                 birthDate: formData.studentBirthDate,
//                 gender: formData.gender,
//                 nationality: formData.nationality,
//                 previousSchool: formData.previousSchool,
//                 grade: formData.desiredGrade,
//                 healthInfo,
//                 protocol,
//                 studentInterests: Array.isArray(formData.studentInterests)
//                     ? formData.studentInterests.join("; ")
//                     : formData.studentInterests || "",
//                 studentSkills: Array.isArray(formData.studentSkills)
//                     ? formData.studentSkills.join("; ")
//                     : formData.studentSkills || "",
//                 studentDifficulties: Array.isArray(formData.studentDifficulties)
//                     ? formData.studentDifficulties.join("; ")
//                     : formData.studentDifficulties || "",
//                 authorizedPersons: Array.isArray(formData.authorizedPersons)
//                     ? formData.authorizedPersons.map((p) => ({
//                         name: p.name || "",
//                         phone: p.phone || "",
//                         relation: p.relation || "",
//                         document: p.document ? p.document.name : null,
//                     }))
//                     : [],
//             };
//             formDataToSend.append("student", JSON.stringify(student));

//             // 👨‍👩‍👧 Responsáveis
//             const responsibles = (formData.responsibles || []).filter((r) => r.name?.trim() !== "");
//             formDataToSend.append("responsible", JSON.stringify(responsibles));

//             // 🏠 Endereço
//             const address = {
//                 zipCode: formData.zipCode,
//                 street: formData.street,
//                 number: formData.number,
//                 complement: formData.complement,
//                 neighborhood: formData.neighborhood,
//                 city: formData.city,
//                 state: formData.state,
//             };
//             formDataToSend.append("address", JSON.stringify(address));

//             // 📎 Documentos
//             ["birthCertificate", "parentCPF", "addressProof", "schoolHistory", "vaccinationCard"].forEach(
//                 (field) => {
//                     if (formData[field]) {
//                         formDataToSend.append("documents", formData[field]);
//                     }
//                 }
//             );

//             // 🚀 Envio final
//             const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/enrollments`, {
//                 method: "POST",
//                 body: formDataToSend,
//             });

//             if (!res.ok) throw new Error("Falha ao enviar matrícula");

//             const result = await res.json();
//             console.log("✅ Resposta da API:", result);
//             alert(`✅ Matrícula enviada com sucesso! Protocolo: ${protocol}`);

//             if (typeof onSuccess === "function") onSuccess(protocol);
//         } catch (error) {
//             console.error("❌ Erro ao enviar matrícula:", error);
//             alert("Erro ao enviar matrícula. Tente novamente.");
//         } finally {
//             setLoading(false);
//         }
//     };

//     return (
//         <div className="fade-in max-w-3xl mx-auto bg-white rounded-2xl shadow-xl p-8">
//             <h2 className="text-2xl font-bold text-gray-800 mb-6">📋 Revisar dados da matrícula</h2>

//             <div className="space-y-4 text-gray-700">
//                 <p><strong>Nome do aluno:</strong> {formData.studentName}</p>
//                 <p><strong>CPF:</strong> {formData.studentCPF}</p>
//                 <p><strong>Data de nascimento:</strong> {formData.studentBirthDate}</p>
//                 <p><strong>Série desejada:</strong> {formData.desiredGrade}</p>
//                 <p><strong>Interesses:</strong> {formData.studentInterests?.join?.(", ") || formData.studentInterests}</p>
//                 <p><strong>Habilidades:</strong> {formData.studentSkills?.join?.(", ") || formData.studentSkills}</p>
//                 <p><strong>Dificuldades:</strong> {formData.studentDifficulties?.join?.(", ") || formData.studentDifficulties}</p>
//             </div>

//             <div className="flex justify-between mt-8">
//                 <button
//                     onClick={onPrevious}
//                     className="bg-gray-300 hover:bg-gray-400 text-gray-800 px-6 py-3 rounded-lg font-medium"
//                 >
//                     Voltar
//                 </button>

//                 <button
//                     onClick={handleFinalSubmit}
//                     disabled={loading}
//                     className={`${loading ? "bg-blue-300" : "bg-blue-600 hover:bg-blue-700"
//                         } text-white px-8 py-3 rounded-lg font-medium transition-colors`}
//                 >
//                     {loading ? "Enviando..." : "Confirmar Matrícula"}
//                 </button>
//             </div>
//         </div>
//     );
// }

"use client";
import React, { useState } from "react";

export default function Step5Review({ formData, onPrevious, onSuccess }) {
    const [loading, setLoading] = useState(false);

    const handleFinalSubmit = async () => {
        try {
            setLoading(true);

            // 🧾 Gera o código de protocolo
            const generateProtocol = () => {
                const date = new Date();
                const datePart = date.toISOString().slice(0, 10).replace(/-/g, "");
                const randomPart = Math.random().toString(36).substring(2, 6).toUpperCase();
                return `MAT-${datePart}-${randomPart}`;
            };
            const protocol = generateProtocol();

            // 🧠 Monta dados de saúde
            const healthInfo = {
                allergies: [
                    formData.medicineAllergyDetails,
                    formData.insectAllergyDetails,
                    formData.productAllergyDetails,
                ]
                    .filter(Boolean)
                    .join("; "),
                medications: [
                    formData.regularMedicineDetails,
                    formData.feverMedicine,
                ]
                    .filter(Boolean)
                    .join("; "),
                notesfeverMedicine: formData.notesfeverMedicine || "",
            };

            // 👧 Dados do aluno
            const student = {
                fullName: formData.studentName,
                cpf: formData.studentCPF,
                birthDate: formData.studentBirthDate,
                gender: formData.gender,
                nationality: formData.nationality,
                previousSchool: formData.previousSchool,
                grade: formData.desiredGrade,
                protocol,
                healthInfo,
                studentInterests: Array.isArray(formData.studentInterests)
                    ? formData.studentInterests.join("; ")
                    : formData.studentInterests || "",
                studentSkills: Array.isArray(formData.studentSkills)
                    ? formData.studentSkills.join("; ")
                    : formData.studentSkills || "",
                studentDifficulties: Array.isArray(formData.studentDifficulties)
                    ? formData.studentDifficulties.join("; ")
                    : formData.studentDifficulties || "",
                authorizedPersons: Array.isArray(formData.authorizedPersons)
                    ? formData.authorizedPersons.map((p) => ({
                        name: p.name || "",
                        phone: p.phone || "",
                        relation: p.relation || "",
                        document: p.document
                            ? {
                                type: "CNH", // ou outro tipo que você coletou do usuário
                                url: p.document.name // nome do arquivo ou URL se já tiver feito upload
                            }
                            : null,
                    }))
                    : [],
            };

            // 👨‍👩‍👧 Responsáveis
            const responsibles = (formData.responsibles || []).filter((r) => r.name?.trim() !== "");

            // 🏠 Endereço
            const address = {
                zipCode: formData.zipCode,
                street: formData.street,
                number: formData.number,
                complement: formData.complement,
                neighborhood: formData.neighborhood,
                city: formData.city,
                state: formData.state,
            };

            // 📎 Cria FormData
            const formDataToSend = new FormData();
            formDataToSend.append("student", JSON.stringify(student));
            formDataToSend.append("responsible", JSON.stringify(responsibles));
            formDataToSend.append("address", JSON.stringify(address));

            // 🗂️ Documentos - extrai apenas o arquivo File para enviar
            [
                "birthCertificate",
                "parentCPF",
                "addressProof",
                "vaccinationCard",
            ].forEach((field) => {
                if (formData[field]?.file) {
                    formDataToSend.append("documents", formData[field].file);
                }
            });

            // 🚀 Envia para o backend
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/enrollments`, {
                method: "POST",
                body: formDataToSend,
            });

            if (!res.ok) throw new Error("Falha ao enviar matrícula");

            const result = await res.json();
            console.log("✅ Resposta da API:", result);
            alert(`✅ Matrícula enviada com sucesso! Protocolo: ${protocol}`);

            if (typeof onSuccess === "function") onSuccess(protocol);
        } catch (error) {
            console.error("❌ Erro ao enviar matrícula:", error);
            alert("Erro ao enviar matrícula. Tente novamente.");
        } finally {
            setLoading(false);
        }
    };

    // 💡 Exibição dos dados para conferência
    return (
        <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-2xl p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
                Revisão dos Dados
            </h2>

            {/* DADOS DO ALUNO */}
            <div className="mb-4">
                <h3 className="text-lg font-semibold text-blue-700 mb-2">👧 Aluno</h3>
                <p><strong>Nome:</strong> {formData.studentName}</p>
                <p><strong>CPF:</strong> {formData.studentCPF}</p>
                <p><strong>Data de Nascimento:</strong> {formData.studentBirthDate}</p>
                <p><strong>Gênero:</strong> {formData.gender}</p>
                <p><strong>Nacionalidade:</strong> {formData.nationality}</p>
                <p><strong>Série desejada:</strong> {formData.desiredGrade}</p>
                <p><strong>Escola anterior:</strong> {formData.previousSchool}</p>

                <p><strong>Interesses:</strong> {Array.isArray(formData.studentInterests)
                    ? formData.studentInterests.join(", ")
                    : formData.studentInterests}</p>
                <p><strong>Habilidades:</strong> {Array.isArray(formData.studentSkills)
                    ? formData.studentSkills.join(", ")
                    : formData.studentSkills}</p>
                <p><strong>Dificuldades:</strong> {Array.isArray(formData.studentDifficulties)
                    ? formData.studentDifficulties.join(", ")
                    : formData.studentDifficulties}</p>
            </div>

            {/* RESPONSÁVEIS */}
            <div className="mb-4">
                <h3 className="text-lg font-semibold text-blue-700 mb-2">👨‍👩 Responsáveis</h3>
                {(formData.responsibles || []).map((r, i) => (
                    <div key={i} className="border p-3 rounded mb-2">
                        <p><strong>Nome:</strong> {r.name}</p>
                        <p><strong>CPF:</strong> {r.cpf}</p>
                        <p><strong>Telefone:</strong> {r.phone}</p>
                    </div>
                ))}
            </div>

            {/* ENDEREÇO */}
            <div className="mb-4">
                <h3 className="text-lg font-semibold text-blue-700 mb-2">🏠 Endereço</h3>
                <p>
                    {formData.street}, {formData.number} - {formData.neighborhood}
                    <br />
                    {formData.city} / {formData.state} - CEP: {formData.zipCode}
                </p>
            </div>

            {/* BOTÕES */}
            <div className="flex justify-between mt-6">
                <button
                    onClick={onPrevious}
                    className="px-6 py-3 bg-gray-300 hover:bg-gray-400 text-gray-800 rounded-lg font-medium"
                >
                    Voltar
                </button>

                <button
                    onClick={handleFinalSubmit}
                    disabled={loading}
                    className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium"
                >
                    {loading ? "Enviando..." : "Confirmar Matrícula"}
                </button>
            </div>
        </div>
    );
}
