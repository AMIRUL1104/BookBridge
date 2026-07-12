"use client";

import { AddPostFormValues } from "@/lib/validaions/add-post-schema";
import { useFormContext } from "react-hook-form";


const labelBase = "text-xs font-bold text-gray-700 uppercase tracking-wider";
const errorText = "text-xs font-medium text-red-500 mt-0.5";

export default function DescriptionSection() {
  const {
    register,
    formState: { errors },
  } = useFormContext<AddPostFormValues>();

  return (
    <section className="space-y-4">
      <h2 className="text-base font-semibold text-gray-700">Description</h2>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="description" className={labelBase}>
          Additional details (optional)
        </label>
        <textarea
          id="description"
          rows={4}
          placeholder="Mention edition year, highlighted pages, missing pages, etc."
          {...register("description")}
          className={`w-full bg-white border rounded-xl px-4 py-2.5 text-sm text-gray-800 placeholder-gray-400 outline-hidden transition-all resize-none ${
            errors.description
              ? "border-red-500 focus:border-red-500"
              : "border-[#DDE5E7] focus:border-[#35858E]"
          }`}
        />
        {errors.description && (
          <p className={errorText}>{errors.description.message}</p>
        )}
      </div>
    </section>
  );
}