import React, { useState, useEffect } from 'react';
import { Timer, Zap } from 'lucide-react';

interface CountdownTimerProps {
  variant?: 'hero' | 'compact' | 'bar';
  align?: 'center' | 'left';
}

export const CountdownTimer: React.FC<CountdownTimerProps> = ({ variant = 'hero', align = 'center' }) => {
  // Set target date for Black Friday promotion (e.g. 2 days, 14 hours from now, or realistic countdown)
  const [timeLeft, setTimeLeft] = useState({
    days: 1,
    hours: 11,
    minutes: 48,
    seconds: 32,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        }
        return { days: 0, hours: 0, minutes: 0, seconds: 0 };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatNumber = (num: number) => String(num).padStart(2, '0');

  if (variant === 'bar') {
    return (
      <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-pink-400 tabular-nums">
        <Timer className="w-3.5 h-3.5 text-pink-500 animate-pulse" />
        <span>{formatNumber(timeLeft.hours)}h</span>
        <span>:</span>
        <span>{formatNumber(timeLeft.minutes)}m</span>
        <span>:</span>
        <span className="text-white">{formatNumber(timeLeft.seconds)}s</span>
      </div>
    );
  }

  if (variant === 'compact') {
    return (
      <div className="flex items-center gap-2 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-lg border border-pink-500/30">
        <Zap className="w-4 h-4 text-pink-400 fill-pink-400 shrink-0" />
        <span className="text-xs text-zinc-300 font-medium hidden sm:inline">Termina em:</span>
        <div className="flex items-center gap-1 text-xs font-mono font-bold text-pink-400 tabular-nums">
          <span className="bg-zinc-900 px-1.5 py-0.5 rounded text-white">{formatNumber(timeLeft.days)}d</span>
          <span>:</span>
          <span className="bg-zinc-900 px-1.5 py-0.5 rounded text-white">{formatNumber(timeLeft.hours)}h</span>
          <span>:</span>
          <span className="bg-zinc-900 px-1.5 py-0.5 rounded text-white">{formatNumber(timeLeft.minutes)}m</span>
          <span>:</span>
          <span className="bg-pink-600 px-1.5 py-0.5 rounded text-white">{formatNumber(timeLeft.seconds)}s</span>
        </div>
      </div>
    );
  }

  return (
    <div className={`inline-flex flex-col ${align === 'left' ? 'items-start' : 'items-center'}`}>
      <div className="flex items-center gap-2 mb-2 text-xs font-semibold text-pink-400 uppercase tracking-widest">
        <span className="w-1.5 h-1.5 rounded-full bg-pink-500 animate-ping" />
        <Timer className="w-4 h-4 text-pink-500" />
        <span>O lote promocional encerra em definitivo:</span>
      </div>

      <div className="grid grid-cols-4 gap-2 sm:gap-3 text-center">
        {[
          { label: 'DIAS', value: timeLeft.days },
          { label: 'HORAS', value: timeLeft.hours },
          { label: 'MINUTOS', value: timeLeft.minutes },
          { label: 'SEGUNDOS', value: timeLeft.seconds },
        ].map((item, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center justify-center bg-zinc-900/90 border border-pink-500/30 hover:border-pink-500/60 transition-colors rounded-xl px-2.5 py-2 sm:px-4 sm:py-2.5 min-w-[62px] sm:min-w-[76px] shadow-lg shadow-pink-950/20"
          >
            <span className="font-mono text-xl sm:text-2xl md:text-3xl font-extrabold text-white tracking-tight tabular-nums">
              {formatNumber(item.value)}
            </span>
            <span className="text-[10px] sm:text-xs font-medium text-pink-300/80 tracking-wider mt-0.5">
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
