"use client";

import { UseFormReturn } from "react-hook-form";
import { Mail } from "lucide-react";
import { ProfileFormValues } from "@/lib/validaions/profile-schema";


interface ProfileFormProps {
    form: UseFormReturn<ProfileFormValues>;
    email: string;
}

const DISTRICTS = [
    "Dhaka",
    "Chittagong",
    "Sylhet",
    "Rajshahi",
    "Khulna",
    "Barishal",
    "Rangpur",
    "Mymensingh",
    "Comilla",
    "Narayanganj",
    "Gazipur",
    "Bogura",
    "Jessore",
    "Dinajpur",
    "Cox's Bazar",
];

const inputBase =
    "w-full rounded-xl border border-[#DDE5E7] focus:border-[#35858E] focus:ring-2 focus:ring-[#35858E]/20 outline-none px-4 py-2.5 text-sm text-gray-800 bg-white transition-colors placeholder:text-gray-400";

const inputError = "border-red-500 focus:border-red-500 focus:ring-red-200";

const labelClass = "text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5 block";

const errorClass = "text-xs font-medium text-red-500 mt-1";

export function ProfileForm({ form, email }: ProfileFormProps) {
    const {
        register,
        formState: { errors },
    } = form;

    return (
        <div className="rounded-2xl border border-[#EDF1F2] shadow-sm bg-white p-6">
            <h2 className="text-sm font-bold text-gray-700 uppercase tracking-wider mb-5">
                Edit Details
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Full Name */}
                <div className="sm:col-span-2">
                    <label className={labelClass} htmlFor="fullName">
                        Full Name
                    </label>
                    <input
                        id="fullName"
                        type="text"
                        placeholder="Your full name"
                        className={`${inputBase} ${errors.fullName ? inputError : ""}`}
                        {...register("fullName")}
                    />
                    {errors.fullName && (
                        <p className={errorClass}>{errors.fullName.message}</p>
                    )}
                </div>

                {/* Email — read-only */}
                <div className="sm:col-span-2">
                    <label className={labelClass} htmlFor="email">
                        Email Address
                        <span className="ml-1.5 text-[10px] font-semibold text-gray-300 normal-case tracking-normal">
                            (locked)
                        </span>
                    </label>
                    <div className="relative">
                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                            <Mail size={15} />
                        </span>
                        <input
                            id="email"
                            type="email"
                            value={email}
                            readOnly
                            className="w-full rounded-xl border border-[#DDE5E7] bg-gray-50 pl-9 pr-4 py-2.5 text-sm text-gray-400 cursor-not-allowed outline-none"
                        />
                    </div>
                </div>

                {/* Phone Number */}
                <div>
                    <label className={labelClass} htmlFor="phoneNumber">
                        Phone Number
                    </label>
                    <input
                        id="phoneNumber"
                        type="tel"
                        placeholder="+880 1XXX-XXXXXX"
                        className={`${inputBase} ${errors.phoneNumber ? inputError : ""}`}
                        {...register("phoneNumber")}
                    />
                    {errors.phoneNumber && (
                        <p className={errorClass}>{errors.phoneNumber.message}</p>
                    )}
                </div>

                {/* District */}
                <div>
                    <label className={labelClass} htmlFor="district">
                        District
                    </label>
                    <select
                        id="district"
                        className={`${inputBase} ${errors.district ? inputError : ""} cursor-pointer`}
                        {...register("district")}
                    >
                        <option value="">Select district</option>
                        {DISTRICTS.map((d) => (
                            <option key={d} value={d}>
                                {d}
                            </option>
                        ))}
                    </select>
                    {errors.district && (
                        <p className={errorClass}>{errors.district.message}</p>
                    )}
                </div>

                {/* Area */}
                <div className="sm:col-span-2">
                    <label className={labelClass} htmlFor="area">
                        Area
                    </label>
                    <input
                        id="area"
                        type="text"
                        placeholder="e.g. Mirpur 10, Gulshan 2…"
                        className={`${inputBase} ${errors.area ? inputError : ""}`}
                        {...register("area")}
                    />
                    {errors.area && (
                        <p className={errorClass}>{errors.area.message}</p>
                    )}
                </div>
            </div>
        </div>
    );
}