import { fetchBlogPostById } from "@/lib/api";
import { ArrowLeft, Share2, Bookmark, Tag } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";

export default async function PostDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const post = await fetchBlogPostById(id);

  if (!post) {
    notFound();
  }

  return (
    <article className="pb-24">
      {/* Hero Header */}
      <header className="pt-16 pb-12 space-y-10">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="space-y-6 max-w-4xl">
            <Link 
              href="/blog" 
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
              <div className="relative w-14 h-14 rounded-full overflow-hidden grayscale border border-border-base">
                <Image 
                  src={post.avatar} 
                  alt={post.name} 
                  fill
                  sizes="56px"
                  referrerPolicy="no-referrer"
                  className="object-cover"
                />
              </div>
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
          <div className="relative aspect-[21/9] rounded-premium overflow-hidden border border-border-base shadow-lg">
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
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-8">
            <div className="prose prose-lg max-w-none">
              <p className="text-xl leading-relaxed text-text-primary mb-8 font-medium">
                {post.para}
              </p>
              <div className="text-lg leading-relaxed text-text-secondary space-y-6 whitespace-pre-line">
                {post.blogtext}
              </div>
              
              <blockquote className="my-12 p-10 bg-gray-50 border-l-4 border-accent-base rounded-r-premium">
                <p className="text-2xl font-serif italic text-text-primary leading-relaxed">
                  "{post.quotes}"
                </p>
              </blockquote>
            </div>

            <div className="mt-16 pt-12 border-t border-border-base">
              <div className="flex items-center space-x-4">
                <Tag size={18} className="text-text-muted" />
                <div className="flex flex-wrap gap-2">
                  {["Design", "Technology", "Future", "Editorial"].map(tag => (
                    <span key={tag} className="px-4 py-1.5 bg-gray-100 text-text-secondary text-[12px] font-bold uppercase tracking-wider rounded-full hover:bg-accent-base hover:text-white transition-colors cursor-pointer">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <aside className="lg:col-span-4">
            <div className="sticky top-28 space-y-12">
              <div className="p-8 bg-gray-50 rounded-premium border border-border-base">
                <h4 className="text-[11px] font-bold uppercase tracking-widest text-text-primary mb-6">About the Author</h4>
                <div className="space-y-4">
                  <p className="text-[14px] text-text-secondary leading-relaxed">
                    {post.name} is a {post.job_roles} at Beyond UI, specializing in the intersection of digital craft and human-centered systems.
                  </p>
                  <button className="text-[12px] font-bold uppercase tracking-widest text-accent-base hover:underline">View Profile</button>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </article>
  );
}
