import React from "react";
import { Mail, Phone, MapPin, Calendar, Shield, Home } from "lucide-react";
import { UserProfile } from "@/interface/user/userProfile";


interface ProfileInfoProps {
    user: UserProfile;
}

interface InfoFieldProps {
    icon: React.ReactNode;
    label: string;
    value: string;
    locked?: boolean;
}

function InfoField({ icon, label, value, locked }: InfoFieldProps) {
    return (
        <div className="flex items-start gap-3">
            <div className="mt-0.5 w-8 h-8 rounded-lg bg-[#35858E]/8 flex items-center justify-center shrink-0 text-[#35858E]">
                {icon}
            </div>
            <div className="min-w-0">
                <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-0.5">
                    {label}
                    {locked && (
                        <span className="ml-1.5 text-[10px] font-semibold text-gray-300 normal-case tracking-normal">
                            (locked)
                        </span>
                    )}
                </p>
                <p className="text-sm font-medium text-gray-800 wrap-break-word">{value}</p>
            </div>
        </div>
    );
}

function formatMemberSince(iso: string): string {
    return new Date(iso).toLocaleDateString("en-US", {
        day: "numeric",
        month: "long",
        year: "numeric",
    });
}

const ROLE_DISPLAY: Record<UserProfile["role"], string> = {
    user: "Member",
    admin: "Administrator",
};

export function ProfileInfo({ user }: ProfileInfoProps) {
    return (
        <div className="rounded-2xl border border-[#EDF1F2] shadow-sm bg-white p-6">
            <h2 className="text-sm font-bold text-gray-700 uppercase tracking-wider mb-5">
                Account Details
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <InfoField
                    icon={<Mail size={15} />}
                    label="Email Address"
                    value={user.email}
                    locked
                />
                <InfoField
                    icon={<Phone size={15} />}
                    label="Phone Number"
                    value={user.phoneNumber}
                />
                <InfoField
                    icon={<MapPin size={15} />}
                    label="District"
                    value={user.district}
                />
                <InfoField
                    icon={<Home size={15} />}
                    label="Area"
                    value={user.area}
                />
                <InfoField
                    icon={<Calendar size={15} />}
                    label="Member Since"
                    value={formatMemberSince(user.memberSince)}
                />
                <InfoField
                    icon={<Shield size={15} />}
                    label="Account Role"
                    value={ROLE_DISPLAY[user.role]}
                />
            </div>
        </div>
    );
}