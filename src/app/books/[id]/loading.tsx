// src/app/books/[id]/loading.tsx
export default function BookDetailsLoading() {
  return (
    <main className="min-h-screen w-full bg-[#F5F7F8] py-8 px-4 sm:px-6 lg:px-8 animate-pulse">
      <div className="max-w-7xl mx-auto flex flex-col gap-8">
        <div className="h-5 bg-gray-200 rounded-sm w-24"></div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-5 aspect-3/4 bg-gray-200 rounded-2xl"></div>
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="h-8 bg-gray-200 rounded-md w-3/4"></div>
            <div className="h-4 bg-gray-200 rounded-md w-1/4"></div>
            <div className="h-24 bg-gray-200 rounded-xl w-full"></div>
          </div>
        </div>
      </div>
    </main>
  );
}