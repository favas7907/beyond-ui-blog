import { Link, useLocation } from "react-router-dom";
import { cn } from "../lib/utils";
import { Menu, X, Search } from "lucide-react";
import { useState } from "react";

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

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-border-base px-8 py-4">
      <div className="flex items-center justify-between h-12">
        {/* Logo */}
        <Link to="/" className="text-[18px] font-extrabold tracking-tighter text-text-primary">
          BEYOND UI
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className={cn(
                "text-[13px] font-medium transition-colors hover:text-text-primary",
                location.pathname === link.href ? "text-text-primary" : "text-text-secondary"
              )}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center space-x-3">
          <button className="pill-button text-text-primary">
            Sign In
          </button>
          <button className="pill-button btn-dark">
            Subscribe
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden p-2 text-text-primary"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-t border-border-light p-6 space-y-4 shadow-xl">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              onClick={() => setIsMenuOpen(false)}
              className={cn(
                "block text-lg font-medium",
                location.pathname === link.href ? "text-text-primary" : "text-text-secondary"
              )}
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-4 border-t border-border-light">
            <button className="w-full pill-button bg-text-primary text-white">
              Get Started
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
