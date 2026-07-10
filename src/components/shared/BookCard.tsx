// src/components/shared/BookCard.tsx
import Link from "next/link";
import { MapPin, BookOpen, Tag } from "lucide-react";

export interface BookItem {
  id: string;
  name: string;
  category: string;
  location: string;
  condition: string;
  type: "Sell" | "Donate";
  price?: string;
  imageUrl: string;
}

interface BookCardProps {
  book: BookItem;
}

export default function BookCard({ book }: BookCardProps) {
  return (
    <div className="bg-white border border-[#DDE5E7] rounded-xl overflow-hidden shadow-xs hover:shadow-md transition-all duration-200 flex flex-col group">
      {/* ইমেজ রেশিও aspect-[4/5] থেকে কমিয়ে aspect-[3/4] করা হয়েছে যাতে লম্বা/ম মোটা না দেখায় */}
      <div className="relative aspect-[3/4] w-full bg-gray-50 overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={book.imageUrl}
          alt={book.name}
          className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-300"
          loading="lazy"
        />
        {/* ছোট স্ক্রিনের জন্য ব্যাজের প্যাডিং হালকা কমানো হয়েছে */}
        <span className={`absolute top-2 right-2 px-2.5 py-0.5 rounded-full text-[10px] font-bold shadow-xs text-white ${
          book.type === "Donate" ? "bg-[#7DA78C]" : "bg-[#35858E]"
        }`}>
          {book.type}
        </span>
      </div>

      {/* কন্টেন্ট এরিয়া প্যাডিং p-5 থেকে কমিয়ে p-3.5 করা হয়েছে */}
      <div className="p-3.5 flex flex-col flex-1 gap-2">
        <div className="flex items-center gap-1.5 text-[11px] text-[#35858E] font-bold uppercase tracking-wider">
          <BookOpen className="w-3 h-3" />
          <span>{book.category}</span>
        </div>

        <h3 className="font-bold text-gray-800 text-sm sm:text-base line-clamp-1 group-hover:text-[#35858E] transition-colors">
          {book.name}
        </h3>

        {/* লোকেশন ও কন্ডিশন টেক্সট সাইজ text-xs করা হয়েছে */}
        <div className="flex flex-col gap-1 text-xs text-gray-500 mt-auto">
          <div className="flex items-center gap-1">
            <MapPin className="w-3.5 h-3.5 text-gray-400 shrink-0" />
            <span className="line-clamp-1">{book.location}</span>
          </div>
          <div className="flex items-center gap-1">
            <Tag className="w-3.5 h-3.5 text-gray-400 shrink-0" />
            <span className="truncate">Cond: <span className="text-gray-700 font-medium">{book.condition}</span></span>
          </div>
        </div>

        {/* ফুটার এবং অ্যাকশন বাটন */}
        <div className="border-t border-[#DDE5E7] pt-2.5 mt-1 flex items-center justify-between gap-2">
          <div className="text-sm sm:text-base font-black text-gray-900">
            {book.type === "Donate" ? (
              <span className="text-[#7DA78C] font-bold">Free</span>
            ) : (
              <span>৳{book.price}</span>
            )}
          </div>
          <Link
            href={`/books/${book.id}`}
            className="text-[11px] font-bold text-white bg-[#35858E] hover:bg-[#35858E]/90 px-3 py-1.5 rounded-lg transition-all focus-visible:outline-2 focus-visible:outline-[#FCDE70]"
          >
            Details
          </Link>
        </div>
      </div>
    </div>
  );
}