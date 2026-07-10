// src/components/layout/navbar/Logo.tsx
import Link from "next/link";

export default function Logo() {
  return (
    <Link 
      href="/" 
      className="flex items-center gap-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#35858E] rounded-md transition-all"
      aria-label="BookBridge Home"
    >
      <span className="text-2xl font-black tracking-tight text-[#185519]">
        Book<span className="text-[#35858E]">Bridge</span>
      </span>
    </Link>
  );
}