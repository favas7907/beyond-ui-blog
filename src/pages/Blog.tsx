import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Search } from "lucide-react";
import { BlogPost } from "../types";
import { fetchBlogPosts } from "../lib/api";
import RecentPostsGrid from "../components/RecentPostsGrid";

export default function Blog() {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("query") || "";

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

  const filteredPosts = useMemo(() => {
    const normalizedQuery = query.toLowerCase().trim();

    if (!normalizedQuery) return posts;

    return posts.filter((post) => {
      const searchableText = [
        post.blog_heading,
        post.blog_description,
        post.blogtext,
        post.topic,
        post.name,
        post.job_roles,
        post.para,
      ]
        .join(" ")
        .toLowerCase();

      return searchableText.includes(normalizedQuery);
    });
  }, [posts, query]);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;

    if (value.trim()) {
      setSearchParams({ query: value }, { replace: true });
    } else {
      setSearchParams({}, { replace: true });
    }
  };

  return (
    <div className="space-y-12 pb-20">
      <section className="space-y-8">
        <div className="max-w-3xl space-y-4">
          <p className="section-kicker">Archive</p>
          <h1 className="section-title">The full editorial collection.</h1>
          <p className="section-body">
            Search stories by title, author, topic, or detail. Query strings are preserved
            in the URL so your filtered results stay shareable.
          </p>
        </div>

        <div className="relative max-w-2xl">
          <label htmlFor="blog-search" className="sr-only">
            Search stories
          </label>
          <Search
            className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-text-muted"
            size={20}
          />
          <input
            id="blog-search"
            type="text"
            value={query}
            onChange={handleSearch}
            placeholder="Search stories by title, topic, author, or content..."
            className="soft-input pl-12"
          />
        </div>

        <p className="text-sm text-text-secondary">
          {loading ? "Loading stories..." : `${filteredPosts.length} result(s)`}
        </p>
      </section>

      {loading ? (
        <div className="flex items-center justify-center py-20">
          <div className="h-8 w-8 animate-spin rounded-full border-4 border-text-primary border-t-transparent" />
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
