// src/app/page.tsx
import HomePage from "@/components/home/HomePage";

export default function Home() {
  console.log("[Root Home] Rendering main layout with full responsive width support.");

  return (
    // w-full নিশ্চিত করে যে ভেতরের সেকশনগুলো ফুল-উইডথ পাবে 
    // bg-[#F5F7F8] আমাদের ডিজাইন সিস্টেমের লাইট ব্যাকগ্রাউন্ড কালার মেইনটেইন করবে
    <div className="w-full min-h-screen bg-[#F5F7F8] font-sans antialiased overflow-x-hidden">
      <HomePage />
    </div>
  );
}