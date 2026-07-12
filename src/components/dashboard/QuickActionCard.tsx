import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { QuickActionData } from "@/interface/dashboard/dashboard";


interface QuickActionCardProps {
  action: QuickActionData;
}

export default function QuickActionCard({ action }: QuickActionCardProps) {
  const Icon = action.icon;

  return (
    <Link
      href={action.href}
      className="group flex items-center gap-3 rounded-xl border border-[#EDF1F2] p-3.5 hover:border-[#35858E] hover:bg-[#35858E]/5 transition-all duration-200"
    >
      <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-[#35858E]/10 text-[#35858E] shrink-0">
        <Icon className="w-4 h-4" />
      </div>
      <span className="flex-1 text-sm font-semibold text-gray-700">
        {action.label}
      </span>
      <ArrowRight className="w-4 h-4 text-gray-300 group-hover:text-[#35858E] group-hover:translate-x-0.5 transition-all duration-200" />
    </Link>
  );
}
