import Link from "next/link";
import Image from "next/image";
import { BlogPost } from "../types";

interface FeaturedPostsSidebarProps {
  posts: BlogPost[];
}

export default function FeaturedPostsSidebar({ posts }: FeaturedPostsSidebarProps) {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between border-b border-border-base pb-3">
        <h3 className="text-[12px] font-bold uppercase tracking-[0.2em] text-text-primary">
          Editor's Picks
        </h3>
        <Link href="/blog" className="text-[11px] font-semibold text-text-secondary hover:text-text-primary transition-colors">
          View All
        </Link>
      </div>
      
      <div className="space-y-4">
        {posts.map((post) => (
          <Link 
            key={post.id} 
            href={`/post/${post.id}`}
            className="group flex items-center space-x-4 py-2"
          >
            <div className="relative flex-shrink-0 w-20 h-20 rounded-2xl overflow-hidden bg-gray-100 border border-border-base">
              <Image 
                src={post.blog_image} 
                alt={post.blog_heading}
                fill
                referrerPolicy="no-referrer"
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <div className="flex-grow min-w-0 space-y-1">
              <p className="text-[10px] font-bold uppercase tracking-widest text-text-muted">
                {post.topic}
              </p>
              <h4 className="text-[15px] font-bold leading-tight text-text-primary group-hover:text-text-secondary transition-colors line-clamp-2">
                {post.blog_heading}
              </h4>
              <p className="text-[12px] text-text-secondary">
                {post.month} • 6 min
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
