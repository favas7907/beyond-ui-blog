import { BlogPost } from "../types";
import { BLOG_POSTS } from "./data";

const getBaseUrl = () => {
  if (typeof window !== "undefined") return process.env.NEXT_PUBLIC_BASE_URL || "/api";
  if (process.env.APP_URL) return `${process.env.APP_URL}/api`;
  return "http://localhost:3000/api";
};

const API_BASE_URL = getBaseUrl();

export async function fetchBlogPosts(): Promise<BlogPost[]> {
  // If we're on the server, we can just return the mock posts directly
  // to avoid self-referential fetch hangs during build/startup
  if (typeof window === "undefined") {
    return BLOG_POSTS;
  }

  try {
    const response = await fetch(`${API_BASE_URL}/blogs`, {
      headers: { 'Accept': 'application/json' },
      next: { revalidate: 3600 }
    });
    if (!response.ok) return BLOG_POSTS;
    const data = await response.json();
    return Array.isArray(data) && data.length > 0 ? data : BLOG_POSTS;
  } catch (error) {
    return BLOG_POSTS;
  }
}

export async function fetchBlogPostById(id: string): Promise<BlogPost | null> {
  if (typeof window === "undefined") {
    return BLOG_POSTS.find(p => p.id === id) || null;
  }

  try {
    const response = await fetch(`${API_BASE_URL}/blogs/${id}`, {
      headers: { 'Accept': 'application/json' },
      next: { revalidate: 3600 }
    });
    if (!response.ok) return BLOG_POSTS.find(p => p.id === id) || null;
    return await response.json();
  } catch (error) {
    return BLOG_POSTS.find(p => p.id === id) || null;
  }
}
