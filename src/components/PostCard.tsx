import { Link } from "react-router-dom";
import { BlogPost } from "../types";
import { format } from "date-fns";
import { motion } from "motion/react";

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
      <Link to={`/post/${post.id}`} className="block space-y-3">
        <div className="h-[120px] overflow-hidden rounded-2xl border border-border-base bg-gray-100">
          <img 
            src={post.blog_image} 
            alt={post.blog_heading}
            referrerPolicy="no-referrer"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        <div className="space-y-1">
          <h5 className="text-[15px] font-bold leading-tight text-text-primary group-hover:text-text-secondary transition-colors line-clamp-1">
            {post.blog_heading}
          </h5>
          <p className="text-[12px] text-text-secondary line-clamp-2 leading-relaxed">
            {post.blog_description}
          </p>
        </div>
      </Link>
    </motion.div>
  );
}
