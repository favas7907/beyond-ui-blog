import { useEffect, useState } from "react";
import { BlogPost } from "../types";
import { fetchBlogPosts } from "../lib/api";
import HeroFeaturedPost from "../components/HeroFeaturedPost";
import FeaturedPostsSidebar from "../components/FeaturedPostsSidebar";
import RecentPostsGrid from "../components/RecentPostsGrid";
import { motion } from "motion/react";

export default function Home() {
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

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="w-8 h-8 border-4 border-text-primary border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  const heroPost = posts[0];
  const sidebarPosts = posts.slice(1, 6);
  const recentPosts = posts.slice(6);

  return (
    <div className="space-y-12 pb-12">
      {/* Hero Section */}
      <section className="grid grid-cols-1 lg:grid-cols-[1.8fr_1fr] gap-6 items-stretch min-h-[400px]">
        <div className="h-full">
          {heroPost && <HeroFeaturedPost post={heroPost} />}
        </div>
        <div className="h-full">
          <FeaturedPostsSidebar posts={sidebarPosts} />
        </div>
      </section>

      {/* Recent Posts Section */}
      <RecentPostsGrid posts={recentPosts} />
    </div>
  );
}
