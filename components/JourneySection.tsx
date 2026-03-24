'use client';

import { motion } from 'motion/react';

export default function JourneySection() {
  const steps = [
    { number: '01', title: 'Discover', desc: 'Explore all five vibes to understand your preferences' },
    { number: '02', title: 'Experiment', desc: 'Layer different fragrances to create unique combinations' },
    { number: '03', title: 'Identify', desc: 'Find the vibe that resonates with your personality' },
    { number: '04', title: 'Commit', desc: 'Upgrade to full-size VibeKit of your favorite' }
  ];

  return (
    <section className="py-24 bg-[#F9F8F4]">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <p className="text-amber-600 text-xs font-bold uppercase tracking-widest mb-4">How It Works</p>
        <h2 className="text-5xl lg:text-6xl font-serif mb-20">Your Journey to Signature Scent</h2>

        <div className="grid md:grid-cols-4 gap-12">
          {steps.map((step, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col items-center"
            >
              <div className="w-20 h-20 rounded-2xl bg-white shadow-sm flex items-center justify-center text-2xl font-serif text-amber-600 mb-8">
                {step.number}
              </div>
              <h4 className="text-lg font-serif mb-4">{step.title}</h4>
              <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
