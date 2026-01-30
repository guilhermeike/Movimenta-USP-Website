
import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-12 items-start">
        
        {/* Informações de Contato (Esquerda) */}
        <div className="lg:sticky lg:top-32">
          <span className="bg-[#e67e22]/20 text-[#e67e22] px-4 py-2 rounded-full font-semibold text-xs uppercase tracking-widest mb-4 inline-block tracking-[0.3em]">CONTATO</span>
          <h2 className="text-4xl font-black mb-6 tracking-tight text-white leading-tight">
            Pronto para o seu <br />
            <span className="brand-gradient-text">próximo passo?</span>
          </h2>
          <p className="text-slate-400 text-base md:text-lg mb-8 leading-relaxed max-w-lg">
            Estamos prontos para tirar suas dúvidas e te acompanhar nessa jornada. Entre no nosso grupo oficial para receber todas as informações em tempo real.
          </p>

          <div className="space-y-6">
            {/* E-mail */}
            <div className="flex items-start space-x-4 group">
              <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center flex-shrink-0 text-[#43a089] group-hover:bg-[#43a089] group-hover:text-white transition-all duration-300">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h4 className="font-bold text-white text-base">E-mail</h4>
                <a href="mailto:movimentausp@gmail.com" className="text-slate-400 hover:text-[#e67e22] transition-colors text-sm">movimentausp@gmail.com</a>
              </div>
            </div>

            {/* Instagram */}
            <div className="flex items-start space-x-4 group">
              <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center flex-shrink-0 text-[#43a089] group-hover:bg-[#e67e22] group-hover:text-white transition-all duration-300">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </div>
              <div>
                <h4 className="font-bold text-white text-base">Instagram</h4>
                <a 
                  href="https://www.instagram.com/movimentausp" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-slate-400 hover:text-[#e67e22] transition-colors text-sm"
                >
                  @movimentausp
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Lado Direito: Separação entre Inscrição e QR Code */}
        <div className="flex flex-col gap-6">
          
          {/* Card 1: Botão e Convite (Inscreva-se) */}
          <div className="bg-white rounded-[40px] p-8 md:p-10 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.3)] relative overflow-hidden group">
            <div className="relative z-10">
              <div className="flex items-center gap-5 mb-6">
                <div className="w-14 h-14 bg-[#25D366]/10 text-[#25D366] rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500 flex-shrink-0">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.94 3.659 1.437 5.634 1.437h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                </div>
                <h3 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tighter">Inscreva-se agora</h3>
              </div>
              
              <p className="text-slate-500 mb-8 leading-relaxed text-base md:text-lg">
                Acesse avisos sobre novas turmas e novidades exclusivas da pesquisa diretamente no seu WhatsApp.
              </p>
              
              <a 
                href="https://chat.whatsapp.com/sua-url-aqui" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full"
              >
                <button 
                  className="w-full bg-[#25D366] text-white font-bold py-5 rounded-[24px] shadow-xl shadow-[#25D366]/20 hover:shadow-[#25D366]/40 hover:-translate-y-1 transition-all active:scale-95 text-xl flex items-center justify-center group/btn"
                >
                  Entrar no Grupo
                  <svg className="w-6 h-6 ml-3 transition-transform group-hover/btn:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </button>
              </a>
            </div>
          </div>

          {/* Card 2: QR Code (Separação visual) */}
          <div className="bg-slate-800 rounded-[40px] p-8 md:p-10 shadow-lg relative overflow-hidden group flex flex-col md:flex-row items-center gap-8 border border-slate-700">
             <div className="flex-shrink-0 bg-white p-4 rounded-3xl shadow-inner group-hover:scale-105 transition-transform duration-500">
                <img 
                  src="https://i.imgur.com/wxzM4gj.png" 
                  alt="QR Code WhatsApp Movimenta USP"
                  className="w-32 h-32 md:w-40 md:h-40 object-contain"
                />
             </div>
             <div className="text-center md:text-left">
                <h4 className="text-white font-bold text-xl mb-2">Acesse pelo celular</h4>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Escaneie o QR Code ao lado para abrir o link do WhatsApp rapidamente em seu smartphone.
                </p>
             </div>
          </div>

        </div>

      </div>

      <style>{`
        @keyframes bounce-x {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(5px); }
        }
        .animate-bounce-x {
          animation: bounce-x 1s infinite;
        }
      `}</style>
    </div>
  );
};

export default Contact;
