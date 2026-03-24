'use client';

import { useEffect, useState } from 'react';
import { Star, Quote } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const reviews = Array.from({ length: 50 }).map((_, i) => ({
  id: i + 1,
  user: `Verified Customer ${i + 1}`,
  role: i % 2 === 0 ? 'Fragrance Lover' : 'Lifestyle Enthusiast',
  rating: 5,
  comment:
    i % 3 === 0
      ? "The longevity is unreal. I get compliments everywhere I go."
      : i % 3 === 1
      ? "Luxury feel without the luxury price tag. Definitely worth it."
      : "Each scent feels premium and unique. Perfect for every occasion."
}));

export default function Reviews() {
  const [index, setIndex] = useState(0);

  const itemsPerSlide = 3;
  const totalSlides = Math.ceil(reviews.length / itemsPerSlide);

  // 🔥 AUTO CAROUSEL
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % totalSlides);
    }, 3000);

    return () => clearInterval(interval);
  }, [totalSlides]);

  const start = index * itemsPerSlide;
  const visibleReviews = reviews.slice(start, start + itemsPerSlide);

  return (
    <section className="py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 text-center">

        <p className="text-amber-600 text-xs font-bold uppercase tracking-widest mb-4">
          Community Voices
        </p>

        <h2 className="text-6xl font-serif mb-20">
          Real Impact. <br />
          <span className="italic">Real Stories.</span>
        </h2>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.6 }}
              className="grid md:grid-cols-3 gap-8"
            >
              {visibleReviews.map((review) => (
                <div
                  key={review.id}
                  className="bg-[#F9F9F9] p-10 rounded-[2rem] hover:bg-black hover:text-white transition-all duration-500"
                >
                  <Quote className="w-10 h-10 mb-6 opacity-10" />

                  <div className="flex justify-center gap-1 mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-black text-black" />
                    ))}
                  </div>

                  <p className="text-sm leading-relaxed mb-8 font-medium">
                    "{review.comment}"
                  </p>

                  <div>
                    <p className="font-bold text-sm">{review.user}</p>
                    <p className="text-[10px] uppercase tracking-widest opacity-60">
                      {review.role}
                    </p>
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-3 mt-12">
          {Array.from({ length: totalSlides }).map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`w-3 h-3 rounded-full transition ${
                i === index ? 'bg-black scale-125' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>

        <div className="mt-16">
          <p className="text-2xl font-bold">4.9 / 5.0</p>
          <p className="text-gray-400 text-sm">
            Based on 2,800+ verified reviews
          </p>
        </div>

      </div>
    </section>
  );
}