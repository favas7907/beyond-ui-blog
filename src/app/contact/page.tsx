import { Mail, MapPin, Phone, Send } from "lucide-react";
import * as motion from "motion/react-client";

export default function Contact() {
  return (
    <div className="space-y-24 pb-24 px-6 md:px-12 pt-16">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-4xl space-y-6">
          <h1 className="text-5xl md:text-8xl font-bold tracking-tighter leading-[0.95]">
            Get in <br /> Touch.
          </h1>
          <p className="text-xl md:text-2xl text-text-secondary leading-relaxed max-w-2xl font-medium">
            Have a story to share, a question to ask, or just want to say hello? We'd love to hear from you.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24">
        {/* Contact Info */}
        <div className="space-y-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-gray-50 border border-border-base flex items-center justify-center text-text-primary">
                <Mail size={20} />
              </div>
              <div>
                <h3 className="font-bold text-[16px]">Email Us</h3>
                <p className="text-text-secondary text-[14px]">editorial@beyondui.com</p>
                <p className="text-text-secondary text-[14px]">support@beyondui.com</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-gray-50 border border-border-base flex items-center justify-center text-text-primary">
                <MapPin size={20} />
              </div>
              <div>
                <h3 className="font-bold text-[16px]">Visit Us</h3>
                <p className="text-text-secondary text-[14px]">123 Design District</p>
                <p className="text-text-secondary text-[14px]">San Francisco, CA 94103</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-gray-50 border border-border-base flex items-center justify-center text-text-primary">
                <Phone size={20} />
              </div>
              <div>
                <h3 className="font-bold text-[16px]">Call Us</h3>
                <p className="text-text-secondary text-[14px]">+1 (555) 123-4567</p>
                <p className="text-text-secondary text-[14px]">Mon-Fri, 9am-6pm PST</p>
              </div>
            </div>
          </div>

          <div className="p-10 rounded-premium bg-accent-base text-white space-y-6">
            <h4 className="font-bold text-2xl tracking-tight">Join the Community</h4>
            <p className="opacity-70 text-[15px] leading-relaxed">
              Sign up for our weekly editorial digest and get the latest stories delivered straight to your inbox.
            </p>
            <button className="pill-button bg-white text-text-primary w-full border-none hover:bg-gray-100">
              Join Now
            </button>
          </div>
        </div>

        {/* Contact Form */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gray-50 p-10 md:p-12 rounded-premium border border-border-base space-y-10"
        >
          <div className="space-y-6">
            <div className="space-y-2">
              <label className="text-[11px] font-bold uppercase tracking-widest text-text-muted">Full Name</label>
              <input 
                type="text" 
                placeholder="John Doe"
                className="w-full px-6 py-4 rounded-2xl bg-white border border-border-base focus:ring-4 focus:ring-accent-base/5 focus:outline-none transition-all text-[14px]"
              />
            </div>
            <div className="space-y-2">
              <label className="text-[11px] font-bold uppercase tracking-widest text-text-muted">Email Address</label>
              <input 
                type="email" 
                placeholder="john@example.com"
                className="w-full px-6 py-4 rounded-2xl bg-white border border-border-base focus:ring-4 focus:ring-accent-base/5 focus:outline-none transition-all text-[14px]"
              />
            </div>
            <div className="space-y-2">
              <label className="text-[11px] font-bold uppercase tracking-widest text-text-muted">Message</label>
              <textarea 
                rows={5}
                placeholder="How can we help you?"
                className="w-full px-6 py-4 rounded-2xl bg-white border border-border-base focus:ring-4 focus:ring-accent-base/5 focus:outline-none transition-all resize-none text-[14px]"
              ></textarea>
            </div>
          </div>
          <button className="w-full pill-button btn-dark py-4 flex items-center justify-center space-x-2 group">
            <span>Send Message</span>
            <Send size={16} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </button>
        </motion.div>
      </div>
    </div>
  );
}
