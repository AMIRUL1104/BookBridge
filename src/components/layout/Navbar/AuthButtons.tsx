// src/components/layout/navbar/AuthButtons.tsx
import Link from "next/link";

export default function AuthButtons() {
  return (
    <div className="flex items-center gap-3">
      <Link
        href="/login"
        className="text-sm font-semibold text-[#35858E] hover:text-[#185519] px-4 py-2 rounded-lg border border-[#35858E] hover:border-[#185519] transition-all"
      >
        Login
      </Link>
      <Link
        href="/register"
        className="text-sm font-semibold text-white bg-[#35858E] hover:bg-[#185519] px-4 py-2 rounded-lg transition-all shadow-sm"
      >
        Register
      </Link>
    </div>
  );
}