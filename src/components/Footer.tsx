import { Link } from "react-router-dom";
import { Github, Twitter, Linkedin, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-border-base bg-white py-16">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          <div className="md:col-span-4 space-y-6">
            <Link to="/" className="text-2xl font-bold tracking-tighter text-text-primary">
              Beyond UI.
            </Link>
            <p className="text-[14px] text-text-secondary leading-relaxed max-w-xs">
              A premium editorial platform exploring the intersection of design, technology, and human experience.
            </p>
            <div className="flex items-center space-x-4">
              <Twitter size={18} className="text-text-muted hover:text-text-primary cursor-pointer transition-colors" />
              <Instagram size={18} className="text-text-muted hover:text-text-primary cursor-pointer transition-colors" />
              <Linkedin size={18} className="text-text-muted hover:text-text-primary cursor-pointer transition-colors" />
              <Github size={18} className="text-text-muted hover:text-text-primary cursor-pointer transition-colors" />
            </div>
          </div>
          
          <div className="md:col-span-2 space-y-4">
            <h4 className="text-[11px] font-bold uppercase tracking-widest text-text-primary">Platform</h4>
            <ul className="space-y-3 text-[14px] text-text-secondary">
              <li><Link to="/blog" className="hover:text-text-primary transition-colors">Archive</Link></li>
              <li><Link to="/features" className="hover:text-text-primary transition-colors">Features</Link></li>
              <li><Link to="/about" className="hover:text-text-primary transition-colors">Our Story</Link></li>
              <li><Link to="/contact" className="hover:text-text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div className="md:col-span-2 space-y-4">
            <h4 className="text-[11px] font-bold uppercase tracking-widest text-text-primary">Legal</h4>
            <ul className="space-y-3 text-[14px] text-text-secondary">
              <li className="hover:text-text-primary cursor-pointer transition-colors">Privacy Policy</li>
              <li className="hover:text-text-primary cursor-pointer transition-colors">Terms of Service</li>
              <li className="hover:text-text-primary cursor-pointer transition-colors">Cookie Policy</li>
            </ul>
          </div>

          <div className="md:col-span-4 space-y-6">
            <h4 className="text-[11px] font-bold uppercase tracking-widest text-text-primary">Newsletter</h4>
            <p className="text-[14px] text-text-secondary">Get the latest editorial stories delivered to your inbox.</p>
            <div className="flex space-x-2">
              <input 
                type="email" 
                placeholder="Email address"
                className="flex-grow px-4 py-2 rounded-full border border-border-base bg-gray-50 text-[13px] focus:outline-none focus:ring-4 focus:ring-accent-base/5"
              />
              <button className="pill-button btn-dark px-6 py-2 text-[13px]">
                Join
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-border-base text-[12px] text-text-muted gap-4">
          <div>© {new Date().getFullYear()} Beyond UI Editorial. All rights reserved.</div>
          <div className="flex items-center space-x-6">
            <span>English (US)</span>
            <span>System Status</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
