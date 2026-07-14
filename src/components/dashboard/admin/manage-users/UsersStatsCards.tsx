import { Users } from "lucide-react";

interface UsersStatsCardsProps {
  total: number;
}

interface StatCardProps {
  icon: React.ReactNode;
  label: string;
  count: number;
  accent: string;
}

function StatCard({ icon, label, count, accent }: StatCardProps) {
  return (
    <div className="flex items-center gap-4 rounded-2xl border border-[#EDF1F2] bg-white p-5 shadow-sm">
      <div
        className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${accent}`}
      >
        {icon}
      </div>
      <div>
        <p className="text-2xl font-black text-gray-900">{count}</p>
        <p className="text-xs font-semibold text-gray-500">{label}</p>
      </div>
    </div>
  );
}

export function UsersStatsCards({ total }: UsersStatsCardsProps) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
      <StatCard
        icon={<Users className="h-5 w-5 text-[#35858E]" />}
        label="Total Users"
        count={total}
        accent="bg-[#35858E]/10"
      />
    </div>
  );
}