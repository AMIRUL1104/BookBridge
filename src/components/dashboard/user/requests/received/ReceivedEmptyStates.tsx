import Link from "next/link";
import { FileQuestion, Inbox, PlusCircle } from "lucide-react";

export function NoPostsEmptyState() {
  return (
    <div className="flex flex-col items-center justify-center gap-3 rounded-2xl border border-dashed border-[#DDE5E7] bg-white px-6 py-16 text-center">
      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#7DA78C]/15">
        <PlusCircle className="h-7 w-7 text-[#7DA78C]" />
      </div>
      <h3 className="text-lg font-bold text-gray-800">
        You haven&apos;t posted any books yet
      </h3>
      <p className="max-w-sm text-sm text-gray-500">
        Create your first post to start receiving requests from other
        students.
      </p>
      <Link
        href="/posts/add"
        className="mt-2 rounded-xl bg-[#35858E] px-5 py-2.5 text-sm font-bold text-white shadow-md transition-colors hover:bg-[#35858E]/90"
      >
        Create a Post
      </Link>
    </div>
  );
}

export function NoRequestsForPostEmptyState() {
  return (
    <div className="flex flex-col items-center justify-center gap-3 rounded-2xl border border-dashed border-[#DDE5E7] bg-white px-6 py-16 text-center">
      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#35858E]/10">
        <Inbox className="h-7 w-7 text-[#35858E]" />
      </div>
      <h3 className="text-lg font-bold text-gray-800">No requests yet</h3>
      <p className="max-w-sm text-sm text-gray-500">
        This post hasn&apos;t received any requests yet. Check back later!
      </p>
    </div>
  );
}

export function NoMatchingRequestsEmptyState() {
  return (
    <div className="flex flex-col items-center justify-center gap-3 rounded-2xl border border-dashed border-[#DDE5E7] bg-white px-6 py-16 text-center">
      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gray-100">
        <FileQuestion className="h-7 w-7 text-gray-400" />
      </div>
      <h3 className="text-lg font-bold text-gray-800">No matching requests</h3>
      <p className="max-w-sm text-sm text-gray-500">
        Try adjusting your search or filter to find what you&apos;re looking
        for.
      </p>
    </div>
  );
}
