// src/components/layout/navbar/DesktopNavigation.tsx
import NavigationLinks from "./NavigationLinks";
import AuthButtons from "./AuthButtons";
import UserMenu from "./UserMenu";

interface DesktopNavigationProps {
  isLoggedIn: boolean;
  role: "user" | "admin" | null;
}

export default function DesktopNavigation({ isLoggedIn, role }: DesktopNavigationProps) {
  return (
    <>
      <nav className="hidden md:flex items-center gap-6" aria-label="Main Desktop Navigation">
        <NavigationLinks isLoggedIn={isLoggedIn} role={role} />
      </nav>

      <div className="hidden md:flex items-center gap-4">
        {isLoggedIn ? <UserMenu role={role} /> : <AuthButtons />}
      </div>
    </>
  );
}