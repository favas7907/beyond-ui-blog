import { BlogPost } from "../types";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL?.trim() || "";
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
      "In an era of constant digital noise, the most successful interfaces are those that know when to step back. Minimalist design is not about taking things away, but about making sure every element has a clear purpose.\n\nKey trends include high-quality typography, generous whitespace, and subtle micro-interactions that guide the user without distracting them. The goal is to create a sense of flow where the interface becomes an extension of the user's intent.",
    topic: "Design",
    name: "Elena Rossi",
    avatar: "https://i.pravatar.cc/150?u=elena",
    month: "April 2024",
    job_roles: "Lead Product Designer",
    quotes: "Simplicity is the ultimate sophistication in the digital age.",
    para:
      "As we move forward, the challenge for designers will be to maintain this simplicity while handling increasingly complex data and AI-driven features.",
    createdAt: "2024-04-12T09:00:00.000Z",
  },
  {
    id: "2",
    blog_heading: "The Intersection of AI and Editorial Content",
    blog_image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1200",
    blog_description:
      "How generative AI is reshaping the way we think about storytelling and content curation in the modern era.",
    blogtext:
      "Generative AI is not just a tool for automation; it's a new medium for creativity. For editorial platforms, this means the ability to create more personalized, dynamic, and immersive stories. However, the human touch remains irreplaceable. The best AI-enhanced content is that which uses technology to amplify human insight, not replace it.",
    topic: "Technology",
    name: "Marcus Thorne",
    avatar: "https://i.pravatar.cc/150?u=marcus",
    month: "March 2024",
    job_roles: "Tech Strategist",
    quotes: "AI is the brush, but the human is still the artist.",
    para:
      "The future belongs to those who can master the collaboration between human intuition and machine intelligence.",
    createdAt: "2024-03-18T09:00:00.000Z",
  },
  {
    id: "3",
    blog_heading: "Sustainable Web: Building for a Greener Future",
    blog_image:
      "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=1200",
    blog_description:
      "Why performance and efficiency are the new pillars of ethical web design and development.",
    blogtext:
      "The internet has a massive carbon footprint. As developers and designers, we have a responsibility to build products that are not only beautiful and functional but also efficient. This means optimizing assets, reducing unnecessary code, and choosing green hosting solutions.",
    topic: "Sustainability",
    name: "Sarah Chen",
    avatar: "https://i.pravatar.cc/150?u=sarah",
    month: "February 2024",
    job_roles: "Frontend Architect",
    quotes: "Performance is a feature, but efficiency is a responsibility.",
    para: "Every kilobyte saved is a step towards a more sustainable digital ecosystem.",
    createdAt: "2024-02-14T09:00:00.000Z",
  },
  {
    id: "4",
    blog_heading: "The Renaissance of Serif Typography",
    blog_image:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=1200",
    blog_description:
      "Why classic typefaces are making a massive comeback in digital product design and branding.",
    blogtext:
      "For years, sans-serif fonts dominated the web. But we are seeing a return to the elegance and authority of serifs. They provide a sense of history, trust, and editorial quality that sans-serifs sometimes lack.",
    topic: "Typography",
    name: "Julian Vane",
    avatar: "https://i.pravatar.cc/150?u=julian",
    month: "January 2024",
    job_roles: "Brand Designer",
    quotes: "Type is the voice of the interface.",
    para:
      "Choosing the right typeface is about finding the right tone for the conversation you want to have with your users.",
    createdAt: "2024-01-22T09:00:00.000Z",
  },
  {
    id: "5",
    blog_heading: "Crafting Immersive Digital Experiences",
    blog_image:
      "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=1200",
    blog_description:
      "Moving beyond flat design towards depth, texture, and atmospheric interaction.",
    blogtext:
      "The web is becoming more tactile. We are moving away from the flat, sterile designs of the past decade and embracing depth, shadows, and textures that make digital spaces feel more real.",
    topic: "Experience",
    name: "Aria Vance",
    avatar: "https://i.pravatar.cc/150?u=aria",
    month: "December 2023",
    job_roles: "UX Researcher",
    quotes: "Digital doesn't have to mean distant.",
    para:
      "By adding layers and atmosphere, we can create products that resonate on a deeper emotional level.",
    createdAt: "2023-12-14T09:00:00.000Z",
  },
  {
    id: "6",
    blog_heading: "The Power of Micro-Interactions",
    blog_image:
      "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&q=80&w=1200",
    blog_description:
      "Small details that make a big difference in user engagement and satisfaction.",
    blogtext:
      "Micro-interactions are the silent ambassadors of your brand. They are the small animations and feedback loops that make an interface feel alive and responsive.",
    topic: "Interaction",
    name: "Leo Grant",
    avatar: "https://i.pravatar.cc/150?u=leo",
    month: "November 2023",
    job_roles: "Interaction Designer",
    quotes: "The details are not the details. They make the design.",
    para:
      "Focusing on the small moments can lead to a significantly better overall experience.",
    createdAt: "2023-11-19T09:00:00.000Z",
  },
  {
    id: "7",
    blog_heading: "Designing for Accessibility in 2024",
    blog_image:
      "https://images.unsplash.com/photo-1586717791821-3f44a563eb4c?auto=format&fit=crop&q=80&w=1200",
    blog_description:
      "Why inclusive design is no longer optional, but a core requirement for all digital products.",
    blogtext:
      "Accessibility is not a checklist; it's a mindset. It's about ensuring that everyone, regardless of their abilities, can access and enjoy your content.",
    topic: "Accessibility",
    name: "Mia Wong",
    avatar: "https://i.pravatar.cc/150?u=mia",
    month: "October 2023",
    job_roles: "Accessibility Specialist",
    quotes: "Inclusive design is better design for everyone.",
    para:
      "When we build for the margins, we build better products for the center as well.",
    createdAt: "2023-10-28T09:00:00.000Z",
  },
];

function buildUrl(path: string) {
  if (!API_BASE_URL) return "";
  return `${API_BASE_URL.replace(/\/+$/, "")}/${path.replace(/^\/+/, "")}`;
}

function toText(value: unknown, fallback = ""): string {
  return typeof value === "string" && value.trim() ? value.trim() : fallback;
}

function normalizePost(post: Record<string, unknown>): BlogPost {
  return {
    id: toText(post.id, ""),
    blog_heading: toText(post.blog_heading, "Untitled Story"),
    blog_image: toText(
      post.blog_image,
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80&w=1200"
    ),
    blog_description: toText(post.blog_description, ""),
    blogtext: toText(post.blogtext, ""),
    topic: toText(post.topic, "Story"),
    name: toText(post.name, "Beyond UI"),
    avatar: toText(post.avatar, "https://i.pravatar.cc/150?u=beyondui"),
    month: toText(post.month, "April 2024"),
    job_roles: toText(post.job_roles, "Editorial Team"),
    quotes: toText(post.quotes, ""),
    para: toText(post.para, ""),
    createdAt: toText(post.createdAt, new Date().toISOString()),
  };
}

function sortByNewest(posts: BlogPost[]) {
  return [...posts].sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );
}

async function safeFetch<T>(url: string, fallback: T): Promise<T> {
  if (!url) return fallback;

  try {
    const controller = new AbortController();
    const timeout = window.setTimeout(() => controller.abort(), 8000);

    const response = await fetch(url, {
      signal: controller.signal,
      cache: "no-store",
    });

    window.clearTimeout(timeout);

    if (!response.ok) throw new Error(`HTTP ${response.status}`);

    return (await response.json()) as T;
  } catch (error) {
    console.error("Fetch failed:", error);
    return fallback;
  }
}

export async function fetchBlogPosts(): Promise<BlogPost[]> {
  const data = await safeFetch<unknown>(buildUrl(RESOURCE), MOCK_POSTS);

  if (Array.isArray(data) && data.length > 0) {
    return sortByNewest(data.map((post) => normalizePost(post as Record<string, unknown>)));
  }

  return sortByNewest(MOCK_POSTS);
}

export async function fetchBlogPostById(id: string): Promise<BlogPost | null> {
  const data = await safeFetch<unknown>(buildUrl(`${RESOURCE}/${id}`), null);

  if (data && typeof data === "object" && !Array.isArray(data)) {
    const normalized = normalizePost(data as Record<string, unknown>);
    if (normalized.id === id) return normalized;
  }

  const fallback = MOCK_POSTS.find((post) => post.id === id) || null;
  return fallback ? normalizePost(fallback) : null;
}
