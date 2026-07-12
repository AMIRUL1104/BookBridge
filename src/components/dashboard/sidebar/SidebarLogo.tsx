import { BookOpenCheck } from "lucide-react";

interface SidebarLogoProps {
  isCollapsed: boolean;
}

export default function SidebarLogo({ isCollapsed }: SidebarLogoProps) {
  return (
    <div className="flex items-center gap-2.5 overflow-hidden">
      <div className="flex items-center justify-center w-9 h-9 rounded-xl bg-[#35858E] text-white shrink-0">
        <BookOpenCheck className="w-5 h-5" />
      </div>
      {!isCollapsed && (
        <span className="text-lg font-bold text-gray-800 whitespace-nowrap">
          BookBridge
        </span>
      )}
    </div>
  );
}
