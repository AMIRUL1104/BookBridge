export type PostType = "sell" | "donate";

export interface MyPostBookEntry {
  bookId: string;
  publisherId: string;
  bookName: string;
  publisherName: string;
  image: string | null;
  condition: string;
  price: number;
}

export interface MyPost {
  _id: string;
  sellerId: string;
  sellerName: string;
  sellerEmail: string;
  status: string; // e.g. "available" | "requested" | "sold" | "donated"
  acceptedRequestId: string | null;
  isDeleted: boolean;
  updatedAt: string;
  title: string;
  category: string;
  type: PostType;
  image: string;
  district: string;
  area: string;
  phone: string;
  messenger: string;
  whatsappOnly: boolean;
  description: string;
  books: MyPostBookEntry[];
  publishedAt: string;
}

export interface GetMyPostsResponse {
  success: boolean;
  data: MyPost[];
  message?: string;
}

export type MyPostsFilter =
  | "all"
  | "sell"
  | "donate"
  | "available"
  | "requested"
  | "sold";

export type MyPostsSort = "newest" | "oldest" | "title-asc" | "title-desc";
