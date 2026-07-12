"use client";

import { Search, SlidersHorizontal, ArrowUpDown } from "lucide-react";
import type { MyPostsFilter, MyPostsSort } from "./my-post";

interface MyPostsToolbarProps {
  search: string;
  onSearchChange: (value: string) => void;
  filter: MyPostsFilter;
  onFilterChange: (value: MyPostsFilter) => void;
  sort: MyPostsSort;
  onSortChange: (value: MyPostsSort) => void;
  resultCount: number;
}

const FILTER_OPTIONS: { label: string; value: MyPostsFilter }[] = [
  { label: "All Posts", value: "all" },
  { label: "Sell", value: "sell" },
  { label: "Donate", value: "donate" },
  { label: "Available", value: "available" },
  { label: "Requested", value: "requested" },
  { label: "Sold", value: "sold" },
];

const SORT_OPTIONS: { label: string; value: MyPostsSort }[] = [
  { label: "Newest First", value: "newest" },
  { label: "Oldest First", value: "oldest" },
  { label: "Title (A–Z)", value: "title-asc" },
  { label: "Title (Z–A)", value: "title-desc" },
];

const controlBase =
  "w-full appearance-none bg-white border border-[#DDE5E7] focus:border-[#35858E] rounded-xl pl-10 pr-4 py-2.5 text-sm text-gray-800 outline-hidden transition-all cursor-pointer";

export default function MyPostsToolbar({
  search,
  onSearchChange,
  filter,
  onFilterChange,
  sort,
  onSortChange,
  resultCount,
}: MyPostsToolbarProps) {
  return (
    <div className="bg-white rounded-2xl border border-[#EDF1F2] shadow-sm p-4 space-y-3">
      <div className="flex flex-col lg:flex-row lg:items-center gap-3">
        {/* Search */}
        <div className="relative flex-1">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            type="text"
            value={search}
            onChange={(event) => onSearchChange(event.target.value)}
            placeholder="Search by title, category, or book name..."
            className="w-full bg-white border border-[#DDE5E7] focus:border-[#35858E] rounded-xl pl-10 pr-4 py-2.5 text-sm text-gray-800 placeholder-gray-400 outline-hidden transition-all"
          />
        </div>

        {/* Filter */}
        <div className="relative w-full lg:w-48">
          <SlidersHorizontal className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <select
            value={filter}
            onChange={(event) =>
              onFilterChange(event.target.value as MyPostsFilter)
            }
            className={controlBase}
          >
            {FILTER_OPTIONS.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        {/* Sort */}
        <div className="relative w-full lg:w-48">
          <ArrowUpDown className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <select
            value={sort}
            onChange={(event) => onSortChange(event.target.value as MyPostsSort)}
            className={controlBase}
          >
            {SORT_OPTIONS.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      <p className="text-xs text-gray-400">
        {resultCount} {resultCount === 1 ? "post" : "posts"} found
      </p>
    </div>
  );
}
