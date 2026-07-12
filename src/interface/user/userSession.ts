export interface UserSession {
  id: string;
  email: string;
  name?: string | null;
  image?: string | null;
  role: "user" | "admin" | null;
  isBlocked?: boolean | null;
}
