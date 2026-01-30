
import React from 'react';

const Footer: React.FC = () => {
  const navLinks = [
    { name: 'Início', href: '#inicio' },
    { name: 'Sobre', href: '#sobre' },
    { name: 'Benefícios', href: '#beneficios' },
    { name: 'Critérios', href: '#criterios' },
    { name: 'Cronograma', href: '#cronograma' },
    { name: 'Equipe', href: '#equipe' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contato', href: '#contato' },
  ];

  return (
    <footer className="bg-slate-900 text-white py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0">
          {/* Logo - Tamanho reduzido e equilibrado */}
          <div className="flex items-center">
            <div className="h-20 md:h-24 lg:h-28 flex items-center justify-center">
              <img 
                src="https://i.imgur.com/d6pFWkf.png" 
                alt="Logo Movimenta USP" 
                className="h-full w-auto object-contain brightness-110"
              />
            </div>
          </div>
          
          {/* Menu de Navegação do Rodapé */}
          <div className="flex flex-wrap justify-center gap-x-8 md:gap-x-12 gap-y-4 text-slate-400 text-sm md:text-base font-bold">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="hover:text-white transition-colors duration-300 uppercase tracking-widest text-xs md:text-sm"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-slate-500 text-sm md:text-base font-medium">
            &copy; {new Date().getFullYear()} Movimenta USP.
          </div>
        </div>
        
        {/* Informações Institucionais */}
        <div className="mt-16 pt-8 border-t border-slate-800 text-center text-xs md:text-sm text-slate-500 max-w-3xl mx-auto leading-relaxed space-y-6">
          <p className="font-medium">
            Este projeto contribui para o avanço das pesquisas em saúde e bem-estar, sendo rigorosamente aprovado pelo Comitê de Ética da EEFE-USP e seguindo todas as normas éticas para pesquisas com seres humanos.
          </p>
          <div className="opacity-60 space-y-1">
            <p className="font-bold text-slate-400">Escola de Educação Física e Esporte da USP</p>
            <p>Cidade Universitária "Armando de Salles Oliveira", São Paulo - SP.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
