"use client";

import Link from "next/link";
import Image from "next/image";
import { BlogPost } from "../types";
import { motion } from "motion/react";

interface PostCardProps {
  post: BlogPost;
}

export default function PostCard({ post }: PostCardProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="group"
    >
      <Link href={`/post/${post.id}`} className="block space-y-6">
        <div className="relative aspect-[16/10] overflow-hidden rounded-3xl border border-border-base bg-gray-50 shadow-sm transition-all duration-500 group-hover:shadow-premium">
          <Image 
            src={post.blog_image} 
            alt={post.blog_heading}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            referrerPolicy="no-referrer"
            className="object-cover transition-transform duration-1000 group-hover:scale-105"
          />
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-md border border-white/20 text-[10px] font-bold uppercase tracking-widest text-text-primary shadow-sm">
              {post.topic}
            </span>
          </div>
        </div>
        
        <div className="space-y-3 px-1">
          <div className="flex items-center space-x-2 text-[10px] font-bold uppercase tracking-[0.2em] text-text-muted">
            <span>{post.month}</span>
            <span>•</span>
            <span>6 min read</span>
          </div>
          
          <h3 className="text-2xl font-bold leading-[1.2] text-text-primary group-hover:text-text-secondary transition-colors line-clamp-2 tracking-tight">
            {post.blog_heading}
          </h3>
          
          <p className="text-[15px] text-text-secondary line-clamp-2 leading-relaxed font-medium opacity-80">
            {post.blog_description}
          </p>
          
          <div className="pt-4 flex items-center space-x-3">
            <div className="relative w-7 h-7 rounded-full overflow-hidden grayscale border border-border-base">
              <Image 
                src={post.avatar} 
                alt={post.name} 
                fill
                sizes="28px"
                referrerPolicy="no-referrer"
                className="object-cover"
              />
            </div>
            <span className="text-[13px] font-bold text-text-primary tracking-tight">{post.name}</span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
