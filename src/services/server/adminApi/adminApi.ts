import { protectedFetch } from "@/services/core/serverFetch";
import type { GetUsersResponse } from "@/interface/dashboard/manageUsers";
import type { BookRequestResponse } from "@/interface/bookRequest/bookRequest";
import { AdminDashboardResponse } from "@/interface/dashboard/dashboard";

export type SortOption = "newest" | "oldest";

export interface GetUsersParams {
  search?: string;
  role?: string;
  status?: string;
  sort?: SortOption;
  page?: number;
  limit?: number;
}

export const getAllUsers = async ({
  search = "",
  role = "",
  status = "",
  sort = "newest",
  page = 1,
  limit = 10,
}: GetUsersParams = {}): Promise<GetUsersResponse> => {
  const params = new URLSearchParams();

  if (search) params.set("search", search);
  if (role && role !== "all") params.set("role", role);
  if (status && status !== "all") params.set("status", status);
  params.set("sort", sort);
  params.set("page", String(page));
  params.set("limit", String(limit));

  const result = await protectedFetch<GetUsersResponse>(
    `/api/users/admin?${params.toString()}`,
  );

  if (!result) {
    return {
      success: false,
      users: [],
      total: 0,
      totalPages: 1,
      currentPage: page,
    };
  }

  return result;
};

export const getAllBookRequests =
  async (): Promise<BookRequestResponse | null> => {
    return protectedFetch<BookRequestResponse>("/api/admin/book-requests");
  };

export const getAdminDashboard =
  async (): Promise<AdminDashboardResponse | null> => {
    return protectedFetch<AdminDashboardResponse>("/api/dashboard/admin");
  };
