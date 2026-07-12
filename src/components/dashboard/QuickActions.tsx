
import { QuickActionData } from "@/interface/dashboard/dashboard";
import QuickActionCard from "./QuickActionCard";

interface QuickActionsProps {
  actions: QuickActionData[];
}

export default function QuickActions({ actions }: QuickActionsProps) {
  return (
    <div className="bg-white rounded-2xl border border-[#EDF1F2] shadow-sm p-5">
      <h2 className="text-base font-bold text-gray-800 mb-4">
        Quick Actions
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {actions.map((action) => (
          <QuickActionCard key={action.label} action={action} />
        ))}
      </div>
    </div>
  );
}
