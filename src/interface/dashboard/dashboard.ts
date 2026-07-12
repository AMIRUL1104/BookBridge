import type { LucideIcon } from "lucide-react";

export type DashboardRole = "admin" | "user";

export interface NavItem {
  label: string;
  href: string;
  icon: string;
}

export interface DashboardUser {
  name: string;
  email: string;
  avatarUrl: string | null;
  role: DashboardRole;
}

export interface StatCardData {
  label: string;
  value: string;
  change?: string;
  trend?: "up" | "down" | "neutral";
  icon: LucideIcon;
}

export interface ActivityItemData {
  id: string;
  title: string;
  description: string;
  timestamp: string;
  icon: LucideIcon;
}

export interface QuickActionData {
  label: string;
  href: string;
  icon: LucideIcon;
}
