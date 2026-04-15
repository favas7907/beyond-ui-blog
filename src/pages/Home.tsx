import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BlogPost } from "../types";
import { fetchBlogPosts } from "../lib/api";
import HeroFeaturedPost from "../components/HeroFeaturedPost";
import FeaturedPostsSidebar from "../components/FeaturedPostsSidebar";
import RecentPostsGrid from "../components/RecentPostsGrid";

export default function Home() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    const loadPosts = async () => {
      try {
        const data = await fetchBlogPosts();
        if (isMounted) setPosts(data);
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    loadPosts();

    return () => {
      isMounted = false;
    };
  }, []);

  if (loading) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-text-primary border-t-transparent" />
      </div>
    );
  }

  if (posts.length === 0) {
    return (
      <div className="flex min-h-[60vh] flex-col items-center justify-center gap-6 text-center">
        <div className="space-y-3">
          <p className="section-kicker">Beyond UI</p>
          <h1 className="section-title">No stories available right now.</h1>
          <p className="section-body max-w-2xl">
            The editorial feed could not load, but the app is still stable. Check the API
            configuration and try again.
          </p>
        </div>
        <Link to="/blog" className="pill-button btn-dark">
          Open Archive
        </Link>
      </div>
    );
  }

  const heroPost = posts[0];
  const sidebarPosts = posts.slice(1, 6);
  const recentPosts = posts.slice(6);

  return (
    <div className="space-y-10 lg:space-y-12">
      <section className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-3xl space-y-4">
          <p className="section-kicker">Latest issue</p>
          <h1 className="section-title">
            A calm editorial space for design, products, and digital craft.
          </h1>
          <p className="section-body">
            Beyond UI is built to present stories with clarity, structure, and a premium
            reading rhythm across every screen size.
          </p>
        </div>

        <Link to="/blog" className="pill-button btn-dark w-fit">
          Browse Archive
        </Link>
      </section>

      <section className="grid gap-6 lg:grid-cols-[minmax(0,1.7fr)_minmax(340px,0.95fr)]">
        <HeroFeaturedPost post={heroPost} />
        <FeaturedPostsSidebar posts={sidebarPosts} />
      </section>

      <RecentPostsGrid posts={recentPosts} title="Recent Stories" />
    </div>
  );
}
