// Types shared across the Add Post feature.
// These mirror the existing backend contract — do not rename fields.

export type PostType = "sell" | "donate";

export type BookCondition = "new" | "excellent" | "good" | "fair";

export interface BookEntry {
  bookId: string;
  publisherId: string;
  bookName: string;
  publisherName: string;
  image: string | null;
  condition: BookCondition;
  price: number | null;
}

export interface BookItem {
  _id: string;
  sellerId: string;
  sellerName: string;
  sellerEmail: string;
  title: string;
  category: string;
  type: PostType; // API stores this lowercase
  image: string; // main post image
  district: string;
  area: string;
  phone: string;
  messenger: string;
  whatsappOnly: boolean;
  description: string;
  status: string;
  acceptedRequestId: string | null;
  isDeleted: boolean;
  publishedAt: string;
  updatedAt: string;
  books: {
    bookId: string;
    publisherId: string;
    bookName: string;
    publisherName: string;
    image: string | null;
    condition: string;
    price: number;
  }[];
}

// Response shape returned by the existing `addNewPost` server action.
export interface AddNewPostResult {
  success: boolean;
  message?: string;
  postId?: string;
}

export const BOOK_CATEGORIES = [
  "SSC",
  "HSC",
  "Admission",
  "University",
  "Others",
] as const;

export type BookCategory = (typeof BOOK_CATEGORIES)[number];

export const BOOK_CONDITIONS: { label: string; value: BookCondition }[] = [
  { label: "New", value: "new" },
  { label: "Excellent", value: "excellent" },
  { label: "Good", value: "good" },
  { label: "Fair", value: "fair" },
];

export const DISTRICTS = [
  "Dhaka",
  "Chattogram",
  "Sylhet",
  "Rajshahi",
  "Khulna",
  "Barishal",
  "Rangpur",
  "Mymensingh",
  "Comilla",
  "Narayanganj",
  "Gazipur",
] as const;
