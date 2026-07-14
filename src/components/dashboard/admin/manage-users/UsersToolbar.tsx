"use client";

import { Search } from "lucide-react";
import type { RoleFilter, StatusFilter } from "@/interface/dashboard/manageUsers";
import { SortOption } from "@/services/server/adminApi/adminApi";


interface UsersToolbarProps {
  search: string;
  onSearchChange: (value: string) => void;
  roleFilter: RoleFilter;
  onRoleFilterChange: (value: RoleFilter) => void;
  statusFilter: StatusFilter;
  onStatusFilterChange: (value: StatusFilter) => void;
  sortOption: SortOption;
  onSortChange: (value: SortOption) => void;
  resultCount: number;
}

export function UsersToolbar({
  search,
  onSearchChange,
  roleFilter,
  onRoleFilterChange,
  statusFilter,
  onStatusFilterChange,
  sortOption,
  onSortChange,
  resultCount,
}: UsersToolbarProps) {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex flex-col gap-3 sm:flex-row">
        {/* Search */}
        <div className="relative flex-1">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            value={search}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Search users by name or email..."
            className="w-full rounded-xl border border-[#DDE5E7] py-2.5 pl-10 pr-4 text-sm text-gray-800 outline-none transition-colors focus:border-[#35858E] placeholder:text-gray-400"
          />
        </div>

        {/* Role filter */}
        <select
          value={roleFilter}
          onChange={(e) => onRoleFilterChange(e.target.value as RoleFilter)}
          className="rounded-xl border border-[#DDE5E7] px-3.5 py-2.5 text-sm text-gray-700 outline-none transition-colors focus:border-[#35858E] sm:w-36"
        >
          <option value="all">All Roles</option>
          <option value="admin">Admin</option>
          <option value="user">User</option>
        </select>

        {/* Status filter */}
        <select
          value={statusFilter}
          onChange={(e) => onStatusFilterChange(e.target.value as StatusFilter)}
          className="rounded-xl border border-[#DDE5E7] px-3.5 py-2.5 text-sm text-gray-700 outline-none transition-colors focus:border-[#35858E] sm:w-36"
        >
          <option value="all">All Status</option>
          <option value="active">Active</option>
          <option value="suspended">Suspended</option>
        </select>

        {/* Sort */}
        <select
          value={sortOption}
          onChange={(e) => onSortChange(e.target.value as SortOption)}
          className="rounded-xl border border-[#DDE5E7] px-3.5 py-2.5 text-sm text-gray-700 outline-none transition-colors focus:border-[#35858E] sm:w-36"
        >
          <option value="newest">Newest First</option>
          <option value="oldest">Oldest First</option>
        </select>
      </div>

      <p className="px-0.5 text-xs font-medium text-gray-400">
        {resultCount} {resultCount === 1 ? "user" : "users"} found
      </p>
    </div>
  );
}