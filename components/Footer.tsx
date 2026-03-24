import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#F8F6F2] text-black py-10 px-6 border-t border-gray-200">
      
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-[11px] uppercase tracking-widest text-gray-500 space-y-4 md:space-y-0">
        
        <p>
          © {new Date().getFullYear()} Numyst Perfumes India. All Rights Reserved.
        </p>

        <div className="flex gap-8">
          <Link
            href="https://numyst.com/privacy-policy/"
            target="_blank"
            className="hover:text-black transition-colors"
          >
            Privacy Policy
          </Link>

          <Link
            href="https://numyst.com/terms-conditions/"
            target="_blank"
            className="hover:text-black transition-colors"
          >
            Terms of Service
          </Link>
        </div>

      </div>

    </footer>
  );
}