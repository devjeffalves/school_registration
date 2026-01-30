"use client";
import { useState, useEffect } from "react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${isScrolled
        ? 'bg-white shadow-lg py-2'
        : 'bg-gradient-to-r from-green-50 to-yellow-50 bg-opacity-80 backdrop-blur-custom py-4 border-b border-green-100'
        }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-green-600 to-yellow-600 rounded-lg flex items-center justify-center shadow-md">
              <span className="text-white font-bold text-xl">🏫</span>
            </div>
            <h1 className={`font-bold text-xl transition-colors duration-300 ${isScrolled ? 'text-gray-800' : 'text-gray-800'
              }`}>
              Sistema de Matrículas
            </h1>
          </div>

          {/* Navegação centralizada
          <nav className="hidden md:flex items-center space-x-8 lg:space-x-12">
            <a
              href="#inicio"
              className={`font-medium transition-all duration-300 hover:text-green-600 hover:scale-105 ${isScrolled ? 'text-gray-700' : 'text-gray-700'
                }`}
            >
              Início
            </a>
            <a
              href="#sobre"
              className={`font-medium transition-all duration-300 hover:text-green-600 hover:scale-105 ${isScrolled ? 'text-gray-700' : 'text-gray-700'
                }`}
            >
              Sobre
            </a>
            <a
              href="#contato"
              className={`font-medium transition-all duration-300 hover:text-green-600 hover:scale-105 ${isScrolled ? 'text-gray-700' : 'text-gray-700'
                }`}
            >
              Contato
            </a>
          </nav> */}

          {/* Área direita: Redes Sociais + Botão */}
          <div className="hidden md:flex items-center space-x-6">
            {/* Redes Sociais */}
            <div className="flex items-center space-x-4 mr-4">
              <a
                href="https://www.instagram.com/contraturno_learninggarden?igsh=MWZjbmFsMGdib3E5"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-pink-600 transition-colors duration-300 hover:scale-110"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1 1 12.324 0 6.162 6.162 0 0 1-12.324 0zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm4.965-10.405a1.44 1.44 0 1 1 2.881.001 1.44 1.44 0 0 1-2.881-.001z" />
                </svg>
              </a>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600 transition-colors duration-300 hover:scale-110"
                aria-label="Facebook"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
            </div>

            {/* Botão de matrícula */}
            <a
              href="/enrollments"
              className="px-6 py-2 bg-gradient-to-r from-green-600 to-yellow-600 text-white font-semibold rounded-full hover:from-green-700 hover:to-yellow-700 transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              Matricular-se
            </a>
          </div>

          {/* Menu mobile (placeholder) */}
          <button className="md:hidden text-gray-700">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}