import { GetPostsParams } from "@/interface/post related/getPostsParams";
import { serverFetch } from "../core/serverFetch";
import { PostResponse } from "@/interface/post related/postResponse";
import { BooksResponse } from "@/interface/post related/booksResponse";
import { CheckBookRequestResponse } from "@/interface/bookRequest/checkRequest";
import { BookRequestResponse } from "@/interface/bookRequest/bookRequest";

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

export const getPostById = async (id: string): Promise<PostResponse | null> => {
  return serverFetch<PostResponse>(`/api/posts/${id}`);
};

export const getMyPosts = async <T>(
  userId: string,
): Promise<BooksResponse<T> | null> => {
  const result = await serverFetch<BooksResponse<T>>(
    `/api/posts/my?sellerId=${userId}`,
  );
  return result;
};

export const checkBookRequest = async (
  postId: string,
  sellerId: string,
  requesterId: string,
): Promise<CheckBookRequestResponse | null> => {
  const result = await serverFetch<CheckBookRequestResponse>(
    `/api/book-requests/check?postId=${postId}&sellerId=${sellerId}&requesterId=${requesterId}`,
  );
  return result;
};

export const getSentRequests = async (
  userId: string,
): Promise<BookRequestResponse | null> => {
  const result = await serverFetch<BookRequestResponse>(
    `/api/book-requests/sent?requesterId=${userId}`,
  );
  return result;
};
export const getReceivedRequests = async (
  userId: string,
): Promise<BookRequestResponse | null> => {
  const result = await serverFetch<BookRequestResponse>(
    `/api/book-requests/received?sellerId=${userId}`,
  );
  return result;
};
// export const getDoctorStats = async (doctorId) => {
//   return protectedFetch(`/api/stats/doctor?id=${doctorId}`);
// };
// import { protectedFetch, serverFetch } from "../core/serverFetch";

// //========================= get patients by id =====================
// export const getPatientById = async (id) => {
//   return protectedFetch(`/api/patients/${id}`);
// };

// // ======================get doctors by id =====================
// export const getDoctorById = async (id, query) => {
//   return protectedFetch(`/api/doctors/${id}?from=${query}`);
// };

// // ====================== get stats =====================
// export const getPosts = async () => {
//   return serverFetch(`/api/posts`);
// };
