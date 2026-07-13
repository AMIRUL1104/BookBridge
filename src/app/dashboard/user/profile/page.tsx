import { ProfileClient } from "@/components/dashboard/user/profile/Profileclient";
import { UserProfile } from "@/interface/user/userProfile";
import React from "react";


// ---------------------------------------------------------------------------
// Dummy data — replace with: const user = await getUserProfile() or from
// the session object passed down by the dashboard layout.
// ---------------------------------------------------------------------------
const DUMMY_USER: UserProfile = {
    id: "usr_01j9k3m8xwpq4tnv0g",
    fullName: "Amirul Islam",
    email: "amirul@bookbridge.com",
    phoneNumber: "+880 1712-345678",
    district: "Dhaka",
    area: "Mirpur 10",
    avatarUrl: null,
    role: "user",
    memberSince: "2024-03-15T00:00:00.000Z",
};

export default function ProfilePage() {
    // When the backend is connected, fetch here:
    // const user = await getUserProfile();
    const user: UserProfile = DUMMY_USER;

    return (
        <main className="min-h-screen bg-[#F5F7F8] px-4 py-8 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto">
                {/* Page title */}
                <div className="mb-6">
                    <h1 className="text-2xl font-bold text-gray-900">My Profile</h1>
                    <p className="mt-1 text-sm text-gray-500">
                        View and manage your personal information.
                    </p>
                </div>

                {/* Interactive profile — Client Component */}
                <ProfileClient initialUser={user} />
            </div>
        </main>
    );
}