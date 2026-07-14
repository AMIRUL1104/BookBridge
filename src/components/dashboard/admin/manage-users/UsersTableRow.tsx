import type { UserProfile } from "@/interface/user/userProfile";
import { UserAvatar } from "./UserAvatar";
import { UserRoleBadge } from "./UserRoleBadge";
import { UserStatusBadge } from "./UserStatusBadge";
import { UserActionsMenu } from "./UserActionsMenu";

interface UsersTableRowProps {
  user: UserProfile;
}

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

export function UsersTableRow({ user }: UsersTableRowProps) {
  return (
    <tr className="border-b border-[#EDF1F2] transition-colors hover:bg-[#F5F7F8]/60">
      {/* Avatar */}
      <td className="py-3.5 pl-5 pr-3">
        <UserAvatar name={user.fullName} image={user.avatarUrl} />
      </td>

      {/* Name */}
      <td className="px-3 py-3.5">
        <span className="text-sm font-semibold text-gray-800">
          {user.fullName}
        </span>
      </td>

      {/* Email */}
      <td className="px-3 py-3.5">
        <span className="text-sm text-gray-500">{user.email}</span>
      </td>

      {/* Role */}
      <td className="px-3 py-3.5">
        <UserRoleBadge role={user.role} />
      </td>

      {/* Status — UserProfile has no isBlocked; use role or memberSince as proxy.
          Backend status filter works; UI badge defaults Active for all returned users
          unless the backend surfaces a status field. */}
      <td className="px-3 py-3.5">
        <UserStatusBadge isBlocked={false} />
      </td>

      {/* Joined Date */}
      <td className="px-3 py-3.5">
        <span className="text-sm text-gray-500">
          {formatDate(user.memberSince)}
        </span>
      </td>

      {/* Actions */}
      <td className="py-3.5 pl-3 pr-5 text-right">
        <UserActionsMenu user={user} />
      </td>
    </tr>
  );
}