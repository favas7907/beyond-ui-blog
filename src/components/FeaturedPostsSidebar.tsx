import Link from "next/link";
import Image from "next/image";
import { BlogPost } from "../types";

interface FeaturedPostsSidebarProps {
  posts: BlogPost[];
}

export default function FeaturedPostsSidebar({ posts }: FeaturedPostsSidebarProps) {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between border-b border-border-base pb-4">
        <h3 className="text-[11px] font-bold uppercase tracking-[0.3em] text-text-primary">
          Editor's Picks
        </h3>
        <Link 
          href="/blog" 
          className="text-[10px] font-bold uppercase tracking-widest text-text-muted hover:text-text-primary transition-colors"
        >
          View All
        </Link>
      </div>
      
      <div className="space-y-6">
        {posts.map((post) => (
          <Link 
            key={post.id} 
            href={`/post/${post.id}`}
            className="group flex items-start space-x-5 py-2"
          >
            <div className="relative flex-shrink-0 w-24 h-24 rounded-2xl overflow-hidden bg-gray-50 border border-border-base shadow-sm">
              <Image 
                src={post.blog_image} 
                alt={post.blog_heading}
                fill
                sizes="96px"
                referrerPolicy="no-referrer"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
            <div className="flex-grow min-w-0 space-y-2 pt-1">
              <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-accent-base">
                {post.topic}
              </p>
              <h4 className="text-[15px] font-bold leading-snug text-text-primary group-hover:text-text-secondary transition-colors line-clamp-2 tracking-tight">
                {post.blog_heading}
              </h4>
              <div className="flex items-center space-x-2 text-[11px] font-medium text-text-muted">
                <span>{post.month}</span>
                <span className="w-1 h-1 bg-border-base rounded-full" />
                <span>6 min</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
