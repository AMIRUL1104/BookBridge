"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { generatePagination } from "./genaratePagination";

interface CustomPaginationProps {
  totalPages: number;
}

export default function CustomPagination({ totalPages }: CustomPaginationProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  // URL থেকে বর্তমান পেজ নাম্বার নেওয়া হচ্ছে (ডিফল্ট ১)
  const currentPage = Number(searchParams.get("page")) || 1;

  // পেজ চেঞ্জ করার হ্যান্ডলার
  const handlePageChange = (page: number | string) => {
    if (typeof page === "number") {
      const params = new URLSearchParams(searchParams.toString());
      params.set("page", String(page));
      router.push(`?${params.toString()}`, { scroll: false });
    }
  };

  // যদি মোট পেজ ১ বা তার কম হয়, তবে প্যাগিনেশন দেখানোর দরকার নেই
  if (totalPages <= 1) return null;

  const allPages = generatePagination(currentPage, totalPages);

  return (
    <div className="flex items-center justify-center gap-1.5 bg-white border border-[#DDE5E7] p-1.5 rounded-xl shadow-xs w-fit mx-auto mt-8">
      
      {/* Previous Button */}
      <button
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="w-9 h-9 flex items-center justify-center text-gray-600 rounded-lg hover:bg-gray-50 disabled:opacity-40 disabled:hover:bg-transparent transition-all cursor-pointer disabled:cursor-not-allowed"
      >
        <ChevronLeft className="w-4 h-4" />
      </button>

      {/* Page Numbers */}
      {allPages.map((page, index) => {
        const isCurrent = page === currentPage;
        const isDots = page === "...";

        return (
          <button
            key={index}
            onClick={() => handlePageChange(page)}
            disabled={isDots}
            className={`w-9 h-9 flex items-center justify-center text-xs sm:text-sm font-bold rounded-lg transition-all 
              ${isCurrent 
                ? "bg-[#35858E] text-white shadow-xs" 
                : isDots 
                  ? "text-gray-400 cursor-default" 
                  : "text-gray-600 hover:bg-gray-50 cursor-pointer"
              }`}
          >
            {page}
          </button>
        );
      })}

      {/* Next Button */}
      <button
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="w-9 h-9 flex items-center justify-center text-gray-600 rounded-lg hover:bg-gray-50 disabled:opacity-40 disabled:hover:bg-transparent transition-all cursor-pointer disabled:cursor-not-allowed"
      >
        <ChevronRight className="w-4 h-4" />
      </button>

    </div>
  );
}