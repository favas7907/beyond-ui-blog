import { Link } from "react-router-dom";
import { BlogPost } from "../types";
import PostCard from "./PostCard";

interface RecentPostsGridProps {
  posts: BlogPost[];
  title?: string;
}

export default function RecentPostsGrid({
  posts,
  title = "Recent Stories",
}: RecentPostsGridProps) {
  return (
    <section className="space-y-5">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="section-kicker">Editorial feed</p>
          <h2 className="mt-2 text-2xl font-black tracking-tight text-text-primary md:text-3xl">
            {title}
          </h2>
        </div>

        {posts.length > 0 && (
          <p className="text-sm text-text-secondary">{posts.length} stories</p>
        )}
      </div>

      {posts.length > 0 ? (
        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      ) : (
        <div className="premium-card flex flex-col items-center justify-center px-6 py-16 text-center">
          <p className="text-lg font-semibold text-text-primary">
            No stories found matching your criteria.
          </p>
          <p className="mt-2 max-w-xl text-sm leading-6 text-text-secondary">
            Try a different search or return to the main archive to browse all
            available stories.
          </p>
          <Link to="/blog" className="pill-button btn-dark mt-6">
            Browse Archive
          </Link>
        </div>
      )}
    </section>
  );
}
