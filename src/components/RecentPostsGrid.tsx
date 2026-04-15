import { BlogPost } from "../types";
import PostCard from "./PostCard";

interface RecentPostsGridProps {
  posts: BlogPost[];
  title?: string;
}

export default function RecentPostsGrid({ posts, title }: RecentPostsGridProps) {
  return (
    <section className="space-y-12">
      {title && (
        <div className="flex items-center justify-between border-b border-border-base pb-6">
          <h2 className="text-3xl font-bold tracking-tight text-text-primary">
            {title}
          </h2>
          <div className="text-[11px] font-bold uppercase tracking-widest text-text-muted">
            {posts.length} Stories Found
          </div>
        </div>
      )}
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-20">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </section>
  );
}
