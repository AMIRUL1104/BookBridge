import { SearchX } from "lucide-react";

export function UsersEmptyState() {
  return (
    <div className="flex flex-col items-center justify-center gap-3 rounded-2xl border border-dashed border-[#DDE5E7] bg-white px-6 py-16 text-center">
      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gray-100">
        <SearchX className="h-7 w-7 text-gray-400" />
      </div>
      <h3 className="text-lg font-bold text-gray-800">No users found</h3>
      <p className="max-w-xs text-sm text-gray-500">
        Try changing your search or filter.
      </p>
    </div>
  );
}
