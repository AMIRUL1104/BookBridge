// src/components/layout/navbar/Logo.tsx
import Link from "next/link";

export default function Logo() {
  return (
    <Link 
      href="/" 
      className="flex items-center gap-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#F6CE71] rounded-md transition-all"
      aria-label="BookBridge Home"
    >
      {/* লোগো টেক্সট সম্পূর্ণ হোয়াইট এবং অ্যাকসেন্ট কালার করা হলো */}
      <span className="text-2xl font-black tracking-tight text-white">
        Book<span className="text-[#F6CE71]">Bridge</span>
      </span>
    </Link>
  );
}