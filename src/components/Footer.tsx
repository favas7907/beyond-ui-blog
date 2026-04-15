import { Link } from "react-router-dom";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-border-base bg-inner-bg">
      <div className="page-container py-10 sm:py-12">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_0.8fr_0.8fr]">
          <div className="space-y-4">
            <Link
              to="/"
              className="inline-flex text-[18px] font-black tracking-[0.22em] text-text-primary"
            >
              BEYOND UI
            </Link>
            <p className="max-w-xl text-sm leading-7 text-text-secondary">
              A calm editorial blog experience built for premium storytelling,
              responsive layouts, and a refined reading flow.
            </p>

            <div className="flex items-center gap-3">
              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border-base text-text-secondary transition hover:bg-text-primary hover:text-white"
                aria-label="GitHub"
              >
                <Github size={18} />
              </a>
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border-base text-text-secondary transition hover:bg-text-primary hover:text-white"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="mailto:editorial@beyondui.com"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border-base text-text-secondary transition hover:bg-text-primary hover:text-white"
                aria-label="Email"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <p className="section-kicker">Explore</p>
            <div className="flex flex-col gap-3 text-sm">
              <Link to="/blog" className="text-text-secondary hover:text-text-primary">
                Archive
              </Link>
              <Link to="/features" className="text-text-secondary hover:text-text-primary">
                Features
              </Link>
              <Link to="/about" className="text-text-secondary hover:text-text-primary">
                About
              </Link>
            </div>
          </div>

          <div className="space-y-4">
            <p className="section-kicker">Contact</p>
            <div className="flex flex-col gap-3 text-sm">
              <Link to="/contact" className="text-text-secondary hover:text-text-primary">
                Editorial enquiries
              </Link>
              <a
                href="mailto:editorial@beyondui.com"
                className="text-text-secondary hover:text-text-primary"
              >
                editorial@beyondui.com
              </a>
              <a href="tel:+15551234567" className="text-text-secondary hover:text-text-primary">
                +1 (555) 123-4567
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-border-base pt-6 text-sm text-text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Beyond UI Editorial. All rights reserved.</p>
          <p>Designed to feel calm, clear, and premium.</p>
        </div>
      </div>
    </footer>
  );
}
