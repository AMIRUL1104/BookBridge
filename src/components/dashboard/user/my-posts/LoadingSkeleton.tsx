export default function LoadingSkeleton() {
  return (
    <div className="space-y-6 animate-pulse">
      <div className="h-24 bg-white rounded-2xl border border-[#EDF1F2]" />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {Array.from({ length: 8 }).map((_, index) => (
          <div
            key={index}
            className="rounded-2xl border border-[#EDF1F2] overflow-hidden bg-white"
          >
            <div className="h-40 bg-gray-100" />
            <div className="p-4 space-y-2">
              <div className="h-4 bg-gray-100 rounded w-3/4" />
              <div className="h-3 bg-gray-100 rounded w-1/2" />
              <div className="h-3 bg-gray-100 rounded w-1/3" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
