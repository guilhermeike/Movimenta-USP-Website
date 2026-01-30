
import React from 'react';

const About: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <span className="bg-[#e67e22]/10 text-[#e67e22] px-4 py-2 rounded-full font-semibold text-xs uppercase tracking-widest mb-4 inline-block">Sobre o Projeto</span>
        <h2 className="text-4xl font-bold text-slate-900 mb-4 tracking-tight">Mais movimento com acompanhamento personalizado</h2>
        <p className="text-xl text-slate-500 max-w-3xl mx-auto">
          O Movimenta USP foi pensado para ajudar funcionários da Universidade de São Paulo na mudança de comportamento e incentivar a adição de práticas de atividade física na rotina.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {[
          { icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z", title: "Nosso objetivo", text: "Promover a mudança de comportamento para uma vida mais ativa, respeitando a rotina e o contexto real de cada participante." },
          { icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 005.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z", title: "Público-alvo", text: "Funcionários da USP entre 40 e 70 anos (campus Butantã) que desejam sair do sedentarismo de forma possível e acompanhada." },
          { icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z", title: "Promoção da Saúde", text: "Combate ao sedentarismo e prevenção de doenças crônicas através de metas personalizadas e mudança real de hábitos." },
          { icon: "M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z", title: "Equipe USP", text: "Acompanhamento contínuo por pesquisadores, médicos do esporte e profissionais de Educação Física da nossa universidade." },
          { icon: "M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7", title: "Totalmente gratuito", text: "Projeto voluntário e sem custos. Nosso foco é a sua saúde e a contribuição direta para o avanço da ciência na USP." },
          { icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z", title: "Monitoramento", text: "Uso de pulseiras inteligentes cedidas pelo projeto para fornecer feedback real sobre seu comportamento sedentário." }
        ].map((item, i) => (
          <div key={i} className="bg-white p-8 rounded-[32px] shadow-sm border border-slate-100 flex flex-col items-center text-center hover:shadow-md transition-shadow group">
            <div className="w-14 h-14 btn-gradient text-white rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-emerald-500/10 transition-transform group-hover:scale-110">
              <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3 text-slate-900 leading-tight">{item.title}</h3>
            <p className="text-slate-600 text-base leading-relaxed">
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
