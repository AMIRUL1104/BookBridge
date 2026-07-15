import { ReactNode } from "react";
import { requireRole } from "@/services/core/session";

interface AdminDashboardLayoutProps {
  children: ReactNode;
}

async function UserDashboardLayout({
  children,
}: AdminDashboardLayoutProps) {
  await requireRole("user");
  return <>{children}</>;
}

export default UserDashboardLayout;
