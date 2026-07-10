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
      className="p-2 text-gray-600 hover:text-[#35858E] focus:outline focus:outline-2 focus:outline-[#35858E] rounded-md md:hidden block transition-colors"
      aria-label={isOpen ? "Close main menu" : "Open main menu"}
      aria-expanded={isOpen}
    >
      {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
    </button>
  );
}