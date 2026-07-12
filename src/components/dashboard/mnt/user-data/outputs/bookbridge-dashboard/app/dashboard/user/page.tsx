
import DashboardOverview from "@/components/dashboard/user/DashboardOverview";
// import { userQuickActions } from "@/components/dashboard/user/dummy-data";
import {
  userStats,
  userActivities,
  userQuickActions,
} from "@/components/dashboard/user/dummy-data";

export default function UserDashboardPage() {
  return (
    <DashboardOverview
      title="Welcome back 👋"
      subtitle="Here's what's happening with your books today."
      stats={userStats}
      activities={userActivities}
      actions={userQuickActions}
    />
  );
}
