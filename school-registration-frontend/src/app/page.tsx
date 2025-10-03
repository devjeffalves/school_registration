"use client";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <h1 className="text-3xl font-bold mb-4">🏫 Sistema de Matrículas</h1>
      <p className="mb-6 text-gray-600">
        Bem-vindo! Clique abaixo para iniciar uma nova matrícula.
      </p>
      <Link
        href="/enrollments"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Iniciar Matrícula
      </Link>
    </main>
  );
}
