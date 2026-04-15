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
      <Link to={`/post/${post.id}`} className="block space-y-4">
        <div className="aspect-[16/10] overflow-hidden rounded-2xl border border-border-base bg-gray-100">
          <img 
            src={post.blog_image} 
            alt={post.blog_heading}
            referrerPolicy="no-referrer"
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
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
            <img 
              src={post.avatar} 
              alt={post.name} 
              referrerPolicy="no-referrer"
              className="w-6 h-6 rounded-full object-cover grayscale"
            />
            <span className="text-[12px] font-medium text-text-primary">{post.name}</span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
