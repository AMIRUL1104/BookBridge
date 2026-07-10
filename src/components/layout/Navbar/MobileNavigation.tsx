// src/components/layout/Navbar/MobileNavigation.tsx
"use client";

import { useState } from "react";
import NavigationLinks from "./NavigationLinks";
import AuthButtons from "./AuthButtons";
import UserMenu from "./UserMenu";
import MobileMenuButton from "./MobileMenuButton";

interface MobileNavigationProps {
  isLoggedIn: boolean;
  role: "user" | "admin" | null; // 👈 এই লাইনটি যোগ করা হলো
}

export default function MobileNavigation({ isLoggedIn, role }: MobileNavigationProps) {
  const [isOpen, setIsOpen] = useState(false);

  console.log(`[MobileNavigation] Client Render - Drawer State Open: ${isOpen}`);

  return (
    <div className="md:hidden flex items-center gap-4">
      {isLoggedIn && <UserMenu />}
      
      <MobileMenuButton isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />

      {isOpen && (
        <>
          <div 
            className="fixed inset-0 bg-black/40 z-40 backdrop-blur-sm transition-opacity"
            onClick={() => setIsOpen(false)}
          />
          <div className="fixed inset-y-0 right-0 w-full max-w-[280px] bg-[#F5F7F8] z-50 p-6 shadow-2xl flex flex-col gap-6 animate-in slide-in-from-right duration-200">
            <div className="flex items-center justify-end">
              <MobileMenuButton isOpen={isOpen} onClick={() => setIsOpen(false)} />
            </div>

            <nav className="flex flex-col gap-4">
              {/* 👈 এখানে role প্রপটি পাস করা হলো */}
              <NavigationLinks 
                isLoggedIn={isLoggedIn} 
                role={role} 
                onLinkClick={() => setIsOpen(false)} 
              />
            </nav>

            <hr className="border-[#DDE5E7]" />

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