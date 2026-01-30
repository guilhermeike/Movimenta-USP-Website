
import React from 'react';

const ScrollingBanner: React.FC = () => {
  const words = [
    "BEM-ESTAR", 
    "CIÊNCIA", 
    "VIDA ATIVA", 
    "COMPORTAMENTO", 
    "COMBATE AO SEDENTARISMO", 
    "ATIVIDADE FÍSICA"
  ];

  // Duplicamos a lista para criar o efeito infinito sem saltos
  const displayWords = [...words, ...words, ...words, ...words];

  return (
    <div className="bg-[#43a089] py-3 md:py-4 overflow-hidden border-y border-white/10 relative z-20">
      <div className="flex whitespace-nowrap animate-scroll">
        {displayWords.map((word, index) => (
          <div key={index} className="flex items-center">
            <span className="text-white text-lg md:text-2xl font-black tracking-tighter mx-8 md:mx-12 opacity-90">
              {word}
            </span>
            <span className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-[#e67e22]"></span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScrollingBanner;
