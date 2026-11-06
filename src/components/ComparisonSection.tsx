import React from 'react';
import { Check, X, ArrowRight } from 'lucide-react';

interface ComparisonSectionProps {
  onOpenCheckout: () => void;
}

const COMPARISON_ITEMS = [
  { title: 'Curso Completo Bolos do Zero', nessaBlack: true, depois: true },
  { title: 'Curso Completo Doces de Vitrine', nessaBlack: true, depois: false },
  { title: 'Acesso Vitalício sem renovação anual', nessaBlack: true, depois: false },
  { title: 'Estratégia de Degustação Paga (Fatias Lucrativas)', nessaBlack: true, depois: false },
  { title: 'Planilhas Automatizadas de Precificação Real', nessaBlack: true, depois: false },
  { title: 'Engenharia de Vitrine & Delivery de Vendas Diárias', nessaBlack: true, depois: false },
  { title: 'Acesso a Todas as Novas Atualizações e Receitas', nessaBlack: true, depois: false },
  { title: 'Suporte Direto com a Equipe Doces da Naty', nessaBlack: true, depois: false },
  { title: 'Certificados Oficiais Inclusos', nessaBlack: true, depois: false },
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

        {/* Comparison Table: Estilo Idêntico à Imagem */}
        <div className="max-w-4xl mx-auto w-full">
          <div className="overflow-x-auto pb-2">
            <div className="min-w-[560px]">
              
              {/* Header da Tabela */}
              <div className="grid grid-cols-12 items-center">
                <div className="col-span-6 sm:col-span-6 py-4 pr-4"></div>
                <div className="col-span-3 sm:col-span-3 py-3 text-center bg-pink-950/25 border-x border-t border-pink-500/30 rounded-t-2xl">
                  <span className="text-xs sm:text-sm font-black uppercase tracking-widest text-pink-400">
                    NESSA BLACK
                  </span>
                </div>
                <div className="col-span-3 sm:col-span-3 py-3 text-center">
                  <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-zinc-400">
                    DEPOIS
                  </span>
                </div>
              </div>

              {/* Linha de Preço */}
              <div className="grid grid-cols-12 items-center border-t border-b border-zinc-800/80">
                <div className="col-span-6 sm:col-span-6 py-4 pr-4 text-left">
                  <span className="text-base sm:text-lg font-black text-white">
                    Preço
                  </span>
                </div>
                <div className="col-span-3 sm:col-span-3 py-4 text-center bg-pink-950/25 border-x border-pink-500/30">
                  <span className="text-base sm:text-lg md:text-xl font-black text-white font-mono">
                    R$ 1.697
                  </span>
                </div>
                <div className="col-span-3 sm:col-span-3 py-4 text-center">
                  <span className="text-base sm:text-lg md:text-xl font-bold text-zinc-400 font-mono">
                    R$ 2.597
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
                    <div className="col-span-6 sm:col-span-6 py-3.5 sm:py-4 pr-4 text-left">
                      <span className="text-sm sm:text-base text-zinc-200 font-medium">
                        {item.title}
                      </span>
                    </div>

                    <div
                      className={`col-span-3 sm:col-span-3 py-3.5 sm:py-4 flex items-center justify-center bg-pink-950/25 border-x border-pink-500/30 ${
                        isLast ? 'rounded-b-2xl border-b' : ''
                      }`}
                    >
                      {item.nessaBlack ? (
                        <Check className="w-5 h-5 text-emerald-400 stroke-[2.5]" />
                      ) : (
                        <X className="w-5 h-5 text-rose-500 stroke-[2.5]" />
                      )}
                    </div>

                    <div className="col-span-3 sm:col-span-3 py-3.5 sm:py-4 flex items-center justify-center">
                      {item.depois ? (
                        <Check className="w-5 h-5 text-emerald-400 stroke-[2.5]" />
                      ) : (
                        <X className="w-5 h-5 text-rose-500 stroke-[2.5]" />
                      )}
                    </div>
                  </div>
                );
              })}

            </div>
          </div>

          {/* Botão de Ação pós-tabela */}
          <div className="mt-12 text-center max-w-md mx-auto">
            <button
              onClick={onOpenCheckout}
              className="w-full py-5 px-6 rounded-2xl bg-gradient-to-r from-pink-500 via-rose-500 to-pink-600 hover:from-pink-600 hover:via-rose-600 hover:to-pink-700 text-white font-black text-base sm:text-lg uppercase tracking-wider shadow-xl shadow-pink-600/40 animate-pink-pulse hover:shadow-pink-600/70 transition-all duration-300 transform active:scale-95 cursor-pointer flex items-center justify-center gap-2"
            >
              <span>QUERO GARANTIR NESSA BLACK</span>
              <ArrowRight className="w-5 h-5" />
            </button>
            <p className="mt-2.5 text-xs text-zinc-400">
              Acesso vitalício aos 2 cursos • Economia de R$ 900,00 • Garantia de 7 dias
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
