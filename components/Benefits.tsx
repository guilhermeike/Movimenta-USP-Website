
import React from 'react';
import { Benefit } from '../types';

const benefits: Benefit[] = [
  {
    id: 1,
    title: "Você não estará sozinho",
    description: "Acompanhamento por equipe especializada, composta por pesquisadores em mudança de comportamento, médicos, profissionais de educação física e enfermagem durante todo o processo.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 005.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    )
  },
  {
    id: 2,
    title: "Pulseira inteligente gratuita",
    description: "Dispositivo de última geração cedido gratuitamente durante os 4 meses do protocolo para monitoramento da atividade física e feedback em tempo real (como número de passos).",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18a6 6 0 100-12 6 6 0 000 12z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 6V3a1 1 0 011-1h4a1 1 0 011 1v3M9 18v3a1 1 0 001 1h4a1 1 0 001-1v-3" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v3l1.5 1.5" />
      </svg>
    )
  },
  {
    id: 3,
    title: "Prescrição segura",
    description: "Orientação e prescrição personalizada de atividade física, rigorosamente alinhada ao seu estado atual de saúde e condicionamento físico identificado nos testes.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    )
  },
  {
    id: 4,
    title: "Acesso ao CEPEUSP",
    description: "Possibilidade de participar dos cursos do CEPEUSP em fluxo contínuo mesmo após a conclusão do protocolo, sem necessidade de nova inscrição.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    )
  },
  {
    id: 5,
    title: "Relatório individual de saúde",
    description: "Relatório detalhado com dados de saúde e comportamento sedentário entregue ao final, incentivando reflexões e mudanças de hábitos de forma autônoma.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    )
  }
];

const Benefits: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <span className="bg-[#e67e22]/10 text-[#e67e22] px-4 py-2 rounded-full font-semibold text-xs uppercase tracking-widest mb-4 inline-block">Benefícios da Participação</span>
        <h2 className="text-4xl font-bold text-slate-900 mb-4 tracking-tight">O que você ganha ao participar?</h2>
        <p className="text-xl text-slate-500 max-w-2xl mx-auto">
          Além de contribuir para a ciência, você terá suporte completo para transformar sua rotina de forma sustentável e gratuita.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-8">
        {benefits.map((benefit, index) => (
          <div 
            key={benefit.id} 
            className="bg-white p-8 rounded-[32px] shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.33%-1.5rem)] min-h-[300px] flex flex-col group"
          >
            <div className={`w-12 h-12 btn-gradient rounded-xl flex items-center justify-center mb-6 shadow-lg transition-transform group-hover:scale-110 text-white ${
              index % 2 === 0 ? 'shadow-orange-500/20' : 'shadow-emerald-500/20'
            }`}>
              {benefit.icon}
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-4">{benefit.title}</h3>
            <p className="text-slate-600 leading-relaxed text-base">
              {benefit.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Benefits;
