import { fetchBlogPosts } from "@/lib/api";
import RecentPostsGrid from "@/components/RecentPostsGrid";
import { Search } from "lucide-react";

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
    post.blogtext.toLowerCase().includes(query)
  );

  return (
    <div className="space-y-16 pb-24 pt-12">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header & Search */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-border-base pb-12">
          <div className="max-w-2xl space-y-4">
            <h1 className="text-4xl md:text-7xl font-bold tracking-tighter">
              The Archive
            </h1>
            <p className="text-[16px] text-text-secondary leading-relaxed max-w-lg">
              A curated collection of stories, insights, and editorial pieces exploring the intersection of design and technology.
            </p>
          </div>
          
          <form action="/blog" className="relative w-full max-w-md">
            <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-text-muted" size={18} />
            <input 
              type="text"
              name="query"
              defaultValue={queryParam || ""}
              placeholder="Search stories..."
              className="w-full pl-12 pr-6 py-3.5 rounded-full border border-border-base bg-gray-50 focus:bg-white focus:outline-none focus:ring-4 focus:ring-accent-base/5 transition-all text-[14px]"
            />
          </form>
        </div>

        <div className="mt-16">
          <RecentPostsGrid 
            posts={filteredPosts} 
            title={query ? `Search Results for "${query}"` : "All Stories"} 
          />
          {filteredPosts.length === 0 && (
            <div className="py-32 text-center space-y-4">
              <p className="text-xl text-text-secondary">No stories found matching your search.</p>
              <a href="/blog" className="text-accent-base font-bold hover:underline">Clear search</a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
