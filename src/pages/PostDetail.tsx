import { useEffect, useMemo, useState } from "react";
import { useParams, Link } from "react-router-dom";
import {
  ArrowLeft,
  Bookmark,
  BookmarkCheck,
  Share2,
} from "lucide-react";
import { BlogPost } from "../types";
import { fetchBlogPostById, fetchBlogPosts } from "../lib/api";
import { getReadingTime } from "../lib/utils";
import RecentPostsGrid from "../components/RecentPostsGrid";

const BOOKMARK_KEY = "beyond-ui-bookmarks";

export default function PostDetail() {
  const { id } = useParams<{ id: string }>();

  const [post, setPost] = useState<BlogPost | null>(null);
  const [relatedPosts, setRelatedPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [savedIds, setSavedIds] = useState<string[]>([]);
  const [actionMessage, setActionMessage] = useState<string | null>(null);

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(BOOKMARK_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed)) setSavedIds(parsed.filter(Boolean));
      }
    } catch {
      // ignore storage errors
    }
  }, [id]);

  useEffect(() => {
    if (!actionMessage) return;

    const timer = window.setTimeout(() => {
      setActionMessage(null);
    }, 2500);

    return () => window.clearTimeout(timer);
  }, [actionMessage]);

  useEffect(() => {
    if (!id) {
      setLoading(false);
      return;
    }

    let isMounted = true;

    const loadPost = async () => {
      try {
        const [currentPost, allPosts] = await Promise.all([
          fetchBlogPostById(id),
          fetchBlogPosts(),
        ]);

        if (!isMounted) return;

        setPost(currentPost);

        const visibleRelated = allPosts
          .filter((item) => item.id !== id)
          .sort(
            (a, b) =>
              new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
          );

        const topicMatches = currentPost
          ? visibleRelated.filter((item) => item.topic === currentPost.topic)
          : visibleRelated;

        setRelatedPosts((topicMatches.length ? topicMatches : visibleRelated).slice(0, 3));
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    loadPost();
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });

    return () => {
      isMounted = false;
    };
  }, [id]);

  const isSaved = useMemo(() => {
    if (!id) return false;
    return savedIds.includes(id);
  }, [id, savedIds]);

  const toggleBookmark = () => {
    if (!id) return;

    setSavedIds((current) => {
      const next = current.includes(id)
        ? current.filter((item) => item !== id)
        : [...current, id];

      try {
        window.localStorage.setItem(BOOKMARK_KEY, JSON.stringify(next));
      } catch {
        // ignore storage errors
      }

      setActionMessage(next.includes(id) ? "Saved to bookmarks" : "Removed from bookmarks");
      return next;
    });
  };

  const sharePost = async () => {
    if (!post) return;

    try {
      const shareData = {
        title: post.blog_heading,
        text: post.blog_description,
        url: window.location.href,
      };

      if (navigator.share) {
        await navigator.share(shareData);
        setActionMessage("Shared successfully");
        return;
      }

      await navigator.clipboard.writeText(window.location.href);
      setActionMessage("Link copied to clipboard");
    } catch {
      setActionMessage("Sharing is unavailable in this browser");
    }
  };

  if (loading) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-text-primary border-t-transparent" />
      </div>
    );
  }

  if (!post) {
    return (
      <div className="mx-auto flex min-h-[60vh] max-w-3xl flex-col items-center justify-center gap-6 text-center">
        <div className="space-y-3">
          <p className="section-kicker">Post not found</p>
          <h1 className="text-3xl font-black tracking-tight md:text-5xl">
            The story you are looking for does not exist.
          </h1>
          <p className="text-text-secondary">
            This article may have been moved, removed, or the ID may be invalid.
          </p>
        </div>
        <Link to="/blog" className="pill-button btn-dark">
          Back to Archive
        </Link>
      </div>
    );
  }

  const paragraphBlocks = post.blogtext
    .split(/\n\s*\n/)
    .map((block) => block.trim())
    .filter(Boolean);

  return (
    <article className="space-y-12 pb-20">
      <Link
        to="/blog"
        className="inline-flex items-center gap-2 text-sm font-semibold text-text-secondary transition-colors hover:text-text-primary"
      >
        <ArrowLeft size={16} />
        <span>Back to Archive</span>
      </Link>

      <header className="space-y-8">
        <div className="space-y-4">
          <span className="inline-flex rounded-full bg-outer-bg px-3 py-1 text-[10px] font-bold uppercase tracking-[0.24em] text-text-secondary">
            {post.topic}
          </span>
          <h1 className="max-w-5xl text-4xl font-black tracking-tight leading-[1.05] md:text-6xl xl:text-7xl">
            {post.blog_heading}
          </h1>
          <p className="max-w-3xl text-lg leading-8 text-text-secondary md:text-xl">
            {post.blog_description}
          </p>
        </div>

        <div className="flex flex-col gap-4 border-y border-border-base py-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-4">
            <img
              src={post.avatar}
              alt={post.name}
              loading="lazy"
              className="h-12 w-12 rounded-full object-cover grayscale"
            />
            <div>
              <p className="font-bold text-text-primary">{post.name}</p>
              <p className="text-xs text-text-secondary">
                {post.job_roles} • {post.month} • {getReadingTime(post.blogtext)}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={sharePost}
              className="inline-flex items-center justify-center rounded-full border border-border-base p-3 text-text-secondary transition hover:bg-text-primary hover:text-white"
              aria-label="Share this story"
            >
              <Share2 size={18} />
            </button>
            <button
              type="button"
              onClick={toggleBookmark}
              className="inline-flex items-center justify-center rounded-full border border-border-base p-3 text-text-secondary transition hover:bg-text-primary hover:text-white"
              aria-label={isSaved ? "Remove bookmark" : "Save bookmark"}
              aria-pressed={isSaved}
            >
              {isSaved ? <BookmarkCheck size={18} /> : <Bookmark size={18} />}
            </button>
          </div>
        </div>

        {actionMessage && (
          <p className="text-sm text-text-secondary" aria-live="polite">
            {actionMessage}
          </p>
        )}
      </header>

      <div className="overflow-hidden rounded-[32px] border border-border-base">
        <img
          src={post.blog_image}
          alt={post.blog_heading}
          loading="eager"
          className="aspect-[21/9] w-full object-cover"
        />
      </div>

      <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)]">
        <div className="space-y-8">
          {post.quotes && (
            <blockquote className="border-l-4 border-text-primary pl-6 text-xl italic leading-8 text-text-secondary">
              {post.quotes}
            </blockquote>
          )}

          <div className="space-y-6 text-lg leading-8 text-text-secondary">
            {paragraphBlocks.map((block, index) => (
              <p key={index}>{block}</p>
            ))}
            {post.para && <p>{post.para}</p>}
          </div>

          <div className="flex flex-wrap gap-2 pt-4">
            {Array.from(
              new Set(["Design", "Technology", "Future", "UI/UX", post.topic])
            ).map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-outer-bg px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-text-secondary"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <p className="section-kicker">Related stories</p>
          <RecentPostsGrid
            posts={relatedPosts}
            title={post.topic ? `More in ${post.topic}` : "Related Stories"}
          />
        </div>
      </div>
    </article>
  );
}
