"use client";

import { useFormContext } from "react-hook-form";
import { MapPin, Home } from "lucide-react";
import { AddPostFormValues } from "@/lib/validaions/add-post-schema";
import { DISTRICTS } from "./post";


const inputBase =
  "w-full bg-white border rounded-xl pl-10 pr-4 py-2.5 text-sm text-gray-800 placeholder-gray-400 outline-hidden transition-all";
const labelBase = "text-xs font-bold text-gray-700 uppercase tracking-wider";
const errorText = "text-xs font-medium text-red-500 mt-0.5";

export default function LocationSection() {
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
      <h2 className="text-base font-semibold text-gray-700">Location</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* District */}
        <div className="flex flex-col gap-1.5">
          <label htmlFor="district" className={labelBase}>
            District
          </label>
          <div className="relative">
            <MapPin className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              id="district"
              type="text"
              list="district-options"
              placeholder="Search district"
              autoComplete="off"
              {...register("district")}
              className={`${inputBase} ${borderClass(!!errors.district)}`}
            />
            <datalist id="district-options">
              {DISTRICTS.map((district) => (
                <option key={district} value={district} />
              ))}
            </datalist>
          </div>
          {errors.district && (
            <p className={errorText}>{errors.district.message}</p>
          )}
        </div>

        {/* Area */}
        <div className="flex flex-col gap-1.5">
          <label htmlFor="area" className={labelBase}>
            Area
          </label>
          <div className="relative">
            <Home className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              id="area"
              type="text"
              placeholder="e.g. Ambarkhana"
              {...register("area")}
              className={`${inputBase} ${borderClass(!!errors.area)}`}
            />
          </div>
          {errors.area && <p className={errorText}>{errors.area.message}</p>}
        </div>
      </div>
    </section>
  );
}