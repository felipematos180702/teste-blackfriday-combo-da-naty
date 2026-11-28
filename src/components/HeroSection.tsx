import React, { useState, useRef, useEffect } from 'react';
import { Play, ShieldCheck, CheckCircle2, Flame, Clock } from 'lucide-react';
import nataschaHeroImg from '../assets/images/natascha_hero.jpg';
import vslThumbnail from '../assets/images/hero_vsl_thumbnail_1793889840681.jpg';

interface HeroSectionProps {
  onOpenCheckout: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = () => {
  const [hasStarted, setHasStarted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isVideoVisible, setIsVideoVisible] = useState(false);
  const [progress, setProgress] = useState(0);
  const iframeRef = useRef<HTMLIFrameElement | null>(null);

  const sendVimeoCommand = (method: string, value?: unknown) => {
    if (!iframeRef.current?.contentWindow) return;
    const message = value !== undefined ? { method, value } : { method };
    iframeRef.current.contentWindow.postMessage(JSON.stringify(message), '*');
  };

  useEffect(() => {
    if (!hasStarted) return;

    const fallbackTimer = window.setTimeout(() => {
      setIsVideoVisible(true);
    }, 1500);

    const handleMessage = (event: MessageEvent) => {
      if (!event.origin.includes('vimeo.com')) return;
      try {
        const data = typeof event.data === 'string' ? JSON.parse(event.data) : event.data;
        if (!data) return;

        if (data.event === 'ready') {
          sendVimeoCommand('addEventListener', 'play');
          sendVimeoCommand('addEventListener', 'pause');
          sendVimeoCommand('addEventListener', 'timeupdate');
          sendVimeoCommand('addEventListener', 'ended');
          sendVimeoCommand('setVolume', 1);
          sendVimeoCommand('play');
        } else if (data.event === 'play') {
          setIsPlaying(true);
        } else if (data.event === 'timeupdate') {
          if (data.data?.seconds > 0.3) {
            setIsVideoVisible(true);
          }
          if (data.data?.percent !== undefined) {
            const p = Number(data.data.percent);
            const smartPercent = Math.min(100, Math.pow(p, 0.65) * 100);
            setProgress(smartPercent);
          }
        } else if (data.event === 'pause') {
          setIsPlaying(false);
        } else if (data.event === 'ended') {
          setIsPlaying(false);
          setIsVideoVisible(false);
          setProgress(0);
        }
      } catch {
        // Ignore non-JSON messages
      }
    };

    window.addEventListener('message', handleMessage);
    return () => {
      window.clearTimeout(fallbackTimer);
      window.removeEventListener('message', handleMessage);
    };
  }, [hasStarted]);

  const handleStartOrToggle = () => {
    if (!hasStarted) {
      setHasStarted(true);
      setIsPlaying(true);
      return;
    }

    if (isPlaying) {
      sendVimeoCommand('pause');
      setIsPlaying(false);
    } else {
      sendVimeoCommand('setVolume', 1);
      sendVimeoCommand('play');
      setIsPlaying(true);
    }
  };

  return (
    <section className="relative overflow-hidden bg-[#09090b]">
      
      {/* 1. PARTE SUPERIOR DO HERO: MOBILE (FOTO NO TOPO + OVERLAY) / DESKTOP (SPLIT LATERALIZADO) */}
      <div className="relative min-h-[70vh] lg:min-h-[88vh] xl:min-h-[92vh] flex flex-col lg:flex-row lg:items-center">
        
        {/* Versão Mobile / Tablet: Foto da produtora no topo da seção com maior destaque e camada overlay na base */}
        <div className="hero-mobile-layer lg:hidden relative z-20 w-full h-[460px] sm:h-[640px] md:h-[740px] overflow-hidden bg-zinc-950">
          <img
            src="/assets/aistudio/imagem_naty_black_b98c8f4a.JPG"
            alt="Natascha - Doces da Naty"
            loading="eager"
            decoding="sync"
            className="w-full h-full object-cover object-[center_82%] sm:object-[center_32%] md:object-[center_28%]"
            onError={(e) => {
              (e.currentTarget as HTMLImageElement).src = nataschaHeroImg;
            }}
          />
          {/* Camada overlay na parte de baixo da foto */}
          <div className="absolute inset-x-0 bottom-0 h-40 sm:h-48 bg-gradient-to-t from-[#09090b] via-[#09090b]/85 to-transparent pointer-events-none" />
          <div className="absolute inset-x-0 top-0 h-10 bg-gradient-to-b from-[#09090b]/40 to-transparent pointer-events-none" />
        </div>

        {/* Versão Desktop: Background Image no lado direito encostada na lateral direita */}
        <div className="hero-desktop-layer hidden lg:flex absolute right-0 top-0 bottom-0 lg:w-[720px] xl:w-[840px] 2xl:w-[940px] pointer-events-none z-0 items-end justify-end overflow-hidden">
          <img
            src="/assets/aistudio/imagem_naty_black_b98c8f4a.JPG"
            alt="Natascha - Doces da Naty"
            className="h-full w-full max-h-full object-contain object-[right_bottom] opacity-95 scale-[1.32] xl:scale-[1.35] origin-bottom-right translate-y-12 xl:translate-y-25 transition-all duration-700 [mask-image:linear-gradient(to_right,transparent_0%,transparent_12%,black_38%,black_100%)] [-webkit-mask-image:linear-gradient(to_right,transparent_0%,transparent_12%,black_38%,black_100%)]"
            onError={(e) => {
              (e.currentTarget as HTMLImageElement).src = nataschaHeroImg;
            }}
          />

          {/* Gradient Overlay na borda esquerda: sólido #09090b e transição profunda para fusão perfeita em tela cheia */}
          <div className="hero-desktop-layer absolute inset-y-0 lg:-left-40 w-[115%] bg-gradient-to-r from-[#09090b] via-[#09090b] via-20% lg:via-28% xl:via-35% to-transparent pointer-events-none z-10" />
          
          {/* Camada vertical adicional de reforço na transição da borda esquerda */}
          <div className="hero-desktop-layer absolute inset-y-0 lg:-left-40 w-2/3 bg-gradient-to-r from-[#09090b] via-[#09090b]/90 to-transparent pointer-events-none z-10" />

          {/* Fades de fusão suave no topo e na base */}
          <div className="hero-desktop-layer absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-[#09090b] via-[#09090b]/80 to-transparent pointer-events-none z-10" />
          <div className="hero-desktop-layer absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#09090b] via-[#09090b]/50 to-transparent pointer-events-none z-10" />

          {/* Ambient pink accent glow behind image */}
          <div className="hero-desktop-layer absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-600/20 blur-[140px] rounded-full pointer-events-none" />
        </div>

        {/* Hero Content: No mobile os textos são centralizados para dar destaque, no desktop fica lateralizado à esquerda */}
        <div className="relative z-30 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:pl-4 xl:pl-6 lg:pr-8 -mt-12 sm:-mt-14 lg:mt-0 pt-0 pb-4 sm:pb-6 md:py-8 lg:py-12 xl:py-14">
          <div className="max-w-2xl lg:max-w-2xl xl:max-w-3xl 2xl:max-w-4xl flex flex-col items-center text-center lg:items-start lg:text-left mx-auto lg:mx-0 lg:-translate-x-3 xl:-translate-x-6">
            
            {/* Badge: OFERTA EXCLUSIVA DE BLACK FRIDAY (Sem caixa no mobile, fogo ao final e em linha única) */}
            <div className="inline-flex items-center gap-1.5 sm:gap-2.5 p-0 bg-transparent border-none shadow-none rounded-none lg:px-4.5 lg:py-1.5 lg:rounded-full lg:bg-gradient-to-r lg:from-pink-500/20 lg:via-rose-500/25 lg:to-pink-500/20 lg:border lg:border-pink-500/40 lg:shadow-md lg:shadow-pink-500/10 text-pink-400 text-[10px] min-[360px]:text-xs min-[400px]:text-sm sm:text-base md:text-lg lg:text-base font-black uppercase tracking-wider lg:tracking-widest mb-3 sm:mb-5 lg:mb-6 animate-pulse whitespace-nowrap">
              <span>OFERTA EXCLUSIVA DE BLACK FRIDAY</span>
              <Flame className="w-4 h-4 sm:w-5 sm:h-5 text-pink-500 fill-pink-500 shrink-0" />
            </div>

            {/* Headline Centralizada no Mobile (33.2px) / Lateralizada à Esquerda no Desktop */}
            <h1 className="text-[33.2px] sm:text-5xl md:text-6xl lg:text-[3.8rem] xl:text-[4.35rem] 2xl:text-[4.7rem] font-black text-white tracking-tight sm:tracking-wide leading-[1.04] font-dream-orphans [text-wrap:balance] text-center lg:text-left px-0">
              <span className="block">Black da Naty com</span>
              <span className="bg-gradient-to-r from-pink-400 via-rose-300 to-pink-500 bg-clip-text text-transparent block">acesso vitalício</span>
            </h1>

            {/* Subheadline Centralizada no Mobile / Lateralizada à Esquerda no Desktop */}
            <p className="mt-4 sm:mt-5 lg:mt-6 text-base sm:text-lg md:text-xl lg:text-[1.25rem] xl:text-[1.3rem] text-zinc-200 font-normal leading-relaxed max-w-2xl xl:max-w-3xl 2xl:max-w-4xl text-center lg:text-left">
              Tenha acesso <strong className="text-pink-400 font-bold">pelo resto da vida</strong> aos meus dois cursos que são a base para se profissionalizar na confeitaria. O <strong className="text-white font-bold">Bolos do zero</strong> e o <strong className="text-white font-bold">Doces de vitrine</strong> são os cursos mais completos para você aprender TUDO sobre confeitaria e começar a faturar com doces de bolos festivos todos os dias.
            </p>

            {/* Botão CTA Centralizado no Mobile / Lateralizado no Desktop */}
            <div className="mt-5 sm:mt-7 lg:mt-8 flex flex-col items-center lg:items-start w-full max-w-lg">
              <a
                href="https://pay.hotmart.com/H103943890J?off=pt1g1tq0&checkoutMode=10"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-4 sm:py-5 sm:px-7 lg:py-4.5 lg:px-6 rounded-2xl bg-gradient-to-r from-pink-500 via-rose-500 to-pink-600 hover:from-pink-600 hover:via-rose-600 hover:to-pink-700 text-white font-black text-[15px] sm:text-xl md:text-2xl lg:text-xl xl:text-[1.35rem] uppercase tracking-wider shadow-xl shadow-pink-600/40 animate-pink-pulse hover:shadow-pink-600/70 transition-all duration-300 transform active:scale-95 cursor-pointer flex items-center justify-center gap-2.5 sm:gap-3"
              >
                <span className="text-center">QUERO GARANTIR MEU COMBO VITALÍCIO</span>
              </a>
              
              <p className="mt-2 text-[11px] sm:text-sm text-zinc-400 text-center lg:text-left">
                Acesso vitalício sem renovação • Garantia de 7 dias • Vagas limitadas
              </p>
            </div>

            {/* Micro Trust Badges Centralizados no Mobile */}
            <div className="mt-4 sm:mt-7 lg:mt-8 pt-4 sm:pt-5 border-t border-zinc-800/80 w-full max-w-2xl flex flex-wrap items-center justify-center lg:justify-start gap-2.5 sm:gap-6 text-zinc-300 text-[15px] leading-snug sm:text-lg lg:text-base text-center lg:text-left">
              <span className="text-[15px] sm:text-lg lg:text-base">Clique no vídeo abaixo e saiba tudo sobre essa <strong className="text-pink-400 font-bold">oferta exclusiva da black</strong></span>
            </div>

          </div>
        </div>

      </div>

      {/* 2. PARTE INFERIOR: CRONÔMETRO E VSL CENTRALIZADOS ABAIXO DO HERO */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-5 pb-10 md:pt-8 md:pb-24 flex flex-col items-center text-center border-t border-zinc-900/60">
        
        {/* Informação de Duração da Oferta (72h) - Reduzida no mobile e em Amarelo */}
        <div className="mb-6 sm:mb-10 flex flex-col items-center justify-center w-full">
          <div className="inline-flex items-center justify-center gap-1.5 sm:gap-2.5 px-3.5 py-1.5 sm:px-6 sm:py-3 rounded-xl sm:rounded-2xl bg-amber-500/10 border border-amber-500/40 text-amber-300 font-bold text-[11px] sm:text-base md:text-lg shadow-lg shadow-amber-950/20 text-center [text-wrap:balance]">
            <Clock className="w-3.5 h-3.5 sm:w-5 sm:h-5 text-amber-400 shrink-0 animate-pulse" />
            <span>ESTA OFERTA ESPECIAL ESTARÁ DISPONÍVEL APENAS NAS PRÓXIMAS <strong className="text-amber-400 font-black underline decoration-amber-400 decoration-2">72 HORAS</strong></span>
          </div>
        </div>

        {/* VSL Limpo (Sem botões de curtir, compartilhar, título ou barra nativa do Vimeo) */}
        <div className="w-full max-w-4xl mx-auto relative group mb-8">
          <div
            onClick={handleStartOrToggle}
            className="relative aspect-video w-full rounded-2xl overflow-hidden bg-zinc-950 border border-pink-500/40 shadow-2xl shadow-pink-950/40 cursor-pointer select-none"
          >
            {/* Iframe do Vimeo sem interação direta de mouse (impede aparição de Curtir/Compartilhar/Barra do Vimeo) */}
            {hasStarted && (
              <iframe
                ref={iframeRef}
                src="https://player.vimeo.com/video/1250821860?autoplay=1&controls=0&title=0&byline=0&portrait=0&badge=0&sidedock=0&dnt=1&autopause=0&api=1"
                title="VSL Black da Naty"
                className="absolute inset-0 w-full h-full border-0 pointer-events-none select-none"
                allow="autoplay; fullscreen; picture-in-picture; encrypted-media"
                referrerPolicy="strict-origin-when-cross-origin"
              />
            )}

            {/* Capa protetora: fica visível antes do Play, durante o carregamento inicial e quando pausado */}
            <div
              className={`absolute inset-0 z-20 transition-opacity duration-300 ${
                hasStarted && isPlaying && isVideoVisible
                  ? 'opacity-0 pointer-events-none'
                  : 'opacity-100'
              }`}
            >
              <img
                src={vslThumbnail}
                alt="Apresentação do Combo Vitalício Doces da Naty"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).src = '/images/hero_vsl_thumbnail_1793889840681.jpg';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/35 to-black/40" />

              <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleStartOrToggle();
                  }}
                  className="group/btn relative flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-tr from-pink-600 to-rose-500 text-white shadow-2xl shadow-pink-500/50 hover:scale-110 active:scale-95 transition-all duration-300 cursor-pointer"
                  aria-label={isPlaying ? 'Pausar vídeo' : 'Assistir ao vídeo'}
                >
                  <div className="absolute inset-0 rounded-full bg-pink-500 animate-ping opacity-40" />
                  <Play className="w-9 h-9 sm:w-11 sm:h-11 translate-x-1 fill-white" />
                </button>
              </div>
            </div>

            {/* Barra de progresso limpa estilo VSL na base (sem controles do Vimeo) */}
            {hasStarted && isVideoVisible && (
              <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-zinc-900/80 z-30 pointer-events-none">
                <div
                  className="h-full bg-gradient-to-r from-pink-500 to-rose-500 transition-all duration-300"
                  style={{ width: `${progress}%` }}
                />
              </div>
            )}
          </div>
        </div>

        {/* CTA complementar após o VSL */}
        <div className="w-full max-w-md mx-auto">
          <a
            href="#oferta"
            className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-pink-500 to-rose-600 hover:from-pink-600 hover:to-rose-700 text-white font-black text-base sm:text-lg uppercase tracking-wider shadow-lg shadow-pink-600/30 transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer flex items-center justify-center gap-2"
          >
            <span>QUERO MINHA VAGA AGORA</span>
          </a>
        </div>

      </div>

    </section>
  );
};
