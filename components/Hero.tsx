
import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-[85vh] flex items-center overflow-hidden bg-white">
      {/* Ilustração de Fundo Suave */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-60">
        <div className="absolute right-0 bottom-0 w-full h-full md:w-3/4 lg:w-2/3">
           <img 
            src="https://i.imgur.com/Dbp8SV1.png" 
            alt="Movimenta USP" 
            className="w-full h-full object-cover object-center mask-fade-left"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent"></div>
        </div>
      </div>
      
      <style>{`
        .mask-fade-left {
          mask-image: linear-gradient(to left, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 80%);
          -webkit-mask-image: linear-gradient(to left, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 80%);
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-20 relative z-10 w-full">
        <div className="max-w-3xl text-left">
          <h1 className="text-4xl md:text-[56px] font-extrabold text-slate-900 leading-[1.15] mb-6 tracking-tight max-w-4xl">
            Tenha uma vida mais <br />
            <span className="brand-gradient-text">ativa e saudável</span> na USP
          </h1>
          
          <p className="text-xl text-slate-500 mb-10 leading-relaxed max-w-2xl font-normal">
            O Movimenta USP é um projeto gratuito criado para ajudar funcionários da USP a se movimentarem mais no dia a dia, conquistar uma vida ativa e combater o sedentarismo com apoio profissional e foco em mudanças comportamentais possíveis.
          </p>

          <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 mb-16">
            <button className="btn-gradient text-white px-8 py-4 rounded-xl font-bold text-lg shadow-xl shadow-emerald-500/20 hover:shadow-emerald-500/40 hover:-translate-y-1 transition-all flex items-center justify-center group">
              Quero participar
              <svg className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1 group-hover:scale-110" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
            <a href="#sobre" className="block w-full sm:w-auto">
              <button className="w-full bg-white text-[#F47B31] border-2 border-[#F47B31] px-8 py-4 rounded-xl font-bold text-lg hover:bg-[#F47B31]/5 transition-all flex items-center justify-center">
                Saiba mais
              </button>
            </a>
          </div>

          <div className="grid grid-cols-2 gap-10 pt-8 border-t border-slate-100 max-w-md">
            <div className="group cursor-default">
              <div className="flex items-baseline space-x-2 mb-1 transition-transform duration-300 group-hover:-translate-y-1">
                <span className="text-4xl font-extrabold text-[#F47B31]">4</span>
                <span className="text-xl font-extrabold text-[#F47B31] uppercase tracking-tighter">Meses</span>
              </div>
              <span className="text-slate-400 text-xs font-bold uppercase tracking-widest block group-hover:text-slate-600 transition-colors">De programa</span>
            </div>
            
            <div className="group cursor-default flex flex-col justify-start">
              <div className="mb-1 transition-transform duration-300 group-hover:-translate-y-1">
                <span className="text-4xl font-extrabold text-[#3CB5A1]">100%</span>
              </div>
              <span className="text-slate-400 text-xs font-bold uppercase tracking-widest block group-hover:text-slate-600 transition-colors">Gratuito</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
