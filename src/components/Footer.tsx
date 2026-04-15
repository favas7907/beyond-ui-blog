import Link from "next/link";
import { Github, Twitter, Linkedin, Instagram, ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-border-base bg-white py-24">
      <div className="editorial-container">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-20">
          <div className="md:col-span-5 space-y-8">
            <Link href="/" className="group flex items-center space-x-3">
              <div className="w-10 h-10 bg-accent-base rounded-2xl flex items-center justify-center text-white text-[16px] font-bold transition-transform duration-500 group-hover:rotate-12">
                B
              </div>
              <span className="text-[22px] font-bold tracking-tighter text-text-primary">
                Beyond UI.
              </span>
            </Link>
            <p className="text-[16px] text-text-secondary leading-relaxed max-w-sm font-medium opacity-80">
              A premium editorial platform exploring the intersection of design, technology, and human experience through a curated lens.
            </p>
            <div className="flex items-center space-x-6">
              {[Twitter, Instagram, Linkedin, Github].map((Icon, i) => (
                <Icon key={i} size={20} className="text-text-muted hover:text-text-primary cursor-pointer transition-all hover:-translate-y-1" />
              ))}
            </div>
          </div>
          
          <div className="md:col-span-2 space-y-6">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-text-primary">Platform</h4>
            <ul className="space-y-4 text-[14px] font-bold text-text-muted">
              <li><Link href="/blog" className="hover:text-text-primary transition-colors flex items-center space-x-1 group"><span>Archive</span><ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" /></Link></li>
              <li><Link href="/features" className="hover:text-text-primary transition-colors flex items-center space-x-1 group"><span>Features</span><ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" /></Link></li>
              <li><Link href="/about" className="hover:text-text-primary transition-colors flex items-center space-x-1 group"><span>Our Story</span><ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" /></Link></li>
              <li><Link href="/contact" className="hover:text-text-primary transition-colors flex items-center space-x-1 group"><span>Contact</span><ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" /></Link></li>
            </ul>
          </div>

          <div className="md:col-span-2 space-y-6">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-text-primary">Legal</h4>
            <ul className="space-y-4 text-[14px] font-bold text-text-muted">
              <li className="hover:text-text-primary cursor-pointer transition-colors">Privacy Policy</li>
              <li className="hover:text-text-primary cursor-pointer transition-colors">Terms of Service</li>
              <li className="hover:text-text-primary cursor-pointer transition-colors">Cookie Policy</li>
              <li className="hover:text-text-primary cursor-pointer transition-colors">Accessibility</li>
            </ul>
          </div>

          <div className="md:col-span-3 space-y-8">
            <div className="space-y-4">
              <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-text-primary">Newsletter</h4>
              <p className="text-[14px] text-text-secondary font-medium leading-relaxed">Get the latest editorial stories delivered to your inbox weekly.</p>
            </div>
            <div className="space-y-3">
              <input 
                type="email" 
                placeholder="Email address"
                className="w-full px-6 py-4 rounded-2xl border border-border-base bg-gray-50 text-[14px] focus:outline-none focus:ring-8 focus:ring-accent-base/5 transition-all"
              />
              <button className="w-full pill-button btn-dark py-4 text-[12px]">
                Join the Circle
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-border-base text-[11px] font-bold uppercase tracking-widest text-text-muted gap-6">
          <div className="flex items-center space-x-2">
            <span>© {new Date().getFullYear()} Beyond UI Editorial</span>
            <span className="w-1 h-1 bg-border-base rounded-full" />
            <span>Handcrafted with Precision</span>
          </div>
          <div className="flex items-center space-x-8">
            <span className="hover:text-text-primary cursor-pointer transition-colors">English (US)</span>
            <span className="hover:text-text-primary cursor-pointer transition-colors">System Status</span>
            <span className="hover:text-text-primary cursor-pointer transition-colors">Back to Top</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
