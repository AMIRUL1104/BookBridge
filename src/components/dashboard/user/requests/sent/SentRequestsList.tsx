
import type { SentRequest } from "@/interface/dashboard/request";
import { SentRequestsEmptyState } from "./SentRequestsEmptyState";
import { SentRequestCard } from "./SentRequestCard";

interface SentRequestsListProps {
  requests: SentRequest[];
}

export function SentRequestsList({ requests }: SentRequestsListProps) {
  if (requests.length === 0) {
    return <SentRequestsEmptyState />;
  }

  return (
    <div className="flex flex-col gap-4">
      {requests.map((request) => (
        <SentRequestCard key={request.id} request={request} />
      ))}
    </div>
  );
}
