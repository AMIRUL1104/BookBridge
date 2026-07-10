// src/components/layout/Navbar/DesktopNavigation.tsx
import NavigationLinks from "./NavigationLinks";
import AuthButtons from "./AuthButtons";
import UserMenu from "./UserMenu";

interface DesktopNavigationProps {
  isLoggedIn: boolean;
  role: "user" | "admin" | null; // 👈 এই লাইনটি যোগ করা হলো
}

export default function DesktopNavigation({ isLoggedIn, role }: DesktopNavigationProps) {
  return (
    <>
      {/* সেন্ট্রাল লিঙ্কস */}
      <nav className="hidden md:flex items-center gap-6" aria-label="Main Desktop Navigation">
        <NavigationLinks isLoggedIn={isLoggedIn} role={role} />
      </nav>

      {/* রাইট সাইড বাটন বা ইউজার মেনু */}
      <div className="hidden md:flex items-center gap-4">
        {isLoggedIn ? <UserMenu /> : <AuthButtons />}
      </div>
    </>
  );
}