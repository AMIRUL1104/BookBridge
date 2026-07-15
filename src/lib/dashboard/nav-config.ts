import type { NavItem } from "@/interface/dashboard/dashboard";

export const userNavItems: NavItem[] = [
  { label: "Overview", href: "/dashboard/user", icon: "LayoutDashboard" },
  { label: "My Posts", href: "/dashboard/user/posts", icon: "BookOpen" },
  {
    label: "Requests",
    href: "/dashboard/user/requests",
    icon: "ClipboardList",
  },
  { label: "Profile", href: "/profile", icon: "User" },
];

export const adminNavItems: NavItem[] = [
  { label: "Overview", href: "/dashboard/admin", icon: "LayoutDashboard" },
  { label: "Manage Users", href: "/dashboard/admin/users", icon: "Users" },
  { label: "Manage Posts", href: "/dashboard/admin/posts", icon: "FileStack" },
  {
    label: "Knowledge Base",
    href: "/dashboard/admin/knowledge-base",
    icon: "Library",
  },
  { label: "Profile", href: "/profile", icon: "User" },
];
