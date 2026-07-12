"use client";

import { useFormContext } from "react-hook-form";
import { Phone, MessageCircle } from "lucide-react";
import { AddPostFormValues } from "@/lib/validaions/add-post-schema";


const inputBase =
  "w-full bg-white border rounded-xl pl-10 pr-4 py-2.5 text-sm text-gray-800 placeholder-gray-400 outline-hidden transition-all";
const labelBase = "text-xs font-bold text-gray-700 uppercase tracking-wider";
const errorText = "text-xs font-medium text-red-500 mt-0.5";

export default function ContactSection() {
  const {
    register,
    formState: { errors },
  } = useFormContext<AddPostFormValues>();

  const borderClass = (hasError?: boolean) =>
    hasError
      ? "border-red-500 focus:border-red-500"
      : "border-[#DDE5E7] focus:border-[#35858E]";

  return (
    <section className="space-y-4">
      <h2 className="text-base font-semibold text-gray-700">Contact</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Phone */}
        <div className="flex flex-col gap-1.5">
          <label htmlFor="phone" className={labelBase}>
            Phone Number
          </label>
          <div className="relative">
            <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              id="phone"
              type="text"
              placeholder="01XXXXXXXXX"
              {...register("phone")}
              className={`${inputBase} ${borderClass(!!errors.phone)}`}
            />
          </div>
          {errors.phone && <p className={errorText}>{errors.phone.message}</p>}
        </div>

        {/* Messenger */}
        <div className="flex flex-col gap-1.5">
          <label htmlFor="messenger" className={labelBase}>
            Messenger (optional)
          </label>
          <div className="relative">
            <MessageCircle className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              id="messenger"
              type="text"
              placeholder="Facebook Messenger username or link"
              {...register("messenger")}
              className={`${inputBase} ${borderClass(!!errors.messenger)}`}
            />
          </div>
          {errors.messenger && (
            <p className={errorText}>{errors.messenger.message}</p>
          )}
        </div>
      </div>

      {/* WhatsApp only toggle */}
      <label className="flex items-center gap-2.5 cursor-pointer text-sm text-gray-600 select-none w-fit">
        <input
          type="checkbox"
          {...register("whatsappOnly")}
          className="w-4 h-4 rounded-sm border-[#DDE5E7] text-[#35858E] focus:ring-[#35858E]"
        />
        Reachable on WhatsApp only
      </label>
    </section>
  );
}