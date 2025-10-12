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
                {[1, 2].map((i) => (
                    <div key={i}>
                        <p><strong>Nome:</strong> {formData[`parent${i}Name`]}</p>
                        <p><strong>CPF:</strong> {formData[`parent${i}CPF`]}</p>
                        <p><strong>Telefone:</strong> {formData[`parent${i}Phone`]}</p>
                        <p><strong>Email:</strong> {formData[`parent${i}Email`]}</p>
                        <p><strong>Parentesco:</strong> {formData[`parent${i}Relation`]}</p>
                        <p><strong>Profissão:</strong> {formData[`parent${i}Job`]}</p>
                    </div>
                ))}

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
