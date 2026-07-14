"use client";

import { AlertTriangle, RefreshCw } from "lucide-react";

export function UsersErrorFallback() {
  return (
    <div className="flex flex-col items-center justify-center gap-4 rounded-2xl border border-red-100 bg-white px-6 py-16 text-center shadow-sm">
      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-red-50">
        <AlertTriangle className="h-7 w-7 text-red-500" />
      </div>
      <div>
        <h3 className="text-lg font-bold text-gray-800">
          Failed to load users
        </h3>
        <p className="mt-1 text-sm text-gray-500">
          Something went wrong while fetching users.
        </p>
      </div>
      <button
        type="button"
        onClick={() => window.location.reload()}
        className="inline-flex items-center gap-2 rounded-xl bg-[#35858E] px-5 py-2.5 text-sm font-bold text-white shadow-md transition-colors hover:bg-[#35858E]/90"
      >
        <RefreshCw className="h-4 w-4" />
        Try Again
      </button>
    </div>
  );
}
