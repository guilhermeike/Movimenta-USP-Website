
import React from 'react';

const StatementSection: React.FC = () => {
  return (
    <section className="relative w-full overflow-hidden bg-white">
      <div className="flex flex-col md:flex-row min-h-[500px] md:min-h-[600px]">
        {/* Lado Esquerdo: Conteúdo de Texto */}
        <div className="w-full md:w-[45%] bg-slate-900 flex flex-col justify-center p-8 md:p-16 lg:p-24 relative overflow-hidden">
          {/* Elemento decorativo sutil de fundo */}
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
            <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#43a089] rounded-full blur-[120px]"></div>
          </div>

          <div className="relative z-10 max-w-md">
            <span className="text-[#e67e22] font-black text-xs md:text-sm tracking-[0.3em] uppercase mb-6 block">
              NOSSA MISSÃO
            </span>
            
            <h2 className="text-white text-2xl md:text-3xl lg:text-4xl font-black leading-[1.2] tracking-tight uppercase mb-8">
              Transformar <br />
              <span className="brand-gradient-text">comportamentos</span> <br />
              através do <br />
              <span className="brand-gradient-text">movimento</span>
            </h2>
            
            <p className="text-slate-400 text-base md:text-lg mb-0 leading-relaxed max-w-sm">
              Ciência e acompanhamento profissional para servidores da USP que buscam uma vida mais ativa através de mudança real.
            </p>
          </div>
        </div>

        {/* Lado Direito: Imagem de Ação com Tratamento de Cor */}
        <div className="w-full md:w-[55%] relative overflow-hidden min-h-[400px] md:min-h-0">
          <img 
            src="https://images.unsplash.com/photo-1552674605-db6ffd4facb5?auto=format&fit=crop&q=80&w=1400" 
            alt="Servidor em atividade física ao ar livre" 
            className="absolute inset-0 w-full h-full object-cover object-center scale-105 hover:scale-100 transition-transform duration-[2000ms] ease-out"
          />
          
          {/* Overlays para integrar com o design */}
          <div className="absolute inset-0 bg-slate-900/20 mix-blend-multiply pointer-events-none"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/40 to-transparent pointer-events-none md:block hidden"></div>
        </div>
      </div>
    </section>
  );
};

export default StatementSection;
