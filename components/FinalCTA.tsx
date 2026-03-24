'use client';

import { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function FinalCTA() {
  const [timeLeft, setTimeLeft] = useState({
    hours: '00',
    minutes: '00',
    seconds: '00'
  });

  useEffect(() => {
    // 4 hour countdown (change if needed)
    const endTime = new Date().getTime() + 4 * 60 * 60 * 1000;

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = endTime - now;

      if (distance <= 0) {
        clearInterval(timer);
        return;
      }

      const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((distance / (1000 * 60)) % 60);
      const seconds = Math.floor((distance / 1000) % 60);

      setTimeLeft({
        hours: String(hours).padStart(2, '0'),
        minutes: String(minutes).padStart(2, '0'),
        seconds: String(seconds).padStart(2, '0')
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative py-32 overflow-hidden bg-black">
      
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(180,140,80,0.2),transparent_70%)]"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
        
        <p className="text-amber-500 text-xs font-bold uppercase tracking-widest mb-6">
          Your Exclusive Offer
        </p>

        <h2 className="text-6xl lg:text-7xl font-serif text-white mb-8 leading-tight">
          Don&apos;t Miss Your <br />
          <span className="italic">Signature Scent</span>
        </h2>

        <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-12 leading-relaxed">
          Join 2,000+ customers who&apos;ve discovered their perfect fragrance.
          This offer won&apos;t last long.
        </p>

        {/* Working Countdown */}
        <div className="flex justify-center gap-4 mb-16">
          
          {[
            { label: 'Hrs', value: timeLeft.hours },
            { label: 'Min', value: timeLeft.minutes },
            { label: 'Sec', value: timeLeft.seconds }
          ].map((time, i) => (
            <div key={i} className="flex flex-col items-center">
              <div
                className={`w-16 h-16 rounded-xl flex items-center justify-center text-2xl font-bold ${
                  i === 2
                    ? 'bg-amber-500 text-black'
                    : 'bg-zinc-900 text-white border border-white/10'
                }`}
              >
                {time.value}
              </div>
              <span className="text-[10px] text-gray-500 mt-2 uppercase tracking-widest">
                {time.label}
              </span>
            </div>
          ))}

        </div>

        {/* Checkout Button */}
        <Link
          href="https://numyst.com/checkout/?add-to-cart=4186"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-amber-500 text-black px-6 py-5 rounded-full font-semibold text-sm hover:scale-105 transition-transform shadow-[0_0_18px_rgba(180,140,80,0.25)]"
        >
          ₹499 — Get Impact Kit
          <ArrowRight className="w-4 h-4" />
        </Link>

        <p className="mt-12 text-[10px] text-gray-500 uppercase tracking-widest">
          ✨ Limited time launch pricing
        </p>

      </div>
    </section>
  );
}