
import React, { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "Sou servidor de outro campus da USP, posso participar?",
    answer: "Neste momento, o projeto é destinado exclusivamente a funcionários da USP que atuam no campus Butantã-Capital."
  },
  {
    question: "Já faço academia e treino regularmente, posso participar?",
    answer: "O projeto é voltado principalmente a pessoas que praticam pouca ou nenhuma atividade física atualmente. Se encaixam no programa participantes que praticam menos de 150 minutos de atividade física total durante a semana."
  },
  {
    question: "As atividades são presenciais ou online?",
    answer: "O projeto combina orientações e acompanhamento ao longo do programa. As informações detalhadas sobre formato e atividades específicas serão apresentadas aos participantes logo após a confirmação da inscrição."
  },
  {
    question: "Ganhei a pulseira inteligente?",
    answer: "A pulseira inteligente é cedida para uso obrigatório durante o período do projeto para monitoramento científico e deve ser devolvida à equipe ao final do acompanhamento."
  }
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <span className="bg-[#e67e22]/10 text-[#e67e22] px-4 py-2 rounded-full font-semibold text-xs uppercase tracking-widest mb-4 inline-block">FAQ</span>
        <h2 className="text-4xl font-bold text-slate-900 mb-4 tracking-tight">Perguntas Frequentes</h2>
        <p className="text-xl text-slate-500 max-w-2xl mx-auto">
          Tire suas principais dúvidas sobre o funcionamento do projeto, os critérios e a participação dos servidores.
        </p>
      </div>

      <div className="space-y-4">
        {faqData.map((item, index) => (
          <div 
            key={index}
            className={`group bg-white border border-slate-100 rounded-3xl transition-all duration-300 ${
              openIndex === index ? 'shadow-xl shadow-slate-200/50 border-[#43a089]/20' : 'hover:border-slate-300'
            }`}
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full px-8 py-7 text-left flex justify-between items-center focus:outline-none"
            >
              <span className={`text-xl font-bold transition-colors duration-300 ${
                openIndex === index ? 'text-[#43a089]' : 'text-slate-700 group-hover:text-slate-900'
              }`}>
                {item.question}
              </span>
              <div className={`flex-shrink-0 ml-4 w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 ${
                openIndex === index ? 'bg-[#43a089] text-white rotate-180' : 'bg-slate-100 text-slate-500 group-hover:bg-slate-200'
              }`}>
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </button>
            
            <div 
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                openIndex === index ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <div className="px-8 pb-8 text-lg text-slate-600 leading-relaxed border-t border-slate-50 pt-5">
                {item.answer}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 bg-slate-50 p-10 rounded-[32px] border border-dashed border-slate-200 text-center">
        <p className="text-lg text-slate-600 font-medium">
          Ainda tem dúvidas? Entre em contato pelo{' '}
          <a href="https://chat.whatsapp.com/sua-url-aqui" target="_blank" rel="noopener noreferrer" className="text-[#25D366] font-bold hover:underline">
            WhatsApp
          </a>{' '}
          ou pelo{' '}
          <a href="https://www.instagram.com/movimentausp" target="_blank" rel="noopener noreferrer" className="text-[#e67e22] font-bold hover:underline">
            Instagram
          </a>.
        </p>
      </div>
    </div>
  );
};

export default FAQ;
