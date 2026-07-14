import type { UserRole } from "@/interface/dashboard/manageUsers";

interface UserRoleBadgeProps {
  role: UserRole;
}

const ROLE_STYLES: Record<UserRole, string> = {
  admin: "bg-[#1e3a5f]/10 text-[#1e3a5f] border border-[#1e3a5f]/20",
  user: "bg-gray-100 text-gray-600 border border-gray-200",
};

const ROLE_LABELS: Record<UserRole, string> = {
  admin: "Admin",
  user: "User",
};

export function UserRoleBadge({ role }: UserRoleBadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-bold ${ROLE_STYLES[role]}`}
    >
      {ROLE_LABELS[role]}
    </span>
  );
}