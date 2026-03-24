'use client';

import { motion } from 'motion/react';
import { Star } from 'lucide-react';

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: 'Rohit Sharma',
      role: 'Marketing Professional, Mumbai',
      text: 'Got 3 compliments on the first day. I wore “Seduce” from the Impact Kit on a dinner date and she literally asked what I was wearing. The projection is strong but not overpowering. For the price, this is insane value.'
    },
    {
      name: 'Aman Verma',
      role: 'Entrepreneur, Delhi',
      text: 'Perfect way to find your signature scent. I was tired of wasting money on full bottles that didn’t suit me. The Impact Kit helped me test 5 different vibes. Now I know exactly which one matches my personality.'
    },
    {
      name: 'Karan Mehta',
      role: 'IT Consultant, Bangalore',
      text: 'Lasts longer than brands double the price. Didn’t expect this level of longevity from tester sizes. Hustle lasted my entire office shift and even into evening. Already ordered a second kit.'
    }
  ];

  return (
    <section className="relative py-24 overflow-hidden">
      
      {/* Background */}
      <div className="absolute inset-0 bg-[#E5E1E6]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {testimonials.map((t, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15 }}
              className="bg-white/80 backdrop-blur-md p-10 rounded-3xl shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-300"
            >
              {/* Star Rating */}
              <div className="flex items-center gap-1 mb-6">
                {[...Array(5)].map((_, index) => (
                  <Star 
                    key={index} 
                    className="w-4 h-4 fill-amber-400 text-amber-400" 
                  />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-sm leading-relaxed mb-8 text-gray-700">
                “{t.text}”
              </p>

              {/* Author */}
              <div className="pt-6 border-t border-gray-100">
                <p className="text-sm font-bold">{t.name}</p>
                <p className="text-[10px] text-gray-400 uppercase tracking-widest">
                  {t.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
          {[
            { label: 'Impact Kits Sold', value: '2847+' },
            { label: 'Average Customer Rating', value: '4.8/5' },
            { label: 'Average Longevity', value: '16-24 Hours' },
            { label: 'High Fragrance Concentration', value: '30%' }
          ].map((stat, i) => (
            <div key={i}>
              <p className="text-4xl md:text-5xl font-serif mb-3">
                {stat.value}
              </p>
              <p className="text-[11px] text-gray-500 uppercase tracking-widest font-bold">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}