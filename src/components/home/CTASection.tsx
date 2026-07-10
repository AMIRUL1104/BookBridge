// src/components/home/CTASection.tsx
import Link from "next/link";
import { PlusCircle } from "lucide-react";

export default function CTASection() {
  return (
    <section className="bg-[#2B5748] py-16 lg:py-20 w-full text-white text-center relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 relative z-10 flex flex-col items-center gap-6">
        <h2 className="text-3xl sm:text-4xl font-black tracking-tight">
          Ready to Share Your Books?
        </h2>
        <p className="text-[#C2D099] text-base sm:text-lg max-w-xl leading-relaxed">
          Help another student by selling or donating your unused academic books. Your small contribution can empower another's education journey.
        </p>
        <Link
          href="/books/add"
          className="inline-flex items-center gap-2 text-sm font-bold text-gray-900 bg-[#FCDE70] hover:bg-[#FCDE70]/90 px-6 py-3 rounded-xl transition-all shadow-md mt-2 focus-visible:outline-2 focus-visible:outline-white"
        >
          <PlusCircle className="w-5 h-5" />
          <span>Post a Book</span>
        </Link>
      </div>

      {/* ব্র্যান্ড ডার্ক ব্যাকগ্রাউন্ড মাস্ক ডেকোরেশন */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-2xl -mr-20 -mt-20" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#35858E]/20 rounded-full blur-2xl -ml-20 -mb-20" />
    </section>
  );
}