import { dummyPosts, dummyReceivedRequests, dummySentRequests } from "@/components/dashboard/user/requests/dummy-data";
import { ReceivedRequestsClient } from "@/components/dashboard/user/requests/received/ReceivedRequestsClient";
import { RequestsTabs } from "@/components/dashboard/user/requests/RequestsTabs";
import { SentRequestsList } from "@/components/dashboard/user/requests/sent/SentRequestsList";


export default function RequestsPage() {
  // TODO: replace dummy data with real fetch functions once backend
  // endpoints for requests are available (e.g. getSentRequests, getReceivedRequests, getMyPosts)
  const sentRequests = dummySentRequests;
  const posts = dummyPosts;
  const receivedRequests = dummyReceivedRequests;

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-800">Requests</h1>
        <p className="text-sm text-gray-500">
          Track requests you&apos;ve sent and manage requests you&apos;ve
          received on your posts.
        </p>
      </div>

      <RequestsTabs
        sentContent={<SentRequestsList requests={sentRequests} />}
        receivedContent={
          <ReceivedRequestsClient
            posts={posts}
            requests={receivedRequests}
          />
        }
      />
    </div>
  );
}
