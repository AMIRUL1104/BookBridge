// src/components/home/HowItWorks.tsx
"use client";

import { FilePlus, Users, ArrowLeftRight } from "lucide-react";
import { motion } from "framer-motion";
import SectionHeading from "../shared/SectionHeading";

export default function HowItWorks() {
  const steps = [
    {
      icon: FilePlus,
      title: "Post Your Book",
      desc: "Upload details of your unused academic books with condition, images and select Sell or Donate.",
    },
    {
      icon: Users,
      title: "Connect With Students",
      desc: "Interested students will request your book. Choose a recipient and unlock communication safely.",
    },
    {
      icon: ArrowLeftRight,
      title: "Exchange Successfully",
      desc: "Coordinate the collection or delivery directly with the student and complete the loop.",
    },
  ];

  // প্রিমিয়াম কন্টেইনার অ্যানিমেশন (Stagger Effect এর জন্য)
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // প্রতিটি কার্ড একটির পর আরেকটি আসবে
      },
    },
  };

// প্রতিটি কার্ডের জন্য মিনিমালিস্টিক স্লাইড ও ফেড অ্যানিমেশন
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1] as const, // 👈 এখানে শুধু "as const" যোগ করো
      },
    },
  };

  return (
    <section className="py-16 lg:py-24 bg-[#F5F7F8] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeading 
          title="How It Works" 
          subtitle="Three simple steps to bridge the educational resource gap." 
        />

        {/* Framer Motion Container */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 relative"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }} // স্ক্রিনে আসার সাথে সাথে একবারই অ্যানিমেট হবে
        >
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <motion.div 
                key={idx} 
                variants={cardVariants}
                whileHover={{ y: -6, transition: { duration: 0.2 } }} // হালকা ওপরের দিকে উঠবে (Premium Hover)
                className="bg-white border border-[#DDE5E7] p-8 rounded-2xl flex flex-col items-center text-center gap-4 relative shadow-xs hover:shadow-md transition-shadow duration-300"
              >
                {/* আইকন বক্স */}
                <div className="w-14 h-14 rounded-xl bg-[#35858E]/10 text-[#35858E] flex items-center justify-center font-bold">
                  <Icon className="w-7 h-7" />
                </div>
                
                <h3 className="font-bold text-xl text-gray-800">{step.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{step.desc}</p>
                
                {/* স্টেপ নাম্বার ইন্ডিকেটর */}
                <span className="absolute top-4 right-4 text-xs font-black text-gray-300">
                  0{idx + 1}
                </span>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}