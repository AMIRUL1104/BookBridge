// src/components/layout/navbar/MobileMenuButton.tsx
"use client";

import { Menu, X } from "lucide-react";

interface MobileMenuButtonProps {
  isOpen: boolean;
  onClick: () => void;
}

export default function MobileMenuButton({ isOpen, onClick }: MobileMenuButtonProps) {
  return (
    <button
      onClick={onClick}
      // আইকন কালার হোয়াইট (text-white) এ কনভার্ট করা হয়েছে
      className="p-2 text-white hover:text-[#F6CE71] focus:outline focus:outline-2 focus:outline-[#F6CE71] rounded-md md:hidden block transition-colors"
      aria-label={isOpen ? "Close main menu" : "Open main menu"}
      aria-expanded={isOpen}
    >
      {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
    </button>
  );
}