import { fetchBlogPosts } from "@/lib/api";
import HeroFeaturedPost from "@/components/HeroFeaturedPost";
import FeaturedPostsSidebar from "@/components/FeaturedPostsSidebar";
import RecentPostsGrid from "@/components/RecentPostsGrid";
import * as motion from "motion/react-client";

export default async function Home() {
  const posts = await fetchBlogPosts();
  
  const heroPost = posts[0];
  const sidebarPosts = posts.slice(1, 6);
  const recentPosts = posts.slice(6);

  return (
    <div className="space-y-24 pb-24">
      {/* Hero Section */}
      <section className="pt-12">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-8">
              {heroPost && <HeroFeaturedPost post={heroPost} />}
            </div>
            <div className="lg:col-span-4 sticky top-28">
              <FeaturedPostsSidebar posts={sidebarPosts} />
            </div>
          </div>
        </div>
      </section>

      {/* Recent Posts Section */}
      <section>
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <RecentPostsGrid posts={recentPosts} />
        </div>
      </section>

      {/* Editorial Quote / Break */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="py-24 border-y border-border-base text-center bg-gray-50/50"
      >
        <div className="max-w-3xl mx-auto space-y-8 px-6">
          <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-text-muted">The Beyond UI Philosophy</span>
          <h2 className="text-3xl md:text-5xl font-serif italic text-text-primary leading-tight">
            "Design is not just what it looks like and feels like. Design is how it works and how it makes us feel."
          </h2>
          <p className="text-[13px] font-bold uppercase tracking-widest text-text-secondary">Editorial Team</p>
        </div>
      </motion.section>
    </div>
  );
}
