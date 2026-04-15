import { fetchBlogPosts } from "@/lib/api";
import RecentPostsGrid from "@/components/RecentPostsGrid";
import { Search, SlidersHorizontal } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Archive",
  description: "Explore our full collection of editorial pieces and technical insights.",
};

export default async function Blog({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const posts = await fetchBlogPosts();
  const { query: queryParam } = await searchParams;
  const query = queryParam?.toLowerCase() || "";

  const filteredPosts = posts.filter(post => 
    post.blog_heading.toLowerCase().includes(query) ||
    post.blog_description.toLowerCase().includes(query) ||
    post.blogtext.toLowerCase().includes(query) ||
    post.topic.toLowerCase().includes(query)
  );

  return (
    <div className="space-y-20 pb-32 pt-16">
      <div className="editorial-container">
        {/* Header & Search */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12 border-b border-border-base pb-16">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center space-x-3 text-[10px] font-bold uppercase tracking-[0.4em] text-text-muted">
              <span className="w-8 h-px bg-border-base" />
              <span>Curated Content</span>
            </div>
            <h1 className="text-5xl md:text-8xl font-bold tracking-tighter leading-[0.9]">
              The <br /> Archive.
            </h1>
            <p className="text-lg md:text-xl text-text-secondary leading-relaxed max-w-xl font-medium opacity-80">
              A deep dive into the stories, insights, and technical explorations that define the modern digital landscape.
            </p>
          </div>
          
          <div className="w-full max-w-md space-y-6">
            <form action="/blog" className="relative group">
              <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-text-muted transition-colors group-focus-within:text-accent-base" size={20} />
              <input 
                type="text"
                name="query"
                defaultValue={queryParam || ""}
                placeholder="Search the archive..."
                className="w-full pl-14 pr-6 py-5 rounded-[24px] border border-border-base bg-gray-50/50 focus:bg-white focus:outline-none focus:ring-8 focus:ring-accent-base/5 transition-all text-[15px] font-medium shadow-sm"
              />
            </form>
            <div className="flex items-center justify-between px-2">
              <div className="flex items-center space-x-4">
                <button className="flex items-center space-x-2 text-[11px] font-bold uppercase tracking-widest text-text-primary hover:opacity-70 transition-opacity">
                  <SlidersHorizontal size={14} />
                  <span>Filters</span>
                </button>
              </div>
              <p className="text-[11px] font-bold uppercase tracking-widest text-text-muted">
                {filteredPosts.length} Results
              </p>
            </div>
          </div>
        </div>

        <div className="mt-20">
          {filteredPosts.length > 0 ? (
            <RecentPostsGrid 
              posts={filteredPosts} 
              title={query ? `Results for "${query}"` : "All Stories"} 
            />
          ) : (
            <div className="py-40 text-center space-y-8">
              <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mx-auto border border-border-base">
                <Search size={32} className="text-text-muted" />
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl font-bold tracking-tight">No stories found</h3>
                <p className="text-text-secondary font-medium">We couldn't find any articles matching your search criteria.</p>
              </div>
              <a 
                href="/blog" 
                className="inline-block pill-button btn-dark"
              >
                Clear Search
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
