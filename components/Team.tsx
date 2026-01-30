
import React from 'react';
import { TeamMember } from '../types';

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Bruno Modesto",
    role: "Responsável / Pesquisador",
    specialty: "Doutorando e Educador da EEFE-USP. Especialista em ciência do comportamento e promoção da atividade física e saúde.",
    image: "https://i.imgur.com/UXzRzpX.png",
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
      </svg>
    )
  },
  {
    id: 2,
    name: "Luiz Riani Costa",
    role: "Orientação médica",
    specialty: "Médico do Esporte. Atua em projetos clínicos e comportamentais na EEFE-USP.",
    image: "https://i.imgur.com/8xf1FWH.png",
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    )
  },
  {
    id: 3,
    name: "Flavia Carvalho",
    role: "Pesquisadora",
    specialty: "Pesquisadora em atividade física, saúde e mudança de comportamento na EEFE-USP.",
    image: "https://i.imgur.com/YEF9KJP.png", 
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 005.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    )
  },
  {
    id: 4,
    name: "Caio Muraca",
    role: "Pesquisador",
    specialty: "Pesquisador em atividade física, saúde e mudança de comportamento na EEFE-USP.",
    image: "https://i.imgur.com/CWppRSR.png",
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    )
  },
  {
    id: 5,
    name: "Valmor Tricoli",
    role: "Orientador",
    specialty: "Professor Dr. da EEFE-USP e orientador da pesquisa.",
    image: "https://i.imgur.com/mhUbPxF.png",
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    )
  }
];

const Team: React.FC = () => {
  return (
    <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12">
      <div className="text-center mb-16">
        <span className="bg-[#e67e22]/10 text-[#e67e22] px-4 py-2 rounded-full font-semibold text-xs uppercase tracking-widest mb-4 inline-block">Nossa Equipe</span>
        <h2 className="text-4xl font-bold text-slate-900 mb-4 tracking-tight">Você não estará sozinho</h2>
        <p className="text-xl text-slate-500 max-w-2xl mx-auto">
          Uma equipe multidisciplinar qualificada da USP está pronta para acompanhar você em cada etapa da sua jornada rumo a uma vida mais ativa.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 xl:gap-10">
        {teamMembers.map((member) => (
          <div key={member.id} className="bg-white p-10 md:p-14 rounded-[56px] border border-slate-100 shadow-sm text-center group hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.12)] hover:-translate-y-4 transition-all duration-700 flex flex-col items-center">
            
            <div className="relative w-36 h-36 md:w-44 md:h-44 mb-10">
              <div className="absolute inset-0 bg-gradient-to-br from-[#e67e22] to-[#43a089] rounded-[40px] rotate-6 opacity-20 group-hover:rotate-12 transition-transform duration-700"></div>
              <div className="relative w-full h-full bg-slate-100 rounded-[40px] overflow-hidden border-4 border-white shadow-lg flex items-center justify-center">
                {member.image ? (
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                ) : (
                  <div className="flex flex-col items-center justify-center text-slate-300 p-4">
                    <div className="text-[#e67e22]/40 mb-3 transform scale-150">
                      {member.icon}
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-widest opacity-50">Foto em breve</span>
                  </div>
                )}
              </div>
            </div>

            <div className="flex-grow flex flex-col items-center">
              <h3 className="text-2xl font-black text-slate-900 mb-2 leading-tight tracking-tighter">{member.name}</h3>
              <p className="text-[#e67e22] font-bold text-[10px] md:text-xs mb-6 uppercase tracking-[0.15em]">{member.role}</p>
              <p className="text-slate-500 text-sm md:text-base leading-relaxed font-medium">
                {member.specialty}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
