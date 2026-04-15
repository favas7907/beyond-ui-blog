import { BlogPost } from "../types";
import PostCard from "./PostCard";

interface RecentPostsGridProps {
  posts: BlogPost[];
  title?: string;
}

export default function RecentPostsGrid({ posts, title = "Recent Stories" }: RecentPostsGridProps) {
  return (
    <section className="space-y-8">
      <div className="flex items-center justify-between border-b border-border-base pb-4">
        <h2 className="text-2xl font-bold tracking-tight text-text-primary">
          {title}
        </h2>
        <div className="text-[13px] font-medium text-text-secondary">
          Showing {posts.length} stories
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-16">
        {posts.map((post) => (
          <div key={post.id}>
            <PostCard post={post} />
          </div>
        ))}
      </div>
      
      {posts.length === 0 && (
        <div className="py-20 text-center space-y-4">
          <p className="text-text-secondary text-lg">No stories found matching your criteria.</p>
          <button 
            onClick={() => window.location.reload()}
            className="pill-button bg-text-primary text-white"
          >
            Refresh Feed
          </button>
        </div>
      )}
    </section>
  );
}
