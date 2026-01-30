
import React from 'react';

const steps = [
  {
    id: "01",
    label: "PASSO 01",
    title: "Inscrição",
    description: "Início do processo através do preenchimento do formulário de triagem e saúde.",
    color: "#43a089", // Verde USP
    icon: (
      <svg className="w-6 h-6 md:w-7 md:h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
      </svg>
    )
  },
  {
    id: "02",
    label: "PASSO 02",
    title: "Avaliação Inicial",
    description: "Avaliação de comportamento e atividade física + entrega dos dispositivos de monitoramento.",
    color: "#34d399", // Emerald
    icon: (
      <svg className="w-6 h-6 md:w-7 md:h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    )
  },
  {
    id: "03",
    label: "PASSO 03",
    title: "Orientação e Mudança",
    description: "2 meses de orientação de atividade física e estratégias de mudança comportamental.",
    color: "#334155", // Slate
    icon: (
      <svg className="w-6 h-6 md:w-7 md:h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    )
  },
  {
    id: "04",
    label: "PASSO 04",
    title: "Pós Atendimento",
    description: "Reavaliação completa de comportamento e nível de atividade física após a intervenção.",
    color: "#0f172a", // Dark Slate
    icon: (
      <svg className="w-6 h-6 md:w-7 md:h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    )
  },
  {
    id: "05",
    label: "PASSO 05",
    title: "Seguimento sem Equipe",
    description: "Fase de autonomia para verificação de aderência e manutenção da mudança comportamental.",
    color: "#e67e22", // Laranja USP
    icon: (
      <svg className="w-6 h-6 md:w-7 md:h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  {
    id: "06",
    label: "PASSO 06",
    title: "Fim do Ciclo",
    description: "Entrega dos relatórios finais e devolução dos dispositivos (4 meses totais de projeto).",
    color: "#f97316", // Orange
    icon: (
      <svg className="w-6 h-6 md:w-7 md:h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  }
];

const Schedule: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative overflow-hidden">
      <div className="text-center mb-16 relative z-10">
        <span className="bg-[#e67e22]/10 text-[#e67e22] px-4 py-2 rounded-full font-semibold text-xs uppercase tracking-widest mb-4 inline-block">Cronograma</span>
        <h2 className="text-4xl font-bold text-slate-900 mb-4 tracking-tight">A sua jornada de transformação</h2>
        <p className="text-xl text-slate-500 max-w-2xl mx-auto">
          Um caminho estruturado pela USP para te tirar do sedentarismo com segurança e ciência em 4 meses.
        </p>
      </div>

      {/* Linha do Tempo Vertical */}
      <div className="relative max-w-5xl mx-auto">
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-2.5 bg-gradient-to-b from-[#43a089] via-[#334155] to-[#e67e22] -translate-x-1/2 z-0 rounded-full">
          <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-white to-transparent z-10"></div>
          <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-white to-transparent z-10"></div>
        </div>

        <div className="space-y-16 md:space-y-24">
          {steps.map((step, index) => {
            const isEven = index % 2 === 0;
            return (
              <div key={step.id} className="relative z-10">
                <div className={`flex flex-col md:flex-row items-center ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  <div className={`flex-1 w-full text-center md:text-left ${isEven ? 'md:pr-20 md:text-right' : 'md:pl-20 md:text-left'}`}>
                    <div className="inline-block mb-3">
                      <span 
                        className="text-[10px] font-black tracking-[0.4em] uppercase py-1 px-3 rounded-md bg-slate-50 border border-slate-100"
                        style={{ color: step.color }}
                      >
                        {step.label}
                      </span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-black text-slate-900 mb-3 tracking-tighter">
                      {step.title}
                    </h3>
                    <p className="text-slate-500 text-base md:text-lg leading-relaxed max-w-md mx-auto md:mx-0 inline-block">
                      {step.description}
                    </p>
                  </div>

                  <div className="flex-shrink-0 my-6 md:my-0 flex items-center justify-center relative w-20 h-20 md:w-24 md:h-24">
                    <div className="absolute inset-0 rounded-full blur-2xl opacity-20" style={{ backgroundColor: step.color }}></div>
                    <div 
                      className="relative w-16 h-16 md:w-20 md:h-20 bg-white rounded-full flex items-center justify-center border-4 border-slate-50 shadow-xl z-20 transition-transform hover:scale-110"
                      style={{ borderColor: `${step.color}20` }}
                    >
                      <div className="text-slate-800" style={{ color: step.color }}>
                        {step.icon}
                      </div>
                      <div 
                        className="absolute -top-1 -right-1 w-7 h-7 rounded-full flex items-center justify-center text-[10px] font-black text-white shadow-lg"
                        style={{ backgroundColor: step.color }}
                      >
                        {step.id}
                      </div>
                    </div>
                  </div>
                  <div className="flex-1 hidden md:block"></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Schedule;
