
export default function Loading() {
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8 animate-pulse">
      {/* Title & Subtitle Skeleton */}
      <div className="space-y-2">
        <div className="h-8 w-48 bg-slate-200 rounded-lg" />
        <div className="h-4 w-full max-w-md bg-slate-200 rounded-md" />
      </div>

      {/* Section: Basic Info */}
      <div className="space-y-6 pt-4">
        <div className="h-5 w-24 bg-slate-200 rounded-md" />

        {/* Post Title Input Skeleton */}
        <div className="space-y-2">
          <div className="h-4 w-20 bg-slate-200 rounded-md" />
          <div className="h-12 w-full max-w-2xl bg-slate-200 rounded-xl" />
        </div>

        {/* Category & Listing Type Flex */}
        <div className="flex flex-col sm:flex-row gap-6 max-w-2xl">
          {/* Category Dropdown */}
          <div className="flex-1 space-y-2">
            <div className="h-4 w-20 bg-slate-200 rounded-md" />
            <div className="h-11 w-full bg-slate-200 rounded-xl" />
          </div>

          {/* Listing Type Radio */}
          <div className="w-full sm:w-48 space-y-3">
            <div className="h-4 w-24 bg-slate-200 rounded-md" />
            <div className="flex items-center gap-4 pt-2">
              <div className="flex items-center gap-2">
                <div className="h-4 w-4 bg-slate-200 rounded-full" />
                <div className="h-4 w-10 bg-slate-200 rounded-md" />
              </div>
              <div className="flex items-center gap-2">
                <div className="h-4 w-4 bg-slate-200 rounded-full" />
                <div className="h-4 w-14 bg-slate-200 rounded-md" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section: Post Image */}
      <div className="space-y-4 pt-2">
        <div className="space-y-1">
          <div className="h-5 w-24 bg-slate-200 rounded-md" />
          <div className="h-4 w-72 bg-slate-200 rounded-md" />
        </div>
        {/* Upload Button */}
        <div className="h-10 w-32 bg-slate-200 rounded-xl" />
      </div>

      {/* Section: Books */}
      <div className="space-y-4 pt-2">
        <div className="flex items-center justify-between max-w-2xl">
          <div className="h-5 w-16 bg-slate-200 rounded-md" />
          <div className="h-8 w-24 bg-slate-200 rounded-lg" />
        </div>
        {/* Book Card Container */}
        <div className="h-32 w-full max-w-2xl bg-slate-100 rounded-2xl border border-slate-200/50" />
      </div>
    </div>
  );
}