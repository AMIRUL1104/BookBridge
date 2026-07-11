// src/components/book-details/BookInformation.tsx
import { MapPin, Calendar, BookOpen, Layers } from "lucide-react";
import { PostDetailData } from "@/app/books/[id]/page";

interface BookInfoProps {
  post: PostDetailData;
}

export default function BookInformation({ post }: BookInfoProps) {
  // কন্ডিশন ফরম্যাটার
  const formatCondition = (cond: string) => cond.replace("_", " ").toUpperCase();

  return (
    <div className="bg-white border border-[#DDE5E7] rounded-2xl p-5 sm:p-6 shadow-xs flex flex-col gap-5">
      
      {/* ক্যাটাগরি এবং ব্যাজ */}
      <div className="flex items-center gap-2">
        <span className="text-xs font-bold uppercase tracking-wider text-[#35858E] bg-[#35858E]/10 px-2.5 py-1 rounded-md flex items-center gap-1">
          <Layers className="w-3.5 h-3.5" />
          <span>Bundle ({post.books.length} Books)</span>
        </span>
        <span className={`text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-md text-white ${
          post.type === "donate" ? "bg-[#7DA78C]" : "bg-[#35858E]"
        }`}>
          For {post.type}
        </span>
      </div>

      <h1 className="text-2xl font-black text-gray-900 tracking-tight">
        Academic Books Set for Sale
      </h1>

      <div className="flex flex-wrap items-center gap-y-2 gap-x-4 text-xs sm:text-sm text-gray-500 border-b border-[#DDE5E7] pb-4">
        <div className="flex items-center gap-1">
          <MapPin className="w-4 h-4 text-gray-400" />
          <span>{post.area}, {post.district}</span>
        </div>
        <div className="flex items-center gap-1">
          <Calendar className="w-4 h-4 text-gray-400" />
          <span>Posted on {new Date(post.publishedAt).toLocaleDateString()}</span>
        </div>
      </div>

      {/* পোস্টের মূল ডেসক্রিপশন */}
      <div className="flex flex-col gap-1.5">
        <h3 className="font-bold text-gray-800 text-sm uppercase tracking-wider text-gray-400">Note from Seller</h3>
        <p className="text-gray-600 text-sm sm:text-base leading-relaxed">{post.description}</p>
      </div>

      {/* বইয়ের বান্ডেল টেবিল (Core Change) */}
      <div className="flex flex-col gap-3 mt-2">
        <h3 className="font-bold text-gray-800 text-sm uppercase tracking-wider text-gray-400 flex items-center gap-1.5">
          <BookOpen className="w-4 h-4 text-[#35858E]" />
          <span>Included Books List</span>
        </h3>
        
        <div className="overflow-x-auto border border-[#DDE5E7] rounded-xl">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50 text-xs font-bold text-gray-500 uppercase border-b border-[#DDE5E7]">
                <th className="p-3">Book Name</th>
                <th className="p-3">Publisher</th>
                <th className="p-3">Condition</th>
                <th className="p-3 text-right">Price</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#DDE5E7] text-xs sm:text-sm text-gray-700">
              {post.books.map((book) => (
                <tr key={book.bookId} className="hover:bg-gray-50/50 transition-colors">
                  <td className="p-3 font-bold text-gray-900">{book.bookName}</td>
                  <td className="p-3 text-gray-500">{book.publisherName}</td>
                  <td className="p-3">
                    <span className="px-2 py-0.5 text-[10px] font-bold rounded bg-gray-100 text-gray-600">
                      {formatCondition(book.condition)}
                    </span>
                  </td>
                  <td className="p-3 text-right font-black text-gray-900">
                    {post.type === "donate" ? "Free" : `৳${book.price}`}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
}