'use client';

import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

export default function ExperienceSection() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">

          {/* Image Grid */}
          <div className="grid grid-cols-2 gap-4">

            <div className="space-y-4">
              
              <div className="relative aspect-[3/4] rounded-xl sm:rounded-2xl overflow-hidden bg-[#F8F8F8] p-4">
                <Image
                  src="/impactkit/assets/bottel2.webp"
                  alt="Experience 1"
                  fill
                  className="object-contain"
                />
                <div className="absolute top-3 right-3 bg-black text-white text-[9px] sm:text-[10px] font-bold px-2 py-1 rounded-full">
                  5 in ONE
                </div>
              </div>

              <div className="relative aspect-square rounded-xl sm:rounded-2xl overflow-hidden bg-[#F8F8F8] p-4">
                <Image
                  src="/impactkit/assets/bottel4.webp"
                  alt="Experience 2"
                  fill
                  className="object-contain"
                />
              </div>

            </div>

            <div className="space-y-4 pt-8 sm:pt-12">
              
              <div className="relative aspect-square rounded-xl sm:rounded-2xl overflow-hidden bg-[#F8F8F8] p-4">
                <Image
                  src="/impactkit/assets/bottel1.webp"
                  alt="Experience 3"
                  fill
                  className="object-contain"
                />
              </div>

              <div className="relative aspect-[3/4] rounded-xl sm:rounded-2xl overflow-hidden bg-[#FDF8F3] p-6 flex items-end">
                <Image
                  src="/impactkit/assets/bottel3.webp"
                  alt="Experience 4"
                  fill
                  className="object-contain"
                />
              </div>

            </div>
          </div>

          {/* Content Side */}
          <div className="text-center lg:text-left">
            <p className="text-amber-600 text-[10px] sm:text-xs font-bold uppercase tracking-widest mb-4">
              The Experience
            </p>

            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif mb-6 sm:mb-8 leading-tight">
              Not just a purchase. <br />
              <span className="italic">An initiation.</span>
            </h2>

            <p className="text-gray-500 text-sm sm:text-base lg:text-lg mb-10 sm:mb-12 leading-relaxed max-w-xl mx-auto lg:mx-0">
              The Impact Kit isn&apos;t a sampler. It&apos;s a journey through five distinct dimensions of presence. Each 9ml vial contains 30% concentration extrait-level fragrance.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-y-8 gap-x-8 sm:gap-x-12 mb-10 sm:mb-12">
              {[
                { label: 'Signature Vibes', value: '5' },
                { label: '% Concentration', value: '30' },
                { label: 'ml Each Vial', value: '9' },
                { label: 'h+ Longevity', value: '12' }
              ].map((stat, i) => (
                <div key={i} className="border-l border-gray-100 pl-4 sm:pl-6">
                  <p className="text-2xl sm:text-3xl lg:text-4xl font-serif mb-1">
                    {stat.value}
                  </p>
                  <p className="text-[9px] sm:text-[10px] text-gray-400 uppercase tracking-widest font-bold">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            {/* Offer Box */}
            <div className="bg-[#F9F7F2] p-6 sm:p-8 rounded-xl sm:rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-6">

              {/* Pricing Section */}
              <div className="text-center sm:text-left">
                <p className="text-[9px] sm:text-[10px] text-gray-400 uppercase tracking-widest mb-1">
                  Special Offer
                </p>

                <div className="flex items-center justify-center sm:justify-start gap-3">
                  <span className="text-3xl sm:text-4xl font-bold">
                    ₹499
                  </span>

                  <span className="text-sm text-gray-400 line-through">
                    ₹1499
                  </span>
                </div>

                <p className="text-emerald-600 text-xs font-bold mt-1">
                  You Save ₹1000
                </p>
              </div>

              {/* CTA Button */}
              <a
                href="https://numyst.com/checkout/?add-to-cart=4186"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-black text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold text-sm flex items-center gap-2 hover:scale-105 transition-transform"
              >
                Get It Now <ArrowRight className="w-4 h-4" />
              </a>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
}