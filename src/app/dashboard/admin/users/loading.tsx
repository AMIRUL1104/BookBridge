import { UsersTableSkeleton } from "@/components/dashboard/admin/manage-users/UsersTableSkeleton";

export default function ManageUsersLoading() {
  return (
    <div className="flex flex-col gap-6">
      {/* Page header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-800">Manage Users</h1>
        <p className="text-sm text-gray-500">
          View and manage all registered users.
        </p>
      </div>

      {/* Stats skeleton */}
      <div className="grid animate-pulse grid-cols-1 gap-4 sm:grid-cols-3">
        {Array.from({ length: 3 }).map((_, i) => (
          <div
            key={i}
            className="flex items-center gap-4 rounded-2xl border border-[#EDF1F2] bg-white p-5 shadow-sm"
          >
            <div className="h-11 w-11 rounded-xl bg-gray-200" />
            <div className="flex flex-col gap-2">
              <div className="h-6 w-10 rounded bg-gray-200" />
              <div className="h-3 w-20 rounded bg-gray-200" />
            </div>
          </div>
        ))}
      </div>

      {/* Toolbar skeleton */}
      <div className="flex animate-pulse flex-col gap-3 sm:flex-row">
        <div className="h-10 flex-1 rounded-xl bg-gray-200" />
        <div className="h-10 w-36 rounded-xl bg-gray-200" />
        <div className="h-10 w-36 rounded-xl bg-gray-200" />
      </div>

      {/* Table skeleton */}
      <UsersTableSkeleton />
    </div>
  );
}
