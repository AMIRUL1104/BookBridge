// src/app/(auth)/login/page.tsx
import { BookOpen } from "lucide-react";
import Link from "next/link";
import LoginForm from "./LoginForm";

export default function LoginPage() {
  console.log("[LoginPage] Server Component wrapper initialized.");

  return (
    <main className="min-h-screen w-full flex items-center justify-center bg-[#F5F7F8] px-4 py-12">
      <div className="w-full max-w-[440px] bg-white border border-[#DDE5E7] rounded-2xl p-6 sm:p-8 shadow-xs flex flex-col items-center">
        
        {/* লোগো এবং আইকন এরিয়া */}
        <div className="mb-6 flex flex-col items-center gap-2">
          <div className="w-12 h-12 rounded-xl bg-[#35858E]/10 text-[#35858E] flex items-center justify-center shadow-xs">
            <BookOpen className="w-6 h-6" />
          </div>
          <Link href="/" className="text-xl font-black text-gray-900 tracking-tight">
            Book<span className="text-[#35858E]">Bridge</span>
          </Link>
        </div>

        {/* হেডার টেক্সট */}
        <div className="text-center mb-6">
          <h1 className="text-2xl font-black text-gray-900 tracking-tight">
            Welcome Back
          </h1>
          <p className="text-sm text-gray-500 mt-1">
            Access your student dashboard and explore resources.
          </p>
        </div>

        {/* ইন্টারঅ্যাক্টিভ ফর্ম কোর */}
        <LoginForm />

        {/* রেজিস্ট্রেশন রিডাইরেক্ট লিঙ্ক */}
        <p className="text-sm text-gray-500 text-center mt-6">
          Don&apos;t have an account?{" "}
          <Link
            href="/auth/signup"
            className="font-bold text-[#35858E] hover:text-[#35858E]/80 transition-colors focus-visible:outline-2 focus-visible:outline-[#35858E] rounded"
          >
            Register here
          </Link>
        </p>

      </div>
    </main>
  );
}