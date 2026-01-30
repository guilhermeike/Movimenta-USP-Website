
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ScrollingBanner from './components/ScrollingBanner';
import StatementSection from './components/StatementSection';
import About from './components/About';
import Benefits from './components/Benefits';
import Criteria from './components/Criteria';
import Schedule from './components/Schedule';
import FAQ from './components/FAQ';
import Team from './components/Team';
import Contact from './components/Contact';
import Partners from './components/Partners';
import Footer from './components/Footer';
import DecorativeStrip from './components/DecorativeStrip';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <section id="inicio">
          <Hero />
        </section>

        {/* Banner de palavras rolantes logo após o Hero */}
        <ScrollingBanner />
        
        {/* Nova seção de impacto com a frase principal */}
        <StatementSection />

        <section id="sobre" className="py-20 bg-white">
          <About />
        </section>

        <section id="beneficios" className="py-20 bg-slate-50">
          <Benefits />
        </section>

        <section id="criterios" className="py-20 bg-white">
          <Criteria />
        </section>

        {/* Faixa decorativa entre critérios e nossa equipe */}
        <DecorativeStrip />

        <section id="equipe" className="py-20 bg-slate-50">
          <Team />
        </section>

        <section id="cronograma" className="py-20 bg-white overflow-hidden">
          <Schedule />
        </section>

        <section id="contato" className="py-12 md:py-16 bg-slate-900 text-white">
          <Contact />
        </section>

        <section id="faq" className="py-20 bg-white">
          <FAQ />
        </section>

        <section id="realizacao" className="py-16 bg-white border-t border-slate-50">
          <Partners />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default App;
