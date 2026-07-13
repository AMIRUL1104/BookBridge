import React from "react";
import { Loader2, Save, X } from "lucide-react";

interface ProfileActionsProps {
    onCancel: () => void;
    isSubmitting: boolean;
}

export function ProfileActions({ onCancel, isSubmitting }: ProfileActionsProps) {
    return (
        <div className="flex justify-end gap-3 pt-2">
            <button
                type="button"
                onClick={onCancel}
                disabled={isSubmitting}
                className="flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-gray-600 bg-white border border-[#DDE5E7] rounded-xl hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
                <X size={15} />
                Cancel
            </button>

            <button
                type="submit"
                disabled={isSubmitting}
                className="flex items-center gap-2 px-5 py-2.5 text-sm font-bold text-white bg-[#35858E] hover:bg-[#35858E]/90 rounded-xl shadow-md transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
            >
                {isSubmitting ? (
                    <>
                        <Loader2 size={15} className="animate-spin" />
                        Saving…
                    </>
                ) : (
                    <>
                        <Save size={15} />
                        Save Changes
                    </>
                )}
            </button>
        </div>
    );
}