import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';

import print1 from '../assets/images/testimonials/depoimento_1.jpg';
import print2 from '../assets/images/testimonials/depoimento_2.jpg';
import print3 from '../assets/images/testimonials/depoimento_3.jpg';
import print4 from '../assets/images/testimonials/depoimento_4.jpg';
import print5 from '../assets/images/testimonials/depoimento_5.jpg';
import print6 from '../assets/images/testimonials/depoimento_6.jpg';
import print7 from '../assets/images/testimonials/depoimento_7.jpg';

interface PrintItem {
  id: number;
  src: string;
  fallback: string;
  alt: string;
}

const PRINTS: PrintItem[] = [
  {
    id: 1,
    src: print1,
    fallback: 'https://lh3.googleusercontent.com/d/1cLEFUTMitJSAP7WyiwEb8Y-vv0SZMgp0',
    alt: 'Depoimento real de aluna 1',
  },
  {
    id: 2,
    src: print2,
    fallback: 'https://lh3.googleusercontent.com/d/1d6y1I9uUp0T3mh2klCXJGklX2W-6IF7m',
    alt: 'Depoimento real de aluna 2',
  },
  {
    id: 3,
    src: print3,
    fallback: 'https://lh3.googleusercontent.com/d/1IYSRnyh8jZK4mIBBA6MRs0MoL_xfUpfe',
    alt: 'Depoimento real de aluna 3',
  },
  {
    id: 4,
    src: print4,
    fallback: 'https://lh3.googleusercontent.com/d/1uIKNnKEKQVPW7qUwgEYoVTngUzfl7jZG',
    alt: 'Depoimento real de aluna 4',
  },
  {
    id: 5,
    src: print5,
    fallback: 'https://lh3.googleusercontent.com/d/1l-Zu0IOb27HNo7dk52CZcjTLpuSkkgfH',
    alt: 'Depoimento real de aluna 5',
  },
  {
    id: 6,
    src: print6,
    fallback: 'https://lh3.googleusercontent.com/d/1mF4t8JYZ5Eb-z11VbwI6eSrQwWF6Kr_P',
    alt: 'Depoimento real de aluna 6',
  },
  {
    id: 7,
    src: print7,
    fallback: 'https://lh3.googleusercontent.com/d/1ek6woRzWhVkc-7CIeE3b51OIknouv3WV',
    alt: 'Depoimento real de aluna 7',
  },
];

export const TestimonialsMarquee: React.FC = () => {
  const [selectedPrint, setSelectedPrint] = useState<string | null>(null);

  return (
    <section id="depoimentos" className="py-10 md:py-28 relative bg-[#09090b] overflow-hidden border-t border-zinc-900">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-pink-600/10 blur-[150px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative mb-6 md:mb-12">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-pink-500/10 border border-pink-500/30 text-pink-400 text-xs font-bold uppercase tracking-widest mb-3">
            <MessageCircle className="w-3.5 h-3.5" />
            <span>Resultados de Quem Já Aplica</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white font-dream-orphans tracking-wide [text-wrap:balance]">
            Mais de 5.000 alunas colocaram o <span className="bg-gradient-to-r from-pink-400 to-rose-400 bg-clip-text text-transparent">método da Naty em prática</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-300">
            Veja relatos reais de confeitarias que aplicaram as técnicas e colheram os resultados.
          </p>
        </div>
      </div>

      {/* Infinite Animated Carousel of Real Prints */}
      <div className="relative w-full overflow-hidden select-none py-4">
        {/* Subtle Edge Fade Scrims */}
        <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-28 bg-gradient-to-r from-[#09090b] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-28 bg-gradient-to-l from-[#09090b] to-transparent z-10 pointer-events-none" />

        <div className="flex animate-marquee-slow whitespace-nowrap">
          {/* Render duplicated sets for seamless infinite loop */}
          {[0, 1].map((setIndex) => (
            <div key={setIndex} className="flex items-center gap-5 sm:gap-6 shrink-0 pr-5 sm:pr-6">
              {PRINTS.map((item) => (
                <div
                  key={`${setIndex}-${item.id}`}
                  onClick={() => setSelectedPrint(item.src)}
                  className="w-[280px] sm:w-[320px] md:w-[350px] h-[440px] sm:h-[500px] md:h-[540px] rounded-2xl overflow-hidden bg-zinc-950 border border-zinc-800 hover:border-pink-500/60 shadow-xl shadow-black/70 shrink-0 flex items-center justify-center p-2 sm:p-2.5 transition-all duration-300 hover:scale-[1.02] cursor-pointer group"
                  title="Clique para ampliar"
                >
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="w-full h-full object-contain rounded-xl select-none group-hover:brightness-105 transition-all duration-300"
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).src = item.fallback;
                    }}
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox / Zoom Modal */}
      {selectedPrint && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4"
          onClick={() => setSelectedPrint(null)}
        >
          <div
            className="relative max-w-lg max-h-[90vh] bg-zinc-950 border border-zinc-800 rounded-2xl overflow-hidden shadow-2xl p-2"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedPrint(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-zinc-900/90 text-white hover:text-pink-400 hover:bg-zinc-800 transition-colors border border-zinc-700"
              aria-label="Fechar"
            >
              <X className="w-5 h-5" />
            </button>
            <img
              src={selectedPrint}
              alt="Depoimento ampliado"
              className="w-full h-auto max-h-[85vh] object-contain rounded-xl select-none"
            />
          </div>
        </div>
      )}
    </section>
  );
};
