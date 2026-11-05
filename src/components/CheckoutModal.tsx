import React, { useState } from 'react';
import { X, Lock, ShieldCheck, CheckCircle2, CreditCard, QrCode, FileText, Sparkles, Zap, Copy, Check } from 'lucide-react';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({ isOpen, onClose }) => {
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'pix' | 'boleto'>('card');
  const [installments, setInstallments] = useState('12');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [copiedPix, setCopiedPix] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1200);
  };

  const copyPixCode = () => {
    navigator.clipboard.writeText('00020126580014br.gov.bcb.pix0136docesdanaty-blackfriday-vitalicio52040000530398654071697.005802BR5925Doces da Naty Cursos6009Sao Paulo62070503***6304E3A1');
    setCopiedPix(true);
    setTimeout(() => setCopiedPix(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 overflow-y-auto bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-2xl bg-[#141416] border-2 border-pink-500/50 rounded-3xl shadow-2xl shadow-pink-950/60 overflow-hidden text-left my-8"
        role="dialog"
        aria-modal="true"
      >
        {/* Top Header Banner */}
        <div className="bg-gradient-to-r from-pink-600 via-rose-600 to-pink-600 px-6 py-3 flex items-center justify-between text-white">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-amber-200" />
            <span className="text-xs sm:text-sm font-extrabold uppercase tracking-wider">
              INSCRIÇÃO OFICIAL BLACK FRIDAY • COMBO VITALÍCIO
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg bg-black/20 hover:bg-black/40 text-white transition-colors"
            aria-label="Fechar modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {isSuccess ? (
          /* Success Screen */
          <div className="p-8 sm:p-10 text-center space-y-6">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div>
              <span className="text-xs font-bold text-pink-400 uppercase tracking-widest block mb-1">
                Matrícula Confirmada!
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-dream-orphans tracking-wide">
                Parabéns, {name || 'futura confeiteira'}!
              </h3>
              <p className="mt-2 text-sm text-zinc-300 max-w-md mx-auto">
                Seu acesso vitalício ao <strong className="text-white">Bolos do Zero + Doces de Vitrine</strong> foi liberado com sucesso.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-zinc-900 border border-zinc-800 text-left max-w-md mx-auto space-y-2">
              <div className="flex justify-between text-xs text-zinc-400">
                <span>E-mail de Acesso:</span>
                <span className="text-white font-medium">{email || 'aluna@email.com'}</span>
              </div>
              <div className="flex justify-between text-xs text-zinc-400">
                <span>Status da Conta:</span>
                <span className="text-emerald-400 font-bold">VITALÍCIO ATIVO</span>
              </div>
              <div className="flex justify-between text-xs text-zinc-400">
                <span>Plataforma:</span>
                <span className="text-white font-medium">Área de Membros Naty Pro</span>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={onClose}
                className="w-full max-w-md py-4 rounded-xl bg-pink-600 hover:bg-pink-700 text-white font-bold text-sm uppercase tracking-wider transition-colors shadow-lg shadow-pink-900/50"
              >
                Acessar Minha Área de Aulas Agora
              </button>
            </div>
          </div>
        ) : (
          /* Checkout Form */
          <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-6 max-h-[85vh] overflow-y-auto">
            
            {/* Offer Summary Box */}
            <div className="p-4 rounded-2xl bg-zinc-900/90 border border-pink-500/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <span className="text-xs font-bold text-pink-400 uppercase tracking-wider block">
                  Produto Selecionado
                </span>
                <h4 className="text-base sm:text-lg font-black text-white">
                  Combo Vitalício: Bolos do Zero + Doces de Vitrine
                </h4>
                <p className="text-xs text-zinc-400">
                  Acesso ilimitado • Sem mensalidades • Suporte incluso
                </p>
              </div>

              <div className="text-left sm:text-right shrink-0">
                <span className="text-xs text-zinc-400 line-through block">De: R$ 2.597,00</span>
                <span className="text-xl sm:text-2xl font-black text-pink-400 font-mono">
                  12x R$ 186,00
                </span>
                <span className="text-[11px] text-emerald-400 font-semibold block">
                  ou R$ 1.697,00 à vista
                </span>
              </div>
            </div>

            {/* Step 1: Personal Data */}
            <div className="space-y-3">
              <h5 className="text-xs font-bold uppercase tracking-wider text-zinc-300 flex items-center gap-1.5">
                <span className="w-4 h-4 rounded-full bg-pink-600 text-white text-[10px] flex items-center justify-center font-bold">1</span>
                <span>Dados Pessoais para Liberação do Acesso</span>
              </h5>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-xs text-zinc-400 block mb-1">Nome Completo:</label>
                  <input
                    type="text"
                    required
                    placeholder="Seu nome completo"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-zinc-900 border border-zinc-700 rounded-xl text-white text-sm focus:border-pink-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="text-xs text-zinc-400 block mb-1">E-mail para Receber o Login:</label>
                  <input
                    type="email"
                    required
                    placeholder="seuemail@exemplo.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-zinc-900 border border-zinc-700 rounded-xl text-white text-sm focus:border-pink-500 focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs text-zinc-400 block mb-1">WhatsApp / Telefone:</label>
                <input
                  type="tel"
                  required
                  placeholder="(11) 99999-9999"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-zinc-900 border border-zinc-700 rounded-xl text-white text-sm focus:border-pink-500 focus:outline-none"
                />
              </div>
            </div>

            {/* Step 2: Payment Method */}
            <div className="space-y-3 pt-2">
              <h5 className="text-xs font-bold uppercase tracking-wider text-zinc-300 flex items-center gap-1.5">
                <span className="w-4 h-4 rounded-full bg-pink-600 text-white text-[10px] flex items-center justify-center font-bold">2</span>
                <span>Escolha a Forma de Pagamento</span>
              </h5>

              {/* Payment selector tabs */}
              <div className="grid grid-cols-3 gap-2">
                <button
                  type="button"
                  onClick={() => setPaymentMethod('card')}
                  className={`p-3 rounded-xl border flex flex-col items-center justify-center gap-1.5 text-xs font-bold transition-all cursor-pointer ${
                    paymentMethod === 'card'
                      ? 'bg-pink-600/20 border-pink-500 text-white shadow-md shadow-pink-950'
                      : 'bg-zinc-900/60 border-zinc-800 text-zinc-400 hover:text-white'
                  }`}
                >
                  <CreditCard className="w-5 h-5 text-pink-400" />
                  <span>Cartão de Crédito</span>
                  <span className="text-[10px] text-pink-300">Em até 12x</span>
                </button>

                <button
                  type="button"
                  onClick={() => setPaymentMethod('pix')}
                  className={`p-3 rounded-xl border flex flex-col items-center justify-center gap-1.5 text-xs font-bold transition-all cursor-pointer ${
                    paymentMethod === 'pix'
                      ? 'bg-pink-600/20 border-pink-500 text-white shadow-md shadow-pink-950'
                      : 'bg-zinc-900/60 border-zinc-800 text-zinc-400 hover:text-white'
                  }`}
                >
                  <QrCode className="w-5 h-5 text-emerald-400" />
                  <span>PIX Imediato</span>
                  <span className="text-[10px] text-emerald-400">R$ 1.697 à vista</span>
                </button>

                <button
                  type="button"
                  onClick={() => setPaymentMethod('boleto')}
                  className={`p-3 rounded-xl border flex flex-col items-center justify-center gap-1.5 text-xs font-bold transition-all cursor-pointer ${
                    paymentMethod === 'boleto'
                      ? 'bg-pink-600/20 border-pink-500 text-white shadow-md shadow-pink-950'
                      : 'bg-zinc-900/60 border-zinc-800 text-zinc-400 hover:text-white'
                  }`}
                >
                  <FileText className="w-5 h-5 text-zinc-400" />
                  <span>Boleto Bancário</span>
                  <span className="text-[10px] text-zinc-400">À vista</span>
                </button>
              </div>

              {/* Card Inputs */}
              {paymentMethod === 'card' && (
                <div className="p-4 rounded-2xl bg-zinc-900 border border-zinc-800 space-y-3">
                  <div>
                    <label className="text-xs text-zinc-400 block mb-1">Número do Cartão:</label>
                    <input
                      type="text"
                      placeholder="0000 0000 0000 0000"
                      value={cardNumber}
                      onChange={(e) => setCardNumber(e.target.value)}
                      className="w-full px-3.5 py-2.5 bg-zinc-950 border border-zinc-700 rounded-xl text-white text-sm focus:border-pink-500 focus:outline-none"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="text-xs text-zinc-400 block mb-1">Validade:</label>
                      <input
                        type="text"
                        placeholder="MM/AA"
                        className="w-full px-3.5 py-2.5 bg-zinc-950 border border-zinc-700 rounded-xl text-white text-sm focus:border-pink-500 focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="text-xs text-zinc-400 block mb-1">CVV:</label>
                      <input
                        type="password"
                        maxLength={4}
                        placeholder="123"
                        className="w-full px-3.5 py-2.5 bg-zinc-950 border border-zinc-700 rounded-xl text-white text-sm focus:border-pink-500 focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs text-zinc-400 block mb-1">Número de Parcelas:</label>
                    <select
                      value={installments}
                      onChange={(e) => setInstallments(e.target.value)}
                      className="w-full px-3.5 py-2.5 bg-zinc-950 border border-zinc-700 rounded-xl text-white text-sm focus:border-pink-500 focus:outline-none font-medium"
                    >
                      <option value="12">12x de R$ 186,00 (Recomendado)</option>
                      <option value="10">10x de R$ 213,20</option>
                      <option value="6">6x de R$ 334,50</option>
                      <option value="3">3x de R$ 628,00</option>
                      <option value="1">1x de R$ 1.697,00 (À vista)</option>
                    </select>
                  </div>
                </div>
              )}

              {/* PIX Details */}
              {paymentMethod === 'pix' && (
                <div className="p-4 rounded-2xl bg-zinc-900 border border-emerald-500/30 text-center space-y-3">
                  <div className="inline-flex p-3 bg-white rounded-xl mx-auto">
                    <QrCode className="w-28 h-28 text-black" />
                  </div>
                  <p className="text-xs text-zinc-300">
                    Pague instantaneamente via PIX e receba o login no seu e-mail em até 60 segundos!
                  </p>
                  <button
                    type="button"
                    onClick={copyPixCode}
                    className="w-full py-2.5 px-3 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-white text-xs font-semibold flex items-center justify-center gap-2 transition-colors cursor-pointer"
                  >
                    {copiedPix ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                    <span>{copiedPix ? 'Chave PIX Copiada!' : 'Copiar Código PIX Copia e Cola'}</span>
                  </button>
                </div>
              )}

              {/* Boleto Details */}
              {paymentMethod === 'boleto' && (
                <div className="p-4 rounded-2xl bg-zinc-900 border border-zinc-800 text-xs text-zinc-300 space-y-2">
                  <p className="font-semibold text-white">Aviso sobre Boleto Bancário:</p>
                  <p>Boletos podem levar de 1 a 3 dias úteis para compensação bancária. O acesso aos cursos será liberado imediatamente após a confirmação do pagamento.</p>
                </div>
              )}
            </div>

            {/* Submit Action */}
            <div className="pt-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-pink-500 via-rose-500 to-pink-600 hover:from-pink-600 hover:via-rose-600 hover:to-pink-700 text-white font-black text-base sm:text-lg uppercase tracking-wider shadow-xl shadow-pink-600/40 transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Processando Matrícula Segura...
                  </span>
                ) : (
                  <>
                    <Zap className="w-5 h-5 text-amber-300 fill-amber-300" />
                    <span>FINALIZAR INSCRIÇÃO AGORA</span>
                  </>
                )}
              </button>
            </div>

            {/* Badges footer */}
            <div className="flex items-center justify-center gap-4 text-[11px] text-zinc-400 pt-1">
              <div className="flex items-center gap-1">
                <Lock className="w-3.5 h-3.5 text-emerald-400" />
                <span>256-bit SSL</span>
              </div>
              <span>•</span>
              <div className="flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-pink-400" />
                <span>Garantia de 7 Dias</span>
              </div>
              <span>•</span>
              <div className="flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span>Acesso Imediato</span>
              </div>
            </div>

          </form>
        )}
      </div>
    </div>
  );
};
