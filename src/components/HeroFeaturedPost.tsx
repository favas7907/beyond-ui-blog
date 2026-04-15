import { Link } from "react-router-dom";
import { BlogPost } from "../types";
import { motion } from "motion/react";

interface HeroFeaturedPostProps {
  post: BlogPost;
}

export default function HeroFeaturedPost({ post }: HeroFeaturedPostProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      className="relative h-full min-h-[400px] rounded-premium overflow-hidden group border border-border-base"
    >
      <img 
        src={post.blog_image} 
        alt={post.blog_heading}
        referrerPolicy="no-referrer"
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
      
      <div className="absolute bottom-0 left-0 w-full p-8 space-y-3">
        <motion.div 
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="inline-block px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-[10px] font-bold uppercase tracking-widest text-white"
        >
          {post.topic}
        </motion.div>
        
        <motion.h2 
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-[28px] font-bold text-white leading-[1.2] max-w-[90%] tracking-tight"
        >
          {post.blog_heading}
        </motion.h2>
        
        <motion.div 
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex items-center space-x-4 text-white/80 text-[12px]"
        >
          <span>By {post.name}</span>
          <span>•</span>
          <span>12 min read</span>
          <span>•</span>
          <span>{post.month}</span>
        </motion.div>
      </div>
    </motion.div>
  );
}
