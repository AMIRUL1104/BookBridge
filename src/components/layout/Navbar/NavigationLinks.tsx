// src/components/layout/navbar/NavigationLinks.tsx
import Link from "next/link";
import { Home, BookOpen, PlusCircle, LayoutDashboard, ShieldCheck } from "lucide-react";

interface NavigationLinksProps {
  isLoggedIn: boolean;
  role: "user" | "admin" | null;
  onLinkClick?: () => void;
}

interface NavLinkItem {
  name: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
}

export default function NavigationLinks({ isLoggedIn, role, onLinkClick }: NavigationLinksProps) {
  const links: NavLinkItem[] = [];

  if (!isLoggedIn) {
    links.push(
      { name: "Home", href: "/", icon: Home },
      { name: "Browse Books", href: "/books", icon: BookOpen }
    );
  } else {
    links.push(
      { name: "Home", href: "/", icon: Home },
      { name: "Browse Books", href: "/books", icon: BookOpen },
      { name: "Add Book", href: "/books/add", icon: PlusCircle },
      { name: "Dashboard", href: `/dashboard/${role}`, icon: LayoutDashboard }
    );

   
  }

  return (
    <>
      {links.map((link) => {
        const IconComponent = link.icon;
        
        return (
          <Link
            key={link.href}
            href={link.href}
            onClick={onLinkClick}
            // টেক্সট কালার হোয়াইট এবং হোভার/একটিভ স্টেট #F6CE71 করা হয়েছে
            className="flex items-center gap-2 text-sm font-medium text-white/90 hover:text-[#F6CE71] focus-visible:text-[#F6CE71] focus-visible:outline-2 focus-visible:outline-[#F6CE71] px-3 py-2 rounded-md transition-all group"
          >
            <IconComponent className="w-4 h-4 text-white/60 group-hover:text-[#F6CE71] transition-colors" />
            <span>{link.name}</span>
          </Link>
        );
      })}
    </>
  );
}