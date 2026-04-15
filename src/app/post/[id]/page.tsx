import { fetchBlogPostById } from "@/lib/api";
import { ArrowLeft, Share2, Bookmark, Tag, Clock, Calendar } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Metadata } from "next";

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  const post = await fetchBlogPostById(id);
  
  if (!post) return { title: "Post Not Found" };

  return {
    title: post.blog_heading,
    description: post.blog_description,
    openGraph: {
      title: post.blog_heading,
      description: post.blog_description,
      images: [{ url: post.blog_image }],
    },
  };
}

export default async function PostDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const post = await fetchBlogPostById(id);

  if (!post) {
    notFound();
  }

  return (
    <article className="pb-32">
      {/* Hero Header */}
      <header className="pt-20 pb-16 space-y-12">
        <div className="editorial-container">
          <div className="space-y-8 max-w-5xl">
            <Link 
              href="/blog" 
              className="inline-flex items-center space-x-3 text-[11px] font-bold uppercase tracking-[0.3em] text-text-muted hover:text-text-primary transition-colors group"
            >
              <ArrowLeft size={14} className="transition-transform group-hover:-translate-x-1" />
              <span>Back to Archive</span>
            </Link>
            
            <div className="space-y-6">
              <div className="inline-block px-4 py-1.5 rounded-full bg-gray-100 text-[10px] font-bold uppercase tracking-widest text-text-primary">
                {post.topic}
              </div>
              <h1 className="text-5xl md:text-8xl font-bold tracking-tighter leading-[0.95] text-text-primary">
                {post.blog_heading}
              </h1>
            </div>
            
            <p className="text-xl md:text-3xl text-text-secondary leading-relaxed font-medium opacity-90 max-w-4xl">
              {post.blog_description}
            </p>
          </div>

          <div className="flex flex-col md:flex-row md:items-center justify-between py-10 border-y border-border-base mt-16 gap-8">
            <div className="flex items-center space-x-6">
              <div className="relative w-16 h-16 rounded-full overflow-hidden grayscale border-2 border-border-base shadow-sm">
                <Image 
                  src={post.avatar} 
                  alt={post.name} 
                  fill
                  sizes="64px"
                  referrerPolicy="no-referrer"
                  className="object-cover"
                />
              </div>
              <div className="space-y-1">
                <p className="font-bold text-[18px] text-text-primary tracking-tight">{post.name}</p>
                <div className="flex items-center space-x-3 text-[13px] text-text-secondary font-medium">
                  <span>{post.job_roles}</span>
                  <span className="w-1 h-1 bg-border-base rounded-full" />
                  <div className="flex items-center space-x-1">
                    <Calendar size={12} />
                    <span>{post.month}</span>
                  </div>
                  <span className="w-1 h-1 bg-border-base rounded-full" />
                  <div className="flex items-center space-x-1">
                    <Clock size={12} />
                    <span>12 min read</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button className="flex items-center space-x-2 px-6 py-3 rounded-full hover:bg-gray-50 border border-border-base transition-all text-[12px] font-bold uppercase tracking-widest text-text-primary active:scale-95">
                <Share2 size={16} />
                <span>Share</span>
              </button>
              <button className="p-3.5 rounded-full hover:bg-gray-50 border border-border-base transition-all text-text-secondary active:scale-95">
                <Bookmark size={20} />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Image */}
      <div className="mb-24">
        <div className="editorial-container">
          <div className="relative aspect-[21/9] rounded-[40px] overflow-hidden border border-border-base shadow-2xl">
            <Image 
              src={post.blog_image} 
              alt={post.blog_heading} 
              fill
              priority
              sizes="100vw"
              referrerPolicy="no-referrer"
              className="object-cover"
            />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="editorial-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
          <div className="lg:col-span-8">
            <div className="prose prose-xl max-w-none">
              <p className="text-2xl leading-relaxed text-text-primary mb-12 font-medium border-l-4 border-accent-base pl-8 py-2">
                {post.para}
              </p>
              <div className="text-xl leading-[1.8] text-text-secondary space-y-10 whitespace-pre-line font-medium opacity-90">
                {post.blogtext}
              </div>
              
              <blockquote className="my-20 p-12 bg-gray-50 border-l-8 border-accent-base rounded-r-[32px] shadow-sm relative">
                <span className="absolute top-6 left-6 text-6xl text-accent-base/10 font-serif">"</span>
                <p className="text-3xl md:text-4xl font-serif italic text-text-primary leading-tight relative z-10">
                  {post.quotes}
                </p>
              </blockquote>
            </div>

            <div className="mt-24 pt-16 border-t border-border-base">
              <div className="flex items-center space-x-6">
                <div className="flex items-center space-x-2 text-text-muted">
                  <Tag size={20} />
                  <span className="text-[11px] font-bold uppercase tracking-widest">Tags</span>
                </div>
                <div className="flex flex-wrap gap-3">
                  {["Design", "Technology", "Future", "Editorial"].map(tag => (
                    <span key={tag} className="px-5 py-2 bg-gray-100 text-text-secondary text-[11px] font-bold uppercase tracking-widest rounded-full hover:bg-accent-base hover:text-white transition-all cursor-pointer active:scale-95">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <aside className="lg:col-span-4">
            <div className="sticky top-32 space-y-12">
              <div className="p-10 bg-gray-50 rounded-[32px] border border-border-base space-y-8">
                <div className="space-y-2">
                  <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-text-muted">About the Author</h4>
                  <p className="text-2xl font-bold tracking-tight">{post.name}</p>
                </div>
                <div className="space-y-6">
                  <p className="text-[15px] text-text-secondary leading-relaxed font-medium opacity-80">
                    {post.name} is a {post.job_roles} at Beyond UI, specializing in the intersection of digital craft and human-centered systems.
                  </p>
                  <button className="text-[11px] font-bold uppercase tracking-[0.2em] text-accent-base hover:underline underline-offset-8">
                    View Full Profile
                  </button>
                </div>
              </div>

              <div className="p-10 bg-accent-base rounded-[32px] text-white space-y-8">
                <div className="space-y-2">
                  <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] opacity-60">Newsletter</h4>
                  <p className="text-2xl font-bold tracking-tight">Stay ahead of the curve.</p>
                </div>
                <p className="text-[14px] opacity-70 leading-relaxed">
                  Join 50,000+ readers receiving our weekly deep dives into design and tech.
                </p>
                <div className="space-y-3">
                  <input 
                    type="email" 
                    placeholder="Email address" 
                    className="w-full px-6 py-4 rounded-2xl bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-white/30 text-[14px]"
                  />
                  <button className="w-full py-4 rounded-2xl bg-white text-accent-base font-bold text-[13px] uppercase tracking-widest hover:bg-gray-100 transition-colors">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </article>
  );
}
