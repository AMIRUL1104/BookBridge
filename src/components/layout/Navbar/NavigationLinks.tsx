// src/components/layout/Navbar/NavigationLinks.tsx
import Link from "next/link";
import { Home, BookOpen, PlusCircle, LayoutDashboard, ShieldCheck } from "lucide-react";

interface NavigationLinksProps {
  isLoggedIn: boolean;
  role: "user" | "admin" | null; // রোল মডেল: শুধুমাত্র user অথবা admin
  onLinkClick?: () => void;
}

interface NavLinkItem {
  name: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
}

export default function NavigationLinks({ isLoggedIn, role, onLinkClick }: NavigationLinksProps) {
  const links: NavLinkItem[] = [];

  console.log(`[NavigationLinks] Permission Check -> LoggedIn: ${isLoggedIn}, Role: ${role}`);

  // ১. গেস্ট ইউজারের পারমিশন লজিক
  if (!isLoggedIn) {
    links.push(
      { name: "Home", href: "/", icon: Home },
      { name: "Browse Books", href: "/books", icon: BookOpen }
    );
  } 
  // ২. অথেনটিকেটেড ইউজার এবং এডমিনের কমন পারমিশন লজিক
  else {
    // এডমিন সাধারণ ইউজারের মতো সবকিছু ব্রাউজ ও মডারেট করতে পারবেন
    links.push(
      { name: "Home", href: "/", icon: Home },
      { name: "Browse Books", href: "/books", icon: BookOpen },
      { name: "Add Book", href: "/books/add", icon: PlusCircle },
      { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard }
    );

    // ৩. শুধুমাত্র এডমিনের জন্য অতিরিক্ত অ্যাডমিনিস্ট্রেটিভ পারমিশন লজিক
    if (role === "admin") {
      links.push({
        name: "Admin Dashboard",
        href: "/admin/dashboard",
        icon: ShieldCheck, // এডমিন ড্যাশবোর্ডের জন্য স্পেশাল আইকন
      });
    }
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
            className="flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-[#35858E] focus-visible:text-[#35858E] focus-visible:outline-2 focus-visible:outline-[#35858E] px-3 py-2 rounded-md transition-all group"
          >
            <IconComponent className="w-4 h-4 text-gray-500 group-hover:text-[#35858E] transition-colors" />
            <span>{link.name}</span>
          </Link>
        );
      })}
    </>
  );
}