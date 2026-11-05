import React, { useState } from 'react';
import { Sparkles, Menu, X } from 'lucide-react';

interface NavbarProps {
  onOpenCheckout: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenCheckout }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full bg-[#09090b]/90 backdrop-blur-md border-b border-zinc-800/80 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Wordmark (Single text element) */}
        <a 
          href="#" 
          className="text-lg sm:text-xl font-black tracking-tight text-white flex items-center gap-2 whitespace-nowrap shrink-0 hover:text-pink-400 transition-colors"
        >
          <span className="w-8 h-8 rounded-lg bg-gradient-to-tr from-pink-600 to-rose-500 flex items-center justify-center text-white shadow-md shadow-pink-500/20">
            <Sparkles className="w-4 h-4" />
          </span>
          <span className="font-['Outfit',sans-serif]">Doces da Naty</span>
          <span className="text-[10px] font-bold text-pink-400 bg-pink-500/10 border border-pink-500/30 px-2 py-0.5 rounded-full uppercase tracking-wider hidden sm:inline-block">
            Black Friday
          </span>
        </a>

        {/* Zone 2: 4-5 Clean single-line text navigation links */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-zinc-300">
          <a href="#cursos" className="hover:text-pink-400 transition-colors whitespace-nowrap shrink-0">
            Os Cursos
          </a>
          <a href="#comparativo" className="hover:text-pink-400 transition-colors whitespace-nowrap shrink-0">
            Comparativo
          </a>
          <a href="#depoimentos" className="hover:text-pink-400 transition-colors whitespace-nowrap shrink-0">
            Depoimentos
          </a>
          <a href="#sobre" className="hover:text-pink-400 transition-colors whitespace-nowrap shrink-0">
            Sobre a Naty
          </a>
          <a href="#faq" className="hover:text-pink-400 transition-colors whitespace-nowrap shrink-0">
            Dúvidas
          </a>
        </nav>

        {/* Zone 3: 1 Primary Action */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={onOpenCheckout}
            className="hidden sm:inline-flex items-center justify-center px-5 py-2.5 text-xs md:text-sm font-bold text-white bg-gradient-to-r from-pink-500 to-rose-600 hover:from-pink-600 hover:to-rose-700 rounded-xl transition-all shadow-md shadow-pink-600/30 hover:shadow-pink-600/50 hover:scale-[1.02] active:scale-[0.98] whitespace-nowrap shrink-0 cursor-pointer"
          >
            QUERO O COMBO VITALÍCIO
          </button>

          {/* Mobile hamburger toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-zinc-400 hover:text-white rounded-lg hover:bg-zinc-800 focus:outline-none"
            aria-label="Abrir menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-zinc-950 border-b border-zinc-800 px-4 pt-3 pb-6 space-y-3">
          <nav className="flex flex-col space-y-2 text-sm font-medium text-zinc-300">
            <a
              href="#cursos"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-zinc-900 hover:text-pink-400"
            >
              Os 2 Cursos Inclusos
            </a>
            <a
              href="#oferta"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-zinc-900 hover:text-pink-400"
            >
              Oferta & Entregas
            </a>
            <a
              href="#comparativo"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-zinc-900 hover:text-pink-400"
            >
              Tabela Agora X Depois
            </a>
            <a
              href="#depoimentos"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-zinc-900 hover:text-pink-400"
            >
              Depoimentos de Alunas
            </a>
            <a
              href="#sobre"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-zinc-900 hover:text-pink-400"
            >
              Sobre a Professora Naty
            </a>
            <a
              href="#faq"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-zinc-900 hover:text-pink-400"
            >
              Perguntas Frequentes
            </a>
          </nav>

          <div className="pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCheckout();
              }}
              className="w-full py-3 text-center text-sm font-bold text-white bg-gradient-to-r from-pink-500 to-rose-600 rounded-xl shadow-lg shadow-pink-600/40"
            >
              GARANTIR COMBO VITALÍCIO
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
