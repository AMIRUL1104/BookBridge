import DashboardOverview from "@/components/dashboard/DashboardOverview";
import { adminActivities, adminQuickActions, adminStats } from "@/components/dashboard/dummy-data";




export default function AdminDashboardPage() {
  return (
    <DashboardOverview
      title="Admin Overview"
      subtitle="Monitor platform activity and manage the community."
      stats={adminStats}
      activities={adminActivities}
      actions={adminQuickActions}
    />
  );
}
