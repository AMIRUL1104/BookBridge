// import type { Metadata } from "next";
// import { getMyPosts } from "@/services/server/api";


// import MyPostsClient from "@/components/dashboard/user/my-posts/MyPostsClient";
// import { getUserSession } from "@/services/core/session";
// import { UserSession } from "@/interface/user/userSession";

// export const metadata: Metadata = {
//   title: "My Posts | BookBridge",
// };

// export default async function MyPostsPage() {
//   const user  = await getUserSession() as UserSession | null;
//   const response = await getMyPosts(user.id);
//   const posts = response?.books ?? [];

//   return (
//     <main className="p-4 sm:p-6 lg:p-8 space-y-6">
//       <div>
//         <h1 className="text-2xl font-bold text-gray-800">My Posts</h1>
//         <p className="text-sm text-gray-500 mt-1">
//           Manage the books you&apos;ve listed for sale or donation.
//         </p>
//       </div>

//       <MyPostsClient initialPosts={posts} />
//     </main>
//   );
// }
import type { Metadata } from "next";
import { getMyPosts } from "@/services/server/api";
import { redirect } from "next/navigation"; // সেশন না থাকলে রিডাইরেক্ট করার জন্য

import MyPostsClient from "@/components/dashboard/user/my-posts/MyPostsClient";
import { getUserSession } from "@/services/core/session";
import { UserSession } from "@/interface/user/userSession";
import { BookItem } from "@/interface/post related/postDetails";
// import { BookItem } from "@/components/dashboard/user/my-posts/post"; // অথবা আপনার MyPost টাইপ যেখান থেকে আসে

export const metadata: Metadata = {
  title: "My Posts | BookBridge",
};

export default async function MyPostsPage() {
  const user = (await getUserSession()) as UserSession | null;

  // ফিক্স ১: ইউজার লগইন করা না থাকলে বা সেশন null হলে সেভ-গার্ড বা রিডাইরেক্ট
  if (!user || !user.id) {
    redirect("/login"); // অথবা return null বা একটা মেসেজ দেখাতে পারেন
  }

  const response = await getMyPosts(user.id);
  
  // ফিক্স ২: Type Assertion (as MyPost[]) ব্যবহার করে TypeScript কে টাইপ নিশ্চিত করা হলো
  // (এখানে MyPost বা BookItem—আপনার MyPostsClient যেটা রিসিভ করে সেই টাইপটা দিবেন)
  const posts = (response?.books ?? []);

  return (
    <main className="p-4 sm:p-6 lg:p-8 space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-800">My Posts</h1>
        <p className="text-sm text-gray-500 mt-1">
          Manage the books you&apos;ve listed for sale or donation.
        </p>
      </div>

      <MyPostsClient initialPosts={posts} />
    </main>
  );
}