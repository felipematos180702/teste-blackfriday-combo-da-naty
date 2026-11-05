import React, { useState } from 'react';
import { INITIAL_TESTIMONIALS, TestimonialItem } from '../data/landingData';
import { Star, MessageCircle, Sparkles, Image as ImageIcon, Plus, Check } from 'lucide-react';

export const TestimonialsMarquee: React.FC = () => {
  const [testimonials, setTestimonials] = useState<TestimonialItem[]>(INITIAL_TESTIMONIALS);
  const [showPhotoModal, setShowPhotoModal] = useState(false);
  const [customPhotoUrl, setCustomPhotoUrl] = useState('');
  const [photoSavedNotice, setPhotoSavedNotice] = useState(false);

  // Allow user to attach their own photo later or test with custom links
  const handleAddCustomPhoto = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customPhotoUrl.trim()) return;

    setTestimonials((prev) =>
      prev.map((item, idx) =>
        idx === 0 ? { ...item, avatarUrl: customPhotoUrl.trim() } : item
      )
    );
    setPhotoSavedNotice(true);
    setTimeout(() => {
      setPhotoSavedNotice(false);
      setShowPhotoModal(false);
      setCustomPhotoUrl('');
    }, 1500);
  };

  return (
    <section id="depoimentos" className="py-20 md:py-28 relative bg-[#09090b] overflow-hidden border-t border-zinc-900">
      
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-pink-600/10 blur-[150px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative mb-12">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-pink-500/10 border border-pink-500/30 text-pink-400 text-xs font-bold uppercase tracking-widest mb-3">
            <MessageCircle className="w-3.5 h-3.5" />
            <span>Resultados de Quem Já Aplica</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white font-dream-orphans tracking-wide [text-wrap:balance]">
            Mais de 5.000 alunas transformando <span className="bg-gradient-to-r from-pink-400 to-rose-400 bg-clip-text text-transparent">paixão em lucro diário</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-300">
            Veja relatos reais de confeiteiras que começaram do zero e hoje faturam com massas perfeitas e fatias de vitrine.
          </p>

          {/* User customizable photo button */}
          <div className="mt-4">
            <button
              onClick={() => setShowPhotoModal(true)}
              className="inline-flex items-center gap-1.5 text-xs text-pink-400/80 hover:text-pink-300 bg-zinc-900/80 hover:bg-zinc-900 px-3 py-1.5 rounded-full border border-zinc-800 transition-colors"
            >
              <ImageIcon className="w-3.5 h-3.5" />
              <span>Personalizar fotos dos depoimentos</span>
            </button>
          </div>
        </div>
      </div>

      {/* Infinite Animated Carousel Without Invisible Margins (Edge-to-Edge) */}
      <div className="relative w-full overflow-hidden select-none py-4">
        {/* Subtle Edge Fade Scrims */}
        <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-28 bg-gradient-to-r from-[#09090b] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-28 bg-gradient-to-l from-[#09090b] to-transparent z-10 pointer-events-none" />

        <div className="flex animate-marquee whitespace-nowrap">
          {/* Render duplicated sets for seamless loop */}
          {[0, 1].map((setIndex) => (
            <div key={setIndex} className="flex items-stretch gap-6 shrink-0 pr-6">
              {testimonials.map((item) => (
                <div
                  key={`${setIndex}-${item.id}`}
                  className="w-[310px] sm:w-[380px] bg-[#18181b] border border-zinc-800 hover:border-pink-500/50 rounded-2xl p-6 sm:p-7 flex flex-col justify-between shrink-0 whitespace-normal transition-all duration-300 hover:shadow-xl hover:shadow-pink-950/30 group"
                >
                  <div>
                    {/* Header: Stars & Tag */}
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <div className="flex items-center gap-1">
                        {[...Array(item.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                        ))}
                      </div>
                      <span className="text-[11px] font-bold text-pink-400 bg-pink-500/10 border border-pink-500/30 px-2.5 py-0.5 rounded-full">
                        {item.tag}
                      </span>
                    </div>

                    {/* Highlight Box */}
                    <div className="mb-3 px-3 py-1.5 rounded-lg bg-pink-500/10 border-l-2 border-pink-500 text-pink-300 font-bold text-xs">
                      "{item.highlight}"
                    </div>

                    {/* Text */}
                    <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-normal">
                      "{item.text}"
                    </p>
                  </div>

                  {/* Footer / Author */}
                  <div className="mt-6 pt-4 border-t border-zinc-800 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      {/* Photo slot */}
                      <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-pink-600 to-rose-500 text-white font-bold flex items-center justify-center text-xs overflow-hidden shrink-0 border border-pink-500/40">
                        {item.avatarUrl ? (
                          <img
                            src={item.avatarUrl}
                            alt={item.name}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <span>{item.name.charAt(0)}</span>
                        )}
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-white group-hover:text-pink-300 transition-colors">
                          {item.name}
                        </h4>
                        <span className="text-[11px] text-zinc-400 block">
                          {item.location}
                        </span>
                      </div>
                    </div>

                    {item.revenueProof && (
                      <div className="text-right">
                        <span className="text-[10px] text-zinc-400 block font-medium">Resultado</span>
                        <span className="text-xs font-bold text-emerald-400 font-mono">
                          {item.revenueProof}
                        </span>
                      </div>
                    )}
                  </div>

                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Photo Insertion Modal */}
      {showPhotoModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
          <div className="bg-zinc-900 border border-pink-500/40 rounded-2xl max-w-md w-full p-6 text-left relative shadow-2xl">
            <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
              <ImageIcon className="w-5 h-5 text-pink-500" />
              <span>Inserir Fotos de Alunas</span>
            </h3>
            <p className="text-xs text-zinc-300 mb-4">
              Cole a URL da foto de aluna ou do print de depoimento para aplicar no carrossel infinito:
            </p>

            <form onSubmit={handleAddCustomPhoto} className="space-y-4">
              <div>
                <label className="text-xs font-medium text-zinc-400 block mb-1">
                  URL da Imagem:
                </label>
                <input
                  type="url"
                  placeholder="https://exemplo.com/foto-aluna.jpg"
                  value={customPhotoUrl}
                  onChange={(e) => setCustomPhotoUrl(e.target.value)}
                  className="w-full px-3 py-2 bg-zinc-950 border border-zinc-700 rounded-xl text-white text-sm focus:outline-none focus:border-pink-500"
                  required
                />
              </div>

              {photoSavedNotice && (
                <div className="p-2.5 rounded-lg bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-xs flex items-center gap-2">
                  <Check className="w-4 h-4" />
                  <span>Foto vinculada com sucesso!</span>
                </div>
              )}

              <div className="flex items-center justify-end gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setShowPhotoModal(false)}
                  className="px-4 py-2 text-xs font-medium text-zinc-400 hover:text-white"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-pink-600 hover:bg-pink-700 text-white rounded-xl text-xs font-bold transition-colors"
                >
                  Aplicar Foto
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </section>
  );
};
