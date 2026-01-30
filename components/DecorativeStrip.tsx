
import React from 'react';

const DecorativeStrip: React.FC = () => {
  return (
    <div className="relative w-full h-44 md:h-64 flex items-center justify-center overflow-hidden bg-slate-50">
      {/* Elemento de fundo com gradiente levemente inclinado na diagonal */}
      <div className="absolute inset-0 z-0 flex items-center justify-center">
        <div className="w-[110%] h-32 md:h-40 bg-gradient-to-r from-[#F47B31] via-[#21406E] to-[#3CB5A1] transform -rotate-1 shadow-[0_20px_50px_rgba(0,0,0,0.1)] relative">
        </div>
      </div>
      
      {/* Conteúdo central flutuante - mantido reto para legibilidade */}
      <div className="relative z-10 flex flex-col items-center">
        <div className="bg-white px-8 md:px-12 py-4 md:py-6 rounded-[32px] border-4 border-slate-50 shadow-2xl flex flex-col items-center group transition-transform hover:scale-105 duration-500">
           <span className="text-slate-400 font-black text-[10px] md:text-xs tracking-[0.5em] uppercase mb-2">Movimenta USP</span>
           <h2 className="text-slate-900 font-black text-xl md:text-3xl tracking-tighter uppercase italic text-center">
             Saúde é movimento. <span className="brand-gradient-text">Movimento é vida.</span>
           </h2>
        </div>
      </div>

      {/* Ícones flutuantes decorativos */}
      <div className="absolute left-[10%] top-1/4 animate-bounce hidden md:block">
        <div className="w-10 h-10 rounded-2xl bg-[#3CB5A1]/20 flex items-center justify-center text-[#3CB5A1]">
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        </div>
      </div>
      <div className="absolute right-[10%] bottom-1/4 animate-pulse hidden md:block">
        <div className="w-10 h-10 rounded-2xl bg-[#F47B31]/20 flex items-center justify-center text-[#F47B31]">
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default DecorativeStrip;
