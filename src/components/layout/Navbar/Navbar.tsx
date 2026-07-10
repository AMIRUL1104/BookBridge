// src/components/layout/navbar/Navbar.tsx
import Logo from "./Logo";
import DesktopNavigation from "./DesktopNavigation";
import MobileNavigation from "./MobileNavigation";

export default function Navbar() {
  // 🔒 Better Auth ইন্টিগ্রেশনের জন্য মক ভেরিয়েবল
 // টেস্ট করার জন্য এই ভেরিয়েবলগুলো চেঞ্জ করে দেখতে পারো:
  const isLoggedIn = false; 
  const role: "user" | "admin" = "admin"; // বা "user" অথবা গেস্টের জন্য null
  
  console.log(`[Navbar] Server Render - User Auth Status (Logged In: ${isLoggedIn}, Role: ${role})`);

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-[#DDE5E7] shadow-sm">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 h-16 flex items-center justify-between">
        
        {/* লোগো (লেফট সাইড) */}
        <Logo />

        {/* ডেক্সটপ নেভিগেশন (মিডল এবং রাইট সাইড) */}
        <DesktopNavigation isLoggedIn={isLoggedIn} role={role} />        {/* মোবাইল ড্রয়ার ও হামবার্গার (মোবাইল ভিউ) */}
        <MobileNavigation isLoggedIn={isLoggedIn} role={role} />

      </div>
    </header>
  );
}