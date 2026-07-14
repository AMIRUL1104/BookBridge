"use client";



import { acceptBookRequest, cancelBookRequest, rejectBookRequest } from '@/services/server/action';
import { Check, X } from 'lucide-react';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';



interface ReceiveRequestActionsProps {
    status: string;
    id: string;
}



function ReceiveRequestActions({ status, id }: ReceiveRequestActionsProps) {
    const router = useRouter();
    const handleAcceptBookRequest = async () => {
        const res = await acceptBookRequest(id);
        if (res.success) {
            toast.success("Request Accepted!");
            router.refresh()
        }
    }

    const handleRejectBookRequest = async () => {
        const res = await rejectBookRequest(id);
        if (res.success) {
            toast.success("Request Rejected!");
            router.refresh()
        }
    }

    const handleCancelBookRequest = async () => {
        const res = await cancelBookRequest(id);
        console.log(res)
        if (res.success) {
            toast.success("Request Cancelled!");
            router.refresh()
        } else {
            toast.error(res.message)
        }
    }
    return (
        <div>
            {status === "pending" && (
                <div className="flex gap-2 pt-1">
                    <button
                        type="button"
                        onClick={handleAcceptBookRequest}
                        className="inline-flex cursor-pointer items-center gap-1.5 rounded-xl bg-[#35858E] px-3.5 py-1.5 text-xs font-bold text-white shadow-sm transition-colors hover:bg-[#35858E]/90"
                    >
                        <Check className="h-3.5 w-3.5" />
                        Accept
                    </button>
                    <button
                        type="button"
                        onClick={handleRejectBookRequest}
                        className="inline-flex cursor-pointer items-center gap-1.5 rounded-xl border border-gray-200 px-3.5 py-1.5 text-xs font-bold text-gray-500 transition-colors hover:border-red-200 hover:bg-red-50 hover:text-red-500"
                    >
                        <X className="h-3.5 w-3.5" />
                        Reject
                    </button>
                </div>
            )}
            {status === "rejected" && (
                <div className="flex gap-2 pt-1">
                    <button
                        type="button"
                        onClick={handleAcceptBookRequest}
                        className="inline-flex cursor-pointer items-center gap-1.5 rounded-xl bg-[#35858E] px-3.5 py-1.5 text-xs font-bold text-white shadow-sm transition-colors hover:bg-[#35858E]/90"
                    >
                        <Check className="h-3.5 w-3.5" />
                        Accept
                    </button>

                </div>
            )}

            {status === "accepted" && (
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
    )
}

export default ReceiveRequestActions