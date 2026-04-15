import { BlogPost } from "../types";

const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL ||
  "https://69de69f4d6de26e11927e6d1.mockapi.io/api/v1";

const RESOURCE = "blogs";

const MOCK_POSTS: BlogPost[] = [
  {
    id: "1",
    blog_heading: "The Future of Minimalist Interface Design",
    blog_image: "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&q=80&w=1200",
    blog_description: "Exploring calm UI design systems.",
    blogtext: "Minimalism is about clarity and purpose...",
    topic: "Design",
    name: "Elena Rossi",
    avatar: "https://i.pravatar.cc/150?u=elena",
    month: "April 2024",
    job_roles: "Lead Product Designer",
    quotes: "Simplicity is sophistication.",
    para: "Design must stay simple even when systems grow complex.",
    createdAt: new Date().toISOString(),
  }
];

function buildUrl(path: string) {
  return `${API_BASE_URL}/${path}`;
}

async function safeFetch<T>(url: string, fallback: T): Promise<T> {
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error("Network error");
    return await res.json();
  } catch (err) {
    console.error("API error:", err);
    return fallback;
  }
}

export async function fetchBlogPosts(): Promise<BlogPost[]> {
  const data = await safeFetch<BlogPost[]>(buildUrl(RESOURCE), MOCK_POSTS);
  return Array.isArray(data) ? data : MOCK_POSTS;
}

export async function fetchBlogPostById(id: string): Promise<BlogPost | null> {
  const data = await safeFetch<BlogPost | null>(
    buildUrl(`${RESOURCE}/${id}`),
    null
  );

  if (data) return data;

  return MOCK_POSTS.find((p) => p.id === id) || null;
}
