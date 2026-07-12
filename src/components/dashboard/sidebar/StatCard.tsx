import { ArrowUp, ArrowDown } from "lucide-react";
import type { StatCardData } from "@/interface/dashboard/dashboard";

export default function StatCard({
  label,
  value,
  change,
  trend = "neutral",
  icon: Icon,
}: StatCardData) {
  return (
    <div className="bg-white rounded-2xl border border-[#EDF1F2] p-5 shadow-sm hover:shadow-md transition-all duration-200">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-[#35858E]/10 text-[#35858E]">
          <Icon className="w-5 h-5" />
        </div>
        {change && (
          <span
            className={`inline-flex items-center gap-1 text-xs font-semibold px-2 py-1 rounded-full ${
              trend === "up"
                ? "bg-[#7DA78C]/15 text-[#3E6B4F]"
                : trend === "down"
                ? "bg-red-50 text-red-500"
                : "bg-gray-100 text-gray-500"
            }`}
          >
            {trend === "up" && <ArrowUp className="w-3 h-3" />}
            {trend === "down" && <ArrowDown className="w-3 h-3" />}
            {change}
          </span>
        )}
      </div>
      <p className="text-2xl font-bold text-gray-800">{value}</p>
      <p className="text-sm text-gray-500 mt-1">{label}</p>
    </div>
  );
}
