"use client";

import { useState } from "react";
import { Trash2, Loader2, TriangleAlert, X } from "lucide-react";
import { toast } from "react-toastify";
import { deletePost } from "@/services/server/action";


interface DeleteButtonProps {
  postId: string;
  postTitle: string;
  onDeleted: (postId: string) => void;
}

export default function DeleteButton({
  postId,
  postTitle,
  onDeleted,
}: DeleteButtonProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  async function handleConfirmDelete() {
    setIsDeleting(true);
    try {
      const response = await deletePost(postId);
      // console.log(response)

      if (response?.success) {
        toast.success("Post deleted successfully.");
        setIsOpen(false);
        onDeleted(postId);
      } else {
        toast.error(response?.message ?? "Failed to delete post.");
      }
    } catch (error) {
      const message =
        error instanceof Error ? error.message : "Something went wrong.";
      toast.error(message);
    } finally {
      setIsDeleting(false);
    }
  }

  return (
    <>
      {/* Trigger Button */}
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        aria-label={`Delete ${postTitle}`}
        className="absolute top-3 right-3 z-10 p-2 rounded-xl bg-white/90 backdrop-blur text-red-500 shadow-md opacity-0 group-hover:opacity-100 transition-all duration-200 hover:bg-red-500 hover:text-white cursor-pointer"
      >
        <Trash2 className="w-4 h-4" />
      </button>

      {/* Custom Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity"
            onClick={() => !isDeleting && setIsOpen(false)}
          />

          {/* Modal Container */}
          <div className="relative w-full max-w-[360px] transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all z-10 animate-in fade-in zoom-in-95 duration-200">

            {/* Close Cross Button */}
            <button
              type="button"
              disabled={isDeleting}
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors cursor-pointer disabled:cursor-not-allowed"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Header */}
            <div className="flex flex-col items-start gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-50 text-red-500">
                <TriangleAlert className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-semibold leading-6 text-gray-900">
                Delete this post?
              </h3>
            </div>

            {/* Body */}
            <div className="mt-2">
              <p className="text-sm text-gray-500 leading-relaxed">
                Are you sure you want to delete &quot;{postTitle}&quot;? This
                action cannot be undone.
              </p>
            </div>

            {/* Footer / Buttons */}
            <div className="mt-6 flex gap-3">
              <button
                type="button"
                disabled={isDeleting}
                onClick={() => setIsOpen(false)}
                className="flex-1 px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-xl transition-colors cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Cancel
              </button>

              <button
                type="button"
                disabled={isDeleting}
                onClick={handleConfirmDelete}
                className="flex-1 px-4 py-2 text-sm font-medium text-white bg-red-500 hover:bg-red-600 rounded-xl transition-colors flex items-center justify-center cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isDeleting ? (
                  <Loader2 className="w-4 h-4 animate-spin" />
                ) : (
                  "Delete"
                )}
              </button>
            </div>

          </div>
        </div>
      )}
    </>
  );
}