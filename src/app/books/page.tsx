// src/app/browse-books/page.tsx
import { Metadata } from "next";
import SectionHeading from "@/components/shared/SectionHeading";
import FilterSection from "@/components/browse-books/FilterSection";
import BooksGrid from "@/components/browse-books/BooksGrid";
import BooksPagination from "@/components/browse-books/BooksPagination";



// Next.js 16 App Router Metadata API
export const metadata: Metadata = {
  title: "Browse Books | BookBridge",
  description: "Browse academic books shared by students across Bangladesh.",
};

export default function BrowseBooksPage() {
  // console.log("[BrowseBooksPage] Rendering Server Component Layout");

  return (
    <main className="min-h-screen w-full bg-[#F5F7F8] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col gap-8">
        
        {/* Header / Section Heading (Previously Created Shared Component) */}
        <SectionHeading
          title="Browse Academic Books"
          subtitle="Search and filter through hundreds of textbook listings shared by fellow students."
        />

        {/* Search and Filter UI Section */}
        <FilterSection />

        {/* Core Books Grid */}
        <BooksGrid />

        {/* HeroUI Powered Pagination Component */}
        <div className="flex justify-center mt-6">
          <BooksPagination totalPages={5} />
        </div>

      </div>
    </main>
  );
}