import { Link } from "react-router-dom";
import { BlogPost } from "../types";
import { getReadingTime } from "../lib/utils";

interface FeaturedPostsSidebarProps {
  posts: BlogPost[];
}

export default function FeaturedPostsSidebar({ posts }: FeaturedPostsSidebarProps) {
  return (
    <aside className="space-y-4">
      <div className="space-y-1">
        <p className="section-kicker">Featured posts</p>
        <h3 className="text-2xl font-black tracking-tight text-text-primary">Selected stories</h3>
      </div>

      <div className="premium-card bg-white px-5 py-3 sm:px-6">
        {posts.length === 0 ? (
          <div className="py-10 text-center">
            <p className="text-sm text-text-secondary">No featured stories available right now.</p>
          </div>
        ) : (
          <div className="space-y-0">
            {posts.map((post) => (
              <Link
                key={post.id}
                to={`/post/${post.id}`}
                className="group flex items-center gap-4 border-b border-border-base/80 py-4 last:border-b-0 last:pb-0 last:pt-4 first:pt-0"
              >
                <div className="h-18 w-18 shrink-0 overflow-hidden rounded-2xl border border-border-base bg-outer-bg sm:h-20 sm:w-20">
                  <img
                    src={post.blog_image}
                    alt={post.blog_heading}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="min-w-0 flex-1">
                  <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-text-muted">
                    {post.topic}
                  </p>
                  <h4 className="mt-1 line-clamp-2 text-[15px] font-semibold leading-6 text-text-primary transition-colors group-hover:text-text-secondary">
                    {post.blog_heading}
                  </h4>
                  <p className="mt-2 text-[12px] text-text-secondary">
                    {post.name} • {getReadingTime(post.blogtext)}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </aside>
  );
}
