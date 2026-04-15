"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "Blog", href: "/blog" },
  { name: "Features", href: "/features" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav 
      className={cn(
        "sticky top-0 z-50 transition-all duration-500",
        scrolled ? "bg-white/90 backdrop-blur-xl border-b border-border-base py-3" : "bg-white py-6"
      )}
    >
      <div className="editorial-container">
        <div className="flex items-center justify-between h-12">
          {/* Logo */}
          <Link href="/" className="group flex items-center space-x-3">
            <div className="w-10 h-10 bg-accent-base rounded-2xl flex items-center justify-center text-white text-[16px] font-bold transition-transform duration-500 group-hover:rotate-12">
              B
            </div>
            <span className="text-[20px] font-bold tracking-tighter text-text-primary">
              Beyond UI.
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-10">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "text-[12px] font-bold uppercase tracking-[0.2em] transition-all duration-300 relative py-1",
                  pathname === link.href 
                    ? "text-text-primary after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-accent-base" 
                    : "text-text-muted hover:text-text-primary"
                )}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-6">
            <button className="text-[12px] font-bold uppercase tracking-widest text-text-muted hover:text-text-primary transition-colors">
              Log In
            </button>
            <button className="pill-button btn-dark">
              Subscribe
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2 text-text-primary transition-transform active:scale-90"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden absolute top-full left-0 w-full bg-white border-t border-border-base overflow-hidden shadow-2xl"
          >
            <div className="p-8 space-y-8">
              <div className="space-y-6">
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={cn(
                      "block text-3xl font-bold tracking-tighter transition-colors",
                      pathname === link.href ? "text-text-primary" : "text-text-muted hover:text-text-primary"
                    )}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
              <div className="pt-8 border-t border-border-base space-y-4">
                <button className="w-full pill-button btn-dark py-4 text-[14px]">
                  Subscribe Now
                </button>
                <button className="w-full text-[12px] font-bold uppercase tracking-widest text-text-muted py-2">
                  Already have an account? Log In
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
