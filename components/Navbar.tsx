
import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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

  const logoNormal = "https://i.imgur.com/d6pFWkf.png";
  const logoScrolled = "https://i.imgur.com/AABobz4.png";

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md h-16 md:h-20 shadow-md border-b border-slate-200' 
        : 'bg-white/90 backdrop-blur-sm h-24 md:h-28 border-b border-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex justify-between items-center h-full">
          {/* Logo - Tamanho e Imagem Dinâmicos */}
          <div className="flex items-center flex-shrink-0 cursor-pointer" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
            <div className={`flex items-center justify-center transition-all duration-300 ${
              isScrolled ? 'h-10 md:h-12' : 'h-14 md:h-18'
            }`}>
              <img 
                src={isScrolled ? logoScrolled : logoNormal} 
                alt="Logo Movimenta USP" 
                className="h-full w-auto object-contain transition-all duration-500 animate-in fade-in zoom-in-95"
                key={isScrolled ? 'scrolled' : 'normal'}
              />
            </div>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden xl:flex items-center space-x-4 2xl:space-x-6">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className={`text-slate-600 hover:text-[#43a089] font-bold transition-all duration-300 whitespace-nowrap ${
                  isScrolled ? 'text-xs' : 'text-sm'
                }`}
              >
                {link.name}
              </a>
            ))}
            <a href="#contato">
              <button className={`btn-gradient text-white rounded-full font-bold shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/40 hover:-translate-y-0.5 transition-all active:scale-95 whitespace-nowrap ml-2 ${
                isScrolled ? 'px-4 py-2 text-xs' : 'px-6 py-3 text-sm'
              }`}>
                Inscreva-se
              </button>
            </a>
          </div>

          {/* Mobile/Small Screens Nav Summary */}
          <div className="hidden lg:flex xl:hidden items-center space-x-4">
             <a href="#sobre" className={`text-slate-600 hover:text-[#43a089] font-bold transition-all ${isScrolled ? 'text-xs' : 'text-sm'}`}>Sobre</a>
             <a href="#contato">
              <button className={`btn-gradient text-white rounded-full font-bold shadow-lg shadow-emerald-500/20 transition-all ${
                isScrolled ? 'px-4 py-2 text-xs' : 'px-5 py-2.5 text-sm'
              }`}>
                Inscreva-se
              </button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-slate-600 hover:text-[#43a089] p-2 focus:outline-none transition-colors"
              aria-label="Abrir menu"
            >
              <svg className={`${isScrolled ? 'h-7 w-7' : 'h-8 w-8'} transition-all`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-100 animate-in slide-in-from-top duration-300 absolute w-full top-full left-0 shadow-xl">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="block px-3 py-3 text-base font-bold text-slate-600 hover:text-[#43a089] hover:bg-slate-50 rounded-xl transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4 px-3">
              <a href="#contato" onClick={() => setIsMenuOpen(false)}>
                <button className="w-full btn-gradient text-white px-6 py-4 rounded-xl font-bold shadow-lg shadow-emerald-500/20">
                  Inscreva-se Agora
                </button>
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
