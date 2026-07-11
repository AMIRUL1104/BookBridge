// src/components/browse-books/BooksPagination.tsx
"use client";

import { useState } from "react";
import { Pagination } from "@heroui/react";

interface BooksPaginationProps {
  totalPages: number;
}

export default function BooksPagination({ totalPages }: BooksPaginationProps) {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    console.log(`[Pagination] Navigated to page: ${page}`);
  };

  return (
    <div className="flex flex-col items-center gap-2">
      <Pagination
        total={totalPages}
        page={currentPage} // 👈 এটিই কারেন্ট পেজ হ্যান্ডেল করবে
        onChange={handlePageChange}
        // initialPage={1} ❌ এই লাইনটি পুরোপুরি ডিলিট করে দাও
        classNames={{
          wrapper: "gap-1 bg-white border border-[#DDE5E7] p-1.5 rounded-xl shadow-xs",
          item: "w-9 h-9 text-xs sm:text-sm font-bold text-gray-600 rounded-lg hover:bg-gray-100 bg-transparent transition-all cursor-pointer",
          cursor: "bg-[#35858E] text-white font-bold shadow-md rounded-lg",
          next: "w-9 h-9 text-gray-600 rounded-lg hover:bg-gray-100 cursor-pointer",
          prev: "w-9 h-9 text-gray-600 rounded-lg hover:bg-gray-100 cursor-pointer",
        }}
      />
    </div>
  );
}