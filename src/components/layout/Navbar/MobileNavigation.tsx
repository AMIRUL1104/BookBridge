"use client";

// src/components/layout/navbar/MobileNavigation.tsx

import { useState } from "react";
import { LogOut } from "lucide-react";
import NavigationLinks from "./NavigationLinks";
import AuthButtons from "./AuthButtons";
import UserMenu from "./UserMenu";
import MobileMenuButton from "./MobileMenuButton";
import { authClient } from "@/lib/auth-client"; // adjust import path to match your project
import { useRouter } from "next/navigation";
interface MobileNavigationProps {
  isLoggedIn: boolean;
  role: "user" | "admin" | null;
}

export default function MobileNavigation({
  isLoggedIn,
  role,
}: MobileNavigationProps) {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  function handleClose() {
    setIsOpen(false);
  }

  const handleSignout = async () => {


    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          router.push("/auth/signin"); // redirect to login page
          router.refresh(); // রিডাইরেক্টের পর  নতুন সেশন ডেটা লোড করার জন্য
        },
      },
    });
  }

  return (
    <div className="md:hidden flex items-center gap-4">
      {isLoggedIn && <UserMenu role={role} />}

      <MobileMenuButton isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />

      {isOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/50 z-40 backdrop-blur-xs transition-opacity"
            onClick={handleClose}
          />

          {/* Drawer */}
          <div className="fixed inset-y-0 right-0 w-full max-w-[280px] bg-[#35858E] border-l border-white/10 z-50 shadow-2xl flex flex-col animate-in slide-in-from-right duration-200">
            {/* Header */}
            <div className="flex items-center justify-end p-6 pb-0">
              <MobileMenuButton isOpen={isOpen} onClick={handleClose} />
            </div>

            {/* Nav links */}
            <nav className="flex flex-col gap-2 px-6 pt-6 flex-1 overflow-y-auto">
              <NavigationLinks
                isLoggedIn={isLoggedIn}
                role={role}
                isMobile={true}
                onLinkClick={handleClose}
              />
            </nav>

            <div className="px-6 pb-6 flex flex-col gap-4">
              <hr className="border-white/10" />

              {/* Sign Out — logged in */}
              {isLoggedIn && (
                <button
                  onClick={handleSignout}
                  className="flex items-center gap-2 w-full px-3 py-2.5 text-sm font-semibold text-white/90 hover:text-[#F6CE71] rounded-md transition-all group"
                >
                  <LogOut className="w-4 h-4 text-white/60 group-hover:text-[#F6CE71] transition-colors" />
                  Sign Out
                </button>
              )}

              {/* Auth buttons — not logged in */}
              {!isLoggedIn && <AuthButtons />}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
