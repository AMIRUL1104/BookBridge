"use client";

import { useEffect, useState } from "react";
import { HandHelping, Loader2 } from "lucide-react";
import { checkBookRequest } from "@/services/server/api";
import RequestBookModal from "./RequestBookModal";
import { CheckBookRequestResponse } from "@/interface/bookRequest/checkRequest";


type ButtonStatus =
  | "checking"
  | "can-request"
  | "already-requested"
  | "own-post";

interface RequestBookButtonProps {
  postId: string;
  sellerId: string;
  requesterId?: string;
  postTitle: string;
  sellerName: string;
  bookCoverUrl: string;
  sellerPhone: string;
  sellerMessenger?: string;
  requesterName?: string;
  requesterPhone?: string;
  requesterAvatarUrl?: string | null;
}

export default function RequestBookButton({
  postId,
  sellerId,
  requesterId,
  postTitle,
  sellerName,
  bookCoverUrl,
  sellerPhone,
  sellerMessenger,
  requesterName,
  requesterPhone,
  requesterAvatarUrl,
}: RequestBookButtonProps) {
  const [status, setStatus] = useState<ButtonStatus>("checking");
  const [isModalOpen, setIsModalOpen] = useState(false);
  // console.log({
  //   requesterId,
  //   sellerId,
  //   postId,
  // });
  useEffect(() => {
    let isMounted = true;

    const runCheck = async () => {
      const result: CheckBookRequestResponse | null = await checkBookRequest(postId, sellerId, requesterId as string);
      // console.log(result)
      if (!isMounted) return;

      if (!result?.success) {
        // Fail closed: if the check itself failed, don't allow a request.
        setStatus("already-requested");
        return;
      }

      if (result.reason === "own_post") {
        setStatus("own-post");
        return;
      }

      if (result.reason === "already_requested") {
        setStatus("already-requested");
        return;
      }

      setStatus(result.canRequest ? "can-request" : "already-requested");
    };

    runCheck();

    return () => {
      isMounted = false;
    };
  }, [postId, sellerId, requesterId]);

  const handleRequestSuccess = () => {
    setIsModalOpen(false);
    setStatus("already-requested");
  };

  if (status === "checking") {
    return (
      <button
        type="button"
        disabled
        className="w-full inline-flex items-center justify-center gap-2 font-bold py-2.5 px-4 rounded-xl bg-gray-100 text-gray-400 border border-gray-200 cursor-not-allowed"
      >
        <Loader2 className="w-4 h-4 animate-spin" />
        <span>Checking...</span>
      </button>
    );
  }

  if (!requesterId) {
    return (
      <button
        type="button"
        disabled
        className="w-full inline-flex items-center justify-center gap-2 font-bold py-2.5 px-4 rounded-xl bg-gray-100 text-gray-400 border border-gray-200 cursor-not-allowed"
      >
        <span>Login to Request</span>
      </button>
    );
  }

  if (status === "own-post") {
    return (
      <button
        type="button"
        disabled
        className="w-full inline-flex items-center justify-center gap-2 font-bold py-2.5 px-4 rounded-xl bg-gray-100 text-gray-400 border border-gray-200 cursor-not-allowed"
      >
        <span>Your Post</span>
      </button>
    );
  }

  if (status === "already-requested") {
    return (
      <button
        type="button"
        disabled
        className="w-full inline-flex items-center justify-center gap-2 font-bold py-2.5 px-4 rounded-xl bg-gray-100 text-gray-400 border border-gray-200 cursor-not-allowed"
      >
        <span>Requested ✓</span>
      </button>
    );
  }

  return (
    <>
      <button
        type="button"
        onClick={() => setIsModalOpen(true)}
        className="w-full inline-flex items-center justify-center gap-2 font-bold py-2.5 px-4 rounded-xl transition-all shadow-xs cursor-pointer focus-visible:outline-2 focus-visible:outline-[#FCDE70] bg-[#35858E] hover:bg-[#35858E]/90 text-white"
      >
        <HandHelping className="w-4 h-4" />
        <span>Request This Book</span>
      </button>

      <RequestBookModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        postId={postId}
        sellerId={sellerId}
        requesterId={requesterId ?? ""}
        postTitle={postTitle}
        sellerName={sellerName}
        bookCoverUrl={bookCoverUrl}
        sellerPhone={sellerPhone}
        sellerMessenger={sellerMessenger}
        requesterName={requesterName}
        requesterPhone={requesterPhone}
        requesterAvatarUrl={requesterAvatarUrl}
        onSuccess={handleRequestSuccess}
      />
    </>
  );
}