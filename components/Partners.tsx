
import React from 'react';

const Partners: React.FC = () => {
  const partners = [
    {
      name: "USP - Universidade de São Paulo",
      logo: "https://scs.usp.br/identidadevisual/wp-content/uploads/2022/08/usp-logo-png-1.png",
      height: "h-20 md:h-24 lg:h-28"
    },
    {
      name: "Movimenta USP",
      logo: "https://i.imgur.com/AABobz4.png",
      height: "h-24 md:h-32 lg:h-36"
    },
    {
      name: "EEFE USP - Escola de Educação Física e Esporte",
      logo: "https://www.eefe.usp.br/sites/default/files/logo%20eefe%202016%20jpg%20por%20color.jpg",
      height: "h-16 md:h-20 lg:h-24"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col items-center">
        <h3 className="text-xs font-bold tracking-[0.5em] text-slate-300 uppercase mb-12 text-center">
          Realização e Apoio
        </h3>
        
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 lg:gap-24">
          {partners.map((partner, index) => (
            <div 
              key={index} 
              className="group transition-all duration-500 hover:-translate-y-2 flex items-center justify-center"
            >
              <div className={`${partner.height} w-auto flex items-center justify-center`}>
                <img 
                  src={partner.logo} 
                  alt={partner.name} 
                  className="h-full w-auto object-contain transition-all duration-500 opacity-90 group-hover:opacity-100 group-hover:scale-110"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Partners;
