'use client';

import { motion } from 'motion/react';
import Image from 'next/image';

export default function WhyChooseSection() {
  return (
    <section className="relative min-h-[80vh] flex items-center overflow-hidden">
      <Image 
        src="/impactkit/assets/4.png"
        alt="Why Choose Numyst"
        fill
        className="object-cover"
        referrerPolicy="no-referrer"
      />
      <div className="absolute inset-0 bg-black/20"></div>
      
      <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="max-w-md bg-white/10 backdrop-blur-md p-12 rounded-3xl border border-white/20 text-white"
        >
          <h2 className="text-4xl font-serif mb-6">Why Choose the Impact Kit?</h2>
          <p className="text-lg leading-relaxed opacity-90">
            Experience five distinct Vibes in one curated set. Discover your personal signature before you go deeper with a full VibeKit. Designed for exploration, made for expression.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
