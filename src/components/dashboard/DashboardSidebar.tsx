import { getUserSession } from "@/services/core/session";

import SidebarClient from "./sidebar/SidebarClient";
import { adminNavItems, userNavItems } from "@/lib/dashboard/nav-config";

// Derived directly from the real session helper so this stays correct
// even if its return shape changes later.
type SessionUser = Awaited<ReturnType<typeof getUserSession>>;

interface DashboardSidebarProps {
  user: SessionUser;
}

// Server Component: purely presentational. dashboard/layout.tsx already
// calls getUserSession() once and passes the result down as `user`, so
// this component does not fetch the session itself.
//
// NOTE: mapped fields below assume a BetterAuth-style session
// (name, email, image, role). If your session object uses different
// field names, adjust the four lines inside the `user={{ ... }}` block.
export const DashboardSidebar = ({ user }: DashboardSidebarProps) => {
  const role = user?.role === "admin" ? "admin" : "user";
  const navItems = role === "admin" ? adminNavItems : userNavItems;

  return (
    <SidebarClient
      navItems={navItems}
      user={{
        name: user?.name ?? "Guest",
        email: user?.email ?? "",
        avatarUrl: user?.image ?? null,
        role,
      }}
    />
  );
};
