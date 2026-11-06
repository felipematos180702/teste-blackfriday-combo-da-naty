/**
 * Landing Page de Alta Conversão - Black Friday
 * Combo Vitalício: Bolos do Zero + Doces de Vitrine (Doces da Naty)
 */

import React, { useState } from 'react';
import { InfiniteTicker } from './components/InfiniteTicker';
import { HeroSection } from './components/HeroSection';
import { CoursesSection } from './components/CoursesSection';
import { ComboOfferSection } from './components/ComboOfferSection';
import { ComparisonSection } from './components/ComparisonSection';
import { TestimonialsMarquee } from './components/TestimonialsMarquee';
import { AboutFounderSection } from './components/AboutFounderSection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { CheckoutModal } from './components/CheckoutModal';

export default function App() {
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  const handleOpenCheckout = () => {
    setIsCheckoutOpen(true);
  };

  const handleCloseCheckout = () => {
    setIsCheckoutOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#09090b] text-[#f4f4f5] font-['Montserrat',sans-serif] selection:bg-pink-500 selection:text-white relative">
      
      {/* 1. CARROSSEL INFINITO NO TOPO (HERO HEADER) */}
      <InfiniteTicker />

      <main>
        {/* 2. HERO SECTION */}
        <HeroSection onOpenCheckout={handleOpenCheckout} />

        {/* 3. SEÇÃO: OS DOIS CURSOS INCLUÍDOS */}
        <CoursesSection onOpenCheckout={handleOpenCheckout} />

        {/* 4. SEÇÃO: MOCKUP DO COMBO & ENTREGAS (LISTA DE CHECKOUT) */}
        <ComboOfferSection onOpenCheckout={handleOpenCheckout} />

        {/* 5. SEÇÃO: TABELA COMPARATIVA "AGORA X DEPOIS" */}
        <ComparisonSection onOpenCheckout={handleOpenCheckout} />

        {/* 6. SEÇÃO: DEPOIMENTOS (CARROSSEL INFINITO SEM MARGENS INVISÍVEIS) */}
        <TestimonialsMarquee />

        {/* 7. SEÇÃO: SOBRE A PRODUTORA NATY */}
        <AboutFounderSection onOpenCheckout={handleOpenCheckout} />

        {/* FAQ - Dúvidas Frequentes */}
        <FaqSection onOpenCheckout={handleOpenCheckout} />
      </main>

      {/* 8. RODAPÉ (FOOTER) */}
      <Footer />

      {/* Checkout Modal Interativo */}
      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={handleCloseCheckout}
      />

    </div>
  );
}
