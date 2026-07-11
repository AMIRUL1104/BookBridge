// src/app/browse-books/page.tsx
import { Metadata } from "next";
import SectionHeading from "@/components/shared/SectionHeading";
import FilterSection from "@/components/browse-books/FilterSection";
import BooksGrid from "@/components/browse-books/BooksGrid";
import { getPosts } from "@/services/server/api"; // এপিআই ইমপোর্ট করা হলো
import { BookItem } from "@/interface/postDetails"; // ইন্টারফেস ইমপোর্ট করা হলো
import CustomPagination from "@/components/browse-books/BooksPagination";

// Next.js Metadata API
export const metadata: Metadata = {
  title: "Browse Books | BookBridge",
  description: "Browse academic books shared by students across Bangladesh.",
};

interface PageProps {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

// ফাংশনটিকে async করা হলো
export default async function BrowseBooksPage({ searchParams }: PageProps) {
  // searchParams প্রমিজটি রিজলভ করা হলো
  const resolvedParams = (await searchParams) || {};
  
  // ফিল্টার অনুযায়ী টোটাল পেজ সংখ্যা জানার জন্য সার্ভার সাইডে মেটাডাটা চেক
  const postData = await getPosts<BookItem>({
    search: typeof resolvedParams.search === "string" ? resolvedParams.search : "",
    category: typeof resolvedParams.category === "string" ? resolvedParams.category : "",
    condition: typeof resolvedParams.condition === "string" ? resolvedParams.condition : "",
    listingType: (resolvedParams.listingType as "sell" | "donate" | "") || "",
    page: Number(resolvedParams.page) || 1,
    limit: 8, // BooksGrid-এর লিমিটের সাথে সেম রাখা হয়েছে
  });

  return (
    <main className="min-h-screen w-full bg-[#F5F7F8] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col gap-8">
        
        {/* Header / Section Heading */}
        <SectionHeading
          title="Browse Academic Books"
          subtitle="Search and filter through hundreds of textbook listings shared by fellow students."
        />

        {/* Search and Filter UI Section */}
        <FilterSection />

        {/* Core Books Grid */}
        <BooksGrid searchParams={searchParams as any} />

        {/* Custom Pagination Component */}
        <div className="flex justify-center mt-6">
          <CustomPagination totalPages={postData.totalPages || 1} />
        </div>

      </div>
    </main>
  );
}