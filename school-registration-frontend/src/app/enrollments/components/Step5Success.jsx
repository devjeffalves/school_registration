"use client";
import React from "react";

export default function Step5Success({ protocol, onRestart }) {
  return (
    <div className="fade-in max-w-2xl mx-auto bg-white rounded-2xl shadow-xl p-8 text-center">
      <div className="text-6xl mb-4">🎉</div>
      <h2 className="text-3xl font-bold text-gray-800 mb-4">
        Matrícula realizada com sucesso!
      </h2>
      <p className="text-gray-600 mb-6">
        Seu protocolo de matrícula é:
      </p>
      <div className="inline-block bg-blue-100 text-blue-800 font-mono px-6 py-3 rounded-lg mb-6">
        {protocol}
      </div>
      <div>
        <button
          onClick={onRestart}
          className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-medium transition-colors"
        >
          Sair
        </button>
      </div>
    </div>
  );
}
