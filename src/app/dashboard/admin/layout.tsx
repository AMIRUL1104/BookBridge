import { ReactNode } from "react";
import { requireRole } from "@/services/core/session";

interface AdminDashboardLayoutProps {
  children: ReactNode;
}

async function AdminDashboardLayout({
  children,
}: AdminDashboardLayoutProps) {
  await requireRole("admin");

  return <>{children}</>;
}

export default AdminDashboardLayout;