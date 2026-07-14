"use client";

import { useEffect, useRef, useState } from "react";
import {
  Ban,
  CheckCircle2,
  ChevronRight,
  MoreHorizontal,
  ShieldCheck,
  Trash2,
  User,
} from "lucide-react";
import type { UserProfile } from "@/interface/user/userProfile";

interface UserActionsMenuProps {
  user: UserProfile;
}

export function UserActionsMenu({ user }: UserActionsMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;
    function handleClick(e: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") setIsOpen(false);
    }
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [isOpen]);

  return (
    <div ref={menuRef} className="relative">
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex h-8 w-8 items-center justify-center rounded-lg text-gray-400 transition-colors hover:bg-[#F5F7F8] hover:text-gray-600"
        aria-label={`Actions for ${user.fullName}`}
      >
        <MoreHorizontal className="h-4 w-4" />
      </button>

      {isOpen && (
        <div className="absolute right-0 z-50 mt-1.5 w-48 rounded-xl border border-[#EDF1F2] bg-white py-1.5 shadow-lg">
          <button
            type="button"
            className="flex w-full items-center gap-2.5 px-3.5 py-2 text-sm text-gray-700 transition-colors hover:bg-[#F5F7F8]"
            onClick={() => setIsOpen(false)}
          >
            <User className="h-4 w-4 text-gray-400" />
            View Profile
          </button>

          <button
            type="button"
            className="flex w-full items-center gap-2.5 px-3.5 py-2 text-sm text-gray-700 transition-colors hover:bg-[#F5F7F8]"
            onClick={() => setIsOpen(false)}
          >
            <ShieldCheck className="h-4 w-4 text-gray-400" />
            Change Role
            <ChevronRight className="ml-auto h-3.5 w-3.5 text-gray-300" />
          </button>

          <div className="my-1.5 border-t border-[#EDF1F2]" />

          <button
            type="button"
            className="flex w-full items-center gap-2.5 px-3.5 py-2 text-sm text-amber-600 transition-colors hover:bg-amber-50"
            onClick={() => setIsOpen(false)}
          >
            <Ban className="h-4 w-4" />
            Suspend User
          </button>

          <button
            type="button"
            className="flex w-full items-center gap-2.5 px-3.5 py-2 text-sm text-green-600 transition-colors hover:bg-green-50"
            onClick={() => setIsOpen(false)}
          >
            <CheckCircle2 className="h-4 w-4" />
            Activate User
          </button>

          <div className="my-1.5 border-t border-[#EDF1F2]" />

          <button
            type="button"
            className="flex w-full items-center gap-2.5 px-3.5 py-2 text-sm text-red-500 transition-colors hover:bg-red-50"
            onClick={() => setIsOpen(false)}
          >
            <Trash2 className="h-4 w-4" />
            Delete User
          </button>
        </div>
      )}
    </div>
  );
}