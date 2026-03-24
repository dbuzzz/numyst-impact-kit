'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';

export default function ScratchDiscount() {
  const [isRevealed, setIsRevealed] = useState(false);
  const [alreadyWon, setAlreadyWon] = useState(false);
  const [isDrawing, setIsDrawing] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Check if already won
  useEffect(() => {
    const won = localStorage.getItem('impactKitWon');
    if (won === 'true') {
      setIsRevealed(true);
      setAlreadyWon(true);
    }
  }, []);

  // Responsive canvas
  useEffect(() => {
    if (isRevealed) return;

    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = container.offsetWidth;
      canvas.height = container.offsetHeight;

      ctx.fillStyle = '#111';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = '#fff';
      ctx.textAlign = 'center';
      ctx.font = `italic ${canvas.width * 0.07}px serif`;
      ctx.fillText('SCRATCH HERE', canvas.width / 2, canvas.height / 2);
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    return () => window.removeEventListener('resize', resizeCanvas);
  }, [isRevealed]);

  const scratch = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDrawing || alreadyWon) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const rect = canvas.getBoundingClientRect();
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;

    const x = clientX - rect.left;
    const y = clientY - rect.top;

    ctx.globalCompositeOperation = 'destination-out';
    ctx.beginPath();
    ctx.arc(x, y, canvas.width * 0.06, 0, Math.PI * 2);
    ctx.fill();

    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    let cleared = 0;

    for (let i = 3; i < imageData.data.length; i += 4) {
      if (imageData.data[i] === 0) cleared++;
    }

    if (cleared / (canvas.width * canvas.height) > 0.4) {
      setIsRevealed(true);
      localStorage.setItem('impactKitWon', 'true');
    }
  };

  return (
    <section className="w-full bg-[#F5F5F0] py-20 sm:py-24 lg:py-32 px-4 sm:px-6">

      <div className="max-w-6xl mx-auto text-center">

        {/* Header */}
        <p className="text-amber-600 text-xs font-bold uppercase tracking-widest mb-4">
          Your Exclusive Offer
        </p>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif mb-6">
          Unlock Your Discount
        </h2>

        <p className="text-gray-500 text-sm sm:text-base mb-16 max-w-xl mx-auto">
          Scratch the card below to reveal your special offer on the Impact Kit.
        </p>

        {/* Scratch Card */}
        <div
          ref={containerRef}
          className="
  relative
  w-full
  max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg
  mx-auto
  h-[240px] sm:h-[260px] md:h-[280px] lg:h-[300px]
  bg-white
  rounded-2xl sm:rounded-3xl
  shadow-xl
  overflow-hidden
  my-20
">

          {/* Revealed Content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">

            {alreadyWon ? (
              <>
                <p className="text-green-600 font-bold uppercase tracking-widest text-xs mb-3">
                  ✅ Already Claimed
                </p>

                <h3 className="text-xl sm:text-2xl font-black mb-4">
                  You Already Won <br /> Impact Kit Offer
                </h3>
              </>
            ) : (
              <>
                <p className="text-amber-600 font-bold uppercase tracking-widest text-xs mb-3">
                  🎉 Congratulations!
                </p>

                <h3 className="text-xl sm:text-2xl font-black mb-4">
                  You Won Impact Kit <br />
                  <span className="text-amber-600">With Max Discount</span>
                </h3>
              </>
            )}

            <p className="text-gray-500 text-xs sm:text-sm mb-6">
              Claim your exclusive pricing before stock runs out.
            </p>

            <Link
              href="https://numyst.com/checkout/?add-to-cart=4186"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black text-white px-8 py-3 rounded-full font-bold text-sm hover:bg-gray-900 transition"
            >
              Claim Your Order Now
            </Link>

          </div>

          {/* Scratch Layer */}
          {!isRevealed && (
            <canvas
              ref={canvasRef}
              className="absolute inset-0 w-full h-full cursor-crosshair touch-none"
              onMouseDown={() => setIsDrawing(true)}
              onMouseUp={() => setIsDrawing(false)}
              onMouseMove={scratch}
              onTouchStart={() => setIsDrawing(true)}
              onTouchEnd={() => setIsDrawing(false)}
              onTouchMove={scratch}
            />
          )}
        </div>

        {/* Footer Note */}
        <p className="mt-10 text-[10px] text-gray-400 uppercase tracking-widest">
          ✨ Scratch with finger or mouse to reveal the price
        </p>

      </div>
    </section>
  );
}