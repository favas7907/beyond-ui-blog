import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { cn } from "../lib/utils";

const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "Blog", href: "/blog" },
  { name: "Features", href: "/features" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const isActive = useMemo(() => {
    return (href: string) => {
      if (href === "/") return location.pathname === "/";
      if (href === "/blog") return location.pathname === "/blog" || location.pathname.startsWith("/post/");
      return location.pathname === href;
    };
  }, [location.pathname]);

  return (
    <header className="sticky top-0 z-50 border-b border-border-base/80 bg-inner-bg/95 backdrop-blur">
      <div className="page-container relative">
        <div className="flex h-20 items-center justify-between gap-4">
          <Link
            to="/"
            className="text-[18px] font-black tracking-[0.22em] text-text-primary transition-colors hover:text-text-secondary"
          >
            BEYOND UI
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={cn(
                  "text-[13px] font-medium tracking-wide transition-colors hover:text-text-primary",
                  isActive(link.href) ? "text-text-primary" : "text-text-secondary"
                )}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <Link to="/blog" className="pill-button">
              Read Stories
            </Link>
            <Link to="/contact" className="pill-button btn-dark">
              Subscribe
            </Link>
          </div>

          <button
            type="button"
            className="inline-flex items-center justify-center rounded-full border border-border-base p-3 text-text-primary transition hover:bg-text-primary hover:text-white md:hidden"
            onClick={() => setIsMenuOpen((value) => !value)}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
            aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {isMenuOpen && (
          <div
            id="mobile-navigation"
            className="absolute inset-x-0 top-full z-50 border-b border-border-base bg-inner-bg px-4 py-5 shadow-[0_24px_60px_-40px_rgba(15,15,20,0.45)] md:hidden"
          >
            <nav className="space-y-3">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className={cn(
                    "block rounded-2xl px-4 py-3 text-[15px] font-medium transition-colors",
                    isActive(link.href) ? "bg-outer-bg text-text-primary" : "text-text-secondary"
                  )}
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            <div className="mt-4 flex gap-3 border-t border-border-base pt-4">
              <Link to="/blog" className="pill-button flex-1 justify-center">
                Read Stories
              </Link>
              <Link to="/contact" className="pill-button btn-dark flex-1 justify-center">
                Subscribe
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
