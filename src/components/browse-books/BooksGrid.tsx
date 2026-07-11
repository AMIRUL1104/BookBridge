// src/components/browse-books/BooksGrid.tsx
import BookCard from "@/components/shared/BookCard";
import { BookItem } from "@/interface/postDetails";
import { getPosts } from "@/services/server/api";

interface BooksGridProps {
  searchParams: Promise<{
    search?: string;
    category?: string;
    condition?: string;
    listingType?: "sell" | "donate" | "";
    page?: string;
  }>;
}

export default async function BooksGrid({ searchParams }: BooksGridProps) {
  // ১. searchParams resolve করা হচ্ছে
  const resolvedParams = (await searchParams) || {};

  // ২. এপিআই রিকোয়েস্টের জন্য প্যারামিটার প্রিপেয়ার
  const apiParams = {
    search: resolvedParams.search || "",
    category: resolvedParams.category || "",
    condition: resolvedParams.condition || "",
    listingType: (resolvedParams.listingType || "") as "sell" | "donate" | "", 
    page: Number(resolvedParams.page) || 1,
    limit: 8,
  };
  
  // ৩. জেনেরিক টাইপ <BookItem> পাস করে ডাটা ফেচ
  const postData = await getPosts<BookItem>(apiParams);

  // এপিআই ফেইল করলে এরর মেসেজ
  if (!postData.success) {
    return (
      <div className="text-center text-red-500 py-10 font-medium">
        Failed to load books. Please try again later.
      </div>
    );
  }

  const bookItems: BookItem[] = postData.books;

  // যদি সার্চ বা ফিল্টারিং এ কোনো বই না পাওয়া যায়
  if (bookItems.length === 0) {
    return (
      <div className="text-center text-gray-500 py-16 text-lg bg-gray-50 rounded-2xl border border-dashed border-gray-300">
        No books found matching your criteria.
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
      {bookItems.map((book) => (
        <BookCard key={book._id} book={book} />
      ))}
    </div>
  );
}