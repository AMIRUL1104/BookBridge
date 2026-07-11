// src/components/book-details/SellerCard.tsx
import { User, MapPin, MessageSquare, PhoneOff } from "lucide-react";
import { PostDetailData } from "@/app/books/[id]/page";

interface SellerCardProps {
  post: PostDetailData;
}

export default function SellerCard({ post }: SellerCardProps) {
  return (
    <div className="bg-white border border-[#DDE5E7] rounded-2xl p-5 shadow-xs flex flex-col gap-4">
      <h3 className="font-bold text-gray-800 text-xs uppercase tracking-wider border-b border-[#DDE5E7] pb-2 text-gray-400">
        Seller Profile
      </h3>

      <div className="flex items-center gap-3">
        <div className="w-11 h-11 rounded-xl bg-[#35858E]/10 text-[#35858E] flex items-center justify-center font-bold text-base shrink-0">
          UI
        </div>
        <div className="flex flex-col">
          <span className="font-bold text-gray-800 text-sm sm:text-base">Student Member</span>
          <span className="text-xs text-gray-400">ID: {post.sellerId.substring(0, 8)}...</span>
        </div>
      </div>

      <div className="flex flex-col gap-2 text-xs text-gray-500 border-t border-dashed border-[#DDE5E7] pt-3">
        <div className="flex items-center gap-2">
          <MapPin className="w-4 h-4 text-gray-400 shrink-0" />
          <span>Location: {post.area}, {post.district}</span>
        </div>
        
        {/* কন্ডিশনাল হোয়াটসঅ্যাপ/কমিউনিকেশন মেথড ইন্ডিকেটর */}
        <div className="flex items-center gap-2 mt-1">
          <MessageSquare className="w-4 h-4 text-emerald-500 shrink-0" />
          <span className="text-gray-700 font-medium">
            {post.whatsappOnly ? "Prefers WhatsApp Messaging Only" : "Direct Calling Allowed"}
          </span>
        </div>
      </div>
    </div>
  );
}