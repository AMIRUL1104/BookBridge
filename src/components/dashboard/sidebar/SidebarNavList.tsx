
import { NavItem } from "@/interface/dashboard/dashboard";
import SidebarNavItem from "./SidebarNavItem";

interface SidebarNavListProps {
  navItems: NavItem[];
  isCollapsed: boolean;
  currentPath: string;
  onNavigate?: () => void;
}

const OVERVIEW_ROUTES = ["/dashboard/admin", "/dashboard/user"];

export default function SidebarNavList({
  navItems,
  isCollapsed,
  currentPath,
  onNavigate,
}: SidebarNavListProps) {
  return (
    <ul className="flex flex-col gap-1">
      {navItems.map((item) => {
        const isOverviewItem = OVERVIEW_ROUTES.includes(item.href);
        const isActive = isOverviewItem
          ? currentPath === item.href
          : currentPath === item.href ||
            currentPath.startsWith(`${item.href}/`);

        return (
          <li key={item.href}>
            <SidebarNavItem
              item={item}
              isActive={isActive}
              isCollapsed={isCollapsed}
              onNavigate={onNavigate}
            />
          </li>
        );
      })}
    </ul>
  );
}
