
import React from 'react';

const Criteria: React.FC = () => {
  const allowed = [
    "Tem entre 40 e 70 anos",
    "É servidor ativo da USP (CLT ou estatutário) do campus Capital-Butantã",
    "Trabalha 30 horas por semana ou mais",
    "Faz pouca ou nenhuma atividade física atualmente",
    "Tem disponibilidade para participar dos 4 meses do programa"
  ];

  const forbidden = [
    "Pessoas com restrições médicas para atividade física",
    "Gestantes",
    "Quem pretende se afastar do trabalho por longo período",
    "Quem já pratica mais de 150 minutos por semana de atividade física"
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <span className="bg-[#e67e22]/10 text-[#e67e22] px-4 py-2 rounded-full font-semibold text-xs uppercase tracking-widest mb-4 inline-block">Critérios de Participação</span>
        <h2 className="text-4xl font-bold text-slate-900 mb-4 tracking-tight">Quem pode participar?</h2>
        <p className="text-xl text-slate-500 max-w-2xl mx-auto">
          O programa é voltado para <strong className="font-bold text-slate-700">servidores</strong> da USP que desejam iniciar uma mudança de comportamento de forma segura e acompanhada.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-10">
        {/* Coluna Positiva */}
        <div className="bg-white border border-slate-100 p-10 rounded-[40px] shadow-sm hover:shadow-xl hover:shadow-slate-200/20 transition-all duration-500 group">
          <div className="flex items-center space-x-5 mb-10">
            <div className="w-16 h-16 bg-slate-50 border border-slate-200 rounded-2xl flex items-center justify-center text-emerald-600/80 shadow-sm group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
               <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
               </svg>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-slate-800 leading-tight">Pode participar quem:</h3>
            </div>
          </div>
          <ul className="space-y-6">
            {allowed.map((item, idx) => (
              <li key={idx} className="flex items-start space-x-4">
                <div className="mt-1 flex-shrink-0 w-7 h-7 rounded-full bg-slate-50 flex items-center justify-center border border-slate-100 group-hover:border-emerald-200 group-hover:text-emerald-600 transition-all">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-slate-600 font-medium text-lg leading-snug">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Coluna Negativa */}
        <div className="bg-white border border-slate-100 p-10 rounded-[40px] shadow-sm hover:shadow-xl hover:shadow-slate-200/20 transition-all duration-500 group">
          <div className="flex items-center space-x-5 mb-10">
            <div className="w-16 h-16 bg-slate-50 border border-slate-200 rounded-2xl flex items-center justify-center text-rose-600/80 shadow-sm group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-500">
               <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
               </svg>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-slate-800 leading-tight">Não poderá participar quem:</h3>
            </div>
          </div>
          <ul className="space-y-6">
            {forbidden.map((item, idx) => (
              <li key={idx} className="flex items-start space-x-4">
                <div className="mt-1 flex-shrink-0 w-7 h-7 rounded-full bg-slate-50 flex items-center justify-center border border-slate-100 group-hover:border-rose-200 group-hover:text-rose-600 transition-all">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </div>
                <span className="text-slate-600 font-medium text-lg leading-snug">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Criteria;
