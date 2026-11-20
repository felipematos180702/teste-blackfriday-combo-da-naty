import React from 'react';
import { Check, X, ArrowRight } from 'lucide-react';

interface ComparisonSectionProps {
  onOpenCheckout: () => void;
}

const COMPARISON_ITEMS = [
  { title: 'Curso Completo Bolos do Zero', nessaBlack: true, depois: true },
  { title: 'Curso Completo Doces de Vitrine', nessaBlack: true, depois: true },
  { title: 'Bônus: Curso de Bolo no Pote', nessaBlack: true, depois: false },
  { title: 'Bônus: Curso Slices Cakes', nessaBlack: true, depois: false },
  { title: 'Bônus: Curso de Fotos (para inscritas no dia 30/11)', nessaBlack: true, depois: false },
  { title: 'Super Bônus: Mentoria Individual 6 Meses (1ª aluna)', nessaBlack: true, depois: false },
  { title: 'Acesso Vitalício sem renovação anual', nessaBlack: true, depois: false },
];

export const ComparisonSection: React.FC<ComparisonSectionProps> = ({ onOpenCheckout }) => {
  return (
    <section id="comparativo" className="py-20 md:py-28 relative bg-[#09090b] border-t border-zinc-900">
      
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-pink-600/10 blur-[160px] pointer-events-none rounded-full" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Header no Estilo Exato da Imagem */}
        <div className="text-center max-w-4xl mx-auto mb-12 sm:mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.4rem] font-black tracking-tight font-dream-orphans leading-[1.05] uppercase [text-wrap:balance]">
            <span className="text-white block">VOCÊ PAGA MENOS.</span>
            <span className="text-pink-500 block mt-1.5">E LEVA MUITO MAIS.</span>
          </h2>
        </div>

        {/* Comparison Table: Estilo Idêntico à Imagem sem Rolagem no Mobile */}
        <div className="max-w-4xl mx-auto w-full">
          <div className="w-full">
            
            {/* Header da Tabela */}
            <div className="grid grid-cols-12 items-center">
              <div className="col-span-6 py-2 sm:py-4 pr-1 sm:pr-4"></div>
              <div className="col-span-3 py-2 sm:py-3 text-center bg-pink-950/25 border-x border-t border-pink-500/30 rounded-t-xl sm:rounded-t-2xl px-1">
                <span className="text-[10px] min-[380px]:text-xs sm:text-sm font-black uppercase tracking-wider text-pink-400 leading-tight block">
                  NESSA BLACK
                </span>
              </div>
              <div className="col-span-3 py-2 sm:py-3 text-center px-1">
                <span className="text-[10px] min-[380px]:text-xs sm:text-sm font-bold uppercase tracking-wider text-zinc-400 leading-tight block">
                  DEPOIS
                </span>
              </div>
            </div>

            {/* Linha de Preço */}
            <div className="grid grid-cols-12 items-center border-t border-b border-zinc-800/80">
              <div className="col-span-6 py-2.5 sm:py-4 pr-1 sm:pr-4 text-left">
                <span className="text-xs sm:text-lg font-black text-white">
                  Preço
                </span>
              </div>
              <div className="col-span-3 py-2.5 sm:py-4 text-center bg-pink-950/25 border-x border-pink-500/30 px-1">
                <span className="text-xs sm:text-lg md:text-xl font-black text-white font-montserrat whitespace-nowrap">
                  R$ 996,14
                </span>
              </div>
              <div className="col-span-3 py-2.5 sm:py-4 text-center px-1">
                <span className="text-xs sm:text-lg md:text-xl font-bold text-zinc-400 font-montserrat whitespace-nowrap">
                  R$ 1.697
                </span>
              </div>
            </div>

            {/* Linhas de Itens / Entregas */}
            {COMPARISON_ITEMS.map((item, idx) => {
              const isLast = idx === COMPARISON_ITEMS.length - 1;
              return (
                <div
                  key={idx}
                  className="grid grid-cols-12 items-center border-b border-zinc-800/70 hover:bg-zinc-900/20 transition-colors"
                >
                  <div className="col-span-6 py-2.5 sm:py-4 pr-1.5 sm:pr-4 text-left">
                    <span className="text-[11px] sm:text-base text-zinc-200 font-medium leading-tight block">
                      {item.title}
                    </span>
                  </div>

                  <div
                    className={`col-span-3 py-2.5 sm:py-4 flex items-center justify-center bg-pink-950/25 border-x border-pink-500/30 ${
                      isLast ? 'rounded-b-xl sm:rounded-b-2xl border-b' : ''
                    }`}
                  >
                    {item.nessaBlack ? (
                      <Check className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-400 stroke-[2.5]" />
                    ) : (
                      <X className="w-4 h-4 sm:w-5 sm:h-5 text-rose-500 stroke-[2.5]" />
                    )}
                  </div>

                  <div className="col-span-3 py-2.5 sm:py-4 flex items-center justify-center">
                    {item.depois ? (
                      <Check className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-400 stroke-[2.5]" />
                    ) : (
                      <X className="w-4 h-4 sm:w-5 sm:h-5 text-rose-500 stroke-[2.5]" />
                    )}
                  </div>
                </div>
              );
            })}

          {/* Botão de Ação pós-tabela */}
          <div className="mt-12 text-center max-w-md mx-auto">
            <a
              href="https://pay.hotmart.com/H103943890J?off=pt1g1tq0&checkoutMode=10"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 px-4 sm:py-5 sm:px-6 rounded-2xl bg-gradient-to-r from-pink-500 via-rose-500 to-pink-600 hover:from-pink-600 hover:via-rose-600 hover:to-pink-700 text-white font-black text-[15px] sm:text-lg uppercase tracking-wider shadow-xl shadow-pink-600/40 animate-pink-pulse hover:shadow-pink-600/70 transition-all duration-300 transform active:scale-95 cursor-pointer flex items-center justify-center gap-2"
            >
              <span>QUERO GARANTIR NESSA BLACK</span>
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </a>
            <p className="mt-2.5 text-xs text-zinc-400">
              Acesso vitalício a todos os cursos e bônus • Economia de R$ 2.540,86 • Garantia de 7 dias
            </p>
          </div>

        </div>

      </div>

    </div>
  </section>
  );
};
