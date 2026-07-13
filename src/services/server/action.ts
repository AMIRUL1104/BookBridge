import { BookItem } from "@/interface/post related/postDetails";
import { BookRequest } from "@/interface/bookRequest/checkRequest";
import { serverMutation } from "../core/server";
import { authHeader } from "../core/serverFetch";
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL!;

export const addNewPost = async (data: BookItem) => {
  return serverMutation<BookItem>("/api/posts", data);
};

export const deletePost = async (postId: string) => {
  try {
    const headers: HeadersInit = {
      "Content-Type": "application/json",
      ...(await authHeader()),
    };

    const response = await fetch(`${baseUrl}/api/posts/${postId}`, {
      method: "DELETE", // এখানে মেথড পরিবর্তন করে DELETE করা হলো
      headers: headers,
      // DELETE রিকোয়েস্টে সাধারণত বডির প্রয়োজন নেই
    });

    return await response.json();
  } catch (error) {
    console.error("Delete request error:", error);
    return {
      success: false,
      message: "Something went wrong while deleting the post.",
    };
  }
};

export const createBookRequest = async (data: BookRequest) => {
  return serverMutation<BookRequest>("/api/book-requests", data);
};
