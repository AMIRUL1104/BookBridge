import type {
  ManagedUser,
  RoleFilter,
  StatusFilter,
} from "@/interface/dashboard/manageUsers";

export function filterUsers(
  users: ManagedUser[],
  search: string,
  roleFilter: RoleFilter,
  statusFilter: StatusFilter,
): ManagedUser[] {
  const query = search.trim().toLowerCase();

  return users.filter((user) => {
    const matchesSearch =
      query.length === 0 ||
      user.fullName.toLowerCase().includes(query) ||
      user.email.toLowerCase().includes(query);

    const matchesRole = roleFilter === "all" || user.role === roleFilter;

    const userStatus: StatusFilter = "active";
    const matchesStatus = statusFilter === "all" || userStatus === statusFilter;

    return matchesSearch && matchesRole && matchesStatus;
  });
}
