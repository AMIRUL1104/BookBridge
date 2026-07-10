// src/components/layout/navbar/UserMenu.tsx
"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";

export default function UserMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // বাইরে ক্লিক করলে ড্রপডাউন বন্ধ করার লজিক
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handlePlaceholderAction = (actionName: string) => {
    console.log(`[UserMenu] Temporary Triggered: ${actionName}`);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-center w-10 h-10 rounded-full bg-[#7DA78C] text-white font-bold border-2 border-[#DDE5E7] hover:border-[#35858E] focus:outline focus:outline-2 focus:outline-[#35858E] transition-all"
        aria-expanded={isOpen}
        aria-haspopup="true"
        aria-label="User Profile Menu"
      >
        A {/* মক ইনিশিয়াল বা এভাটার */}
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 origin-top-right rounded-xl bg-white border border-[#DDE5E7] shadow-xl py-1 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
          <Link
            href="/dashboard"
            onClick={() => setIsOpen(false)}
            className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-[#F5F7F8] hover:text-[#35858E] transition-colors"
          >
            Dashboard
          </Link>
          <Link
            href="/profile"
            onClick={() => {
              setIsOpen(false);
              handlePlaceholderAction("Profile View");
            }}
            className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-[#F5F7F8] hover:text-[#35858E] transition-colors"
          >
            Profile (placeholder)
          </Link>
          <hr className="border-[#DDE5E7] my-1" />
          <button
            onClick={() => handlePlaceholderAction("Logout Process")}
            className="block w-full text-left px-4 py-2.5 text-sm text-red-600 hover:bg-red-50 transition-colors"
          >
            Logout (placeholder)
          </button>
        </div>
      )}
    </div>
  );
}