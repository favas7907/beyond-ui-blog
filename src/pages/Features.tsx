import { Cpu, Globe, Layout, Palette, Shield, Zap } from "lucide-react";
import { Link } from "react-router-dom";

const FEATURES = [
  {
    icon: Layout,
    title: "Editorial Layouts",
    description:
      "Structured cards, a strong hero rail, and a clean archive flow that keeps the reading experience calm.",
  },
  {
    icon: Zap,
    title: "Fast Story Search",
    description:
      "URL-driven search keeps filtering shareable, reload-safe, and easy to return to on any device.",
  },
  {
    icon: Shield,
    title: "Defensive Data Layer",
    description:
      "MockAPI fallback handling keeps the app functional even when the remote endpoint is unavailable.",
  },
  {
    icon: Globe,
    title: "Responsive by Default",
    description:
      "The layout scales from desktop to mobile without breaking the editorial hierarchy or content rhythm.",
  },
  {
    icon: Cpu,
    title: "Clean Routing",
    description:
      "React Router keeps the experience smooth across pages and supports direct navigation on Vercel.",
  },
  {
    icon: Palette,
    title: "Premium Typography",
    description:
      "Bold headings, muted body text, and a restrained visual system that feels handcrafted.",
  },
];

export default function Features() {
  return (
    <div className="space-y-14 pb-20">
      <section className="max-w-3xl space-y-4">
        <p className="section-kicker">Features</p>
        <h1 className="section-title">Built to feel premium and editorial.</h1>
        <p className="section-body">
          Beyond UI combines a refined visual language with stable routing, responsive
          structure, and a clean content delivery flow.
        </p>
      </section>

      <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {FEATURES.map((feature) => {
          const Icon = feature.icon;

          return (
            <article key={feature.title} className="premium-card p-8 transition-transform duration-300 hover:-translate-y-1">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-outer-bg text-text-primary">
                <Icon size={28} />
              </div>
              <h2 className="text-xl font-bold">{feature.title}</h2>
              <p className="mt-3 text-sm leading-7 text-text-secondary">
                {feature.description}
              </p>
            </article>
          );
        })}
      </section>

      <section className="premium-card bg-outer-bg p-8 text-center md:p-12">
        <p className="section-kicker">Next step</p>
        <h2 className="mt-3 text-3xl font-black tracking-tight md:text-5xl">
          Ready to explore the archive?
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-text-secondary">
          Browse the latest stories, contact the editorial team, or review the design
          system that powers the whole experience.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link to="/blog" className="pill-button btn-dark">
            Browse Stories
          </Link>
          <Link to="/contact" className="pill-button">
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
}
