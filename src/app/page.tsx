import { fetchBlogPosts } from "@/lib/api";
import HeroFeaturedPost from "@/components/HeroFeaturedPost";
import FeaturedPostsSidebar from "@/components/FeaturedPostsSidebar";
import RecentPostsGrid from "@/components/RecentPostsGrid";
import EditorialQuote from "@/components/EditorialQuote";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home | Beyond UI",
  description: "Discover the latest insights on design, technology, and the future of digital interfaces.",
};

export default async function Home() {
  const posts = await fetchBlogPosts();
  
  const heroPost = posts[0];
  const sidebarPosts = posts.slice(1, 5);
  const recentPosts = posts.slice(5);

  return (
    <div className="space-y-32 pb-32">
      {/* Hero Section */}
      <section className="pt-16">
        <div className="editorial-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-8">
              {heroPost && <HeroFeaturedPost post={heroPost} />}
            </div>
            <div className="lg:col-span-4 sticky top-32">
              <FeaturedPostsSidebar posts={sidebarPosts} />
            </div>
          </div>
        </div>
      </section>

      {/* Recent Posts Section */}
      <section>
        <div className="editorial-container">
          <div className="flex items-center justify-between mb-16 border-b border-border-base pb-6">
            <div className="space-y-2">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">Latest Stories</h2>
              <p className="text-text-secondary font-medium">Fresh perspectives from our global contributors.</p>
            </div>
            <div className="hidden md:flex items-center space-x-4">
              <span className="text-[11px] font-bold uppercase tracking-widest text-text-muted">Sort by:</span>
              <select className="bg-transparent text-[11px] font-bold uppercase tracking-widest text-text-primary border-none focus:ring-0 cursor-pointer">
                <option>Newest First</option>
                <option>Most Popular</option>
              </select>
            </div>
          </div>
          <RecentPostsGrid posts={recentPosts} />
        </div>
      </section>

      {/* Editorial Quote / Break */}
      <EditorialQuote />
    </div>
  );
}
