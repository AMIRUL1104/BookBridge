// src/components/book-details/RequestBookButton.tsx
"use client";

import { useState } from "react";
import { HandHelping, Loader2 } from "lucide-react";

export default function RequestBookButton() {
  const [isRequested, setIsRequested] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleRequest = async () => {
    setIsLoading(true);
    console.log(
      "[RequestBookButton] Book request initiated. Better Auth / API integration point.",
    );

    // মক টাইমআউট প্রসেস
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsLoading(false);
    setIsRequested(true);
  };

  return (
    <button
      type="button"
      onClick={handleRequest}
      disabled={isLoading || isRequested}
      className={`w-full inline-flex items-center justify-center gap-2 font-bold py-2.5 px-4 rounded-xl transition-all shadow-xs cursor-pointer focus-visible:outline-2 focus-visible:outline-[#FCDE70] ${
        isRequested
          ? "bg-gray-100 text-gray-400 border border-gray-200 cursor-not-allowed"
          : "bg-[#35858E] hover:bg-[#35858E]/90 text-white"
      }`}
    >
      {isLoading ? (
        <Loader2 className="w-4 h-4 animate-spin" />
      ) : isRequested ? (
        <span>Requested ✓</span>
      ) : (
        <>
          <HandHelping className="w-4 h-4" />
          <span>Request This Book</span>
        </>
      )}
    </button>
  );
}
