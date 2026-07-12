
import RecentActivity from "./RecentActivity";
import QuickActions from "./QuickActions";
import { ActivityItemData,StatCardData,QuickActionData } from "@/interface/dashboard/dashboard";
import StatsGrid from "./sidebar/StatsGrid";


interface DashboardOverviewProps {
  title: string;
  subtitle: string;
  stats: StatCardData[];
  activities: ActivityItemData[];
  actions: QuickActionData[];
}

// Server Component — pure composition, no client-side state. Both the
// admin and user overview pages render this with role-specific data.
export default function DashboardOverview({
  title,
  subtitle,
  stats,
  activities,
  actions,
}: DashboardOverviewProps) {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-800">{title}</h1>
        <p className="text-sm text-gray-500 mt-1">{subtitle}</p>
      </div>

      <StatsGrid stats={stats} />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <RecentActivity activities={activities} />
        </div>
        <QuickActions actions={actions} />
      </div>
    </div>
  );
}
