import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/" className="flex flex-col items-center">
          <div className="relative w-23 h-23">
            <Image 
              src="/impactkit/assets/logo.png" 
              alt="NUMYST" 
              fill 
              className="object-contain"
              referrerPolicy="no-referrer"
            />
          </div>
        </Link>

        {/* Shop Now Button */}
        <Link
          href="https://numyst.com/checkout/?add-to-cart=4186"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-black text-white px-6 py-2.5 rounded-lg font-bold text-sm hover:bg-gray-800 transition-colors"
        >
          Shop Now
        </Link>

      </div>
    </header>
  );
}