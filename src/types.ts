export interface BlogPost {
  id: string;
  blog_heading: string;
  blog_image: string;
  blog_description: string;
  blogtext: string;
  topic: string;
  name: string;
  avatar: string;
  month: string;
  job_roles: string;
  quotes: string;
  para: string;
  createdAt: string;
}

export interface ContactForm {
  name: string;
  email: string;
  message: string;
}
