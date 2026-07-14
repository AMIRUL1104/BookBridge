import Image from "next/image";
import Link from "next/link";
import { Calendar, MessageSquare, Phone, ShieldCheck } from "lucide-react";
import type { SentRequest } from "@/interface/dashboard/request";
import { StatusBadge } from "../StatusBadge";
import ReceiveRequestActions from "../received/ReceiveRequestActions";
import SentRequestActions from "./SentRequestActions";

interface SentRequestCardProps {
  request: SentRequest;
}

function formatDate(isoDate: string): string {
  return new Date(isoDate).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export function SentRequestCard({ request }: SentRequestCardProps) {
  return (
    <div className="flex gap-4 rounded-2xl border border-[#EDF1F2] bg-white p-4 shadow-sm transition-shadow hover:shadow-md sm:p-5">
      <div className="relative h-24 w-16 shrink-0 overflow-hidden rounded-lg bg-[#F5F7F8] sm:h-28 sm:w-20">
        <Image
          src={request.bookCoverUrl}
          alt={request.postTitle}
          fill
          sizes="80px"
          className="object-cover"
        />
      </div>

      <div className="flex min-w-0 flex-1 flex-col justify-between gap-3">
        <div className="flex flex-col gap-2">
          <div className="flex flex-wrap items-start justify-between gap-2">
            <h3 className="line-clamp-2 font-bold text-gray-800">
              {request.postTitle}
            </h3>
            <StatusBadge status={request.status} />
          </div>

          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-gray-500">
            <span className="font-medium text-gray-600">
              Seller: {request.sellerName}
            </span>
            <span className="flex items-center gap-1">
              <Calendar className="h-3.5 w-3.5" />
              {formatDate(request.requestDate)}
            </span>
          </div>

          {request.message && (
            <p className="flex items-start gap-1.5 rounded-lg bg-[#F5F7F8] p-2.5 text-xs text-gray-600">
              <MessageSquare className="mt-0.5 h-3.5 w-3.5 shrink-0 text-gray-400" />
              <span className="line-clamp-2">{request.message}</span>
            </p>
          )}

          {request.status === "accepted" && request.sellerContact && (
            <div className="flex items-start gap-1.5 rounded-lg border border-[#7DA78C]/30 bg-[#7DA78C]/10 p-2.5 text-xs text-[#3f6650]">
              <ShieldCheck className="mt-0.5 h-3.5 w-3.5 shrink-0" />
              <div className="flex flex-col gap-0.5">
                <span className="font-bold">Contact info unlocked</span>
                <span className="flex items-center gap-1">
                  <Phone className="h-3 w-3" />
                  {request.sellerContact.phone}
                  {request.sellerContact.messenger &&
                    ` · ${request.sellerContact.messenger}`}
                </span>
              </div>
            </div>
          )}
        </div>

        <div className="flex gap-5 ">

          <Link
            href={`/posts/${request.postId}`}
            className="inline-flex w-fit items-center gap-1.5 rounded-xl border border-[#35858E] px-3.5 py-1.5 text-xs font-bold text-[#35858E] transition-colors hover:bg-[#35858E] hover:text-white"
          >
            View Post
          </Link>

          <SentRequestActions status={request.status} id={request.id} />
        </div>
      </div>
    </div>
  );
}
