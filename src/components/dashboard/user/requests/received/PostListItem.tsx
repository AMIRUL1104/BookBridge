import Image from "next/image";
import type { PostSummary } from "@/interface/dashboard/request";
import { BookRequest } from "@/interface/bookRequest/checkRequest";


interface PostListItemProps {
  post: BookRequest;
  isActive: boolean;
  onSelect: (postId: string) => void;
}

export function PostListItem({ post, isActive, onSelect }: PostListItemProps) {
  return (
    <button
      type="button"
      onClick={() => onSelect(post._id)}
      className={`flex w-full items-center gap-3 rounded-xl border p-2.5 text-left transition-all ${isActive
          ? "border-[#000c0e] bg-[#35858E]/10 shadow-sm"
          : "border-[#EDF1F2] bg-white hover:border-[#35858E]/40 hover:bg-[#F5F7F8]"
        }`}
    >
      <div className="relative h-12 w-9 shrink-0 overflow-hidden rounded-md bg-[#F5F7F8]">
        <Image
          src={post.image}
          alt={post.title}
          fill
          sizes="36px"
          className="object-cover"
        />
      </div>

      <span
        className={`line-clamp-2 flex-1 text-sm font-semibold ${isActive ? "text-[#35858E]" : "text-gray-700"
          }`}
      >
        {post.title}
      </span>

      <span
        className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs font-bold ${post.pendingCount > 0
            ? "bg-[#FCDE70] text-[#6b5810]"
            : "bg-[#F5F7F8] text-gray-400"
          }`}
      >
        {post.pendingCount}
      </span>
    </button>
  );
}
