// src/app/page.tsx
import HomePage from "@/components/home/HomePage";

export default function Home() {
  console.log("[Root Home] Rendering main layout with full responsive width support.");

  return (

    <div className="w-full min-h-screen bg-[#F5F7F8] font-sans antialiased overflow-x-hidden">
      <HomePage />
    </div>
  );
}