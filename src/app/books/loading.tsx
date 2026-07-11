// src/app/browse-books/loading.tsx
export default function BrowseBooksLoading() {
  return (
    <main className="min-h-screen w-full bg-[#F5F7F8] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col gap-8 animate-pulse">
        {/* Title Skeleton */}
        <div className="h-10 bg-gray-200 rounded-md w-1/3 mx-auto"></div>
        <div className="h-4 bg-gray-200 rounded-md w-1/2 mx-auto"></div>
        
        {/* Filter Bar Skeleton */}
        <div className="h-14 bg-gray-200 rounded-xl w-full"></div>

        {/* Books Grid Skeleton (Matches 4 columns) */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
          {[...Array(8)].map((_, idx) => (
            <div key={idx} className="bg-white border border-[#DDE5E7] rounded-xl h-95 flex flex-col p-4 gap-4">
              <div className="w-full aspect-3/4 bg-gray-200 rounded-lg"></div>
              <div className="h-4 bg-gray-200 rounded-sm w-3/4"></div>
              <div className="h-3 bg-gray-200 rounded-sm w-1/2 mt-auto"></div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}