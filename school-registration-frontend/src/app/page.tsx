"use client";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Header fixo */}
      <Header />
      
      {/* Conteúdo principal com background gradiente */}
      <main 
        className="relative flex flex-col items-center justify-center min-h-screen"
        style={{
          background: 'linear-gradient(135deg, #e8f5e8 0%, #f0f8e8 25%, #fff9e6 50%, #f7f3e9 75%, #e8f5e8 100%)'
        }}
      >
        {/* Overlay decorativo com gradiente adicional */}
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            background: 'linear-gradient(45deg, #4ade80 0%, #facc15 50%, #22c55e 100%)'
          }}
        ></div>
      
      {/* Conteúdo principal */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        {/* Título principal */}
        <div className="mb-8 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-800 mb-4 drop-shadow-lg">
            Sistema de Matrículas
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-yellow-500 mx-auto mb-6 rounded-full"></div>
        </div>

        {/* Descrição */}
        <div className="mb-12 space-y-4">
          <p className="text-xl md:text-2xl text-gray-700 font-light leading-relaxed drop-shadow-md">
            Bem-vindo à plataforma de matrículas online
          </p>
          <p className="text-lg md:text-xl text-gray-600 font-light max-w-2xl mx-auto drop-shadow-md">
            Processo simples, rápido e seguro para inscrever seu(a) filho(a) em nossa escola
          </p>
        </div>

        {/* Botão de ação principal */}
        <div className="mb-8">
          <Link
            href="/enrollments"
            className="group relative inline-flex items-center justify-center px-12 py-5 text-lg font-semibold text-white bg-gradient-to-r from-green-600 to-yellow-600 rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 ease-in-out hover:from-green-700 hover:to-yellow-700 focus:outline-none focus:ring-4 focus:ring-green-300"
          >
            {/* Ícone de seta */}
            <span className="mr-3 group-hover:translate-x-1 transition-transform duration-300">
              <svg 
                className="w-6 h-6" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M13 7l5 5m0 0l-5 5m5-5H6" 
                />
              </svg>
            </span>
            Iniciar Matrícula
          </Link>
        </div>

        {/* Cards de informações */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          <div className="bg-white bg-opacity-95 backdrop-blur-sm rounded-xl p-6 shadow-lg transform hover:scale-105 transition-all duration-300 border border-green-100">
            <div className="text-4xl mb-4 text-green-600">📝</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Cadastro Simples</h3>
            <p className="text-gray-600">Formulário intuitivo e passo a passo guiado</p>
          </div>
          
          <div className="bg-white bg-opacity-95 backdrop-blur-sm rounded-xl p-6 shadow-lg transform hover:scale-105 transition-all duration-300 border border-yellow-100">
            <div className="text-4xl mb-4 text-yellow-600">📄</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Documentos Digitais</h3>
            <p className="text-gray-600">Upload seguro e organização automática</p>
          </div>
          
          <div className="bg-white bg-opacity-95 backdrop-blur-sm rounded-xl p-6 shadow-lg transform hover:scale-105 transition-all duration-300 border border-green-100">
            <div className="text-4xl mb-4 text-green-600">✅</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Confirmação Imediata</h3>
            <p className="text-gray-600">Receba seu protocolo na hora</p>
          </div>
        </div>
      </div>

      {/* Rodapé sutil removido - agora usa o Footer component */}

      {/* Estilos CSS para animações */}
      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
      `}</style>
    </main>
    
    {/* Footer */}
    <Footer />
    </div>
  );
}
