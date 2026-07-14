"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";

interface UsersPaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export function UsersPagination({
  currentPage,
  totalPages,
  onPageChange,
}: UsersPaginationProps) {
  if (totalPages <= 1) return null;

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="flex items-center justify-center gap-1.5">
      {/* Previous */}
      <button
        type="button"
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
        className="flex h-9 items-center gap-1 rounded-xl border border-[#DDE5E7] bg-white px-3 text-sm font-semibold text-gray-600 transition-colors hover:border-[#35858E] hover:text-[#35858E] disabled:cursor-not-allowed disabled:opacity-40"
      >
        <ChevronLeft className="h-4 w-4" />
        Previous
      </button>

      {/* Page numbers */}
      {pages.map((page) => (
        <button
          key={page}
          type="button"
          onClick={() => onPageChange(page)}
          className={`flex h-9 w-9 items-center justify-center rounded-xl border text-sm font-bold transition-colors ${
            page === currentPage
              ? "border-[#35858E] bg-[#35858E] text-white"
              : "border-[#DDE5E7] bg-white text-gray-600 hover:border-[#35858E] hover:text-[#35858E]"
          }`}
        >
          {page}
        </button>
      ))}

      {/* Next */}
      <button
        type="button"
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
        className="flex h-9 items-center gap-1 rounded-xl border border-[#DDE5E7] bg-white px-3 text-sm font-semibold text-gray-600 transition-colors hover:border-[#35858E] hover:text-[#35858E] disabled:cursor-not-allowed disabled:opacity-40"
      >
        Next
        <ChevronRight className="h-4 w-4" />
      </button>
    </div>
  );
}
