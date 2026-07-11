export interface BookItem {
  _id: string;
  sellerId: string;
  type: "sell" | "donate"; // API-তে ছোট হাতের অক্ষরে থাকে
  image: string; // পোস্টের মেইন ইমেজ
  district: string;
  area: string;
  phone: string;
  messenger: string;
  whatsappOnly: boolean;
  description: string;
  status: string;
  publishedAt: string;
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
