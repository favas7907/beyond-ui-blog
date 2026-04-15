import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="space-y-14 pb-20">
      <section className="mx-auto max-w-4xl space-y-6 text-center">
        <p className="section-kicker">About Beyond UI</p>
        <h1 className="section-title">
          Editorial design that feels calm, premium, and intentional.
        </h1>
        <p className="section-body">
          Beyond UI is built around one simple idea: digital reading should feel as
          crafted and clear as the best editorial publications.
        </p>

        <div className="flex flex-wrap justify-center gap-3">
          <Link to="/blog" className="pill-button btn-dark">
            Browse Archive
          </Link>
          <Link to="/features" className="pill-button">
            Explore Features
          </Link>
        </div>
      </section>

      <section className="overflow-hidden rounded-[32px] border border-border-base">
        <img
          src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&q=80&w=1600"
          alt="Editorial workspace with design materials"
          loading="eager"
          className="aspect-[16/7] w-full object-cover"
        />
      </section>

      <section className="grid gap-8 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)]">
        <div className="space-y-6">
          <p className="section-kicker">Our story</p>
          <h2 className="text-3xl font-black tracking-tight md:text-4xl">
            Built for people who care about structure, rhythm, and the reading experience.
          </h2>
          <p className="section-body">
            Beyond UI was designed to demonstrate how a modern blog can feel premium
            without becoming noisy. Every card, every hierarchy decision, and every
            interaction is tuned toward clarity.
          </p>
          <p className="section-body">
            The result is a white editorial canvas framed by a soft neutral outer surface,
            with bold typography, restrained motion, and a layout that feels confident on
            large screens and comfortable on mobile.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
          <div className="premium-card p-6">
            <p className="text-3xl font-black tracking-tight">07</p>
            <p className="mt-2 text-sm text-text-secondary">Live editorial stories in the archive</p>
          </div>
          <div className="premium-card p-6">
            <p className="text-3xl font-black tracking-tight">03</p>
            <p className="mt-2 text-sm text-text-secondary">Core journeys across the demo</p>
          </div>
          <div className="premium-card p-6">
            <p className="text-3xl font-black tracking-tight">100%</p>
            <p className="mt-2 text-sm text-text-secondary">Responsive layout coverage</p>
          </div>
        </div>
      </section>
    </div>
  );
}
