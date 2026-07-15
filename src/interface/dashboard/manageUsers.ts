import type { UserProfile } from "@/interface/user/userProfile";

export type { UserProfile };

export type ManagedUser = UserProfile;

export type UserRole = "admin" | "user";

export type RoleFilter = "all" | UserRole;
export type StatusFilter = "all" | "active" | "suspended";

export interface GetUsersResponse {
  success: boolean;
  users: ManagedUser[];
  total: number;
  totalPages: number;
  currentPage: number;
}
