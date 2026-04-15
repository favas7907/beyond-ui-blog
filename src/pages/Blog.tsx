import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { BlogPost } from "../types";
import { fetchBlogPosts } from "../lib/api";
import RecentPostsGrid from "../components/RecentPostsGrid";
import { Search } from "lucide-react";
import React from "react";

export default function Blog() {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("query") || "";
  
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPosts = async () => {
      const data = await fetchBlogPosts();
      setPosts(data);
      setLoading(false);
    };
    loadPosts();
  }, []);

  const filteredPosts = posts.filter((post) => {
    const searchContent = `${post.blog_heading} ${post.blog_description} ${post.topic}`.toLowerCase();
    return searchContent.includes(query.toLowerCase());
  });

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value) {
      setSearchParams({ query: value });
    } else {
      setSearchParams({});
    }
  };

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
          
          <div className="relative w-full max-w-md">
            <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-text-muted" size={18} />
            <input 
              type="text"
              value={query}
              onChange={handleSearch}
              placeholder="Search stories..."
              className="w-full pl-12 pr-6 py-3.5 rounded-full border border-border-base bg-gray-50 focus:bg-white focus:outline-none focus:ring-4 focus:ring-accent-base/5 transition-all text-[14px]"
            />
          </div>
        </div>

        <div className="mt-16">
          {loading ? (
            <div className="flex items-center justify-center py-32">
              <div className="w-8 h-8 border-4 border-accent-base border-t-transparent rounded-full animate-spin" />
            </div>
          ) : (
            <RecentPostsGrid 
              posts={filteredPosts} 
              title={query ? `Search Results` : "All Stories"} 
            />
          )}
        </div>
      </div>
    </div>
  );
}
