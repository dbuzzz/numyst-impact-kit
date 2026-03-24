'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import Image from 'next/image';

const faqs = [
  {
    q: "How long do the fragrances last?",
    a: `Our fragrances are crafted with high-quality premium blends designed to last 16–24 hours depending on apparel, skin type, and weather conditions.

For best performance:
• Apply on pulse points (neck, wrists, behind ears) and a few sprays on clothes.
• Moisturize skin before application.

Longevity may vary slightly, but most customers report strong projection for the first few hours and subtle lasting notes throughout the day.`
  },
  {
    q: "Are these original perfumes or diluted testers?",
    a: `The Impact Kit contains authentic full-strength fragrance formulations, not diluted samples.

They are compact tester sizes so you can:
• Try all 5 fragrances
• Find your signature scent
• Carry them while traveling

Same quality. Smaller size. Smart choice.`
  },
  {
    q: "How many sprays do I get per tester?",
    a: `Each tester provides approximately 50–60 sprays, depending on usage.

That’s enough for:
• 8–12 full-day uses per fragrance
• Multiple occasions to truly test performance

You get over 300+ sprays combined in one kit.`
  },
  {
    q: "Is this suitable for daily use?",
    a: `Yes.

The Impact Kit includes fragrances for:
• Office & professional settings
• Casual outings
• Dates & evening events
• Weddings & special occasions

You can switch scents based on mood and setting.`
  },
  {
    q: "Is it safe for sensitive skin?",
    a: `Yes, our fragrances are skin-friendly and oils are dermatologically tested.

However, if you have extremely sensitive skin:
We recommend a patch test before full application.`
  },
  {
    q: "Is Cash on Delivery (COD) available?",
    a: `Yes, we offer Cash on Delivery across most serviceable locations in India.

You can also choose prepaid for faster dispatch and priority shipping.`
  },
  {
    q: "How long does delivery take?",
    a: `Orders are usually dispatched within 24–48 hours.

Estimated delivery time:
• Metro cities: 3–5 days
• Tier 2 & 3 cities: 4–7 days

You will receive a tracking link once your order is shipped.`
  },
  {
    q: "Can I gift the Impact Kit?",
    a: `Absolutely.

The Impact Kit makes a perfect gift for:
• Birthdays
• Anniversaries
• Weddings
• Festive gifting

It’s premium, practical, and stylish.`
  },
  {
    q: "What if I don’t like any fragrance?",
    a: `The Impact Kit is designed to help you discover your signature scent without committing to a full bottle.

If you face any issue with the product, our support team is always available to assist you.`
  },
  {
    q: "Do these perfumes get compliments?",
    a: `Many customers report receiving compliments within the first few wears.

Each fragrance is designed to leave a memorable impression — bold, fresh, or sensual depending on the variant you choose.

Because smelling good isn’t optional. It’s powerful.`
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(1);

  return (
    <section className="py-24 bg-[#F8F6F2] text-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-5xl font-serif text-center mb-20">FAQs</h2>
        
        <div className="relative">
          
          {/* Floating Perfume Bottles */}
          <div className="absolute -left-20 bottom-0 w-64 h-96 hidden lg:block">
            <Image src="/impactkit/assets/1.png" alt="perfume" fill className="object-contain" />
          </div>

          <div className="absolute -right-20 bottom-0 w-64 h-96 hidden lg:block">
            <Image src="/impactkit/assets/2.png" alt="perfume" fill className="object-contain" />
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="border-b border-gray-200">
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full py-6 flex items-center justify-between text-left group"
                >
                  <span className="text-sm font-bold group-hover:text-amber-600 transition-colors">
                    {faq.q}
                  </span>

                  {openIndex === i ? (
                    <ChevronUp className="w-4 h-4 text-amber-600" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-gray-500" />
                  )}
                </button>

                <AnimatePresence>
                  {openIndex === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35 }}
                      className="overflow-hidden"
                    >
                      <p className="pb-8 text-sm text-gray-600 leading-relaxed max-w-2xl whitespace-pre-line">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}