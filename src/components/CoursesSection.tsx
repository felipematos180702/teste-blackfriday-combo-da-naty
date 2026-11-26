import React from 'react';
import { COURSE_DOCES_DE_VITRINE, COURSE_BOLOS_DO_ZERO } from '../data/landingData';
import { Quote, CheckCircle2, Sparkles, BookOpen, Layers } from 'lucide-react';

interface CoursesSectionProps {
  onOpenCheckout: () => void;
}

export const CoursesSection: React.FC<CoursesSectionProps> = ({ onOpenCheckout }) => {
  return (
    <section id="cursos" className="py-10 md:py-28 relative bg-[#09090b] border-t border-zinc-900">
      {/* Background accents */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-pink-600/10 blur-[130px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-rose-600/10 blur-[130px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 md:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-pink-500/10 border border-pink-500/30 text-pink-400 text-xs font-bold uppercase tracking-widest mb-4">
            <span>2 Cursos Completos • 1 Único Investimento</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white font-dream-orphans tracking-wide [text-wrap:balance]">
            O que você terá ao adquirir o <span className="bg-gradient-to-r from-pink-400 to-rose-400 bg-clip-text text-transparent">combo vitalício</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-300">
            Além de dominar a produção dos bolos festivos e fatias, vai aprender as bases mais importantes para vender seus doces todos os dias, as receitas de sucesso e o conhecimento sobre precificação, gestão financeira, vendas e divulgação.
          </p>
        </div>

        {/* 2 Massive Course Feature Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">

          {/* CURSO 1: DOCES DE VITRINE */}
          <div className="flex flex-col bg-[#18181b] border border-zinc-800 hover:border-pink-500/40 transition-all duration-300 rounded-3xl overflow-hidden shadow-xl shadow-black/50 group">
            {/* Course Image Header */}
            <div className="relative aspect-[16/10] w-full overflow-hidden bg-zinc-900">
              <img
                src={COURSE_DOCES_DE_VITRINE.image}
                alt="Curso Doces de Vitrine"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).src = 'https://lh3.googleusercontent.com/d/1l_rhqqODOwd-g20pEssaN5gotjgV9Gb3';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#18181b] via-[#18181b]/30 to-transparent" />
              
              <div className="absolute top-4 left-4">
                <span className="px-3.5 py-1.5 rounded-xl bg-pink-600 text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-pink-900/60 flex items-center gap-1.5">
                  <BookOpen className="w-3.5 h-3.5" />
                  CURSO 1
                </span>
              </div>

              <div className="absolute bottom-4 left-4 right-4">
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-dream-orphans tracking-wide">
                  Doces de Vitrine
                </h3>
                <p className="text-xs sm:text-sm text-pink-300 font-medium mt-1">
                  {COURSE_DOCES_DE_VITRINE.subtitle}
                </p>
              </div>
            </div>

            {/* Course Content */}
            <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
              
              {/* Exact Quote */}
              <div className="relative pl-6 py-1 border-l-2 border-pink-500 bg-pink-500/5 rounded-r-xl pr-4">
                <Quote className="w-5 h-5 text-pink-400 absolute top-2 -left-2.5 bg-[#18181b] rounded-full p-0.5" />
                <p className="italic text-sm sm:text-base text-zinc-200 leading-relaxed font-montserrat">
                  "{COURSE_DOCES_DE_VITRINE.quote}"
                </p>
              </div>

              {/* Exact Description */}
              <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
                {COURSE_DOCES_DE_VITRINE.description}
              </p>

              {/* Exact Highlight */}
              <div className="p-4 rounded-2xl bg-zinc-900/80 border border-zinc-800 text-zinc-200 text-sm font-medium">
                <span className="text-pink-400 font-bold block mb-1">O método que funciona na minha loja:</span>
                {COURSE_DOCES_DE_VITRINE.highlight}
              </div>

              {/* Features Pill List */}
              <div className="pt-2">
                <h4 className="text-xs font-bold text-zinc-400 uppercase tracking-wider mb-3">
                  Principais pilares do curso:
                </h4>
                <ul className="space-y-2.5">
                  {COURSE_DOCES_DE_VITRINE.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300">
                      <CheckCircle2 className="w-4 h-4 text-pink-500 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          </div>

          {/* CURSO 2: BOLOS DO ZERO */}
          <div className="flex flex-col bg-[#18181b] border border-zinc-800 hover:border-pink-500/40 transition-all duration-300 rounded-3xl overflow-hidden shadow-xl shadow-black/50 group">
            {/* Course Image Header */}
            <div className="relative aspect-[16/10] w-full overflow-hidden bg-zinc-900">
              <img
                src={COURSE_BOLOS_DO_ZERO.image}
                alt="Curso Bolos do Zero"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).src = 'https://lh3.googleusercontent.com/d/1huvEoCSyKrR27YlYsgNydO7ppSlIL4Xb';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#18181b] via-[#18181b]/30 to-transparent" />
              
              <div className="absolute top-4 left-4">
                <span className="px-3.5 py-1.5 rounded-xl bg-pink-600 text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-pink-900/60 flex items-center gap-1.5">
                  <Layers className="w-3.5 h-3.5" />
                  CURSO 2
                </span>
              </div>

              <div className="absolute bottom-4 left-4 right-4">
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-dream-orphans tracking-wide">
                  Bolos do Zero
                </h3>
                <p className="text-xs sm:text-sm text-pink-300 font-medium mt-1">
                  {COURSE_BOLOS_DO_ZERO.subtitle}
                </p>
              </div>
            </div>

            {/* Course Content */}
            <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
              
              {/* Exact Quote */}
              <div className="relative pl-6 py-1 border-l-2 border-pink-500 bg-pink-500/5 rounded-r-xl pr-4">
                <Quote className="w-5 h-5 text-pink-400 absolute top-2 -left-2.5 bg-[#18181b] rounded-full p-0.5" />
                <p className="italic text-sm sm:text-base text-zinc-200 leading-relaxed font-montserrat">
                  "{COURSE_BOLOS_DO_ZERO.quote}"
                </p>
              </div>

              {/* Exact Description */}
              <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
                {COURSE_BOLOS_DO_ZERO.description}
              </p>

              {/* Exact Highlight */}
              <div className="p-4 rounded-2xl bg-zinc-900/80 border border-zinc-800 text-zinc-200 text-sm font-medium">
                <span className="text-pink-400 font-bold block mb-1">A Mina de Ouro das Fatias:</span>
                {COURSE_BOLOS_DO_ZERO.highlight}
              </div>

              {/* Features Pill List */}
              <div className="pt-2">
                <h4 className="text-xs font-bold text-zinc-400 uppercase tracking-wider mb-3">
                  Técnicas ensinadas:
                </h4>
                <ul className="space-y-2.5">
                  {COURSE_BOLOS_DO_ZERO.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300">
                      <CheckCircle2 className="w-4 h-4 text-pink-500 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          </div>

        </div>

        {/* Bottom Banner inside Course Section */}
        <div className="mt-12 text-center">
          <a
            href="#oferta"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-pink-500 to-rose-600 hover:from-pink-600 hover:to-rose-700 text-white font-bold text-base shadow-lg shadow-pink-600/30 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
          >
            <span>QUERO OS 2 CURSOS COM ACESSO VITALÍCIO</span>
          </a>
        </div>

      </div>
    </section>
  );
};
