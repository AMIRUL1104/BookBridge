import type {
  ReceivedRequest,
  SortOption,
  StatusFilter,
} from "@/interface/dashboard/request";

export function filterReceivedRequests(
  requests: ReceivedRequest[],
  search: string,
  statusFilter: StatusFilter,
): ReceivedRequest[] {
  const query = search.trim().toLowerCase();

  return requests.filter((request) => {
    const matchesStatus =
      statusFilter === "all" || request.status === statusFilter;

    const matchesSearch =
      query.length === 0 ||
      request.requesterName.toLowerCase().includes(query) ||
      (request.message?.toLowerCase().includes(query) ?? false);

    return matchesStatus && matchesSearch;
  });
}

export function sortReceivedRequests(
  requests: ReceivedRequest[],
  sortOption: SortOption,
): ReceivedRequest[] {
  const sorted = [...requests].sort((a, b) => {
    const dateA = new Date(a.requestDate).getTime();
    const dateB = new Date(b.requestDate).getTime();
    return sortOption === "newest" ? dateB - dateA : dateA - dateB;
  });

  return sorted;
}
