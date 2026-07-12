export interface GetPostsParams {
  search?: string;
  category?: string;
  condition?: string;
  listingType?: "sell" | "donate" | "";
  sort?: "newest" | "oldest" | "title-asc" | "title-desc";
  page?: number;
  limit?: number;
}
