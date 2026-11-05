import React from 'react';
import { FOUNDER_INFO } from '../data/landingData';
import { Award, Users, Store, Heart, Instagram, Sparkles, ArrowRight } from 'lucide-react';

interface AboutFounderSectionProps {
  onOpenCheckout: () => void;
}

export const AboutFounderSection: React.FC<AboutFounderSectionProps> = ({ onOpenCheckout }) => {
  const getMetricIcon = (idx: number) => {
    switch (idx) {
      case 0:
        return <Users className="w-5 h-5 text-pink-400" />;
      case 1:
        return <Store className="w-5 h-5 text-pink-400" />;
      case 2:
        return <Award className="w-5 h-5 text-pink-400" />;
      default:
        return <Heart className="w-5 h-5 text-pink-400" />;
    }
  };

  return (
    <section id="sobre" className="py-20 md:py-28 relative bg-[#09090b] border-t border-zinc-900">
      
      {/* Background glow */}
      <div className="absolute top-1/2 left-10 w-96 h-96 bg-pink-600/10 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Header tag */}
        <div className="text-center sm:text-left mb-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-pink-500/10 border border-pink-500/30 text-pink-400 text-xs font-bold uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Sua Mentora & Confeiteira</span>
          </div>
        </div>

        {/* 2-Column Split: Image & Bio */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Column Left: High-Res Portrait (Col 5) */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="relative w-full max-w-[380px] aspect-[3/4] rounded-3xl overflow-hidden bg-zinc-900 border-2 border-pink-500/40 shadow-2xl shadow-pink-950/40 group">
              <img
                src={FOUNDER_INFO.image}
                alt="Natascha - Fundadora da Doces da Naty"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
              
              <div className="absolute bottom-4 left-4 right-4">
                <span className="text-xs font-bold text-pink-400 uppercase tracking-widest block">
                  Doces da Naty
                </span>
                <h3 className="text-xl font-extrabold text-white font-dream-orphans tracking-wide">
                  Natascha
                </h3>
                <p className="text-xs text-zinc-300">
                  De ex-CLT a confeitaria própria e mais de 5.000 alunas
                </p>
              </div>
            </div>

            {/* Social links under photo */}
            <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
              <a
                href="https://instagram.com/docesdanaty___"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-900 hover:bg-zinc-800 text-xs text-pink-400 border border-zinc-800 transition-colors"
              >
                <Instagram className="w-3.5 h-3.5" />
                <span>@docesdanaty___</span>
              </a>
              <a
                href="https://instagram.com/cursosdocesdanaty"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-900 hover:bg-zinc-800 text-xs text-pink-400 border border-zinc-800 transition-colors"
              >
                <Instagram className="w-3.5 h-3.5" />
                <span>@cursosdocesdanaty</span>
              </a>
            </div>
          </div>

          {/* Column Right: Exact Bio Copy (Col 7) */}
          <div className="lg:col-span-7 flex flex-col space-y-6">
            
            {/* Título Exato */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white font-dream-orphans tracking-wide leading-snug [text-wrap:balance]">
              {FOUNDER_INFO.title}
            </h2>

            {/* Texto Bio Exato (3 parágrafos) */}
            <div className="space-y-4 text-sm sm:text-base text-zinc-300 leading-relaxed font-normal">
              {FOUNDER_INFO.bioParagraphs.map((paragraph, idx) => (
                <p key={idx}>
                  {paragraph}
                </p>
              ))}
            </div>

            {/* CTA inline */}
            <div className="pt-2">
              <button
                onClick={onOpenCheckout}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-pink-600 hover:bg-pink-700 text-white font-bold text-sm uppercase tracking-wider transition-colors shadow-lg shadow-pink-900/40 cursor-pointer"
              >
                <span>Aprender com a Naty no Combo</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>

        {/* 4 Cards de Métricas no rodapé da bio */}
        <div className="mt-16 pt-12 border-t border-zinc-800/80">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {FOUNDER_INFO.metrics.map((metric, idx) => (
              <div
                key={idx}
                className="p-5 sm:p-6 rounded-2xl bg-[#18181b] border border-zinc-800 hover:border-pink-500/40 transition-colors flex flex-col justify-between shadow-lg"
              >
                <div className="w-10 h-10 rounded-xl bg-pink-500/10 border border-pink-500/20 flex items-center justify-center mb-3">
                  {getMetricIcon(idx)}
                </div>
                
                <div>
                  <span className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white font-dream-orphans tracking-wide block">
                    {metric.number}
                  </span>
                  <span className="text-xs sm:text-sm font-bold text-pink-400 block mt-1">
                    {metric.label}
                  </span>
                  <span className="text-[11px] text-zinc-400 block mt-0.5">
                    {metric.detail}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
