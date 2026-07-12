export interface BooksResponse<T> {
  success: boolean;
  books: T[];
  total: number;
  totalPages: number;
  currentPage: number;
}