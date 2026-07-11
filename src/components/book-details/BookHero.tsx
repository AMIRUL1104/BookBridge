// src/components/book-details/BookHero.tsx
interface BookHeroProps {
  imageUrl: string;
  name: string;
}

export default function BookHero({ imageUrl, name }: BookHeroProps) {
  return (
    <div className="w-full bg-white border border-[#DDE5E7] rounded-2xl overflow-hidden p-4 sm:p-6 shadow-xs">
      <div className="relative aspect-[3/4] w-full rounded-xl overflow-hidden bg-gray-50">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={imageUrl}
          alt={name}
          className="w-full h-full object-cover"
          loading="eager"
        />
      </div>
    </div>
  );
}