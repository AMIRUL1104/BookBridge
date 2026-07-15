// src/components/browse-books/FilterSection.tsx
"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Search, BookOpen, Shield, HelpCircle } from "lucide-react";

export default function FilterSection() {
  const router = useRouter();
  const searchParams = useSearchParams();

  // URL থেকে ইনিশিয়াল ভ্যালু রিড করা হচ্ছে (পেজ রিফ্রেশ করলেও স্টেট হারিয়ে যাবে না)
  const [search, setSearch] = useState(searchParams.get("search") || "");
  const [category, setCategory] = useState(searchParams.get("category") || "");
  const [condition, setCondition] = useState(searchParams.get("condition") || "");
  const [listingType, setListingType] = useState(searchParams.get("listingType") || "");

  // URL আপডেট করার কমন ফাংশন
  const updateQueryParams = (key: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (value) {
      params.set(key, value);
    } else {
      params.delete(key);
    }
    params.set("page", "1"); // ফিল্টার চেঞ্জ হলে সবসময় ১ম পেজে ব্যাক করবে
    router.push(`?${params.toString()}`, { scroll: false });
  };

  // সার্চের জন্য Debounce লজিক (৫০০ms)
  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      const currentSearch = searchParams.get("search") || "";
      if (search !== currentSearch) {
        updateQueryParams("search", search);
      }
    }, 500);

    return () => clearTimeout(delayDebounceFn);
  }, [search]);

  return (
    <div className="w-full bg-white border border-[#DDE5E7] rounded-2xl p-4 shadow-xs flex flex-col lg:flex-row gap-4 items-center justify-between mb-6">

      {/* Search Input Box */}
      <div className="relative w-full lg:max-w-md">
        <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search by book name, publisher, or keywords..."
          className="w-full bg-gray-50 border border-[#DDE5E7] focus:border-[#35858E] rounded-xl pl-10 pr-4 py-2.5 text-sm text-gray-800 placeholder-gray-400 outline-hidden transition-all"
        />
      </div>

      {/* Select Filter Controls Group */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 w-full lg:w-auto">

        {/* Category Filter */}
        <div className="relative flex items-center">
          <BookOpen className="absolute left-3 w-4 h-4 text-gray-400 pointer-events-none" />
          <select
            value={category}
            onChange={(e) => {
              setCategory(e.target.value);
              updateQueryParams("category", e.target.value);
            }}
            className="w-full bg-gray-50 border border-[#DDE5E7] text-gray-700 text-xs sm:text-sm rounded-xl pl-9 pr-8 py-2.5 appearance-none focus:outline-[#35858E] cursor-pointer"
          >
            <option value="">All Categories</option>
            <option value="science">Science</option>
            <option value="commerce">Commerce</option>
            <option value="arts">Arts</option>
            <option value="admission">Admission</option>
            <option value="buisness">Buisness</option>
            <option value="engineering">Engineering</option>
            <option value="medical">Medical</option>
            <option value="others">Others</option>
          </select>
        </div>

        {/* Condition Filter */}
        <div className="relative flex items-center">
          <Shield className="absolute left-3 w-4 h-4 text-gray-400 pointer-events-none" />
          <select
            value={condition}
            onChange={(e) => {
              setCondition(e.target.value);
              updateQueryParams("condition", e.target.value);
            }}
            className="w-full bg-gray-50 border border-[#DDE5E7] text-gray-700 text-xs sm:text-sm rounded-xl pl-9 pr-8 py-2.5 appearance-none focus:outline-[#35858E] cursor-pointer"
          >
            <option value="">Any Condition</option>
            <option value="like_new">Like New</option>
            <option value="good">Good</option>
            <option value="fair">Fair</option>
          </select>
        </div>

        {/* Post Type Filter */}
        <div className="relative flex items-center col-span-2 sm:col-span-1">
          <HelpCircle className="absolute left-3 w-4 h-4 text-gray-400 pointer-events-none" />
          <select
            value={listingType}
            onChange={(e) => {
              setListingType(e.target.value);
              updateQueryParams("listingType", e.target.value);
            }}
            className="w-full bg-gray-50 border border-[#DDE5E7] text-gray-700 text-xs sm:text-sm rounded-xl pl-9 pr-8 py-2.5 appearance-none focus:outline-[#35858E] cursor-pointer"
          >
            <option value="">All Types</option>
            <option value="sell">For Sell</option>
            <option value="donate">For Donation</option>
          </select>
        </div>

      </div>
    </div>
  );
}