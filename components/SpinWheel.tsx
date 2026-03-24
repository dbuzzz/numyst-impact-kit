'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Gift, Copy, Check, Sparkles, ArrowRight } from 'lucide-react';

const PRIZES = [
  { label: '2.5% OFF', color: '#000000', coupon: 'IK25', weight: 30 },
  { label: '5% OFF', color: '#B48C50', coupon: 'IK50', weight: 30 },
  { label: '7.5% OFF', color: '#000000', coupon: 'IK75', weight: 20 },
  { label: 'BAD LUCK', color: '#B48C50', coupon: null, weight: 20 },
];

export default function SpinWheel() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSpinning, setIsSpinning] = useState(false);
  const [rotation, setRotation] = useState(0);
  const [resultIndex, setResultIndex] = useState<number | null>(null);
  const [hasShown, setHasShown] = useState(false);
  const [isCopied, setIsCopied] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    audioRef.current = new Audio('/impactkit/assets/spin.mp3');
  }, []);

  useEffect(() => {
    if (hasShown) return;

    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight;
      const scrollTop = document.documentElement.scrollTop;
      const clientHeight = document.documentElement.clientHeight;
      if (scrollTop + clientHeight >= scrollHeight - 100) {
        setIsOpen(true);
        setHasShown(true);
      }
    };

    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0) {
        setIsOpen(true);
        setHasShown(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mouseleave', handleMouseLeave);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [hasShown]);

  const spin = () => {
    if (isSpinning) return;
    setIsSpinning(true);
    setResultIndex(null);

    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play().catch(() => {});
    }

    const totalWeight = PRIZES.reduce((acc, p) => acc + p.weight, 0);
    let random = Math.random() * totalWeight;
    let prizeIndex = 0;

    for (let i = 0; i < PRIZES.length; i++) {
      if (random < PRIZES[i].weight) {
        prizeIndex = i;
        break;
      }
      random -= PRIZES[i].weight;
    }

    const extraSpins = 8 + Math.floor(Math.random() * 4);
    const targetWedgeCenter = (360 - (prizeIndex * 90)) % 360;
    const randomOffset = Math.floor(Math.random() * 60) - 30;

    const finalDegree = targetWedgeCenter + randomOffset;
    const currentRotationMod = rotation % 360;
    const rotationNeeded = (finalDegree - currentRotationMod + 360) % 360;
    const totalRotation = rotation + (extraSpins * 360) + rotationNeeded;

    setRotation(totalRotation);

    setTimeout(() => {
      setIsSpinning(false);
      setResultIndex(prizeIndex);
    }, 4000);
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  const result = resultIndex !== null ? PRIZES[resultIndex] : null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[999] flex items-center justify-center p-3 sm:p-4 overflow-hidden">
          
          {/* Backdrop */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/90 backdrop-blur-xl"
            onClick={() => !isSpinning && setIsOpen(false)}
          />

          {/* Modal */}
          <motion.div 
            initial={{ scale: 0.85, opacity: 0, y: 40 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.85, opacity: 0, y: 40 }}
            className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto bg-zinc-950 border border-white/10 rounded-[2rem] sm:rounded-[2.5rem] shadow-[0_0_90px_rgba(0,0,0,0.6)]"
          >

            {/* Close */}
            <button 
              onClick={() => setIsOpen(false)}
              disabled={isSpinning}
              className="absolute top-4 right-4 z-50 w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center"
            >
              <X className="w-5 h-5 text-white" />
            </button>

            <div className="relative p-4 sm:p-6 flex flex-col items-center">

              {/* Header */}
              <div className="text-center mb-5">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-500 text-[10px] font-bold uppercase tracking-[0.2em] mb-2">
                  <Sparkles className="w-3 h-3" /> Exclusive Opportunity
                </div>

                <h2 className="text-3xl sm:text-4xl font-serif text-white leading-tight">
                  Spin to Unlock <br/>
                  <span className="italic text-amber-500">Your Offer</span>
                </h2>
              </div>

              {/* Wheel */}
              <div className="relative w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] mb-6 flex items-center justify-center">

                {/* Pointer */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-4 z-50">
                  <div className="w-0 h-0 border-l-[16px] border-l-transparent border-r-[16px] border-r-transparent border-t-[26px] border-t-amber-500" />
                </div>

                <motion.div 
                  animate={{ rotate: rotation }}
                  transition={{ duration: 4 }}
                  className="w-full h-full rounded-full border-[9px] border-zinc-900 relative overflow-hidden bg-zinc-900"
                >
                  {PRIZES.map((prize, i) => (
                    <div 
                      key={i}
                      className="absolute top-0 left-1/2 w-1/2 h-full origin-left flex items-center justify-center"
                      style={{ 
                        transform: `rotate(${i * 90 + 270}deg)`,
                        backgroundColor: prize.color,
                        clipPath: 'polygon(0 50%, 100% 0, 100% 100%)'
                      }}
                    >
                      <span className="text-[11px] sm:text-[13px] font-bold text-white uppercase">
                        {prize.label}
                      </span>
                    </div>
                  ))}

                  {/* Center */}
                  <div className="absolute inset-0 m-auto w-14 h-14 bg-zinc-950 rounded-full border border-zinc-800 flex items-center justify-center">
                    <div className="w-3 h-3 bg-amber-500 rounded-full" />
                  </div>
                </motion.div>
              </div>

              {/* CTA */}
              <div className="w-full max-w-sm">
                {result ? (
                  <div className="space-y-4 text-center">
                    <h3 className="text-2xl font-bold text-white">{result.label}</h3>

                    {result.coupon && (
                      <button 
                        onClick={() => copyToClipboard(result.coupon!)}
                        className="w-full py-4 bg-white text-black rounded-full font-bold"
                      >
                        Copy Code: {result.coupon}
                      </button>
                    )}

                    <button 
                      onClick={() => setIsOpen(false)}
                      className="w-full py-4 bg-zinc-800 text-white rounded-full"
                    >
                      Continue
                    </button>
                  </div>
                ) : (
                  <button 
                    onClick={spin}
                    disabled={isSpinning}
                    className="w-full py-5 bg-amber-500 text-black rounded-full font-bold text-lg"
                  >
                    {isSpinning ? 'Spinning...' : 'Spin The Wheel'}
                  </button>
                )}
              </div>

              <p className="mt-6 text-[10px] text-zinc-500">
                * One spin per user
              </p>

            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}