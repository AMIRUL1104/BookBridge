"use client";

import { Search } from "lucide-react";
import type { SortOption, StatusFilter } from "@/interface/dashboard/request";

interface ReceivedRequestsToolbarProps {
  search: string;
  onSearchChange: (value: string) => void;
  statusFilter: StatusFilter;
  onStatusFilterChange: (value: StatusFilter) => void;
  sortOption: SortOption;
  onSortChange: (value: SortOption) => void;
  resultCount: number;
}

export function ReceivedRequestsToolbar({
  search,
  onSearchChange,
  statusFilter,
  onStatusFilterChange,
  sortOption,
  onSortChange,
  resultCount,
}: ReceivedRequestsToolbarProps) {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex flex-col gap-3 sm:flex-row">
        <div className="relative flex-1">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            value={search}
            onChange={(event) => onSearchChange(event.target.value)}
            placeholder="Search by requester name or message..."
            className="w-full rounded-xl border border-[#DDE5E7] py-2.5 pl-10 pr-4 text-sm focus:border-[#35858E] focus:outline-none"
          />
        </div>

        <select
          value={statusFilter}
          onChange={(event) =>
            onStatusFilterChange(event.target.value as StatusFilter)
          }
          className="rounded-xl border border-[#DDE5E7] px-3.5 py-2.5 text-sm text-gray-700 focus:border-[#35858E] focus:outline-none sm:w-40"
        >
          <option value="all">All Status</option>
          <option value="pending">Pending</option>
          <option value="accepted">Accepted</option>
          <option value="rejected">Rejected</option>
        </select>

        <select
          value={sortOption}
          onChange={(event) => onSortChange(event.target.value as SortOption)}
          className="rounded-xl border border-[#DDE5E7] px-3.5 py-2.5 text-sm text-gray-700 focus:border-[#35858E] focus:outline-none sm:w-40"
        >
          <option value="newest">Newest First</option>
          <option value="oldest">Oldest First</option>
        </select>
      </div>

      <p className="px-1 text-xs font-medium text-gray-400">
        {resultCount} {resultCount === 1 ? "request" : "requests"} found
      </p>
    </div>
  );
}
