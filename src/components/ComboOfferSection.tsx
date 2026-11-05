import React from 'react';
import { COMBO_DELIVERABLES } from '../data/landingData';
import { Check, ShieldCheck, Flame, Lock, Zap, ArrowRight, Star } from 'lucide-react';
import { CountdownTimer } from './CountdownTimer';
import comboMockupImg from '../assets/images/combo_mockup_cover_1793889843146.jpg';

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
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-pink-500/20 to-rose-500/20 border border-pink-500/40 text-pink-400 text-xs sm:text-sm font-bold uppercase tracking-wider mb-4 animate-pulse">
            <Flame className="w-4 h-4 text-pink-500 fill-pink-500" />
            <span>Condição Exclusiva de Black Friday</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white font-dream-orphans tracking-wide [text-wrap:balance]">
            Leve o <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-rose-300 to-pink-500">Combo Vitalício</span> com Desconto Máximo
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-300">
            Tudo o que você precisa para dominar a arte dos bolos perfeitos e ter uma vitrine de doces lucrativa vendendo todos os dias.
          </p>
          <div className="mt-6 flex justify-center">
            <CountdownTimer variant="compact" />
          </div>
        </div>

        {/* Main Mockup & Checkout Card */}
        <div className="relative rounded-3xl bg-[#18181b] border-2 border-pink-500/50 shadow-2xl shadow-pink-950/50 overflow-hidden">
          
          {/* Top highlight ribbon */}
          <div className="w-full bg-gradient-to-r from-pink-600 via-rose-600 to-pink-600 py-2 text-center text-xs sm:text-sm font-extrabold text-white tracking-widest uppercase">
            ⚡ OFERTA LIMITADA • ECONOMIZE R$ 900,00 NESTA BLACK FRIDAY ⚡
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 p-6 sm:p-10 lg:p-12 items-center">
            
            {/* Left Column: Mockup Image (Col 5) */}
            <div className="lg:col-span-5 flex flex-col items-center">
              <div className="relative w-full max-w-[360px] aspect-square rounded-2xl overflow-hidden bg-zinc-950 border border-pink-500/40 shadow-2xl group">
                <img
                  src={comboMockupImg}
                  alt="Mockup do Combo Vitalício Bolos do Zero + Doces de Vitrine"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-3 left-3 right-3 text-center">
                  <span className="text-xs font-bold text-pink-300 bg-black/80 backdrop-blur-md px-3 py-1 rounded-full border border-pink-500/30">
                    Acesso Imediato & Vitalício
                  </span>
                </div>
              </div>

              {/* Extra Mini-Trust Bar below image */}
              <div className="mt-6 flex items-center justify-center gap-1 text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400" />
                ))}
                <span className="ml-2 text-xs font-bold text-zinc-300">4.9/5 por mais de 5.000 alunas</span>
              </div>
            </div>

            {/* Right Column: Deliverables & Pricing (Col 7) */}
            <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
              
              <div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-dream-orphans tracking-wide">
                  Tudo o que você vai receber:
                </h3>
                <p className="text-xs sm:text-sm text-pink-400 font-semibold mt-1">
                  Acesso completo e irrestrito sem nenhuma cobrança futura.
                </p>
              </div>

              {/* Deliverables List (Exact items from prompt) */}
              <div className="space-y-3">
                {COMBO_DELIVERABLES.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-start justify-between gap-3 p-3 sm:p-3.5 rounded-xl bg-zinc-900/90 border border-zinc-800 hover:border-pink-500/30 transition-colors"
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-pink-500/20 text-pink-400 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3.5 h-3.5 stroke-[3]" />
                      </div>
                      <div>
                        <span className="text-sm sm:text-base font-bold text-white block">
                          {item.title}
                        </span>
                        <span className="text-xs text-zinc-400 block mt-0.5">
                          {item.desc}
                        </span>
                      </div>
                    </div>
                    <span className="text-xs font-mono text-zinc-500 line-through shrink-0 hidden sm:inline-block">
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>

              {/* Price Anchor (Exact numbers from prompt) */}
              <div className="p-6 rounded-2xl bg-gradient-to-br from-zinc-900 via-zinc-900 to-pink-950/40 border border-pink-500/40 shadow-inner">
                <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 border-b border-zinc-800 pb-4">
                  <div>
                    <span className="text-xs sm:text-sm text-zinc-400 uppercase tracking-wider block font-medium">
                      Preço Total dos Cursos Separados:
                    </span>
                    <span className="text-xl sm:text-2xl text-zinc-400 font-bold line-through font-mono">
                      De: R$ 2.597,00
                    </span>
                  </div>
                  <div className="text-left sm:text-right">
                    <span className="px-3 py-1 rounded-md bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-xs font-bold uppercase">
                      Desconto de Black Friday Aplicado
                    </span>
                  </div>
                </div>

                <div className="pt-4 text-left sm:text-center">
                  <span className="text-xs sm:text-sm font-semibold text-pink-300 uppercase tracking-widest block mb-1">
                    Por apenas:
                  </span>
                  <div className="flex items-baseline sm:justify-center gap-1.5 flex-wrap">
                    <span className="text-2xl sm:text-3xl font-black text-white">12x de</span>
                    <span className="text-4xl sm:text-5xl md:text-6xl font-black text-pink-400 font-mono tracking-tight drop-shadow-md">
                      R$ 186,00 <span className="text-lg text-pink-300">*</span>
                    </span>
                  </div>
                  <p className="mt-2 text-sm sm:text-base font-bold text-zinc-200">
                    Ou <span className="text-white font-extrabold text-lg sm:text-xl">R$ 1.697,00</span> à vista no PIX com liberação instantânea
                  </p>
                  <span className="text-[11px] text-zinc-400 block mt-1">
                    * Parcelamento no cartão de crédito em até 12x. Sem mensalidades ou anuidades.
                  </span>
                </div>
              </div>

              {/* Botão CTA Rosa Pink Chamativo com Animação */}
              <div className="pt-2">
                <button
                  onClick={onOpenCheckout}
                  className="w-full py-5 px-6 rounded-2xl bg-gradient-to-r from-pink-500 via-rose-500 to-pink-600 hover:from-pink-600 hover:via-rose-600 hover:to-pink-700 text-white font-black text-lg sm:text-xl uppercase tracking-wider shadow-2xl shadow-pink-600/50 animate-pink-pulse hover:shadow-pink-600/80 transition-all duration-300 transform active:scale-95 cursor-pointer flex items-center justify-center gap-3"
                >
                  <Zap className="w-6 h-6 text-amber-300 fill-amber-300" />
                  <span>QUERO GARANTIR MEU COMBO VITALÍCIO</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>

              {/* Trust Badges footer inside card */}
              <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-zinc-400 pt-2 border-t border-zinc-800/80">
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

      </div>
    </section>
  );
};
