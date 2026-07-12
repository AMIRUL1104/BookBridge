import Link from "next/link";
import { BookOpen, PlusCircle } from "lucide-react";

interface EmptyStateProps {
  hasActiveFilters?: boolean;
}

export default function EmptyState({
  hasActiveFilters = false,
}: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center text-center bg-white rounded-2xl border border-[#EDF1F2] shadow-sm py-16 px-6">
      <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-[#35858E]/10 text-[#35858E] mb-5">
        <BookOpen className="w-8 h-8" />
      </div>
      <h2 className="text-lg font-bold text-gray-800">
        {hasActiveFilters ? "No posts match your search" : "No posts yet"}
      </h2>
      <p className="text-sm text-gray-500 mt-1.5 max-w-sm">
        {hasActiveFilters
          ? "Try adjusting your search, filter, or sort options."
          : "Start sharing your academic books with students who need them — sell or donate in just a few steps."}
      </p>
      {!hasActiveFilters && (
        <Link
          href="/books/add"
          className="inline-flex items-center gap-2 mt-6 bg-[#35858E] hover:bg-[#35858E]/90 text-white font-bold text-sm py-2.5 px-5 rounded-xl transition-all shadow-md"
        >
          <PlusCircle className="w-4 h-4" />
          Create Your First Post
        </Link>
      )}
    </div>
  );
}
