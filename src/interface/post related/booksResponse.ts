export interface BooksResponse<T> {
  success: boolean;
  books: T[];
  total: number;
  totalPages: number;
  currentPage: number;
}

export interface FeaturedPostsResponse<T> {
  success: boolean;
  data: T[];
}
