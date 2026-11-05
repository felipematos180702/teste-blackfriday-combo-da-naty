import React from 'react';
import { COMPARISON_DATA } from '../data/landingData';
import { XCircle, CheckCircle2, AlertTriangle, Sparkles, ArrowRight } from 'lucide-react';

interface ComparisonSectionProps {
  onOpenCheckout: () => void;
}

export const ComparisonSection: React.FC<ComparisonSectionProps> = ({ onOpenCheckout }) => {
  return (
    <section id="comparativo" className="py-20 md:py-28 relative bg-[#09090b] border-t border-zinc-900">
      
      {/* Background glow */}
      <div className="absolute top-1/2 right-1/4 w-[500px] h-[400px] bg-pink-600/10 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 md:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-pink-500/10 border border-pink-500/30 text-pink-400 text-xs font-bold uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Transformação Real</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white font-dream-orphans tracking-wide [text-wrap:balance]">
            A diferença entre insistir no erro e <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-rose-400">seguir um método validado</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-300">
            Veja como a sua rotina e o seu bolso mudam quando você tem o conhecimento prático de quem vive de confeitaria todos os dias.
          </p>
        </div>

        {/* Comparison Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-stretch">
          
          {/* Lado 1: Tentando Sozinha (Agora) */}
          <div className="rounded-3xl bg-[#141416] border border-zinc-800/80 p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden shadow-lg">
            <div className="absolute top-0 left-0 right-0 h-1 bg-zinc-700/60" />
            
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-zinc-800">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-zinc-400 block mb-1">
                    Cenário Atual
                  </span>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-zinc-200 font-dream-orphans tracking-wide flex items-center gap-2">
                    <AlertTriangle className="w-5 h-5 text-amber-500 shrink-0" />
                    <span>Tentando Sozinha (Agora)</span>
                  </h3>
                </div>
                <span className="px-3 py-1 rounded-full bg-zinc-800/80 text-zinc-400 text-xs font-semibold">
                  Imprevisível
                </span>
              </div>

              {/* Items */}
              <div className="space-y-5 mt-6">
                {COMPARISON_DATA.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3.5 p-3 rounded-xl bg-zinc-900/40 border border-zinc-800/50">
                    <XCircle className="w-5 h-5 text-rose-500/80 shrink-0 mt-0.5" />
                    <div>
                      <span className="text-xs font-bold text-zinc-400 uppercase tracking-wide block">
                        {item.aspect}
                      </span>
                      <p className="text-sm text-zinc-300 mt-0.5">
                        {item.before}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-zinc-800/60 text-center">
              <span className="text-xs text-zinc-400 italic">
                Resultado: Desânimo, prejuízo com ingredientes caros e dependência de sorte.
              </span>
            </div>
          </div>

          {/* Lado 2: Com o Combo Método Naty (Depois) */}
          <div className="rounded-3xl bg-[#18181b] border-2 border-pink-500/60 p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden shadow-2xl shadow-pink-950/40">
            {/* Top glowing bar */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-pink-500 via-rose-500 to-pink-500" />
            
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-zinc-800">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-pink-400 block mb-1">
                    Seu Novo Padrão
                  </span>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-white font-dream-orphans tracking-wide flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-pink-400 fill-pink-400 shrink-0" />
                    <span>Com o Combo Método Naty (Depois)</span>
                  </h3>
                </div>
                <span className="px-3 py-1 rounded-full bg-pink-500/20 border border-pink-500/40 text-pink-300 text-xs font-bold uppercase">
                  Lucro Real
                </span>
              </div>

              {/* Items */}
              <div className="space-y-5 mt-6">
                {COMPARISON_DATA.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3.5 p-3 rounded-xl bg-pink-950/20 border border-pink-500/30">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                    <div>
                      <span className="text-xs font-bold text-pink-300 uppercase tracking-wide block">
                        {item.aspect}
                      </span>
                      <p className="text-sm text-white font-medium mt-0.5">
                        {item.after}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-zinc-800 text-center">
              <button
                onClick={onOpenCheckout}
                className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-pink-500 to-rose-600 hover:from-pink-600 hover:to-rose-700 text-white font-bold text-sm uppercase tracking-wider shadow-lg shadow-pink-600/30 hover:scale-[1.01] active:scale-[0.99] transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                <span>QUERO A TRANSIÇÃO PARA O MÉTODO NATY</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
