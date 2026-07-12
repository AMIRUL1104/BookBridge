import type { MyPost } from "./my-post";
import BookCard from "@/components/shared/BookCard";
import DeleteButton from "./DeleteButton";

interface MyPostsGridProps {
  posts: MyPost[];
  onDeleted: (postId: string) => void;
}

export default function MyPostsGrid({ posts, onDeleted }: MyPostsGridProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
      {posts.map((post) => (
        <div key={post._id} className="relative group">
          <DeleteButton
            postId={post._id}
            postTitle={post.title}
            onDeleted={onDeleted}
          />
          {/* Reusing the shared BookCard used on the Browse Books page —
              adjust the prop name below if BookCard expects a different one. */}
          <BookCard book={post} />
        </div>
      ))}
    </div>
  );
}
