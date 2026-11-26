import React, { useState } from 'react';
import { Instagram, Heart, ChevronDown } from 'lucide-react';
import footerLogo from '../assets/images/footer_logo.png';

export const Footer: React.FC = () => {
  const [showDisclaimer, setShowDisclaimer] = useState(false);

  return (
    <footer className="bg-black border-t border-zinc-900 text-zinc-400 text-xs py-10 md:py-14">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 md:space-y-10">
        
        {/* Main Footer Row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-zinc-800">
          
          {/* Brand */}
          <div className="flex items-center gap-3.5 sm:gap-4 text-left">
            <img
              src={footerLogo}
              alt="Logo Doces da Naty"
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).src = 'https://lh3.googleusercontent.com/d/1czafJNdOklNDWUkp0ec-4aloa40i42su';
              }}
              className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl object-contain shrink-0"
            />
            <div className="flex flex-col justify-center">
              <span className="font-dream-orphans font-extrabold text-lg sm:text-xl text-white tracking-wide">
                Combo Vitalício Doces da Naty
              </span>
              <p className="text-zinc-400 text-xs sm:text-sm mt-0.5">
                Bolos do Zero + Doces de Vitrine • Edição Especial de Black Friday
              </p>
            </div>
          </div>

          {/* Instagram Links (Exact from prompt) */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href="https://instagram.com/docesdanaty___"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 hover:text-pink-400 border border-zinc-800 text-zinc-300 transition-colors"
            >
              <Instagram className="w-4 h-4 text-pink-500" />
              <span>@docesdanaty___</span>
            </a>
            <a
              href="https://instagram.com/cursosdocesdanaty"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 hover:text-pink-400 border border-zinc-800 text-zinc-300 transition-colors"
            >
              <Instagram className="w-4 h-4 text-pink-500" />
              <span>@cursosdocesdanaty</span>
            </a>
          </div>

        </div>

        {/* Legal Disclaimer & Notice (Collapsible) */}
        <div className="max-w-4xl mx-auto text-center md:text-left">
          <button
            type="button"
            onClick={() => setShowDisclaimer((prev) => !prev)}
            className="inline-flex items-center gap-1.5 text-zinc-400 hover:text-zinc-200 transition-colors cursor-pointer text-[11px] font-bold"
            aria-expanded={showDisclaimer}
          >
            <strong>Aviso Legal & Termos de Resultados</strong>
            <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${showDisclaimer ? 'rotate-180 text-pink-400' : ''}`} />
          </button>

          {showDisclaimer && (
            <div className="mt-3 space-y-3 text-zinc-300 text-[11px] leading-relaxed">
              <p>
                Os resultados mencionados nesta página, faturamentos, depoimentos de alunas e estratégias de vitrine são baseados na vivência real da loja Doces da Naty e nos casos práticos de alunas que aplicaram o método com dedicação. Os resultados individuais podem variar de acordo com o esforço, dedicação, localidade e aplicação consistente dos processos ensinados. Nenhuma promessa de ganho fácil é feita.
              </p>
              <p>
                Este produto não garante a obtenção de resultados financeiros sem trabalho prático. Ao adquirir o Combo Vitalício, você tem direito a 7 dias de garantia incondicional para testar todo o conteúdo. Pagamento processado em ambiente 100% seguro com criptografia de ponta a ponta.
              </p>
            </div>
          )}
        </div>

        {/* Copyright, CNPJ & Signoff */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-zinc-900 text-zinc-400 text-xs text-center sm:text-left">
          <div className="space-y-1">
            <p>
              © 2026 <strong className="text-zinc-300">Combo Vitalício Doces da Naty</strong>. Todos os direitos reservados.
            </p>
            <p className="text-[11px] text-zinc-300">
              <strong className="text-zinc-200">CURSOS DOCES DA NATY LTDA</strong> • CNPJ: <span className="font-montserrat">40.931.678/0001-02</span>
            </p>
          </div>

          <div className="flex items-center gap-4 text-zinc-400">
            <span>Privacidade</span>
            <span>•</span>
            <span>Termos de Uso</span>
            <span>•</span>
            <span className="flex items-center gap-1 text-pink-500/80">
              <Heart className="w-3 h-3 fill-pink-500" />
              <span>Confeitaria Descomplicada</span>
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
};
