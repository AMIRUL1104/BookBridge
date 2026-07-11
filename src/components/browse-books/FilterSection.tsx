// src/components/browse-books/FilterSection.tsx
"use client";

import { Search, SlidersHorizontal, BookOpen, Shield, HelpCircle } from "lucide-react";

export default function FilterSection() {
  return (
    <div className="w-full bg-white border border-[#DDE5E7] rounded-2xl p-4 shadow-xs flex flex-col lg:flex-row gap-4 items-center justify-between">
      
      {/* Search Input Box */}
      <div className="relative w-full lg:max-w-md">
        <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
        <input
          type="text"
          placeholder="Search by book name, author, or keywords..."
          className="w-full bg-gray-50 border border-[#DDE5E7] focus:border-[#35858E] rounded-xl pl-10 pr-4 py-2.5 text-sm text-gray-800 placeholder-gray-400 outline-hidden transition-all"
        />
      </div>

      {/* Select Filter Controls Group */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 w-full lg:w-auto">
        
        {/* Category Filter */}
        <div className="relative flex items-center">
          <BookOpen className="absolute left-3 w-4 h-4 text-gray-400 pointer-events-none" />
          <select className="w-full bg-gray-50 border border-[#DDE5E7] text-gray-700 text-xs sm:text-sm rounded-xl pl-9 pr-8 py-2.5 appearance-none focus:outline-[#35858E] cursor-pointer">
            <option value="">All Categories</option>
            <option value="science">Science</option>
            <option value="engineering">Engineering</option>
            <option value="medical">Medical</option>
            <option value="business">Business</option>
            <option value="admission">Admission</option>
          </select>
        </div>

        {/* Condition Filter */}
        <div className="relative flex items-center">
          <Shield className="absolute left-3 w-4 h-4 text-gray-400 pointer-events-none" />
          <select className="w-full bg-gray-50 border border-[#DDE5E7] text-gray-700 text-xs sm:text-sm rounded-xl pl-9 pr-8 py-2.5 appearance-none focus:outline-[#35858E] cursor-pointer">
            <option value="">Any Condition</option>
            <option value="new">Like New</option>
            <option value="good">Good</option>
            <option value="fair">Fair</option>
          </select>
        </div>

        {/* Post Type Filter (Sell / Donate) */}
        <div className="relative flex items-center col-span-2 sm:col-span-1">
          <HelpCircle className="absolute left-3 w-4 h-4 text-gray-400 pointer-events-none" />
          <select className="w-full bg-gray-50 border border-[#DDE5E7] text-gray-700 text-xs sm:text-sm rounded-xl pl-9 pr-8 py-2.5 appearance-none focus:outline-[#35858E] cursor-pointer">
            <option value="">All Types</option>
            <option value="sell">For Sell</option>
            <option value="donate">For Donation</option>
          </select>
        </div>

      </div>
    </div>
  );
}