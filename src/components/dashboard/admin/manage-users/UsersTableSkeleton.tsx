function SkeletonRow() {
  return (
    <tr className="border-b border-[#EDF1F2]">
      {/* Avatar */}
      <td className="py-3.5 pl-5 pr-3">
        <div className="h-10 w-10 rounded-full bg-gray-200" />
      </td>
      {/* Name */}
      <td className="px-3 py-3.5">
        <div className="h-4 w-32 rounded-lg bg-gray-200" />
      </td>
      {/* Email */}
      <td className="px-3 py-3.5">
        <div className="h-4 w-44 rounded-lg bg-gray-200" />
      </td>
      {/* Role */}
      <td className="px-3 py-3.5">
        <div className="h-6 w-16 rounded-full bg-gray-200" />
      </td>
      {/* Status */}
      <td className="px-3 py-3.5">
        <div className="h-6 w-20 rounded-full bg-gray-200" />
      </td>
      {/* Date */}
      <td className="px-3 py-3.5">
        <div className="h-4 w-24 rounded-lg bg-gray-200" />
      </td>
      {/* Actions */}
      <td className="py-3.5 pl-3 pr-5">
        <div className="h-8 w-8 rounded-lg bg-gray-200" />
      </td>
    </tr>
  );
}

function MobileSkeletonCard() {
  return (
    <div className="flex items-start gap-3 rounded-2xl border border-[#EDF1F2] bg-white p-4">
      <div className="h-10 w-10 shrink-0 rounded-full bg-gray-200" />
      <div className="flex flex-1 flex-col gap-2">
        <div className="h-4 w-36 rounded-lg bg-gray-200" />
        <div className="h-3 w-48 rounded-lg bg-gray-200" />
        <div className="flex gap-2">
          <div className="h-5 w-14 rounded-full bg-gray-200" />
          <div className="h-5 w-16 rounded-full bg-gray-200" />
        </div>
        <div className="h-3 w-24 rounded-lg bg-gray-200" />
      </div>
    </div>
  );
}

export function UsersTableSkeleton() {
  const rows = Array.from({ length: 8 });

  return (
    <>
      {/* Desktop skeleton */}
      <div className="hidden overflow-hidden rounded-2xl border border-[#EDF1F2] bg-white shadow-sm md:block">
        <table className="w-full animate-pulse">
          <thead>
            <tr className="border-b border-[#EDF1F2] bg-[#F5F7F8]">
              <th className="py-3 pl-5 pr-3">
                <div className="h-3 w-6 rounded bg-gray-200" />
              </th>
              {["Name", "Email", "Role", "Status", "Joined"].map((h) => (
                <th key={h} className="px-3 py-3">
                  <div className="h-3 w-14 rounded bg-gray-200" />
                </th>
              ))}
              <th className="py-3 pl-3 pr-5" />
            </tr>
          </thead>
          <tbody>
            {rows.map((_, i) => (
              <SkeletonRow key={i} />
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile skeleton */}
      <div className="flex animate-pulse flex-col gap-3 md:hidden">
        {rows.slice(0, 5).map((_, i) => (
          <MobileSkeletonCard key={i} />
        ))}
      </div>
    </>
  );
}
