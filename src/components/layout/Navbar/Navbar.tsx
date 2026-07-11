// src/components/layout/navbar/Navbar.tsx
import Logo from "./Logo";
import DesktopNavigation from "./DesktopNavigation";
import MobileNavigation from "./MobileNavigation";

export default function Navbar() {
  const isLoggedIn = true; 
  const role: "user" | "admin" = "admin"; 

  console.log(`[Navbar] Dark Theme Render - Logged In: ${isLoggedIn}, Role: ${role}`);

  return (
    // ব্যাকগ্রাউন্ড পরিবর্তন করে #35858E এবং বর্ডার rgba(255,255,255,0.1) করা হলো
    <header className="sticky top-0 z-50 w-full bg-[#35858E] border-b border-white/10 shadow-md">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 h-16 flex items-center justify-between">
        
        {/* লোগো (লেফট সাইড) */}
        <Logo />

        {/* ডেক্সটপ নেভিগেশন (মিডল এবং রাইট সাইড) */}
        <DesktopNavigation isLoggedIn={isLoggedIn} role={role} />

        {/* মোবাইল ড্রয়ার ও হামবার্গার (মোবাইল ভিউ) */}
        <MobileNavigation isLoggedIn={isLoggedIn} role={role} />

      </div>
    </header>
  );
}