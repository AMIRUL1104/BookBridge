import {
  PostSummary,
  ReceivedRequest,
  SentRequest,
} from "@/interface/dashboard/request";

export const dummySentRequests: SentRequest[] = [
  {
    id: "sr-1",
    postId: "post-101",
    postTitle: "Physics 1st Paper (HSC)",
    bookCoverUrl:
      "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=200&h=280&fit=crop",
    sellerName: "Tanvir Ahmed",
    requestDate: "2026-07-10T09:30:00.000Z",
    status: "accepted",
    message: "Is the book still available? I can pick it up this week.",
    sellerContact: {
      phone: "01711-223344",
      messenger: "tanvir.ahmed.99",
    },
  },
  {
    id: "sr-2",
    postId: "post-102",
    postTitle: "Chemistry 2nd Paper Guide",
    bookCoverUrl:
      "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=200&h=280&fit=crop",
    sellerName: "Farzana Rahman",
    requestDate: "2026-07-08T14:12:00.000Z",
    status: "pending",
  },
  {
    id: "sr-3",
    postId: "post-103",
    postTitle: "Higher Math 1st Paper",
    bookCoverUrl:
      "https://images.unsplash.com/photo-1509266272358-7701da638078?w=200&h=280&fit=crop",
    sellerName: "Shahriar Kabir",
    requestDate: "2026-07-05T18:45:00.000Z",
    status: "rejected",
    message: "Would you consider a slightly lower price?",
  },
  {
    id: "sr-4",
    postId: "post-104",
    postTitle: "English 2nd Paper Grammar Book",
    bookCoverUrl:
      "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=200&h=280&fit=crop",
    sellerName: "Mim Akter",
    requestDate: "2026-07-02T11:00:00.000Z",
    status: "pending",
    message: "Hi, I need this urgently for my exam next week.",
  },
];

export const dummyPosts: PostSummary[] = [
  {
    id: "post-1",
    title: "Physics 1st Paper",
    bookCoverUrl:
      "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=100&h=140&fit=crop",
    pendingCount: 3,
  },
  {
    id: "post-2",
    title: "Chemistry 2nd Paper",
    bookCoverUrl:
      "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=100&h=140&fit=crop",
    pendingCount: 1,
  },
  {
    id: "post-3",
    title: "Biology Guide",
    bookCoverUrl:
      "https://images.unsplash.com/photo-1509266272358-7701da638078?w=100&h=140&fit=crop",
    pendingCount: 0,
  },
  {
    id: "post-4",
    title: "Higher Math 2nd Paper",
    bookCoverUrl:
      "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=100&h=140&fit=crop",
    pendingCount: 0,
  },
];

export const dummyReceivedRequests: ReceivedRequest[] = [
  // post-1 (Physics 1st Paper) - 3 pending
  {
    id: "rr-1",
    postId: "post-1",
    requesterName: "Nusrat Jahan",
    requesterAvatarUrl: "https://i.pravatar.cc/80?img=32",
    requestDate: "2026-07-12T08:00:00.000Z",
    status: "pending",
    message: "Is the book in good condition? Any highlighting inside?",
  },
  {
    id: "rr-2",
    postId: "post-1",
    requesterName: "Rakibul Islam",
    requesterAvatarUrl: "https://i.pravatar.cc/80?img=12",
    requestDate: "2026-07-11T16:20:00.000Z",
    status: "pending",
  },
  {
    id: "rr-3",
    postId: "post-1",
    requesterName: "Sadia Islam",
    requesterAvatarUrl: "https://i.pravatar.cc/80?img=45",
    requestDate: "2026-07-10T10:05:00.000Z",
    status: "pending",
    message: "Can we meet near Shahbagh?",
  },
  {
    id: "rr-4",
    postId: "post-1",
    requesterName: "Imran Hossain",
    requesterAvatarUrl: "https://i.pravatar.cc/80?img=51",
    requestDate: "2026-07-06T12:40:00.000Z",
    status: "accepted",
  },
  {
    id: "rr-5",
    postId: "post-1",
    requesterName: "Anika Tabassum",
    requesterAvatarUrl: "https://i.pravatar.cc/80?img=47",
    requestDate: "2026-07-03T09:15:00.000Z",
    status: "rejected",
    message: "Would you accept 200 taka instead?",
  },
  // post-2 (Chemistry 2nd Paper) - 1 pending
  {
    id: "rr-6",
    postId: "post-2",
    requesterName: "Tanjim Ahmed",
    requesterAvatarUrl: "https://i.pravatar.cc/80?img=15",
    requestDate: "2026-07-12T13:30:00.000Z",
    status: "pending",
    message: "Still available? I'm interested.",
  },
  {
    id: "rr-7",
    postId: "post-2",
    requesterName: "Mahmudul Hasan",
    requesterAvatarUrl: "https://i.pravatar.cc/80?img=22",
    requestDate: "2026-07-04T09:00:00.000Z",
    status: "accepted",
  },
  // post-3 (Biology Guide) - 0 pending, no requests at all
  // post-4 (Higher Math 2nd Paper) - 0 pending, no requests at all
];
