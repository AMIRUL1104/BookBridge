// src/components/home/FeaturedBooks.tsx
import SectionHeading from "../shared/SectionHeading";
import BookCard, { BookItem } from "../shared/BookCard";
import { getFeaturedPosts, } from "@/services/server/api";

export default async function FeaturedBooks() {

  const postData = await getFeaturedPosts();
  // console.log("Fetched posts data:", postData);
  const featuredBooks: BookItem[] = postData?.data || [];

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeading
          title="Featured Books"
          subtitle="Explore the latest academic books posted by students for sale or donation."
        />

        {/* রেসপন্সিভ গ্রিড ফিক্স: মোবাইল ২, মিডিয়াম ৩, লার্জ ৪ */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
          {featuredBooks.map((book) => (
            <BookCard key={book._id} book={book} />
          ))}
        </div>
      </div>
    </section>
  );
}