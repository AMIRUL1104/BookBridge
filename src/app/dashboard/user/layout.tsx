import { requireRole } from "@/services/core/session";
async function UserDashboardLayout({ children }) {
  await requireRole("user");
  return children;
}

export default UserDashboardLayout;
