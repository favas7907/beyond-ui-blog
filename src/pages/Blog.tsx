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
    <div className="space-y-12 pb-20">
      {/* Header & Search */}
      <div className="space-y-8">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-black tracking-tighter mb-4">
            The Archive
          </h1>
          <p className="text-lg text-text-secondary leading-relaxed">
            Explore our complete collection of stories, insights, and editorial pieces on the future of digital experiences.
          </p>
        </div>
        
        <div className="relative max-w-xl">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-text-secondary" size={20} />
          <input 
            type="text"
            value={query}
            onChange={handleSearch}
            placeholder="Search stories by title, topic, or content..."
            className="w-full pl-12 pr-6 py-4 rounded-2xl border border-border-light bg-bg-outer/30 focus:bg-white focus:outline-none focus:ring-2 focus:ring-text-primary/10 transition-all"
          />
        </div>
      </div>

      {loading ? (
        <div className="flex items-center justify-center py-20">
          <div className="w-8 h-8 border-4 border-text-primary border-t-transparent rounded-full animate-spin" />
        </div>
      ) : (
        <RecentPostsGrid 
          posts={filteredPosts} 
          title={query ? `Results for "${query}"` : "All Stories"} 
        />
      )}
    </div>
  );
}
