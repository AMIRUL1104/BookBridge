export interface UserProfile {
  id: string;
  fullName: string;
  email: string;
  phoneNumber: string;
  district: string;
  area: string;
  avatarUrl: string | null;
  role: "user" | "admin";
  memberSince: string; // ISO date string
}

export interface UpdateProfilePayload {
  fullName: string;
  phoneNumber: string;
  district: string;
  area: string;
  avatarUrl?: string | null;
}
