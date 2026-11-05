import React from 'react';
import { Instagram, Sparkles, Shield, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-zinc-900 text-zinc-400 text-xs py-14 pb-20 md:pb-14">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Main Footer Row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-zinc-800">
          
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center gap-2 text-white font-black text-lg">
              <span className="w-7 h-7 rounded-lg bg-pink-600 flex items-center justify-center text-white">
                <Sparkles className="w-3.5 h-3.5" />
              </span>
              <span className="font-dream-orphans font-extrabold tracking-wide">Combo Vitalício Doces da Naty</span>
            </div>
            <p className="text-zinc-500 text-xs mt-1">
              Bolos do Zero + Doces de Vitrine • Edição Especial de Black Friday
            </p>
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

        {/* Legal Disclaimer & Notice */}
        <div className="space-y-4 text-zinc-300 text-[11px] leading-relaxed max-w-4xl mx-auto text-center md:text-left">
          <p>
            <strong className="text-zinc-400">Aviso Legal & Termos de Resultados:</strong> Os resultados mencionados nesta página, faturamentos, depoimentos de alunas e estratégias de vitrine são baseados na vivência real da loja Doces da Naty e nos casos práticos de alunas que aplicaram o método com dedicação. Os resultados individuais podem variar de acordo com o esforço, dedicação, localidade e aplicação consistente dos processos ensinados. Nenhuma promessa de ganho fácil é feita.
          </p>
          <p>
            Este produto não garante a obtenção de resultados financeiros sem trabalho prático. Ao adquirir o Combo Vitalício, você tem direito a 7 dias de garantia incondicional para testar todo o conteúdo. Pagamento processado em ambiente 100% seguro com criptografia de ponta a ponta.
          </p>
        </div>

        {/* Copyright & Signoff */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-zinc-900 text-zinc-400 text-xs">
          <p>
            © 2026 <strong className="text-zinc-300">Combo Vitalício Doces da Naty</strong>. Todos os direitos reservados.
          </p>

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
