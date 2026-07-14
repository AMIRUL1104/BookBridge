// src/components/book-details/BookMetaCard.tsx
import { Card } from "@heroui/react";
import RequestBookButton from "./RequestBookButton";
import { PostDetailData } from "@/app/books/[id]/page";
import { getUserSession } from "@/services/core/session";

interface BookMetaCardProps {
  post: PostDetailData;
}

export default async function BookMetaCard({ post }: BookMetaCardProps) {
  const user = await getUserSession();
  // বান্ডেলের সব বইয়ের দাম একসাথে যোগ করা হচ্ছে (Total Sum)
  const totalBundlePrice = post.books.reduce((acc, book) => acc + book.price, 0);
  // console.log(post)
  return (
    // HeroUI v3 এর মূল কন্টেইনার ক্লাস (.card)
    <Card className="card bg-white border border-[#DDE5E7] rounded-2xl p-5 shadow-xs flex flex-col justify-between h-full">

      {/* Flexible content container (.card__content) */}
      <div className="card__content flex flex-col gap-4 w-full">

        {/* প্রাইস এবং স্ট্যাটাস রো */}
        <div className="flex items-center justify-between w-full">
          <div className="flex flex-col">
            <span className="text-xs text-gray-400 font-medium">Total Bundle Value</span>
            <span className="text-2xl font-black text-gray-900 card__title">
              {post.type === "donate" ? <span className="text-[#7DA78C]">FREE</span> : `৳${totalBundlePrice}`}
            </span>
          </div>

          <div className="flex flex-col items-end">
            <span className="text-xs text-gray-400 font-medium">Status</span>
            <span className="text-xs font-bold text-green-600 bg-green-50 px-2 py-0.5 rounded-sm uppercase tracking-wide">
              {post.status}
            </span>
          </div>
        </div>

        {/* ছোট স্পেসিফিকেশন স্প্লিট */}
        <div className="border-t border-b border-[#DDE5E7] py-2.5 text-xs text-gray-600 flex justify-between w-full card__description">
          <span>Total Books: <span className="font-bold text-gray-800">{post.books.length}</span></span>
          <span>Type: <span className="font-bold text-gray-800 uppercase">{post.type}</span></span>
        </div>

      </div>

      {/* Footer section container (.card__footer) */}
      <div className="card__footer w-full pt-4">
        <RequestBookButton
          postId={post._id}
          sellerId={post.sellerId}
          requesterId={user?.id}
          postTitle={post.title}
          sellerName={post.sellerName}
          bookCoverUrl={post.image}
          sellerPhone={post.phone}
          sellerMessenger={post.messenger}
          requesterName={user?.name}
          requesterPhone={user?.phone}
          requesterAvatarUrl={user?.image}
        />
      </div>

    </Card>
  );
}