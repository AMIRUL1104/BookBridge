export interface BookItem {
  _id: string;
  sellerId: string;
  sellerName: string;
  sellerEmail: string;
  title: string;
  category: string;
  type: "sell" | "donate"; // API-তে ছোট হাতের অক্ষরে থাকে
  image: string; // পোস্টের মেইন ইমেজ
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
