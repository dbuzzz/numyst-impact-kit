'use client';

import { useState, useEffect } from 'react';

export default function ProductDetails() {
  const [timeLeft, setTimeLeft] = useState({
    hours: '03',
    minutes: '00',
    seconds: '00'
  });

  useEffect(() => {
    const endTime = new Date().getTime() + 3 * 60 * 60 * 1000;

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = endTime - now;

      if (distance <= 0) {
        clearInterval(timer);
        setTimeLeft({ hours: '00', minutes: '00', seconds: '00' });
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
    <div className="flex flex-col gap-8 max-w-lg">

      {/* Badges */}
      <div className="flex gap-2">
        <span className="bg-green-100 text-green-700 text-xs font-semibold px-3 py-1 rounded-full">
          In Stock
        </span>
        <span className="bg-amber-100 text-amber-700 text-xs font-semibold px-3 py-1 rounded-full">
          Bestseller
        </span>
      </div>

      {/* Title */}
      <div>
        <h1 className="text-4xl font-bold mb-2">Impact Kit</h1>
        <p className="text-gray-500 text-sm leading-relaxed">
          Five signature fragrances in one curated set. 
          30% concentration for lasting impact.
        </p>
      </div>

      {/* Price Section */}
      <div className="flex items-center gap-4 flex-wrap">
        <span className="text-4xl font-bold text-black">₹499/</span>
        <span className="text-gray-400 line-through text-lg">₹1499</span>
        <span className="bg-red-100 text-red-600 text-xs font-semibold px-3 py-1 rounded-full">
          Save ₹1,000
        </span>
      </div>

      {/* Flash Sale Timer */}
      <div className="bg-black text-white p-5 rounded-2xl flex justify-between items-center">
        <div>
          <p className="text-xs text-gray-400 uppercase tracking-widest mb-2">
            Flash Sale Ends In:
          </p>
          <p className="text-2xl font-mono font-bold">
            {timeLeft.hours} : {timeLeft.minutes} : {timeLeft.seconds}
          </p>
        </div>
        <div className="text-right">
          <p className="text-xs text-gray-400 uppercase tracking-widest mb-2">
            Stock Left
          </p>
          <p className="text-3xl font-bold text-red-500">87</p>
        </div>
      </div>

      {/* What's Inside Card */}
      <div className="border rounded-2xl p-6 bg-white shadow-sm">
        <h3 className="text-lg font-semibold mb-4">What's Inside</h3>

        <ul className="space-y-4 text-sm text-gray-600">
          <li className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="w-3 h-3 bg-pink-300 rounded-full"></span>
              9ml (For Her)
            </div>
            ⓘ
          </li>

          <li className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="w-3 h-3 bg-blue-300 rounded-full"></span>
              9ml (Unisex)
            </div>
            ⓘ
          </li>

          <li className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="w-3 h-3 bg-black rounded-full"></span>
              9ml (Unisex)
            </div>
            ⓘ
          </li>

          <li className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="w-3 h-3 bg-purple-400 rounded-full"></span>
              9ml (Unisex)
            </div>
            ⓘ
          </li>

          <li className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="w-3 h-3 bg-amber-600 rounded-full"></span>
              9ml (For Him)
            </div>
            ⓘ
          </li>
        </ul>
      </div>

      {/* Add to Cart Section (Quantity Removed) */}
      <a
        href="https://numyst.com/checkout/?add-to-cart=4186"
        target="_blank"
        rel="noopener noreferrer"
        className="w-full bg-black text-white text-center font-semibold rounded-xl py-4 hover:bg-gray-900 transition"
      >
        Add to Cart
      </a>

      {/* Shipping Box */}
      <div className="bg-green-50 border border-green-200 p-4 rounded-xl text-sm text-green-700">
        <strong>Free Express Shipping</strong> <br />
        Order in next 2 hours for delivery by tomorrow
      </div>

    </div>
  );
}