import Link from "next/link";
import Image from "next/image";
import { BlogPost } from "../types";
import { format } from "date-fns";
import * as motion from "motion/react-client";

interface PostCardProps {
  post: BlogPost;
}

export default function PostCard({ post }: PostCardProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group"
    >
      <Link href={`/post/${post.id}`} className="block space-y-4">
        <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-border-base bg-gray-100">
          <Image 
            src={post.blog_image} 
            alt={post.blog_heading}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            referrerPolicy="no-referrer"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>
        <div className="space-y-2">
          <div className="flex items-center space-x-2 text-[10px] font-bold uppercase tracking-widest text-text-muted">
            <span>{post.topic}</span>
            <span>•</span>
            <span>{post.month}</span>
          </div>
          <h3 className="text-xl font-bold leading-tight text-text-primary group-hover:text-text-secondary transition-colors line-clamp-2">
            {post.blog_heading}
          </h3>
          <p className="text-[14px] text-text-secondary line-clamp-2 leading-relaxed">
            {post.blog_description}
          </p>
          <div className="pt-2 flex items-center space-x-3">
            <div className="relative w-6 h-6 rounded-full overflow-hidden grayscale">
              <Image 
                src={post.avatar} 
                alt={post.name} 
                fill
                sizes="24px"
                referrerPolicy="no-referrer"
                className="object-cover"
              />
            </div>
            <span className="text-[12px] font-medium text-text-primary">{post.name}</span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
