// src/app/books/[id]/page.tsx
import { Metadata } from "next";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

import BookInformation from "@/components/book-details/BookInformation";
import SellerCard from "@/components/book-details/SellerCard";
import BookMetaCard from "@/components/book-details/BookMetaCard";
import BookHero from "@/components/book-details/BookHero";
import { getPostById } from "@/services/server/api";

export const metadata: Metadata = {
  title: "Post Details | BookBridge",
  description: "View books bundle shared by students.",
};

// টাইপ ডেফিনিশন (তোমার ব্যাকএন্ড রেসপন্স অনুসারে)
export interface BackendBookItem {
  bookId: string;
  publisherId: string;
  bookName: string;
  publisherName: string;
  image: string | null;
  condition: "like_new" | "good" | "fair";
  price: number;
}

export interface PostDetailData {
  _id: string;
  sellerId: string;
  type: "sell" | "donate";
  image: string;
  district: string;
  area: string;
  phone: string;
  messenger: string;
  whatsappOnly: boolean;
  description: string;
  status: "available" | "requested" | "accepted";
  acceptedRequestId: string | null;
  isDeleted: boolean;
  publishedAt: string;
  books: BackendBookItem[];
}

// export default async function BookDetailsPage({ params }: { params: { id: string } }) {
  // ব্যাকএন্ড থেকে আসা রিয়েল মক ডেটা
  // const postData: PostDetailData = {
  //   _id: "6a50ebacf01656b5f50c68ef",
  //   sellerId: "6875f2b4a8c91d0011223344",
  //   type: "sell",
  //   image: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?auto=format&fit=crop&q=80&w=600",
  //   district: "Sylhet",
  //   area: "Ambarkhana",
  //   phone: "01712345678",
  //   messenger: "https://m.me/amirul.islam",
  //   whatsappOnly: false,
  //   description: "All books are in very good condition. No missing pages. Selling because I have completed my HSC.",
  //   status: "available",
  //   acceptedRequestId: null,
  //   isDeleted: false,
  //   publishedAt: "2026-07-10T09:30:00.000Z",
  //   books: [
  //     {
  //       bookId: "68761001aa11bb22cc330001",
  //       publisherId: "68770001aa11bb22cc440001",
  //       bookName: "Higher Mathematics 2nd Paper",
  //       publisherName: "Panjeri Publications",
  //       image: null,
  //       condition: "like_new",
  //       price: 280,
  //     },
  //     {
  //       bookId: "68761001aa11bb22cc330002",
  //       publisherId: "68770001aa11bb22cc440002",
  //       bookName: "Physics 1st Paper",
  //       publisherName: "NCTB",
  //       image: null,
  //       condition: "good",
  //       price: 180,
  //     },
  //     {
  //       bookId: "68761001aa11bb22cc330003",
  //       publisherId: "68770001aa11bb22cc440003",
  //       bookName: "ICT",
  //       publisherName: "Lecture Publications",
  //       image: null,
  //       condition: "good",
  //       price: 150,
  //     },
  //   ],
  // };
// ১. প্রথমে params এর টাইপ ডিফাইন করো (এটি একটি Promise হবে)
type Params = Promise<{ id: string }>;

// ২. কম্পোনেন্ট সিগনেচার আপডেট করো
export default async function BookDetailsPage({ params }: { params: Params }) {
  
  // ৩. অবশ্যই params-কে await করে নিতে হবে
  const resolvedParams = await params;
  const id = resolvedParams.id; 

  // console.log(`[BookDetailsPage] Fetching data for post ID: ${id}`);

  const {data} = await getPostById(id);
  // console.log("Fetched post data:", data);
  const postData : PostDetailData = data;
  // console.log("Fetched post data:", postData);
  return (
    <main className="min-h-screen w-full bg-[#F5F7F8] py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col gap-6">
        
        <Link href="/books" className="inline-flex items-center gap-2 text-sm font-bold text-gray-600 hover:text-[#35858E] transition-colors w-fit">
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Browse</span>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* বাম কলাম: মেইন পোস্ট ইমেজ */}
          <div className="lg:col-span-5 w-full">
            <BookHero imageUrl={postData.image} name="Books Bundle" />
          </div>

          {/* ডান কলাম: পোস্ট ডিটেইলস ও বইয়ের তালিকা */}
          <div className="lg:col-span-7 flex flex-col gap-6 w-full">
            <BookInformation post={postData} />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <SellerCard post={postData} />
              <BookMetaCard post={postData} />
            </div>
          </div>
        </div>

      </div>
    </main>
  );
}