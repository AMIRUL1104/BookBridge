import Image from "next/image";
import { Calendar, Check, MessageSquare, X } from "lucide-react";
import type { ReceivedRequest } from "@/interface/dashboard/request";
import { StatusBadge } from "../StatusBadge";

interface ReceivedRequestCardProps {
  request: ReceivedRequest;
}

function formatDate(isoDate: string): string {
  return new Date(isoDate).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export function ReceivedRequestCard({ request }: ReceivedRequestCardProps) {
  return (
    <div className="flex flex-col gap-3 rounded-2xl border border-[#EDF1F2] bg-white p-4 shadow-sm transition-shadow hover:shadow-md sm:flex-row sm:items-start sm:gap-4">
      <div className="relative h-11 w-11 shrink-0 overflow-hidden rounded-full bg-[#7DA78C]/20">
        {request.requesterAvatarUrl ? (
          <Image
            src={request.requesterAvatarUrl}
            alt={request.requesterName}
            fill
            sizes="44px"
            className="object-cover"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-sm font-bold text-[#3f6650]">
            {request.requesterName.charAt(0)}
          </div>
        )}
      </div>

      <div className="flex min-w-0 flex-1 flex-col gap-2">
        <div className="flex flex-wrap items-start justify-between gap-2">
          <div>
            <p className="font-bold text-gray-800">{request.requesterName}</p>
            <span className="flex items-center gap-1 text-xs text-gray-500">
              <Calendar className="h-3.5 w-3.5" />
              {formatDate(request.requestDate)}
            </span>
          </div>
          <StatusBadge status={request.status} />
        </div>

        {request.message && (
          <p className="flex items-start gap-1.5 rounded-lg bg-[#F5F7F8] p-2.5 text-xs text-gray-600">
            <MessageSquare className="mt-0.5 h-3.5 w-3.5 shrink-0 text-gray-400" />
            <span>{request.message}</span>
          </p>
        )}

        {request.status === "pending" && (
          <div className="flex gap-2 pt-1">
            <button
              type="button"
              className="inline-flex items-center gap-1.5 rounded-xl bg-[#35858E] px-3.5 py-1.5 text-xs font-bold text-white shadow-sm transition-colors hover:bg-[#35858E]/90"
            >
              <Check className="h-3.5 w-3.5" />
              Accept
            </button>
            <button
              type="button"
              className="inline-flex items-center gap-1.5 rounded-xl border border-gray-200 px-3.5 py-1.5 text-xs font-bold text-gray-500 transition-colors hover:border-red-200 hover:bg-red-50 hover:text-red-500"
            >
              <X className="h-3.5 w-3.5" />
              Reject
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
