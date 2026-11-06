import React, { useState } from 'react';
import { Play, ShieldCheck, CheckCircle2, Flame, Clock } from 'lucide-react';
import { CountdownTimer } from './CountdownTimer';
import nataschaHeroImg from '../assets/images/natascha_hero.jpg';
import vslThumbnail from '../assets/images/hero_vsl_thumbnail_1793889840681.jpg';

interface HeroSectionProps {
  onOpenCheckout: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenCheckout }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="relative overflow-hidden bg-[#09090b]">
      
      {/* 1. PARTE SUPERIOR DO HERO: MOBILE (FOTO NO TOPO + OVERLAY) / DESKTOP (SPLIT LATERALIZADO) */}
      <div className="relative min-h-[70vh] lg:min-h-[88vh] xl:min-h-[92vh] flex flex-col lg:flex-row lg:items-center">
        
        {/* Versão Mobile: Foto da produtora no topo da seção com maior destaque e camada overlay na base */}
        <div className="lg:hidden relative w-full h-[480px] sm:h-[560px] overflow-hidden bg-zinc-950">
          <img
            src={nataschaHeroImg}
            alt="Natascha - Doces da Naty"
            loading="eager"
            decoding="sync"
            className="w-full h-full object-cover object-top"
            onError={(e) => {
              (e.currentTarget as HTMLImageElement).src = '/images/natascha_hero.jpg';
            }}
          />
          {/* Camada overlay na parte de baixo da foto */}
          <div className="absolute inset-x-0 bottom-0 h-40 sm:h-48 bg-gradient-to-t from-[#09090b] via-[#09090b]/85 to-transparent pointer-events-none" />
          <div className="absolute inset-x-0 top-0 h-10 bg-gradient-to-b from-[#09090b]/40 to-transparent pointer-events-none" />
        </div>

        {/* Versão Desktop: Background Image no lado direito encostada na lateral direita */}
        <div className="hidden lg:flex absolute right-0 top-0 bottom-0 lg:w-[720px] xl:w-[840px] 2xl:w-[940px] pointer-events-none z-0 items-end justify-end overflow-hidden">
          <img
            src={nataschaHeroImg}
            alt="Natascha - Doces da Naty"
            className="h-full w-full max-h-full object-contain object-[right_bottom] opacity-95 scale-[1.32] xl:scale-[1.35] origin-bottom-right translate-y-12 xl:translate-y-25 transition-all duration-700 [mask-image:linear-gradient(to_right,transparent_0%,transparent_12%,black_38%,black_100%)] [-webkit-mask-image:linear-gradient(to_right,transparent_0%,transparent_12%,black_38%,black_100%)]"
            onError={(e) => {
              (e.currentTarget as HTMLImageElement).src = '/images/natascha_hero.jpg';
            }}
          />

          {/* Gradient Overlay na borda esquerda: sólido #09090b e transição profunda para fusão perfeita em tela cheia */}
          <div className="absolute inset-y-0 -left-30 w-[115%] bg-gradient-to-r from-[#09090b] via-[#09090b] via-20% lg:via-28% xl:via-35% to-transparent pointer-events-none z-10" />
          
          {/* Camada vertical adicional de reforço na transição da borda esquerda */}
          <div className="absolute inset-y-0 -left-30 w-2/3 bg-gradient-to-r from-[#09090b] via-[#09090b]/90 to-transparent pointer-events-none z-10" />

          {/* Fades de fusão suave no topo e na base */}
          <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-[#09090b] via-[#09090b]/80 to-transparent pointer-events-none z-10" />
          <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#09090b] via-[#09090b]/50 to-transparent pointer-events-none z-10" />

          {/* Ambient pink accent glow behind image */}
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-600/20 blur-[140px] rounded-full pointer-events-none" />
        </div>

        {/* Hero Content: No mobile os textos começam mais para baixo para dar destaque à foto, no desktop fica lateralizado */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:pl-4 xl:pl-6 lg:pr-8 mt-2 sm:mt-4 lg:mt-0 py-4 sm:py-6 md:py-8 lg:py-12 xl:py-14">
          <div className="max-w-2xl lg:max-w-2xl xl:max-w-3xl 2xl:max-w-4xl flex flex-col items-start text-left lg:-translate-x-3 xl:-translate-x-6">
            
            {/* Badge: OFERTA EXCLUSIVA DE BLACK FRIDAY */}
            <div className="inline-flex items-center gap-2.5 px-5 py-2 lg:px-4.5 lg:py-1.5 rounded-full bg-gradient-to-r from-pink-500/20 via-rose-500/25 to-pink-500/20 border border-pink-500/40 text-pink-400 text-sm sm:text-base md:text-lg lg:text-base font-black uppercase tracking-widest shadow-md shadow-pink-500/10 mb-4 sm:mb-5 lg:mb-6 animate-pulse">
              <Flame className="w-5 h-5 text-pink-500 fill-pink-500" />
              <span>OFERTA EXCLUSIVA DE BLACK FRIDAY</span>
            </div>

            {/* Headline Lateralizada à Esquerda (Reduzida 10% no desktop) */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[3.8rem] xl:text-[4.35rem] 2xl:text-[4.7rem] font-black text-white tracking-wide leading-[1.03] font-dream-orphans [text-wrap:balance]">
              Conquiste sua <span className="bg-gradient-to-r from-pink-400 via-rose-300 to-pink-500 bg-clip-text text-transparent">independência financeira</span> através da confeitaria descomplicada
            </h1>

            {/* Subheadline Detalhada (Espaçamento vertical ampliado) */}
            <p className="mt-4 sm:mt-5 lg:mt-6 text-base sm:text-lg md:text-xl lg:text-[1.25rem] xl:text-[1.3rem] text-zinc-200 font-medium leading-relaxed max-w-2xl xl:max-w-3xl 2xl:max-w-4xl [text-wrap:balance]">
              Acesso <strong className="text-white font-bold">VITALÍCIO</strong> aos 2 cursos mais completos e lucrativos da Doces da Naty: domine massas e recheios infalíveis no <span className="text-pink-400 font-semibold">Bolos do Zero</span> e monte um delivery de vendas diárias com o <span className="text-pink-400 font-semibold">Doces de Vitrine</span> — tudo pelo preço de um único curso.
            </p>

            {/* Botão CTA Destacado em Rosa Pink com Animação de Pulso Lateralizado */}
            <div className="mt-6 sm:mt-7 lg:mt-8 flex flex-col items-start w-full max-w-lg">
              <button
                onClick={onOpenCheckout}
                className="w-full py-5 px-7 lg:py-4.5 lg:px-6 rounded-2xl bg-gradient-to-r from-pink-500 via-rose-500 to-pink-600 hover:from-pink-600 hover:via-rose-600 hover:to-pink-700 text-white font-black text-lg sm:text-xl md:text-2xl lg:text-xl xl:text-[1.35rem] uppercase tracking-wider shadow-xl shadow-pink-600/40 animate-pink-pulse hover:shadow-pink-600/70 transition-all duration-300 transform active:scale-95 cursor-pointer flex items-center justify-center gap-3"
              >
                <span>QUERO GARANTIR MEU COMBO VITALÍCIO</span>
              </button>
              
              <p className="mt-2 text-xs sm:text-sm text-zinc-400 text-left">
                Acesso vitalício sem renovação • Garantia de 7 dias • Vagas limitadas
              </p>
            </div>

            {/* Micro Trust Badges Alinhados à Esquerda */}
            <div className="mt-6 sm:mt-7 lg:mt-8 pt-5 border-t border-zinc-800/80 w-full max-w-2xl flex flex-wrap items-center justify-start gap-4 sm:gap-6 text-zinc-300 text-base sm:text-lg lg:text-base">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                <span>Acesso imediato às aulas</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-pink-400 shrink-0" />
                <span>7 dias de garantia total</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                <span>Certificado incluso</span>
              </div>
            </div>

          </div>
        </div>

      </div>

      {/* 2. PARTE INFERIOR: CRONÔMETRO E VSL CENTRALIZADOS ABAIXO DO HERO */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16 md:pb-24 flex flex-col items-center text-center border-t border-zinc-900/60">
        
        {/* Cronômetro Centralizado */}
        <div className="mb-10 flex flex-col items-center justify-center w-full">
          <CountdownTimer variant="hero" align="center" />
        </div>

        {/* Espaço/Placeholder estilizado para VSL (Vídeo de Vendas) Centralizado */}
        <div className="w-full max-w-4xl mx-auto relative group mb-8">
          <div className="relative aspect-video w-full rounded-2xl overflow-hidden bg-zinc-950 border border-pink-500/40 shadow-2xl shadow-pink-950/40">
            
            {/* VSL Media Image / Video Simulation */}
            <img
              src={vslThumbnail}
              alt="Apresentação do Combo Vitalício Doces da Naty"
              className={`w-full h-full object-cover transition-transform duration-700 ${isPlaying ? 'scale-105 filter brightness-90' : 'group-hover:scale-105'}`}
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).src = '/images/hero_vsl_thumbnail_1793889840681.jpg';
              }}
            />

            {/* Gradient Overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/40 pointer-events-none" />

            {/* Video header info */}
            <div className="absolute top-4 left-4 right-4 flex items-center justify-between text-xs font-semibold z-10 pointer-events-none">
              <div className="flex items-center gap-2 bg-black/75 backdrop-blur-md px-3 py-1.5 rounded-lg border border-pink-500/30 text-white text-xs">
                <span className="w-2 h-2 rounded-full bg-pink-500 animate-ping" />
                <span>Vídeo Oficial da Oferta</span>
              </div>
              <div className="flex items-center gap-1.5 bg-black/75 backdrop-blur-md px-3 py-1.5 rounded-lg border border-zinc-700/60 text-zinc-300 text-xs">
                <Clock className="w-3.5 h-3.5 text-pink-400" />
                <span>Duração: 8:42</span>
              </div>
            </div>

            {/* Interactive Play Button or Active Playing State */}
            {!isPlaying ? (
              <div className="absolute inset-0 flex flex-col items-center justify-center p-4 z-20">
                <button
                  onClick={() => setIsPlaying(true)}
                  className="group/btn relative flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-tr from-pink-600 to-rose-500 text-white shadow-2xl shadow-pink-500/50 hover:scale-110 active:scale-95 transition-all duration-300 cursor-pointer"
                  aria-label="Assistir ao vídeo de vendas"
                >
                  <div className="absolute inset-0 rounded-full bg-pink-500 animate-ping opacity-40" />
                  <Play className="w-9 h-9 sm:w-11 sm:h-11 translate-x-1 fill-white" />
                </button>
                <div className="mt-4 px-4 py-1.5 rounded-full bg-black/80 backdrop-blur-md border border-pink-500/30 text-white text-xs sm:text-sm font-semibold tracking-wide">
                  Clique para assistir à aula da Natascha
                </div>
              </div>
            ) : (
              <div
                onClick={() => setIsPlaying(false)}
                className="absolute inset-0 z-20 cursor-pointer"
                title="Clique para pausar"
              />
            )}
          </div>
        </div>

        {/* CTA complementar após o VSL */}
        <div className="w-full max-w-md mx-auto">
          <button
            onClick={onOpenCheckout}
            className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-pink-500 to-rose-600 hover:from-pink-600 hover:to-rose-700 text-white font-black text-base sm:text-lg uppercase tracking-wider shadow-lg shadow-pink-600/30 transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer flex items-center justify-center gap-2"
          >
            <span>QUERO ME INSCREVER NO COMBO</span>
          </button>
        </div>

      </div>

    </section>
  );
};
