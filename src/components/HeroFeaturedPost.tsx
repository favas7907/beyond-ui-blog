import { Link } from "react-router-dom";
import { BlogPost } from "../types";
import { getReadingTime } from "../lib/utils";

interface HeroFeaturedPostProps {
  post: BlogPost;
}

export default function HeroFeaturedPost({ post }: HeroFeaturedPostProps) {
  return (
    <Link
      to={`/post/${post.id}`}
      aria-label={`Read ${post.blog_heading}`}
      className="group block h-full"
    >
      <article className="premium-card relative isolate min-h-[540px] overflow-hidden lg:min-h-[680px]">
        <img
          src={post.blog_image}
          alt={post.blog_heading}
          fetchPriority="high"
          loading="eager"
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/28 to-transparent" />

        <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8 lg:p-10">
          <div className="mb-5 flex flex-wrap items-center gap-3 text-white/80">
            <span className="rounded-full bg-white/15 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.24em] text-white backdrop-blur">
              {post.topic}
            </span>
            <span className="text-[12px]">{post.month}</span>
            <span className="text-[12px]">•</span>
            <span className="text-[12px]">{post.job_roles}</span>
            <span className="text-[12px]">•</span>
            <span className="text-[12px]">{getReadingTime(post.blogtext)}</span>
          </div>

          <h2 className="max-w-3xl text-4xl font-black leading-[1.05] tracking-tight text-white sm:text-5xl xl:text-6xl">
            {post.blog_heading}
          </h2>

          <p className="mt-4 max-w-2xl text-sm leading-7 text-white/80 sm:text-base">
            {post.blog_description}
          </p>

          <div className="mt-6 flex items-center gap-3 text-white/75">
            <div className="h-10 w-10 overflow-hidden rounded-full border border-white/25">
              <img
                src={post.avatar}
                alt={post.name}
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="text-left">
              <p className="text-sm font-semibold text-white">{post.name}</p>
              <p className="text-[12px]">{post.job_roles}</p>
            </div>
          </div>
        </div>
      </article>
    </Link>
  );
}
