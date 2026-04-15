import { BlogPost } from "../types";

const API_BASE_URL =
  "https://69de69f4d6de26e11927e6d1.mockapi.io/api/v1";

const RESOURCE = "blogs";

/* ---------------- MOCK DATA ---------------- */

const MOCK_POSTS: BlogPost[] = [
  {
    id: "1",
    blog_heading: "The Future of Minimalist Interface Design",
    blog_image:
      "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&q=80&w=1200",
    blog_description:
      "Exploring how modern interfaces prioritize calm and clarity.",
    blogtext:
      "Minimalism in UI is about clarity and purpose...",
    topic: "Design",
    name: "Elena Rossi",
    avatar: "https://i.pravatar.cc/150?u=elena",
    month: "April 2024",
    job_roles: "Lead Product Designer",
    quotes: "Simplicity is the ultimate sophistication.",
    para: "Design is evolving toward clarity and intent.",
    createdAt: new Date().toISOString(),
  },
];

/* ---------------- HELPERS ---------------- */

function buildUrl(path: string) {
  return `${API_BASE_URL.replace(/\/$/, "")}/${path}`;
}

async function safeFetch<T>(url: string, fallback: T): Promise<T> {
  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 8000);

    const res = await fetch(url, {
      signal: controller.signal,
      cache: "no-store",
    });

    clearTimeout(timeout);

    if (!res.ok) throw new Error(`HTTP ${res.status}`);

    return (await res.json()) as T;
  } catch (err) {
    console.warn("API fallback used:", err);
    return fallback;
  }
}

/* ---------------- API METHODS ---------------- */

export async function fetchBlogPosts(): Promise<BlogPost[]> {
  const data = await safeFetch<any[]>(buildUrl(RESOURCE), MOCK_POSTS);

  if (Array.isArray(data) && data.length > 0) {
    return data as BlogPost[];
  }

  return MOCK_POSTS;
}

export async function fetchBlogPostById(
  id: string
): Promise<BlogPost | null> {
  const data = await safeFetch<any>(buildUrl(`${RESOURCE}/${id}`), null);

  if (data && typeof data === "object") {
    return data as BlogPost;
  }

  return MOCK_POSTS.find((p) => p.id === id) || null;
}
