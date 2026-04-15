import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { BlogPost } from "../types";
import { fetchBlogPostById } from "../lib/api";
import { ArrowLeft, Share2, Bookmark, MessageSquare } from "lucide-react";
import { motion } from "motion/react";

export default function PostDetail() {
  const { id } = useParams<{ id: string }>();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;
    const loadPost = async () => {
      const data = await fetchBlogPostById(id);
      setPost(data);
      setLoading(false);
    };
    loadPost();
    window.scrollTo(0, 0);
  }, [id]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="w-8 h-8 border-4 border-text-primary border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  if (!post) {
    return (
      <div className="py-20 text-center space-y-6">
        <h2 className="text-3xl font-bold">Post Not Found</h2>
        <p className="text-text-secondary">The story you are looking for doesn't exist or has been moved.</p>
        <Link to="/blog" className="pill-button bg-text-primary text-white inline-block">
          Back to Blog
        </Link>
      </div>
    );
  }

  return (
    <article className="pb-24">
      {/* Hero Header */}
      <header className="pt-16 pb-12 space-y-10">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="space-y-6 max-w-4xl">
            <Link 
              to="/blog" 
              className="inline-flex items-center space-x-2 text-[12px] font-bold uppercase tracking-widest text-text-muted hover:text-text-primary transition-colors"
            >
              <ArrowLeft size={14} />
              <span>Back to Archive</span>
            </Link>
            
            <h1 className="text-4xl md:text-7xl font-bold tracking-tighter leading-[1.05]">
              {post.blog_heading}
            </h1>
            
            <p className="text-xl md:text-2xl text-text-secondary leading-relaxed font-medium">
              {post.blog_description}
            </p>
          </div>

          <div className="flex items-center justify-between py-8 border-y border-border-base mt-10">
            <div className="flex items-center space-x-5">
              <img 
                src={post.avatar} 
                alt={post.name} 
                referrerPolicy="no-referrer"
                className="w-14 h-14 rounded-full object-cover grayscale border border-border-base"
              />
              <div>
                <p className="font-bold text-[16px] text-text-primary">{post.name}</p>
                <p className="text-[13px] text-text-secondary font-medium">{post.job_roles} • {post.month}</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <button className="p-3 rounded-full hover:bg-gray-50 border border-border-base transition-colors text-text-secondary"><Share2 size={18} /></button>
              <button className="p-3 rounded-full hover:bg-gray-50 border border-border-base transition-colors text-text-secondary"><Bookmark size={18} /></button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Image */}
      <div className="mb-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="aspect-[21/9] rounded-premium overflow-hidden border border-border-base shadow-lg">
            <img 
              src={post.blog_image} 
              alt={post.blog_heading} 
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-6 space-y-12">
        <div className="prose prose-xl max-w-none text-text-primary leading-[1.8] space-y-8 font-sans">
          <p className="text-2xl md:text-3xl font-serif italic text-text-secondary border-l-4 border-accent-base pl-8 py-2 my-12">
            {post.quotes}
          </p>
          <div className="text-[18px] md:text-[20px] space-y-8 whitespace-pre-wrap text-text-secondary">
            {post.blogtext}
          </div>
          <div className="text-[18px] md:text-[20px] space-y-8 text-text-secondary">
            {post.para}
          </div>
        </div>

        {/* Tags / Footer */}
        <div className="pt-16 border-t border-border-base flex flex-wrap gap-3">
          {["Design", "Technology", "Future", "UI/UX", post.topic].map(tag => (
            <span key={tag} className="px-5 py-2 rounded-full bg-gray-50 border border-border-base text-[12px] font-bold text-text-secondary hover:bg-gray-100 transition-colors cursor-pointer">
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}
