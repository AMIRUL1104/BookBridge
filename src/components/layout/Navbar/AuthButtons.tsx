// src/components/layout/navbar/AuthButtons.tsx
import Link from "next/link";

export default function AuthButtons() {
  return (
    <div className="flex items-center gap-3">
      {/* Login: White outline with white text */}
      <Link
        href="/login"
        className="text-sm font-semibold text-white hover:text-[#FCDE70] px-4 py-2 rounded-lg border border-white hover:border-[#FCDE70] transition-all focus-visible:outline-2 focus-visible:outline-[#FCDE70]"
      >
        Login
      </Link>
      {/* Primary Button (Register): #35858E with white text */}
      <Link
        href="/register"
        className="text-sm font-semibold text-white bg-[#35858E] hover:bg-[#35858E]/90 px-4 py-2 rounded-lg transition-all shadow-sm focus-visible:outline-2 focus-visible:outline-[#FCDE70]"
      >
        Register
      </Link>
    </div>
  );
}