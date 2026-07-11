// src/components/layout/navbar/MobileNavigation.tsx
"use client";

import { useState } from "react";
import NavigationLinks from "./NavigationLinks";
import AuthButtons from "./AuthButtons";
import UserMenu from "./UserMenu";
import MobileMenuButton from "./MobileMenuButton";

interface MobileNavigationProps {
  isLoggedIn: boolean;
  role: "user" | "admin" | null;
}


export default function MobileNavigation({ isLoggedIn, role }: MobileNavigationProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden flex items-center gap-4">
      {isLoggedIn && <UserMenu role={role} />}
      
      <MobileMenuButton isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />

      {isOpen && (
        <>
          <div 
            className="fixed inset-0 bg-black/50 z-40 backdrop-blur-xs transition-opacity"
            onClick={() => setIsOpen(false)}
          />
          {/* ড্রয়ার ব্যাকগ্রাউন্ড পরিবর্তন করে #35858E এবং বর্ডার অ্যাড করা হলো */}
          <div className="fixed inset-y-0 right-0 w-full max-w-[280px] bg-[#35858E] border-l border-white/10 z-50 p-6 shadow-2xl flex flex-col gap-6 animate-in slide-in-from-right duration-200">
            <div className="flex items-center justify-end">
              <MobileMenuButton isOpen={isOpen} onClick={() => setIsOpen(false)} />
            </div>

            <nav className="flex flex-col gap-4">
              <NavigationLinks 
                isLoggedIn={isLoggedIn} 
                role={role} 
                onLinkClick={() => setIsOpen(false)} 
              />
            </nav>

            <hr className="border-white/10" />

            {!isLoggedIn && (
              <div className="mt-auto">
                <AuthButtons />
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
}