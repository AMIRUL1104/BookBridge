interface UserStatusBadgeProps {
  isBlocked: boolean;
}

export function UserStatusBadge({ isBlocked }: UserStatusBadgeProps) {
  if (isBlocked) {
    return (
      <span className="inline-flex items-center gap-1.5 rounded-full border border-red-200 bg-red-50 px-2.5 py-0.5 text-xs font-bold text-red-600">
        <span className="h-1.5 w-1.5 rounded-full bg-red-500" />
        Suspended
      </span>
    );
  }

  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-green-200 bg-green-50 px-2.5 py-0.5 text-xs font-bold text-green-700">
      <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
      Active
    </span>
  );
}
