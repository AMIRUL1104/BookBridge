"use client";

import { useState } from "react";
import { Trash2, Loader2, TriangleAlert } from "lucide-react";
import { Button, Modal } from "@heroui/react";
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
    <Modal >
      {/* Trigger — opens the confirm dialog, doesn't delete anything itself */}
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        aria-label={`Delete ${postTitle}`}
        className="absolute top-3 right-3 z-10 p-2 rounded-xl bg-white/90 backdrop-blur text-red-500 shadow-md opacity-0 group-hover:opacity-100 transition-all duration-200 hover:bg-red-500 hover:text-white cursor-pointer"
      >
        <Trash2 className="w-4 h-4" />
      </button>

      <Modal.Backdrop isOpen={isOpen} onOpenChange={setIsOpen}>
        <Modal.Container>
          <Modal.Dialog className="sm:max-w-[360px]">
            <Modal.CloseTrigger />
            <Modal.Header>
              <Modal.Icon className="bg-red-50 text-red-500">
                <TriangleAlert className="size-5" />
              </Modal.Icon>
              <Modal.Heading>Delete this post?</Modal.Heading>
            </Modal.Header>
            <Modal.Body>
              <p>
                Are you sure you want to delete &quot;{postTitle}&quot;? This
                action cannot be undone.
              </p>
            </Modal.Body>
            <Modal.Footer>
              <Button className="flex-1" variant="secondary" slot="close">
                Cancel
              </Button>
              <Button
                className="flex-1 bg-red-500 text-white hover:bg-red-600"
                onPress={handleConfirmDelete}
                isDisabled={isDeleting}
              >
                {isDeleting ? (
                  <Loader2 className="w-4 h-4 animate-spin mx-auto" />
                ) : (
                  "Delete"
                )}
              </Button>
            </Modal.Footer>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
}