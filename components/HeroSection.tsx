"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, ArrowRight } from "lucide-react";

export default function HeroSection() {
  const [timeLeft, setTimeLeft] = useState(0);

  // 4 Hour Countdown
  useEffect(() => {
    const targetTime = new Date().getTime() + 4 * 60 * 60 * 1000;

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetTime - now;

      if (difference <= 0) {
        clearInterval(interval);
        setTimeLeft(0);
      } else {
        setTimeLeft(difference);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const hours = String(Math.floor((timeLeft / (1000 * 60 * 60)) % 24)).padStart(2, "0");
  const minutes = String(Math.floor((timeLeft / (1000 * 60)) % 60)).padStart(2, "0");
  const seconds = String(Math.floor((timeLeft / 1000) % 60)).padStart(2, "0");

  return (
    <section className="relative min-h-screen flex items-center bg-white pt-12 lg:pt-16 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative flex flex-col items-center order-1 lg:order-2"
        >
          <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-lg h-[420px] sm:h-[500px] lg:h-[600px]">

            <div className="absolute inset-0 rounded-t-full border border-gray-200"></div>

            <Link
              href="https://numyst.com/checkout/?add-to-cart=4186"
              target="_blank"
              rel="noopener noreferrer"
              className="relative block w-full h-full overflow-hidden rounded-t-full group"
            >
              <Image
                src="/impactkit/assets/15.png"
                alt="Impact Kit"
                fill
                priority
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </Link>
          </div>

          {/* MOBILE BUTTONS */}
          <div className="mt-6 flex flex-col gap-4 w-full max-w-sm px-4 lg:hidden">

            <Link
              href="https://numyst.com/checkout/?add-to-cart=4186"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-black text-white px-8 py-4 rounded-full font-bold text-center hover:bg-gray-900 transition flex items-center justify-center gap-2"
            >
              🔥 Claim Your Impact Kit Now
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              href="https://numyst.com/checkout/?add-to-cart=4186"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-gray-100 text-black px-8 py-4 rounded-full font-bold text-center hover:bg-gray-200 transition"
            >
              🛒 Shop Now
            </Link>

          </div>
        </motion.div>

        {/* TEXT */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center lg:text-left order-2 lg:order-1"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 border border-amber-100 text-amber-700 text-[10px] font-bold uppercase tracking-wider mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
            </span>
            Flash Sale Active
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif italic mb-4 leading-tight tracking-tight">
            1 Powerful First <br />
            <span className="not-italic font-black">Impression.</span>
          </h1>

          {/* Description */}
          <p className="text-gray-500 text-base sm:text-lg max-w-md mx-auto lg:mx-0 mb-6 leading-relaxed">
            Discover the Impact Kit — a curated collection of 5 premium masculine fragrances.
            Find your signature scent before the world does.
          </p>

          {/* Points */}
          <div className="space-y-2 mb-8 text-left max-w-sm mx-auto lg:mx-0">
            {[
              "Not sure which perfume suits you? Try all 5",
              "Perfect for Dates, Office & Night Out",
              "Long-lasting premium blends",
              "Travel-friendly. Pocket-sized. Powerful."
            ].map((point, i) => (
              <div key={i} className="flex items-start gap-2 text-sm font-medium text-gray-800">
                <span className="text-emerald-500 mt-1">✔</span>
                {point}
              </div>
            ))}
          </div>

          {/* Countdown */}
          <div className="mb-10">
            <p className="text-[10px] uppercase tracking-widest text-gray-400 mb-3">
              Offer Ends In:
            </p>

            <div className="flex justify-center lg:justify-start gap-4">
              {[{ label: "Hrs", value: hours }, { label: "Min", value: minutes }, { label: "Sec", value: seconds }].map((time, i) => (
                <div key={i} className="flex flex-col items-center">
                  <div className={`w-14 h-14 sm:w-16 sm:h-16 rounded-xl flex items-center justify-center text-lg sm:text-2xl font-bold ${i === 2 ? "bg-amber-200 text-amber-900" : "bg-black text-white"}`}>
                    {time.value}
                  </div>
                  <span className="text-[10px] text-gray-400 mt-2 uppercase">
                    {time.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* DESKTOP BUTTONS */}
          <div className="hidden lg:flex flex-col sm:flex-row justify-center lg:justify-start gap-4 mb-12">
            <Link
              href="https://numyst.com/checkout/?add-to-cart=4186"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black text-white px-8 py-4 rounded-full font-bold hover:bg-gray-900 transition-all flex items-center justify-center gap-2"
            >
              🔥 Claim Your Impact Kit Now
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              href="https://numyst.com/checkout/?add-to-cart=4186"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-100 text-black px-8 py-4 rounded-full font-bold hover:bg-gray-200 transition-all text-center"
            >
              🛒 Shop Now
            </Link>
          </div>

          {/* Features */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-6">
            {["30% Concentration", "16h+ Longevity", "Cruelty Free"].map((feature, i) => (
              <div key={i} className="flex items-center gap-2 text-xs font-bold text-gray-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                {feature}
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}