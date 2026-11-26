import React, { useState } from 'react';
import { FAQ_ITEMS } from '../data/landingData';
import { ChevronDown, HelpCircle, MessageSquare } from 'lucide-react';

interface FaqSectionProps {
  onOpenCheckout: () => void;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ onOpenCheckout }) => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-10 md:py-28 relative bg-black border-t border-zinc-900">
      
      {/* Background glow */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-pink-600/10 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 md:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-pink-500/10 border border-pink-500/30 text-pink-400 text-xs font-bold uppercase tracking-widest mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Tire Suas Dúvidas</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-dream-orphans tracking-wide [text-wrap:balance]">
            Perguntas Frequentes sobre o <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-rose-400">Combo Vitalício</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-zinc-300">
            Tudo o que você precisa saber antes de garantir sua vaga com desconto de Black Friday.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-3">
          {FAQ_ITEMS.map((item, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl bg-[#18181b] border border-zinc-800/90 hover:border-pink-500/40 transition-all overflow-hidden"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-bold text-white font-montserrat">
                    {item.question}
                  </span>
                  <div className={`w-8 h-8 rounded-full bg-zinc-900 flex items-center justify-center shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 bg-pink-500/20 text-pink-400' : 'text-zinc-400'}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 sm:px-6 sm:pb-6 pt-0 text-sm sm:text-base text-zinc-300 leading-relaxed border-t border-zinc-800/60 mt-1">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Direct WhatsApp / Support link */}
        <div className="mt-12 p-6 rounded-2xl bg-zinc-900/60 border border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-pink-500/20 text-pink-400 flex items-center justify-center shrink-0">
              <MessageSquare className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">Ainda tem alguma dúvida específica?</h4>
              <p className="text-xs text-zinc-400">Nossa equipe de suporte está de plantão na Black Friday.</p>
            </div>
          </div>

          <a
            href="https://wa.me/553193476920"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-white font-semibold text-xs sm:text-sm whitespace-nowrap transition-colors cursor-pointer inline-block"
          >
            Falar com Suporte
          </a>
        </div>

      </div>
    </section>
  );
};

