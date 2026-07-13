import Link from "next/link";
import { SendHorizonal } from "lucide-react";

export function SentRequestsEmptyState() {
  return (
    <div className="flex flex-col items-center justify-center gap-3 rounded-2xl border border-dashed border-[#DDE5E7] bg-white px-6 py-16 text-center">
      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#35858E]/10">
        <SendHorizonal className="h-7 w-7 text-[#35858E]" />
      </div>
      <h3 className="text-lg font-bold text-gray-800">No requests sent yet</h3>
      <p className="max-w-sm text-sm text-gray-500">
        Browse available books and send a request to the seller when you find
        one you like. Your requests will show up here.
      </p>
      <Link
        href="/browse"
        className="mt-2 rounded-xl bg-[#35858E] px-5 py-2.5 text-sm font-bold text-white shadow-md transition-colors hover:bg-[#35858E]/90"
      >
        Browse Books
      </Link>
    </div>
  );
}
