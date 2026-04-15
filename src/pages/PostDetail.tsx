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
    <article className="pb-20">
      {/* Back Button */}
      <Link 
        to="/blog" 
        className="inline-flex items-center space-x-2 text-sm font-bold text-text-secondary hover:text-text-primary transition-colors mb-8"
      >
        <ArrowLeft size={16} />
        <span>Back to Archive</span>
      </Link>

      {/* Hero Header */}
      <div className="space-y-8 mb-12">
        <div className="space-y-4">
          <span className="inline-block px-3 py-1 rounded-full bg-bg-outer text-[10px] font-black uppercase tracking-widest text-text-secondary">
            {post.topic}
          </span>
          <h1 className="text-4xl md:text-6xl font-black tracking-tighter leading-[1.1]">
            {post.blog_heading}
          </h1>
          <p className="text-xl text-text-secondary leading-relaxed max-w-3xl">
            {post.blog_description}
          </p>
        </div>

        <div className="flex items-center justify-between py-6 border-y border-border-light">
          <div className="flex items-center space-x-4">
            <img 
              src={post.avatar} 
              alt={post.name} 
              referrerPolicy="no-referrer"
              className="w-12 h-12 rounded-full object-cover grayscale"
            />
            <div>
              <p className="font-bold text-text-primary">{post.name}</p>
              <p className="text-xs text-text-secondary">{post.job_roles} • {post.month}</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <button className="p-2 rounded-full hover:bg-bg-outer transition-colors text-text-secondary"><Share2 size={20} /></button>
            <button className="p-2 rounded-full hover:bg-bg-outer transition-colors text-text-secondary"><Bookmark size={20} /></button>
          </div>
        </div>
      </div>

      {/* Main Image */}
      <div className="aspect-[21/9] rounded-[32px] overflow-hidden mb-16 border border-border-light">
        <img 
          src={post.blog_image} 
          alt={post.blog_heading} 
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 lg:col-start-3 space-y-8">
          <div className="prose prose-lg max-w-none text-text-primary leading-relaxed space-y-6">
            <p className="text-xl font-medium leading-relaxed italic text-text-secondary border-l-4 border-text-primary pl-6 py-2">
              {post.quotes}
            </p>
            <div className="text-lg space-y-6 whitespace-pre-wrap">
              {post.blogtext}
            </div>
            <div className="text-lg space-y-6">
              {post.para}
            </div>
          </div>

          {/* Tags / Footer */}
          <div className="pt-12 border-t border-border-light flex flex-wrap gap-2">
            {["Design", "Technology", "Future", "UI/UX", post.topic].map(tag => (
              <span key={tag} className="px-4 py-1.5 rounded-full bg-bg-outer text-xs font-bold text-text-secondary">
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}
