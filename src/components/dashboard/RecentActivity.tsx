
import { ActivityItemData } from "@/interface/dashboard/dashboard";
import RecentActivityItem from "./RecentActivityItem";

interface RecentActivityProps {
  activities: ActivityItemData[];
}

export default function RecentActivity({ activities }: RecentActivityProps) {
  return (
    <div className="bg-white rounded-2xl border border-[#EDF1F2] shadow-sm">
      <div className="px-5 py-4 border-b border-[#EDF1F2]">
        <h2 className="text-base font-bold text-gray-800">Recent Activity</h2>
      </div>
      <ul className="divide-y divide-[#EDF1F2]">
        {activities.map((activity) => (
          <RecentActivityItem key={activity.id} activity={activity} />
        ))}
      </ul>
    </div>
  );
}
