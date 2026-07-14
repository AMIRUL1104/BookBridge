"use client";
// only cancel button need to be added

import { useRouter } from "next/navigation";
import { X } from "lucide-react";
import { toast } from "react-toastify";
import { cancelBookRequest } from "@/services/server/action";


interface SentRequestActionsProps {
    status: string;
    id: string;
}

function SentRequestActions({ status, id }: SentRequestActionsProps) {
    const router = useRouter();


    const handleCancelBookRequest = async () => {
        const res = await cancelBookRequest(id);
        // console.log(res);
        if (res.success) {
            toast.success("Request Cancelled!");
            router.refresh();
        } else {
            toast.error(res.message);
        }
    };

    return (
        <div>
            {(status === "accepted" || status === "pending") && (
                <div className="flex gap-2 pt-1">
                    <button
                        type="button"
                        onClick={handleCancelBookRequest}
                        className="inline-flex cursor-pointer items-center gap-1.5 rounded-xl border border-gray-200 px-3.5 py-1.5 text-xs font-bold text-gray-500 transition-colors hover:border-red-200 hover:bg-red-50 hover:text-red-500"
                    >
                        <X className="h-3.5 w-3.5" />
                        Cancel
                    </button>
                </div>
            )}
        </div>
    );
}

export default SentRequestActions;  