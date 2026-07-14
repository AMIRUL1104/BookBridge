import { CheckCircle2, Clock, XCircle } from "lucide-react";
import type { RequestStatus } from "@/interface/dashboard/request";

const STATUS_CONFIG: Record<
  RequestStatus,
  { label: string; className: string; icon: typeof Clock }
> = {
  pending: {
    label: "Pending",
    className: "bg-[#FCDE70]/20 text-[#8a7213] border-[#FCDE70]/40",
    icon: Clock,
  },
  accepted: {
    label: "Accepted",
    className: "bg-[#7DA78C]/15 text-[#3f6650] border-[#7DA78C]/30",
    icon: CheckCircle2,
  },
  rejected: {
    label: "Rejected",
    className: "bg-red-50 text-red-600 border-red-200",
    icon: XCircle,
  },
  cancelled: {
    label: "Cancelled",
    className: "bg-gray-50 text-gray-600 border-gray-200",
    icon: XCircle,
  },
};

interface StatusBadgeProps {
  status: RequestStatus;
}

export function StatusBadge({ status }: StatusBadgeProps) {
  const config = STATUS_CONFIG[status];
  const Icon = config.icon;

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-bold ${config.className}`}
    >
      <Icon className="h-3.5 w-3.5" />
      {config.label}
    </span>
  );
}
