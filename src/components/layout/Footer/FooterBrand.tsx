// src/components/layout/footer/FooterBrand.tsx
import Link from "next/link";

export default function FooterBrand() {
  return (
    <div className="flex flex-col gap-4 max-w-sm">
      <Link 
        href="/" 
        className="inline-block text-2xl font-black tracking-tight text-white focus-visible:outline-2 focus-visible:outline-[#35858E] rounded-md"
        aria-label="BookBridge Home"
      >
        Book<span className="text-[#F6CE71]">Bridge</span>
      </Link>
      <p className="text-[#C2D099] text-sm leading-relaxed">
        BookBridge helps students buy, sell, and donate academic books across Bangladesh through a simple and reliable platform.
      </p>
    </div>
  );
}