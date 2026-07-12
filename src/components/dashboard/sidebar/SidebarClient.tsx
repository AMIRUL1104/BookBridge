"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronLeft, ChevronRight } from "lucide-react";

import SidebarLogo from "./SidebarLogo";
import SidebarNavList from "./SidebarNavList";
import SidebarProfile from "./SidebarProfile";
import { DashboardUser, NavItem } from "@/interface/dashboard/dashboard";

interface SidebarClientProps {
  navItems: NavItem[];
  user: DashboardUser;
}

export default function SidebarClient({ navItems, user }: SidebarClientProps) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      {/* Mobile trigger */}
      <button
        type="button"
        onClick={() => setIsMobileOpen(true)}
        aria-label="Open sidebar"
        className="lg:hidden fixed top-4 left-4 z-40 p-2.5 bg-white rounded-xl shadow-md border border-[#EDF1F2] text-[#35858E] cursor-pointer"
      >
        <Menu className="w-5 h-5" />
      </button>

      {/* Mobile overlay */}
      {isMobileOpen && (
        <div
          onClick={() => setIsMobileOpen(false)}
          aria-hidden="true"
          className="lg:hidden fixed inset-0 bg-black/40 z-40 transition-opacity duration-300"
        />
      )}

      <aside
        className={`
          fixed lg:sticky top-0 left-0 h-screen z-50
          flex flex-col bg-white border-r border-[#EDF1F2]
          transition-all duration-300 ease-in-out
          ${isCollapsed ? "lg:w-20" : "lg:w-64"}
          w-64
          ${isMobileOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
        `}
      >
        <div className="flex items-center justify-between px-4 py-5">
          <SidebarLogo isCollapsed={isCollapsed} />
          <button
            type="button"
            onClick={() => setIsMobileOpen(false)}
            aria-label="Close sidebar"
            className="lg:hidden p-1.5 text-gray-400 hover:text-gray-600 rounded-lg cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto px-3 py-2">
          <SidebarNavList
            navItems={navItems}
            isCollapsed={isCollapsed}
            currentPath={pathname}
            onNavigate={() => setIsMobileOpen(false)}
          />
        </nav>

        <div className="px-3 py-4 border-t border-[#EDF1F2]">
          <SidebarProfile user={user} isCollapsed={isCollapsed} />
        </div>

        <button
          type="button"
          onClick={() => setIsCollapsed((prev) => !prev)}
          aria-label={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
          className="hidden lg:flex absolute -right-3 top-9 items-center justify-center w-6 h-6 bg-white border border-[#EDF1F2] rounded-full shadow-md text-[#35858E] hover:bg-[#35858E] hover:text-white transition-all duration-200 cursor-pointer"
        >
          {isCollapsed ? (
            <ChevronRight className="w-3.5 h-3.5" />
          ) : (
            <ChevronLeft className="w-3.5 h-3.5" />
          )}
        </button>
      </aside>
    </>
  );
}
