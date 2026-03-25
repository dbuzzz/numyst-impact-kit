'use client';

import { useEffect, useState } from 'react';
import { Star, Quote } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

function mulberry32(seed: number) {
  return function () {
    let t = (seed += 0x6d2b79f5);
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const names = [
  'Aarav Malhotra',
  'Vihaan Kapoor',
  'Advait Mehta',
  'Arjun Nair',
  'Kunal Singh',
  'Kabir Joshi',
  'Reyansh Patel',
  'Raghav Kulkarni',
  'Shaurya Verma',
  'Omkar Deshmukh',
  'Aarohi Sharma',
  'Ananya Iyer',
  'Diya Nair',
  'Kiara Khanna',
  'Meera Reddy',
  'Nandini Banerjee',
  'Tanvi Joshi',
  'Priya Kulkarni',
  'Riya Gupta',
  'Sonali Patil',
  'Aditi Chatterjee',
  'Roshni Roy',
  'Sana Shaikh',
  'Fatima Qureshi',
  'Zoya Khan',
  'Ishaan Bhatia',
  'Darshan Rao',
  'Saanvi Menon',
  'Tanishq Suri',
  'Hrithik Chandra',
  'Jatin Mehra',
  'Manav Sinha',
  'Yash Rajput',
  'Vikram Jha',
  'Anmol Kaur',
  'Neha Bansal',
  'Rhea Kapoor',
  'Shreya Banerjee',
  'Deepika Ranjan',
  'Alisha Fernandes',
  'Kavya Pillai',
  'Trisha Roy',
  'Palak Jain',
  'Tanya Mukherjee',
  'Nikhil Rao',
  'Rohan Ghosh',
  'Shahana Sheikh',
  'Surbhi Arora',
  'Megha Iyer',
  'Ayesha Qureshi',
];

const roles = [
  'Fragrance & Fashion Curator, Mumbai',
  'Date-Night Planner, Delhi',
  'Street-Style Explorer, Bengaluru',
  'Gym-to-Glow Enthusiast, Pune',
  'Travel Diaries Writer, Goa',
  'Cafe-Hopping Connoisseur, Kolkata',
  'Bookstore Wanderer, Jaipur',
  'Sunrise Runner, Hyderabad',
  'Skincare Ritualist, Chennai',
  'OOTD Photographer, Mumbai',
  'Weekend Market Hunter, Pune',
  'Office-to-Afterparty Host, Gurugram',
  'Art Gallery Regular, Bengaluru',
  'Music Festival Crew, Indore',
  'Saree Styling Fan, Lucknow',
  'Trek & Trail Narrator, Dehradun',
  'Wardrobe Stylist, Ahmedabad',
  'Weekend Brunch Reviewer, Chandigarh',
  'Classic Movie Buff, Kochi',
  'Indie Music Listener, Pune',
  'Perfume Layering Artist, Delhi',
  'Scent-Sampling Collector, Mumbai',
  'Coffee & Citrus Aficionado, Pune',
  'Desi Snack Explorer, Lucknow',
  'Sunday Market Wanderer, Jaipur',
  'Glow-Up Coach, Hyderabad',
  'Yoga & Aroma Devotee, Chennai',
  'Beach Weekend Dreamer, Goa',
  'City Walk Photographer, Kolkata',
  'Gym Bag Minimalist, Delhi',
  'Tech-to-Trend Translator, Bengaluru',
  'Slow Fashion Advocate, Mumbai',
  'Festival Night Planner, Ahmedabad',
  'Wanderlust Weekend Planner, Pune',
  'Sandalwood Seasoner, Mysuru',
  'Rainy-Day Mood Maker, Mumbai',
  'Fresh Start Routine Keeper, Chandigarh',
  'Date-Spot Scout, Delhi',
  'Tailored Wardrobe Fan, Lucknow',
  'Morning Commute Energizer, Pune',
  'Night Market Explorer, Mumbai',
  'Monsoon Romance Writer, Kolkata',
  'Sunset Drive Enthusiast, Hyderabad',
  'Kerala Spice & Scent Lover, Kochi',
  'Cricket Fan with a Cologne, Delhi',
  'Fashion Week Observer, Mumbai',
  'Weekend Theatre Goer, Bengaluru',
  'Book + Brew Combo Lover, Jaipur',
  'Picnic Planner, Chandigarh',
  'Aroma Moodboard Maker, Ahmedabad',
];

const starters = [
  'Longevity surprised me',
  'First spritz felt instantly premium',
  'It smells expensive without trying',
  'The dry-down is super smooth',
  'Super fresh and never overpowering',
  'That “clean confidence” vibe is real',
  'It projects just enough',
  'The scent trail is balanced',
  'Such a refined, modern finish',
  'Zero heaviness—perfect daily wear',
  'I get compliments every time',
  'It stays noticeable past dinner',
  'The opening is vibrant, not sharp',
  'Comforting and never cloying',
  'It works for both meetings and dates',
  'My routine instantly felt upgraded',
  'The kit made choosing easy',
  'Finally, a fragrance that feels “me”',
  'It layers beautifully with my skin scent',
  'Warm-weather performance is impressive',
  'The dry-down never turns weird',
  'Soft, elegant, and very wearable',
  'No headaches—just good fragrance',
  'The compliments came fast',
  'It feels classy on clothes',
  'That first spray is a mood',
  'The transition through the day is perfect',
  'A confident signature without being loud',
  'My friends asked what I was wearing',
  'It lasts longer than I expected',
  'So easy to pick a mood from the kit',
  'Fresh but not “generic-fresh”',
  'The scent changes in the best way',
  'Projects enough for a room',
  'It feels tailored to my style',
  'Day-to-night reliability is top-tier',
  'It’s become my everyday go-to',
  'Elegant, not sweet-tooth',
  'Clean, modern, and seriously addictive',
  'I keep reaching for it again and again',
];

const contexts = [
  'in my office routine',
  'during long commute days',
  'on date nights',
  'for weekend brunches',
  'after the gym',
  'for dinner plans',
  'at late-evening events',
  'when the weather is warm',
  'when I want a fresh start',
  'for formal dinners',
  'for casual hangs',
  'through busy work hours',
  'while traveling',
  'in rainy-day vibes',
  'for quick errands',
  'when I need extra confidence',
  'for social meetups',
  'for school/work drop-offs',
  'during family gatherings',
  'for a clean “just showered” feel',
  'for that put-together look',
  'for a calm evening mood',
  'for effortless everyday style',
  'for focus-mode days',
  'for celebratory nights',
  'for everyday errands',
  'for dinners with friends',
  'for evening walks',
  'for dinners at home',
  'for morning meetings',
];

const middles = [
  'settles into a smooth skin-scent',
  'never feels heavy on me',
  'stays noticeable without being annoying',
  'keeps its character for hours',
  'doesn’t get too sweet',
  'layers so well with my routine',
  'turns more gorgeous as it wears',
  'feels clean and modern',
  'works beautifully across the day',
  'projects strongly in the first hour',
  'still feels fresh even later',
  'gives me that “signature” effect',
  'feels premium on fabric',
  'gets softer in the best way',
  'stays elegant from start to finish',
  'feels balanced, not one-note',
  'smells expensive and effortless',
  'doesn’t overpower my surroundings',
  'holds up through long stretches',
  'feels confident and easy to wear',
  'makes me feel put-together',
  'keeps the vibe consistent',
  'smells like a well-planned mood',
];

const closers = [
  'Worth every rupee',
  'My new daily signature',
  'Perfect for my lifestyle',
  'Will definitely reorder',
  'Easily my favourite scent',
  'So glad I chose this kit',
  'Feels like a luxury treat',
  'Instant upgrade to my routine',
  'Absolutely recommend to friends',
  'Great gift-worthy option',
  'Already telling everyone about it',
  'A no-brainer purchase',
  'This is my “always” fragrance',
  'A really smart pick',
  'I’m keeping this in rotation',
];

const rng = mulberry32(123456789);
const usedComments = new Set<string>();
const reviews: Array<{
  id: number;
  user: string;
  role: string;
  rating: 4 | 4.5 | 5;
  comment: string;
}> = [];

while (reviews.length < 50) {
  const starter = starters[Math.floor(rng() * starters.length)];
  const context = contexts[Math.floor(rng() * contexts.length)];
  const middle = middles[Math.floor(rng() * middles.length)];
  const closer = closers[Math.floor(rng() * closers.length)];

  const r = rng();
  const rating: 4 | 4.5 | 5 = r < 0.25 ? 4 : r < 0.62 ? 4.5 : 5;

  // Keep the comment short-ish so differences show up in your 2-line clamp.
  const comment = `${starter} ${context}. ${middle} ${closer}.`;
  if (usedComments.has(comment)) continue;
  usedComments.add(comment);

  const i = reviews.length;
  reviews.push({
    id: i + 1,
    user: names[i],
    role: roles[i],
    rating,
    comment,
  });
}

function Stars({ rating }: { rating: number }) {
  const getFill = (i: number) => {
    // i is 1..5
    if (rating >= i) return 'full';
    if (rating >= i - 0.5) return 'half';
    return 'empty';
  };

  return (
    <div className="flex justify-center gap-1 mb-4" aria-label={`${rating} / 5`}>
      {Array.from({ length: 5 }).map((_, idx) => {
        const starIndex = idx + 1;
        const fill = getFill(starIndex);

        if (fill === 'half') {
          return (
            <span key={idx} className="relative inline-block w-4 h-4">
              <Star className="absolute left-0 top-0 w-4 h-4 text-black fill-transparent" />
              <span className="absolute left-0 top-0 h-4 w-1/2 overflow-hidden">
                <Star className="w-4 h-4 text-black fill-black" />
              </span>
            </span>
          );
        }

        if (fill === 'full') {
          return <Star key={idx} className="w-4 h-4 fill-black text-black" />;
        }

        return <Star key={idx} className="w-4 h-4 text-black fill-transparent" />;
      })}
    </div>
  );
}

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

                  <Stars rating={review.rating} />

                  <p
                    className="text-sm leading-relaxed mb-8 font-medium overflow-hidden"
                    style={{
                      display: '-webkit-box',
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: 'vertical',
                    }}
                  >
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