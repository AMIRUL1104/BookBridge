import { BookItem } from "@/interface/postDetails";
import { serverFetch } from "../core/serverFetch";

interface GetPostsParams {
  search?: string;
  category?: string;
  condition?: string;
  listingType?: "sell" | "donate" | "";
  sort?: "newest" | "oldest" | "title-asc" | "title-desc";
  page?: number;
  limit?: number;
}

interface BooksResponse<T> {
  success: boolean;
  books: T[];
  total: number;
  totalPages: number;
  currentPage: number;
}

export const getPosts = async <T>({
  search = "",
  category = "",
  condition = "",
  listingType = "",
  sort = "newest",
  page = 1,
  limit = 6,
}: GetPostsParams = {}): Promise<BooksResponse<T>> => {
  const params = new URLSearchParams();

  if (search) params.set("search", search);
  if (category) params.set("category", category);
  if (condition) params.set("condition", condition);
  if (listingType) params.set("listingType", listingType);
  if (sort) params.set("sort", sort);

  params.set("page", String(page));
  params.set("limit", String(limit));

  const result = await serverFetch<BooksResponse<T>>(
    `/api/posts?${params.toString()}`,
  );

  // serverFetch returns null on failure
  if (!result) {
    return {
      success: false,
      books: [],
      total: 0,
      totalPages: 1,
      currentPage: page,
    };
  }

  return result;
};

export interface PostResponse {
  success: boolean;
  data: BookItem;
}
export const getPostById = async (id: string): Promise<PostResponse | null> => {
  return serverFetch<PostResponse>(`/api/posts/${id}`);
};

// export const getDoctorStats = async (doctorId) => {
//   return protectedFetch(`/api/stats/doctor?id=${doctorId}`);
// };
// import { protectedFetch, serverFetch } from "../core/serverFetch";

// //========================= get patients by id =====================
// export const getPatientById = async (id) => {
//   return protectedFetch(`/api/patients/${id}`);
// };

// export const getLimitedDoctors = async ({
//   search = "",
//   sort = "",
//   page,
//   limit = 6,
//   verificationStatus = "verified",
// } = {}) => {
//   const params = new URLSearchParams();

//   if (search) params.set("search", search);
//   if (sort) params.set("sort", sort);
//   params.set("page", String(page));
//   params.set("limit", String(limit));
//   if (verificationStatus) params.set("verificationStatus", verificationStatus);

//   const result = await serverFetch(`/api/doctors?${params.toString()}`);

//   // serverFetch returns null on failure — guard against that here
//   if (!result) {
//     return { doctors: [], total: 0, totalPages: 1, currentPage: page };
//   }

//   return result;
// };

// // ======================get doctors by id =====================
// export const getDoctorById = async (id, query) => {
//   return protectedFetch(`/api/doctors/${id}?from=${query}`);
// };

// // ====================== get stats =====================
// export const getPosts = async () => {
//   return serverFetch(`/api/posts`);
// };
