import React from 'react';
import { TICKER_ITEMS } from '../data/landingData';

export const InfiniteTicker: React.FC = () => {
  return (
    <div className="relative w-full h-14 sm:h-16 md:h-18 flex items-center overflow-hidden bg-gradient-to-r from-pink-600 via-rose-600 to-pink-600 text-white border-b-2 border-pink-500/40 z-30 shadow-xl shadow-pink-950/30 select-none">
      <div className="flex animate-marquee whitespace-nowrap items-center">
        {/* Render twice for seamless loop */}
        {[0, 1].map((setIndex) => (
          <div key={setIndex} className="flex items-center gap-8 sm:gap-10 shrink-0 pr-8 sm:pr-10">
            {TICKER_ITEMS.map((item, idx) => (
              <div key={`${setIndex}-${idx}`} className="flex items-center gap-4 sm:gap-6">
                <span className="font-dream-orphans font-black tracking-wide text-2xl sm:text-3xl md:text-4xl lg:text-[2.6rem] uppercase text-black leading-none">
                  {item}
                </span>
                <span className="text-black/80 font-black text-xl sm:text-2xl md:text-3xl leading-none">•</span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};
