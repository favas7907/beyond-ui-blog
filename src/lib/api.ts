import { BlogPost } from "../types";

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL ||
  "https://69de69f4d6de26e11927e6d1.mockapi.io/api/v1";

const RESOURCE = "blogs";

const MOCK_POSTS: BlogPost[] = [
  {
    id: "1",
    blog_heading: "The Future of Minimalist Interface Design",
    blog_image:
      "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&q=80&w=1200",
    blog_description:
      "Exploring how the next generation of digital products will prioritize calm, focus, and human-centric interaction patterns.",
    blogtext:
      "In an era of constant digital noise, the most successful interfaces are those that know when to step back. Minimalist design is not about taking things away, but about making sure every element has a clear purpose.\n\nKey trends include high-quality typography, generous whitespace, and subtle micro-interactions that guide the user without distracting them.",
    topic: "Design",
    name: "Elena Rossi",
    avatar: "https://i.pravatar.cc/150?u=elena",
    month: "April 2024",
    job_roles: "Lead Product Designer",
    quotes: "Simplicity is the ultimate sophistication in the digital age.",
    para:
      "As we move forward, the challenge for designers will be to maintain this simplicity while handling increasingly complex data and AI-driven features.",
    createdAt: new Date().toISOString(),
  },
  {
    id: "2",
    blog_heading: "The Intersection of AI and Editorial Content",
    blog_image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1200",
    blog_description:
      "How generative AI is reshaping the way we think about storytelling and content curation in the modern era.",
    blogtext:
      "Generative AI is not just a tool for automation; it's a new medium for creativity. For editorial platforms, this means the ability to create more personalized, dynamic, and immersive stories.",
    topic: "Technology",
    name: "Marcus Thorne",
    avatar: "https://i.pravatar.cc/150?u=marcus",
    month: "March 2024",
    job_roles: "Tech Strategist",
    quotes: "AI is the brush, but the human is still the artist.",
    para:
      "The future belongs to those who can master the collaboration between human intuition and machine intelligence.",
    createdAt: new Date().toISOString(),
  },
];

function buildUrl(path: string) {
  return `${API_BASE_URL.replace(/\/$/, "")}/${path.replace(/^\//, "")}`;
}

async function safeFetch<T>(url: string, fallback: T): Promise<T> {
  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 8000);

    const response = await fetch(url, {
      signal: controller.signal,
      cache: "no-store",
    });

    clearTimeout(timeout);

    if (!response.ok) throw new Error(`HTTP ${response.status}`);

    const data = (await response.json()) as unknown;
    return data as T;
  } catch (error) {
    console.error("Fetch failed:", error);
    return fallback;
  }
}

export async function fetchBlogPosts(): Promise<BlogPost[]> {
  const data = await safeFetch<unknown>(buildUrl(RESOURCE), MOCK_POSTS);

  if (Array.isArray(data) && data.length > 0) {
    return data as BlogPost[];
  }

  return MOCK_POSTS;
}

export async function fetchBlogPostById(id: string): Promise<BlogPost | null> {
  const data = await safeFetch<unknown>(buildUrl(`${RESOURCE}/${id}`), null);

  if (data && typeof data === "object") {
    return data as BlogPost;
  }

  return MOCK_POSTS.find((post) => post.id === id) || null;
}
