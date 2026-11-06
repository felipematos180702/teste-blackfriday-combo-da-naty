import React from 'react';
import { COMBO_DELIVERABLES } from '../data/landingData';
import { Check, ShieldCheck, Flame, Lock, Zap, ArrowRight, Clock } from 'lucide-react';

interface ComboOfferSectionProps {
  onOpenCheckout: () => void;
}

export const ComboOfferSection: React.FC<ComboOfferSectionProps> = ({ onOpenCheckout }) => {
  return (
    <section id="oferta" className="py-20 md:py-28 relative bg-black border-t border-zinc-900">
      {/* Background glow effects */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-pink-600/20 blur-[160px] pointer-events-none rounded-full" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Pre-title */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <div className="inline-flex items-center justify-center gap-1.5 p-0 bg-transparent border-none shadow-none text-pink-400 text-xs sm:text-sm font-bold uppercase tracking-wider mb-3 animate-pulse whitespace-nowrap">
            <span>Condição Exclusiva de Black Friday</span>
            <Flame className="w-4 h-4 text-pink-500 fill-pink-500 shrink-0" />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white font-dream-orphans tracking-wide [text-wrap:balance]">
            Leve o <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-rose-300 to-pink-500">Combo Vitalício</span> com Desconto Máximo
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-300">
            Tudo o que você precisa para dominar a arte dos bolos perfeitos e ter uma vitrine de doces lucrativa vendendo todos os dias.
          </p>
          <div className="mt-6 flex justify-center">
            <div className="inline-flex items-center gap-2 bg-amber-500/10 px-4 py-2 rounded-xl border border-amber-500/40 text-xs sm:text-sm text-amber-300 font-bold">
              <Clock className="w-4 h-4 text-amber-400 shrink-0" />
              <span>Oferta por tempo limitado: válida apenas nas próximas 72 horas!</span>
            </div>
          </div>
        </div>

        {/* Main Mockup & Checkout Card (Centralizado) */}
        <div className="max-w-4xl mx-auto relative rounded-2xl sm:rounded-3xl bg-transparent sm:bg-[#18181b] border-y-2 sm:border-2 border-pink-500/50 shadow-2xl shadow-pink-950/50 overflow-hidden">
          
          {/* Top highlight ribbon */}
          <div className="w-full bg-gradient-to-r from-pink-600 via-rose-600 to-pink-600 py-2.5 text-center text-xs sm:text-sm font-extrabold text-white tracking-widest uppercase">
            ⚡ OFERTA LIMITADA • ECONOMIZE R$ 2.540,86 NESTA BLACK FRIDAY ⚡
          </div>

          <div className="p-6 sm:p-10 lg:p-12 flex flex-col items-center justify-between space-y-8">
            
            {/* Header: Deliverables & Pricing */}
            <div className="text-center max-w-2xl mx-auto">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white font-dream-orphans tracking-wide">
                Tudo o que você vai receber:
              </h3>
              <p className="text-xs sm:text-sm md:text-base text-pink-400 font-semibold mt-1.5">
                Acesso completo e irrestrito sem nenhuma cobrança futura.
              </p>
            </div>

            {/* Deliverables List (Exact items from prompt) */}
            <div className="space-y-3 w-full max-w-2xl mx-auto">
              {COMBO_DELIVERABLES.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-start justify-between gap-3 py-3 px-1 sm:p-4 rounded-none sm:rounded-xl bg-transparent sm:bg-zinc-900/90 border-b sm:border border-zinc-800/60 sm:border-zinc-800 hover:border-pink-500/30 transition-colors"
                >
                  <div className="flex items-start gap-3 text-left">
                    <div className="w-5 h-5 rounded-full bg-pink-500/20 text-pink-400 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                    </div>
                    <div>
                      <span className="text-sm sm:text-base font-bold text-white block">
                        {item.title}
                      </span>
                      <span className="text-xs sm:text-sm text-zinc-400 block mt-0.5">
                        {item.desc}
                      </span>
                    </div>
                  </div>
                  <div className="text-right shrink-0">
                    {item.value === "Incluso" ? (
                      <span className="text-xs sm:text-sm font-extrabold text-emerald-400 uppercase tracking-wide block whitespace-nowrap">
                        Incluso
                      </span>
                    ) : (
                      <>
                        <span className="text-xs font-mono text-zinc-400 font-semibold line-through block whitespace-nowrap">
                          {item.value}
                        </span>
                        {(item.title.includes("BÔNUS") || item.title.includes("SUPER BÔNUS")) && (
                          <span className="text-[11px] font-extrabold text-emerald-400 block mt-0.5 uppercase tracking-wide whitespace-nowrap">
                            Grátis hoje
                          </span>
                        )}
                      </>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Price Anchor (Exact numbers from prompt) */}
            <div className="w-full max-w-2xl mx-auto p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-zinc-900 via-zinc-900 to-pink-950/40 border border-pink-500/40 shadow-inner text-center">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-3 border-b border-zinc-800 pb-4">
                <div className="text-center sm:text-left space-y-0.5">
                  <span className="text-xs sm:text-sm text-zinc-400 uppercase tracking-wider block font-medium">
                    Preço de Todos os Cursos Separados:
                  </span>
                  <span className="text-lg sm:text-xl text-zinc-400 font-bold line-through font-mono block">
                    De: R$ 3.537,00
                  </span>
                  <span className="text-xs text-pink-300/90 block">
                    (Combo Normal Fora da Black: R$ 1.697,00)
                  </span>
                </div>
                <div className="text-center sm:text-right shrink-0">
                  <span className="px-3 py-1.5 rounded-lg bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 text-xs font-black uppercase tracking-wider block">
                    ECONOMIA DE R$ 2.540,86
                  </span>
                </div>
              </div>

              <div className="pt-5 text-center">
                <span className="text-xs sm:text-sm font-semibold text-pink-300 uppercase tracking-widest block mb-1">
                  Por apenas:
                </span>
                <div className="flex items-baseline justify-center gap-1 sm:gap-2 whitespace-nowrap">
                  <span className="text-lg min-[360px]:text-xl sm:text-3xl font-black text-white">12x de</span>
                  <span className="text-2xl min-[360px]:text-3xl sm:text-5xl md:text-6xl font-black text-pink-400 font-mono tracking-tight drop-shadow-md">
                    R$ 109,18 <span className="text-base sm:text-lg text-pink-300">*</span>
                  </span>
                </div>
                <p className="mt-2 text-xs sm:text-base font-bold text-zinc-200">
                  Ou <span className="text-white font-extrabold text-base sm:text-xl">R$ 996,14</span> à vista no PIX com liberação instantânea
                </p>
                <span className="text-[11px] text-zinc-400 block mt-1">
                  * Parcelamento no cartão de crédito em até 12x. Sem mensalidades ou anuidades.
                </span>
              </div>
            </div>

            {/* Botão CTA Rosa Pink Chamativo com Animação */}
            <div className="w-full max-w-2xl mx-auto pt-2">
              <button
                onClick={onOpenCheckout}
                className="w-full py-3.5 px-4 sm:py-5 sm:px-6 rounded-2xl bg-gradient-to-r from-pink-500 via-rose-500 to-pink-600 hover:from-pink-600 hover:via-rose-600 hover:to-pink-700 text-white font-black text-[15px] sm:text-xl uppercase tracking-wider shadow-2xl shadow-pink-600/50 animate-pink-pulse hover:shadow-pink-600/80 transition-all duration-300 transform active:scale-95 cursor-pointer flex items-center justify-center gap-2 sm:gap-3"
              >
                <Zap className="w-4 h-4 sm:w-6 sm:h-6 text-amber-300 fill-amber-300" />
                <span>QUERO GARANTIR MEU COMBO VITALÍCIO</span>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
            </div>

            {/* Trust Badges footer inside card */}
            <div className="w-full max-w-2xl mx-auto flex flex-wrap items-center justify-center gap-4 text-xs text-zinc-400 pt-4 border-t border-zinc-800/80">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-pink-400" />
                <span>Garantia Incondicional de 7 Dias</span>
              </div>
              <span className="hidden sm:inline text-zinc-700">•</span>
              <div className="flex items-center gap-1.5">
                <Lock className="w-4 h-4 text-emerald-400" />
                <span>Ambiente 100% Criptografado</span>
              </div>
              <span className="hidden sm:inline text-zinc-700">•</span>
              <div className="flex items-center gap-1.5">
                <Zap className="w-4 h-4 text-pink-400" />
                <span>Acesso Imediato no E-mail</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
