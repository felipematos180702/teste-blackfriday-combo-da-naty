import React, { useState, useEffect } from 'react';
import { Zap } from 'lucide-react';
import { CountdownTimer } from './CountdownTimer';

interface StickyMobileBarProps {
  onOpenCheckout: () => void;
}

export const StickyMobileBar: React.FC<StickyMobileBarProps> = ({ onOpenCheckout }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show when scrolled past 400px
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#09090b]/95 backdrop-blur-lg border-t border-pink-500/30 px-3 py-2 shadow-2xl shadow-pink-950 max-h-[58px]">
      <div className="flex items-center justify-between gap-2 h-full">
        <div className="flex flex-col justify-center">
          <div className="flex items-center gap-1">
            <span className="text-[10px] uppercase font-bold text-pink-400">Black Friday:</span>
            <CountdownTimer variant="bar" />
          </div>
          <span className="text-xs font-black text-white font-mono leading-tight">
            12x R$ 109,18
          </span>
        </div>

        <button
          onClick={onOpenCheckout}
          className="h-10 px-4 rounded-xl bg-gradient-to-r from-pink-500 to-rose-600 active:scale-95 text-white font-extrabold text-xs uppercase tracking-wider shadow-lg shadow-pink-600/40 flex items-center gap-1.5 whitespace-nowrap cursor-pointer shrink-0"
        >
          <Zap className="w-3.5 h-3.5 fill-amber-300 text-amber-300" />
          <span>GARANTIR COMBO</span>
        </button>
      </div>
    </div>
  );
};
