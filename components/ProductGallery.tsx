'use client';

import { useState } from 'react';
import Image from 'next/image';

const thumbnails = [
  '/impactkit/assets/bottel4.webp',
  '/impactkit/assets/7.webp',
  '/impactkit/assets/bottel3.webp',
  '/impactkit/assets/bottel2.webp',
];

export default function ProductGallery() {
  const [activeImage, setActiveImage] = useState(thumbnails[0]);

  return (
    <div className="w-full">

      {/* Main Image */}
      <div className="relative aspect-square rounded-3xl overflow-hidden bg-[#F9F9F9] border border-gray-100 mb-4">
        <Image
          src={activeImage}
          alt="Impact Kit"
          fill
          className="object-contain p-6"
          referrerPolicy="no-referrer"
          priority
        />
        <div className="absolute top-4 left-4 bg-[#FF4D4D] text-white text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider">
          Hot
        </div>
      </div>

      {/* Thumbnails */}
      <div className="grid grid-cols-4 gap-2 mb-6">
        {thumbnails.map((thumb, i) => (
          <button
            key={i}
            onClick={() => setActiveImage(thumb)}
            className={`relative aspect-square rounded-lg overflow-hidden border-2 transition-all ${
              activeImage === thumb
                ? 'border-black'
                : 'border-transparent bg-gray-50'
            }`}
          >
            <Image
              src={thumb}
              alt={`Thumbnail ${i + 1}`}
              fill
              className="object-cover"
              referrerPolicy="no-referrer"
            />
          </button>
        ))}
      </div>

      {/* Single Add To Cart Button (No Quantity Box) */}
      <div className="w-full">
        <a
          href="https://numyst.com/checkout/?add-to-cart=4186"
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full text-center bg-black text-white py-4 rounded-2xl font-semibold uppercase tracking-wider transition-all duration-300 hover:bg-gray-900 hover:scale-[1.02]"
        >
          Add To Cart
        </a>
      </div>

    </div>
  );
}