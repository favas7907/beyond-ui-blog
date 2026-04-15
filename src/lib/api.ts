import { BlogPost } from "../types";
import { BLOG_POSTS } from "./data";

const getBaseUrl = () => {
  const envUrl = process.env.NEXT_PUBLIC_BASE_URL;
  
  // If we're in the browser, use the env var or default to relative /api
  if (typeof window !== "undefined") {
    return envUrl || "/api";
  }
  
  // If we're on the server:
  // 1. If it's a full URL (starts with http), use it
  if (envUrl?.startsWith("http")) {
    return envUrl;
  }
  
  // 2. If APP_URL is set, use it
  if (process.env.APP_URL) {
    const baseUrl = process.env.APP_URL.endsWith("/") 
      ? process.env.APP_URL.slice(0, -1) 
      : process.env.APP_URL;
    return `${baseUrl}/api`;
  }
  
  // 3. Fallback for local development
  return "http://localhost:3000/api";
};

const API_BASE_URL = getBaseUrl();

/**
 * Defensive fetch with timeout
 */
async function fetchWithTimeout(url: string, options: RequestInit = {}, timeout = 10000) {
  const controller = new AbortController();
  const id = setTimeout(() => controller.abort(), timeout);
  
  try {
    const response = await fetch(url, {
      ...options,
      signal: controller.signal,
    });
    clearTimeout(id);
    return response;
  } catch (error: any) {
    clearTimeout(id);
    // If it's a timeout error, we don't want to spam logs if we have a fallback
    if (error.name === 'AbortError' || error.name === 'TimeoutError') {
      return { ok: false, status: 408 } as Response;
    }
    throw error;
  }
}

export async function fetchBlogPosts(): Promise<BlogPost[]> {
  // Server-side optimization: return local data directly to avoid self-fetch deadlocks
  // unless we are explicitly pointing to an external MockAPI
  if (typeof window === "undefined" && !process.env.NEXT_PUBLIC_BASE_URL?.includes("mockapi.io")) {
    return BLOG_POSTS;
  }

  try {
    const response = await fetchWithTimeout(`${API_BASE_URL}/blogs`, {
      headers: { 'Accept': 'application/json' },
      next: { revalidate: 3600 }
    });
    
    if (!response.ok) {
      return BLOG_POSTS;
    }
    
    const data = await response.json();
    return Array.isArray(data) && data.length > 0 ? data : BLOG_POSTS;
  } catch (error) {
    // Silent fallback
    return BLOG_POSTS;
  }
}

export async function fetchBlogPostById(id: string): Promise<BlogPost | null> {
  if (typeof window === "undefined" && !process.env.NEXT_PUBLIC_BASE_URL?.includes("mockapi.io")) {
    return BLOG_POSTS.find(p => p.id === id) || null;
  }

  try {
    const response = await fetchWithTimeout(`${API_BASE_URL}/blogs/${id}`, {
      headers: { 'Accept': 'application/json' },
      next: { revalidate: 3600 }
    });
    
    if (!response.ok) {
      return BLOG_POSTS.find(p => p.id === id) || null;
    }
    
    return await response.json();
  } catch (error) {
    // Silent fallback
    return BLOG_POSTS.find(p => p.id === id) || null;
  }
}
