import { BookItem } from "@/interface/postDetails";
import { serverMutation } from "../core/server";

export const addNewPost = async (data: BookItem) => {
  return serverMutation<BookItem>("/api/posts", data);
};
