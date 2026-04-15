"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "../lib/utils";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { motion } from "motion/react";

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

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-border-base py-4">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex items-center justify-between h-14">
          {/* Logo */}
          <Link href="/" className="text-[22px] font-bold tracking-tighter text-text-primary flex items-center space-x-2">
            <div className="w-8 h-8 bg-accent-base rounded-lg flex items-center justify-center text-white text-[14px]">B</div>
            <span>Beyond UI.</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-10">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "text-[13px] font-bold uppercase tracking-widest transition-colors hover:text-text-primary",
                  pathname === link.href ? "text-text-primary" : "text-text-muted"
                )}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="text-[13px] font-bold uppercase tracking-widest text-text-muted hover:text-text-primary transition-colors px-4">
              Log In
            </button>
            <button className="pill-button btn-dark px-8">
              Get Started
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
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-full left-0 w-full bg-white border-t border-border-base p-8 space-y-6 shadow-2xl"
        >
          <div className="space-y-4">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className={cn(
                  "block text-2xl font-bold tracking-tighter",
                  pathname === link.href ? "text-text-primary" : "text-text-secondary"
                )}
              >
                {link.name}
              </Link>
            ))}
          </div>
          <div className="pt-6 border-t border-border-base space-y-4">
            <button className="w-full pill-button btn-dark py-4">
              Get Started
            </button>
            <button className="w-full text-[13px] font-bold uppercase tracking-widest text-text-muted py-2">
              Log In
            </button>
          </div>
        </motion.div>
      )}
    </nav>
  );
}
