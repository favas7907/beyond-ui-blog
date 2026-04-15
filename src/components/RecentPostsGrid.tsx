import { BlogPost } from "../types";
import PostCard from "./PostCard";

interface RecentPostsGridProps {
  posts: BlogPost[];
  title?: string;
}

export default function RecentPostsGrid({ posts, title = "Recent Stories" }: RecentPostsGridProps) {
  return (
    <section className="space-y-4">
      <div className="rail-header text-[11px] font-bold uppercase text-text-muted tracking-wider mb-2">
        Recently Published
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
