import Link from "next/link";
import Image from "next/image";
import { BlogPost } from "../types";
import * as motion from "motion/react-client";

interface HeroFeaturedPostProps {
  post: BlogPost;
}

export default function HeroFeaturedPost({ post }: HeroFeaturedPostProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="relative h-[500px] md:h-[600px] rounded-premium overflow-hidden group border border-border-base"
    >
      <Image 
        src={post.blog_image} 
        alt={post.blog_heading}
        fill
        priority
        sizes="100vw"
        referrerPolicy="no-referrer"
        className="object-cover transition-transform duration-1000 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
      
      <div className="absolute bottom-0 left-0 w-full p-8 md:p-12 space-y-6">
        <motion.div 
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="inline-block px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[11px] font-bold uppercase tracking-[0.2em] text-white"
        >
          Featured Story
        </motion.div>
        
        <motion.h2 
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-3xl md:text-5xl font-bold text-white leading-[1.1] max-w-2xl tracking-tight"
        >
          {post.blog_heading}
        </motion.h2>
        
        <motion.div 
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex items-center space-x-6 text-white/70 text-[13px] font-medium"
        >
          <div className="flex items-center space-x-3">
            <div className="relative w-8 h-8 rounded-full overflow-hidden border border-white/20">
              <Image 
                src={post.avatar} 
                alt={post.name} 
                fill
                sizes="32px"
                referrerPolicy="no-referrer" 
                className="object-cover"
              />
            </div>
            <span>{post.name}</span>
          </div>
          <span className="w-1 h-1 bg-white/30 rounded-full" />
          <span>{post.month}</span>
          <span className="w-1 h-1 bg-white/30 rounded-full" />
          <span>12 min read</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <Link 
            href={`/post/${post.id}`}
            className="pill-button bg-white text-text-primary border-none hover:bg-gray-100 inline-block"
          >
            Read Article
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
}
