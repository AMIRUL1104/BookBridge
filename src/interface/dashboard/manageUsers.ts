import type { UserProfile } from "@/interface/user/userProfile";

export type { UserProfile };

export type UserRole = "admin" | "user";

// "active" | "suspended" maps to !isBlocked / isBlocked on UserProfile
// but backend accepts role / status as string query params
export type RoleFilter = "all" | UserRole;
export type StatusFilter = "all" | "active" | "suspended";

export interface GetUsersResponse {
  success: boolean;
  users: UserProfile[];
  total: number;
  totalPages: number;
  currentPage: number;
}
