import { Link } from "react-router-dom";
import { Github, Twitter, Linkedin, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="mt-auto flex justify-between items-center text-[11px] text-text-muted border-t border-border-base pt-4 px-8 pb-8">
      <div>© {new Date().getFullYear()} Beyond UI Editorial. All rights reserved.</div>
      <div className="flex gap-4">
        <span className="cursor-pointer hover:text-text-primary transition-colors">Privacy Policy</span>
        <span className="cursor-pointer hover:text-text-primary transition-colors">Terms of Service</span>
        <span className="cursor-pointer hover:text-text-primary transition-colors">Newsletter</span>
      </div>
    </footer>
  );
}
