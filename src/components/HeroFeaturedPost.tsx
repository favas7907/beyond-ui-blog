"use client";

import Link from "next/link";
import Image from "next/image";
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
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="relative h-[500px] md:h-[650px] rounded-[40px] overflow-hidden group border border-border-base shadow-2xl"
    >
      <Image 
        src={post.blog_image} 
        alt={post.blog_heading}
        fill
        priority
        sizes="(max-width: 1280px) 100vw, 1200px"
        referrerPolicy="no-referrer"
        className="object-cover transition-transform duration-[2000ms] group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent" />
      
      <div className="absolute bottom-0 left-0 w-full p-8 md:p-16 space-y-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="inline-flex items-center space-x-3 px-4 py-2 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 text-[10px] font-bold uppercase tracking-[0.3em] text-white"
        >
          <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
          <span>Featured Story</span>
        </motion.div>
        
        <div className="space-y-4 max-w-3xl">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-4xl md:text-6xl font-bold text-white leading-[1.05] tracking-tight"
          >
            {post.blog_heading}
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-lg md:text-xl text-white/70 leading-relaxed font-medium line-clamp-2"
          >
            {post.blog_description}
          </motion.p>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="flex flex-wrap items-center gap-8 text-white/60 text-[12px] font-bold uppercase tracking-widest"
        >
          <div className="flex items-center space-x-3">
            <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-white/20 shadow-lg">
              <Image 
                src={post.avatar} 
                alt={post.name} 
                fill
                sizes="40px"
                referrerPolicy="no-referrer" 
                className="object-cover"
              />
            </div>
            <span className="text-white">{post.name}</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="w-1 h-1 bg-white/40 rounded-full" />
            <span>{post.month}</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="w-1 h-1 bg-white/40 rounded-full" />
            <span>12 min read</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="pt-4"
        >
          <Link 
            href={`/post/${post.id}`}
            className="pill-button bg-white text-text-primary border-none hover:bg-gray-100 inline-flex items-center space-x-3 group/btn"
          >
            <span>Read Full Article</span>
            <svg 
              className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
}
