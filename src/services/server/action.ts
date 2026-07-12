import { BookItem } from "@/interface/post related/postDetails";
import { serverMutation } from "../core/server";

export const addNewPost = async (data: BookItem) => {
  return serverMutation<BookItem>("/api/posts", data);
};

export const deletePost = async (postId: string) => {
  const response = await serverMutation<BookItem>(
    `/api/posts/${postId}`,
    {},
    "PATCH",
  );
  return response;
};
