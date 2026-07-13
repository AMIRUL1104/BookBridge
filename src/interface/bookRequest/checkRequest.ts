import type { ObjectId } from "mongodb";

export interface CheckBookRequestResponse {
  success: boolean;
  canRequest: boolean;
  reason?: "own_post" | "already_requested";
}

export type RequestStatus = "pending" | "accepted" | "rejected";

export interface BookRequest {
  _id?: ObjectId;

  // Post Information
  postId: string;
  postTitle: string;
  bookCoverUrl: string;

  // Seller Information
  sellerId: string;
  sellerName: string;
  sellerContact?: {
    phone?: string;
    messenger?: string;
  };

  // Requester Information
  requesterId: string;
  requesterName: string;
  requesterAvatarUrl?: string;
  requesterContact?: {
    phone?: string;
  };

  // Request Details
  message?: string;
  status: RequestStatus;

  // Timestamps
  requestDate: Date;
  updatedAt?: Date;
  createdAt?: Date;
}
