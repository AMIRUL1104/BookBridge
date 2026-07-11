// src/components/home/FeaturedBooks.tsx
import SectionHeading from "../shared/SectionHeading";
import BookCard, { BookItem } from "../shared/BookCard";
import { getPosts } from "@/services/server/api";

export default async function FeaturedBooks() {
  // স্ট্যাটিক মক ডাটা (আগের মতোই)
  // const featuredBooks: BookItem[] = [
  //   {
  //     id: "1",
  //     name: "Concept of Physics - Part 1",
  //     category: "Science",
  //     location: "Farmgate, Dhaka",
  //     condition: "Like New",
  //     type: "Sell",
  //     price: "250",
  //     imageUrl: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&q=80&w=400",
  //   },
  //   {
  //     id: "2",
  //     name: "Higher Mathematics HSC",
  //     category: "Science",
  //     location: "Chittagong Sadar, Chittagong",
  //     condition: "Good",
  //     type: "Donate",
  //     imageUrl: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?auto=format&fit=crop&q=80&w=400",
  //   },
  //   {
  //     id: "3",
  //     name: "Thomas' Calculus (14th Edition)",
  //     category: "Engineering",
  //     location: "BUET Area, Dhaka",
  //     condition: "Fair",
  //     type: "Sell",
  //     price: "450",
  //     imageUrl: "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&q=80&w=400",
  //   },
  //   {
  //     id: "4",
  //     name: "Principles of Marketing",
  //     category: "Business",
  //     location: "Sylhet Sadar, Sylhet",
  //     condition: "Like New",
  //     type: "Sell",
  //     price: "320",
  //     imageUrl: "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&q=80&w=400",
  //   },
  //   {
  //     id: "5",
  //     name: "Medical Microbiology",
  //     category: "Medical",
  //     location: "Mymensingh Medical, Mymensingh",
  //     condition: "Good",
  //     type: "Donate",
  //     imageUrl: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80&w=400",
  //   },
  //   {
  //     id: "6",
  //     name: "University Admission Question Bank",
  //     category: "Admission",
  //     location: "Rajshahi University, Rajshahi",
  //     condition: "Fair",
  //     type: "Sell",
  //     price: "150",
  //     imageUrl: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&q=80&w=400",
  //   },
  // ];

  const postData = await getPosts();
  console.log("Fetched posts data:", postData);
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