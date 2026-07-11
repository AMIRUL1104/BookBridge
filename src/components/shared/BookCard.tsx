// src/components/shared/BookCard.tsx
import Link from "next/link";
import { MapPin, BookOpen, Tag } from "lucide-react";

// API Response অনুযায়ী Interface আপডেট করা হয়েছে
export interface BookItem {
  _id: string;
  sellerId: string;
  type: "sell" | "donate"; // API-তে ছোট হাতের অক্ষরে থাকে
  image: string; // পোস্টের মেইন ইমেজ
  district: string;
  area: string;
  phone: string;
  messenger: string;
  whatsappOnly: boolean;
  description: string;
  status: string;
  publishedAt: string;
  books: {
    bookId: string;
    publisherId: string;
    bookName: string;
    publisherName: string;
    image: string | null;
    condition: string;
    price: number;
  }[];
}

interface BookCardProps {
  book: BookItem;
}

export default function BookCard({ book }: BookCardProps) {
  // একাধিক বই থাকলে প্রথম বইটির ডেটা UI-তে দেখানোর জন্য নেওয়া হলো
  const primaryBook = book.books?.[0];
  const totalBooks = book.books?.length || 0;

  // সব বইয়ের মোট দাম হিসাব করা (যদি sell টাইপ হয়)
  const totalPrice = book.books?.reduce((sum, item) => sum + (item.price || 0), 0) || 0;

  return (
    <div className="bg-white border border-[#DDE5E7] rounded-xl overflow-hidden shadow-xs hover:shadow-md transition-all duration-200 flex flex-col group">
      {/* ইমেজ সেকশন */}
      <div className="relative aspect-[3/4] w-full bg-gray-50 overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={book.image || "/placeholder-book.jpg"} // পোস্টের ইমেজ অথবা ফলব্যাক ইমেজ
          alt={primaryBook?.bookName || "Book Post"}
          className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-300"
          loading="lazy"
        />
        {/* টাইপ ব্যাজ (Sell/Donate) */}
        <span className={`absolute top-2 right-2 px-2.5 py-0.5 rounded-full text-[10px] font-bold shadow-xs text-white uppercase ${
          book.type === "donate" ? "bg-[#7DA78C]" : "bg-[#35858E]"
        }`}>
          {book.type}
        </span>
      </div>

      {/* কন্টেন্ট এরিয়া */}
      <div className="p-3.5 flex flex-col flex-1 gap-2">
        {/* পাবলিশার বা ক্যাটাগরি */}
        <div className="flex items-center gap-1.5 text-[11px] text-[#35858E] font-bold uppercase tracking-wider">
          <BookOpen className="w-3 h-3" />
          <span>
            {primaryBook?.publisherName} 
            {totalBooks > 1 && ` (+${totalBooks - 1} more)`}
          </span>
        </div>

        {/* মেইন বইয়ের নাম */}
        <h3 className="font-bold text-gray-800 text-sm sm:text-base line-clamp-1 group-hover:text-[#35858E] transition-colors">
          {primaryBook?.bookName || "No Title Available"}
        </h3>

        {/* লোকেশন ও কন্ডিশন */}
        <div className="flex flex-col gap-1 text-xs text-gray-500 mt-auto">
          <div className="flex items-center gap-1">
            <MapPin className="w-3.5 h-3.5 text-gray-400 shrink-0" />
            <span className="line-clamp-1">{`${book.area}, ${book.district}`}</span>
          </div>
          <div className="flex items-center gap-1">
            <Tag className="w-3.5 h-3.5 text-gray-400 shrink-0" />
            <span className="truncate">
              Cond: <span className="text-gray-700 font-medium capitalize">{primaryBook?.condition?.replace("_", " ")}</span>
            </span>
          </div>
        </div>

        {/* ফুটার এবং অ্যাকশন বাটন */}
        <div className="border-t border-[#DDE5E7] pt-2.5 mt-1 flex items-center justify-between gap-2">
          <div className="text-sm sm:text-base font-black text-gray-900">
            {book.type === "donate" ? (
              <span className="text-[#7DA78C] font-bold">Free</span>
            ) : (
              <span>৳{totalPrice}</span>
            )}
          </div>
          <Link
            href={`/books/${book._id}`}
            className="text-[11px] font-bold text-white bg-[#35858E] hover:bg-[#35858E]/90 px-3 py-1.5 rounded-lg transition-all focus-visible:outline-2 focus-visible:outline-[#F6CE71]"
          >
            Details
          </Link>
        </div>
      </div>
    </div>
  );
}