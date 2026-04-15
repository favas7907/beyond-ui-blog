import { Link } from "react-router-dom";
import { BlogPost } from "../types";
import { getReadingTime } from "../lib/utils";

interface PostCardProps {
  post: BlogPost;
}

export default function PostCard({ post }: PostCardProps) {
  return (
    <article className="group h-full">
      <Link to={`/post/${post.id}`} className="block h-full">
        <div className="premium-card flex h-full flex-col transition-transform duration-300 group-hover:-translate-y-1">
          <div className="aspect-[4/3] overflow-hidden bg-outer-bg">
            <img
              src={post.blog_image}
              alt={post.blog_heading}
              loading="lazy"
              decoding="async"
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>

          <div className="flex flex-1 flex-col p-5 sm:p-6">
            <div className="flex flex-wrap items-center gap-2 text-[10px] font-bold uppercase tracking-[0.22em] text-text-muted">
              <span className="rounded-full bg-outer-bg px-3 py-1 text-text-secondary">
                {post.topic}
              </span>
              <span>{post.month}</span>
            </div>

            <h3 className="mt-4 line-clamp-2 text-[18px] font-bold leading-7 text-text-primary transition-colors group-hover:text-text-secondary">
              {post.blog_heading}
            </h3>

            <p className="mt-3 line-clamp-3 text-[13px] leading-6 text-text-secondary">
              {post.blog_description}
            </p>

            <div className="mt-5 flex items-center justify-between border-t border-border-base pt-4 text-[12px] text-text-muted">
              <span className="font-medium text-text-secondary">{post.name}</span>
              <span>{getReadingTime(post.blogtext)}</span>
            </div>
          </div>
        </div>
      </Link>
    </article>
  );
}
