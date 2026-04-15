import { Link } from "react-router-dom";
import { BlogPost } from "../types";

interface FeaturedPostsSidebarProps {
  posts: BlogPost[];
}

export default function FeaturedPostsSidebar({ posts }: FeaturedPostsSidebarProps) {
  return (
    <div className="space-y-4">
      <div className="rail-header text-[11px] font-bold uppercase text-text-muted tracking-wider mb-1">
        Featured Posts
      </div>
      
      <div className="space-y-0">
        {posts.map((post) => (
          <Link 
            key={post.id} 
            to={`/post/${post.id}`}
            className="group flex items-center space-x-4 py-3 border-b border-border-base last:border-0"
          >
            <div className="flex-shrink-0 w-16 h-16 rounded-xl overflow-hidden bg-gray-100 border border-border-base">
              <img 
                src={post.blog_image} 
                alt={post.blog_heading}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <div className="flex-grow min-w-0">
              <h4 className="text-[14px] font-bold leading-tight text-text-primary group-hover:text-text-secondary transition-colors line-clamp-2 mb-1">
                {post.blog_heading}
              </h4>
              <p className="text-[12px] text-text-secondary">
                {post.topic} • 6 min
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
