// src/components/home/Hero.tsx
"use client";

import Link from "next/link";
import { ArrowRight, PlusCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  // প্যারেন্ট কন্টেইনারের জন্য Staggered Fade Effect
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15, // প্রতিটি চাইল্ড এলিমেন্ট ০.১৫ সেকেন্ড পর পর আসবে
      },
    },
  };

  // টেক্সট এবং বাটনগুলোর জন্য স্লাইড-ইন অ্যানিমেশন
  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1] as const, // টাইপসেফ প্রিমিয়াম Cubic Bezier কার্ভ
      },
    },
  };

  // রাইট সাইড ইলাস্ট্রেশনের জন্য এন্ট্রান্স এবং কন্টিনিউয়াস ফ্লোটিং অ্যানিমেশন
  const imageVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };


  return (
    <section className="relative bg-[#F5F7F8] py-16 lg:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* লেফট সাইড কন্টেন্ট (Framer Motion Wrapper) */}
        <motion.div
          className="flex flex-col gap-6 text-center lg:text-left"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* সাব-হেডিং ব্যাজ */}
          <motion.span
            variants={itemVariants}
            className="inline-flex self-center lg:self-start items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-[#35858E]/10 text-[#35858E]"
          >
            {` 📚 Bangladesh's Student Book Hub`}
          </motion.span>

          {/* মেইন হেডলাইন */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 tracking-tight leading-tight"
          >
            Share Books, <br />
            <span className="text-[#35858E]">Bridge the Gap</span>
          </motion.h1>

          {/* শর্ট ডেসক্রিপশন */}
          <motion.p
            variants={itemVariants}
            className="text-lg text-gray-600 max-w-xl mx-auto lg:mx-0 leading-relaxed"
          >
            {`Connect with fellow students across Bangladesh. Sell your used academic books or donate them to someone in need. Let's make education accessible for everyone.
`}          </motion.p>

          {/* CTA বাটনস গ্রুপ */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mt-2"
          >
            <Link
              href="/books"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 text-base font-semibold text-white bg-[#35858E] hover:bg-[#35858E]/90 px-6 py-3 rounded-xl transition-all shadow-md focus-visible:outline-2 focus-visible:outline-[#F6CE71]"
            >
              <span>Browse Books</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/books/add"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 text-base font-semibold text-[#35858E] bg-white border border-[#35858E]/20 hover:bg-gray-50 px-6 py-3 rounded-xl transition-all shadow-xs focus-visible:outline-2 focus-visible:outline-[#F6CE71]"
            >
              <PlusCircle className="w-5 h-5" />
              <span>Post a Book</span>
            </Link>
          </motion.div>
        </motion.div>

        {/* রাইট সাইড ইলাস্ট্রেশন (প্রফেশনাল ফ্লোটিং ইফেক্ট সহ) */}
        <motion.div
          className="relative flex justify-center items-center"
          variants={imageVariants}
          initial="hidden"
          animate="visible"
        >
          {/* এই মোশন ডিভটি কন্টিনিউয়াসলি ওপরে-নিচে ভাসবে (Infinite Float Effect) */}
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="w-full max-w-[500px] aspect-square rounded-3xl bg-gradient-to-tr from-[#35858E]/20 to-[#7DA78C]/10 border border-[#DDE5E7] p-8 flex items-center justify-center relative group"
          >
            <div className="absolute inset-4 rounded-2xl bg-white/40 backdrop-blur-xs border border-white/50 shadow-xs flex flex-col items-center justify-center p-6 text-center gap-3">
              <div className="w-16 h-16 rounded-2xl bg-[#35858E] text-white flex items-center justify-center font-bold text-2xl shadow-md">
                BB
              </div>
              <h3 className="font-bold text-xl text-gray-800">Academic Books Exchange</h3>
              <p className="text-sm text-gray-500 max-w-xs">Connecting Buyers, Sellers, and Donors within the Student Community.</p>
            </div>
            {/* ডেকোরেティブ ব্যাকগ্রাউন্ড সার্কেল */}
            <div className="absolute -bottom-6 -left-6 w-24 h-24 rounded-full bg-[#F6CE71]/40 blur-xl" />
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}