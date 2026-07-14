// src/components/auth/LoginForm.tsx
"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Eye, EyeOff, Mail, Lock, Loader2 } from "lucide-react";
import Link from "next/link";
import SocialAuth from "./SocialAuth";
import { authClient } from "@/lib/auth-client";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";
// Zod Validation Schema Definition
const loginSchema = z.object({
  email: z.string().min(1, "Email is required").email("Please enter a valid email address"),
  password: z.string().min(1, "Password is required"),
  rememberMe: z.boolean().optional(),
});

type LoginFormValues = z.infer<typeof loginSchema>;

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();


  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
      rememberMe: false,
    },
  });

  const onSubmit = async (userData: LoginFormValues) => {
    setIsLoading(true);
    // console.log("[LoginForm] Validated Credentials Submitted:", data);

    try {
      // Better Auth ক্লায়েন্ট কল
      const { data, error } = await authClient.signIn.email({
        email: userData.email, // required
        password: userData.password, // required
        rememberMe: userData.rememberMe,

      });

      // যদি Better Auth কোনো এরর রিটার্ন করে (যেমন: Email already exists)
      if (error) {
        // console.error("[RegisterForm] Better Auth error:", error.message);
        toast.error(error.message || "Something went wrong during sign in.");
        setIsLoading(false);
        return; // এখানেই ফাংশন থামিয়ে দেওয়া হলো
      }

      // সফলভাবে রেজিস্ট্রেশন সম্পন্ন হলে
      if (data?.user) {

        // console.log("[RegisterForm] User registered successfully:", data.user);
        toast.success(" Welcome to BookBridge.");

        // স্টেট ক্লিয়ার করে হোম পেজে রিডাইরেক্ট
        setIsLoading(false);
        router.push(searchParams.get("redirect") || "/");
        router.refresh(); // রিডাইরেক্টের পর নতুন সেশন ডেটা লোড করার জন্য
      }
    } catch (err) {
      // নেটওয়ার্ক বা অন্য কোনো আনএক্সপেক্টেড এরর হ্যান্ডেল করার জন্য
      // console.error("[RegisterForm] Unexpected network error:", err);
      toast.error("Network error. Please check your connection and try again.");
      setIsLoading(false);
    }
    setIsLoading(false);
  };

  return (
    <div className="w-full flex flex-col gap-5">
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">

        {/* Email Input Field */}
        <div className="flex flex-col gap-1.5">
          <label htmlFor="email" className="text-xs font-bold text-gray-700 uppercase tracking-wider">
            Email Address
          </label>
          <div className="relative">
            <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              id="email"
              type="email"
              placeholder="name@student.com"
              {...register("email")}
              className={`w-full bg-white border ${errors.email ? "border-red-500 focus:border-red-500" : "border-[#DDE5E7] focus:border-[#35858E]"
                } rounded-xl pl-10 pr-4 py-2.5 text-sm text-gray-800 placeholder-gray-400 outline-hidden transition-all`}
            />
          </div>
          {errors.email && (
            <p className="text-xs font-medium text-red-500 mt-0.5">{errors.email.message}</p>
          )}
        </div>

        {/* Password Input Field */}
        <div className="flex flex-col gap-1.5">
          <label htmlFor="password" className="text-xs font-bold text-gray-700 uppercase tracking-wider">
            Password
          </label>
          <div className="relative">
            <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              id="password"
              type={showPassword ? "text" : "password"}
              placeholder="••••••••"
              {...register("password")}
              className={`w-full bg-white border ${errors.password ? "border-red-500 focus:border-red-500" : "border-[#DDE5E7] focus:border-[#35858E]"
                } rounded-xl pl-10 pr-10 py-2.5 text-sm text-gray-800 placeholder-gray-400 outline-hidden transition-all`}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-gray-400 hover:text-gray-600 rounded-md cursor-pointer"
            >
              {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
            </button>
          </div>
          {errors.password && (
            <p className="text-xs font-medium text-red-500 mt-0.5">{errors.password.message}</p>
          )}
        </div>

        {/* Remember Me & Forgot Password Links */}
        <div className="flex items-center justify-between text-xs sm:text-sm mt-1">
          <label className="flex items-center gap-2 cursor-pointer text-gray-600 select-none">
            <input
              type="checkbox"
              {...register("rememberMe")}
              className="w-4 h-4 rounded-sm border-[#DDE5E7] text-[#35858E] focus:ring-[#35858E]"
            />
            <span>Remember Me</span>
          </label>
          <Link
            href="/forgot-password"
            className="font-semibold text-[#35858E] hover:text-[#35858E]/80 transition-colors"
          >
            Forgot Password?
          </Link>
        </div>

        {/* Login Button */}
        <button
          type="submit"
          disabled={isLoading}
          className="w-full inline-flex items-center justify-center bg-[#35858E] hover:bg-[#35858E]/90 text-white font-bold py-2.5 px-4 rounded-xl transition-all shadow-md cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed mt-2 focus-visible:outline-2 focus-visible:outline-[#F6CE71]"
        >
          {isLoading ? (
            <Loader2 className="w-5 h-5 animate-spin" />
          ) : (
            <span>Sign In</span>
          )}
        </button>
      </form>

      {/* Divider */}
      <div className="flex items-center my-1">
        <div className="flex-1 border-t border-[#DDE5E7]"></div>
        <span className="px-3 text-xs font-bold text-gray-400 uppercase tracking-wider">OR</span>
        <div className="flex-1 border-t border-[#DDE5E7]"></div>
      </div>

      {/* Social Google Provider Button */}
      <SocialAuth />
    </div>
  );
}