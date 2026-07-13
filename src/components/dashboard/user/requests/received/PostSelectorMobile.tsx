import Image from "next/image";
import type { PostSummary } from "@/interface/dashboard/request";

interface PostSelectorMobileProps {
  posts: PostSummary[];
  activePostId: string | null;
  onSelectPost: (postId: string) => void;
}

export function PostSelectorMobile({
  posts,
  activePostId,
  onSelectPost,
}: PostSelectorMobileProps) {
  return (
    <div className="-mx-4 flex gap-2.5 overflow-x-auto px-4 pb-2 sm:mx-0 sm:px-0">
      {posts.map((post) => {
        const isActive = post.id === activePostId;
        return (
          <button
            key={post.id}
            type="button"
            onClick={() => onSelectPost(post.id)}
            className={`flex shrink-0 items-center gap-2 rounded-full border px-3 py-2 transition-all ${
              isActive
                ? "border-[#35858E] bg-[#35858E] text-white shadow-md"
                : "border-[#EDF1F2] bg-white text-gray-600"
            }`}
          >
            <div className="relative h-6 w-5 shrink-0 overflow-hidden rounded">
              <Image
                src={post.bookCoverUrl}
                alt={post.title}
                fill
                sizes="20px"
                className="object-cover"
              />
            </div>
            <span className="whitespace-nowrap text-sm font-semibold">
              {post.title}
            </span>
            {post.pendingCount > 0 && (
              <span
                className={`flex h-5 w-5 items-center justify-center rounded-full text-[11px] font-bold ${
                  isActive
                    ? "bg-white/25 text-white"
                    : "bg-[#FCDE70] text-[#6b5810]"
                }`}
              >
                {post.pendingCount}
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
}
