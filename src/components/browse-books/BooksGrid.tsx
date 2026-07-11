// src/components/browse-books/BooksGrid.tsx
import BookCard, { BookItem } from "@/components/shared/BookCard";
import { getPosts } from "@/services/server/api";

export default async function BooksGrid() {
  // ২০টি একাডেমিক বইয়ের জেনারেটেড প্রফেশনাল মক ডাটা
  // const mockBooks: BookItem[] = Array.from({ length: 20 }).map((_, idx) => {
  //   const categories = ["Science", "Engineering", "Medical", "Business", "Admission"];
  //   const conditions = ["Like New", "Good", "Fair"];
  //   const types: ("Sell" | "Donate")[] = ["Sell", "Donate"];
    
  //   const id = (idx + 1).toString();
  //   const category = categories[idx % categories.length];
  //   const condition = conditions[idx % conditions.length];
  //   const type = types[idx % types.length];

  //   return {
  //     id,
  //     name: `Academic Textbook Vol ${id} - ${category} Edition`,
  //     category,
  //     location: idx % 2 === 0 ? "Farmgate, Dhaka" : "Chittagong Sadar, CTG",
  //     condition,
  //     type,
  //     price: type === "Sell" ? (150 + (idx * 20)).toString() : undefined,
  //     imageUrl: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&q=80&w=400",
  //   };
  // });


  const postData = await getPosts();
  const bookItems: BookItem[] = postData.data;
  return (
    // রেসপন্সিভ গ্রিড ব্রেকপয়েন্ট রুলস: মোবাইল ২, ট্যাব ৩, লার্জ ডেক্সটপ ৪
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
      {bookItems.map((book) => (
        <BookCard key={book._id} book={book} />
      ))}
    </div>
  );
}