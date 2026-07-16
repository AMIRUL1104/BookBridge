"use client";

// src/components/layout/navbar/NavigationLinks.tsx

import { useState } from "react";
import Link from "next/link";
import {
  Home,
  BookOpen,
  PlusCircle,
  LayoutDashboard,
  ChevronDown,
  Inbox,
  UserCog,
  Users,
  FileStack,
  Library,
} from "lucide-react";

interface NavigationLinksProps {
  isLoggedIn: boolean;
  role: "user" | "admin" | null;
  isMobile?: boolean;
  onLinkClick?: () => void;
}

interface NavLinkItem {
  name: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
}

const userDashboardLinks: NavLinkItem[] = [
  { name: "My Posts", href: "/dashboard/user/posts", icon: PlusCircle },
  { name: "View Requests", href: "/dashboard/user/requests", icon: Inbox },
  { name: "Browse Books", href: "/browse", icon: BookOpen },
  { name: "Profile", href: "/profile", icon: UserCog },
];

const adminDashboardLinks: NavLinkItem[] = [
  { name: "Manage Users", href: "/dashboard/admin/users", icon: Users },
  { name: "Manage Posts", href: "/dashboard/admin/posts", icon: FileStack },
  { name: "Knowledge Base", href: "/dashboard/admin/knowledge-base", icon: Library },
  { name: "Profile", href: "/profile", icon: UserCog },
];

const linkClass =
  "flex items-center gap-2 text-sm font-medium text-white/90 hover:text-[#F6CE71] focus-visible:text-[#F6CE71] focus-visible:outline-2 focus-visible:outline-[#F6CE71] px-3 py-2 rounded-md transition-all group";

const iconClass =
  "w-4 h-4 text-white/60 group-hover:text-[#F6CE71] transition-colors";

// ─── Mobile Dashboard Dropdown ─────────────────────────────────────────────────

function MobileDashboardDropdown({
  role,
  onLinkClick,
}: {
  role: "user" | "admin";
  onLinkClick?: () => void;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const links = role === "admin" ? adminDashboardLinks : userDashboardLinks;

  return (
    <div>
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex items-center justify-between w-full gap-2 text-sm font-medium text-white/90 hover:text-[#F6CE71] px-3 py-2 rounded-md transition-all group"
      >
        <span className="flex items-center gap-2">
          <LayoutDashboard className={iconClass} />
          Dashboard
        </span>
        <ChevronDown
          className={`w-4 h-4 text-white/60 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {isOpen && (
        <div className="mt-1 ml-3 flex flex-col gap-1 border-l border-white/20 pl-3">
          {links.map((link) => {
            const Icon = link.icon;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={onLinkClick}
                className="flex items-center gap-2 text-sm text-white/80 hover:text-[#F6CE71] px-2 py-1.5 rounded-md transition-all group"
              >
                <Icon className="w-3.5 h-3.5 text-white/50 group-hover:text-[#F6CE71] transition-colors" />
                {link.name}
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}

// ─── Main Component ────────────────────────────────────────────────────────────

export default function NavigationLinks({
  isLoggedIn,
  role,
  isMobile = false,
  onLinkClick,
}: NavigationLinksProps) {
  const baseLinks: NavLinkItem[] = isLoggedIn
    ? [
        { name: "Home", href: "/", icon: Home },
        { name: "Browse Books", href: "/books", icon: BookOpen },
        { name: "Add Book", href: "/books/add", icon: PlusCircle },
      ]
    : [
        { name: "Home", href: "/", icon: Home },
        { name: "Browse Books", href: "/books", icon: BookOpen },
      ];

  return (
    <>
      {baseLinks.map((link) => {
        const Icon = link.icon;
        return (
          <Link
            key={link.href}
            href={link.href}
            onClick={onLinkClick}
            className={linkClass}
          >
            <Icon className={iconClass} />
            <span>{link.name}</span>
          </Link>
        );
      })}

      {/* Desktop: single Dashboard link */}
      {isLoggedIn && !isMobile && role && (
        <Link
          href={`/dashboard/${role}`}
          onClick={onLinkClick}
          className={linkClass}
        >
          <LayoutDashboard className={iconClass} />
          <span>Dashboard</span>
        </Link>
      )}

      {/* Mobile: dropdown with sub-links */}
      {isLoggedIn && isMobile && role && (
        <MobileDashboardDropdown role={role} onLinkClick={onLinkClick} />
      )}
    </>
  );
}
