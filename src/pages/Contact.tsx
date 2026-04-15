import { Mail, MapPin, Phone, Send } from "lucide-react";
import { motion } from "motion/react";

export default function Contact() {
  return (
    <div className="space-y-20 pb-20">
      <div className="max-w-3xl">
        <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-6">
          Get in Touch.
        </h1>
        <p className="text-xl text-text-secondary leading-relaxed">
          Have a story to share, a question to ask, or just want to say hello? We'd love to hear from you.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Contact Info */}
        <div className="space-y-12">
          <div className="space-y-8">
            <div className="flex items-start space-x-6">
              <div className="w-12 h-12 rounded-2xl bg-bg-outer flex items-center justify-center text-text-primary">
                <Mail size={24} />
              </div>
              <div>
                <h3 className="font-bold text-lg">Email Us</h3>
                <p className="text-text-secondary">editorial@beyondui.com</p>
                <p className="text-text-secondary">support@beyondui.com</p>
              </div>
            </div>

            <div className="flex items-start space-x-6">
              <div className="w-12 h-12 rounded-2xl bg-bg-outer flex items-center justify-center text-text-primary">
                <MapPin size={24} />
              </div>
              <div>
                <h3 className="font-bold text-lg">Visit Us</h3>
                <p className="text-text-secondary">123 Design District</p>
                <p className="text-text-secondary">San Francisco, CA 94103</p>
              </div>
            </div>

            <div className="flex items-start space-x-6">
              <div className="w-12 h-12 rounded-2xl bg-bg-outer flex items-center justify-center text-text-primary">
                <Phone size={24} />
              </div>
              <div>
                <h3 className="font-bold text-lg">Call Us</h3>
                <p className="text-text-secondary">+1 (555) 123-4567</p>
                <p className="text-text-secondary">Mon-Fri, 9am-6pm PST</p>
              </div>
            </div>
          </div>

          <div className="p-8 rounded-[32px] bg-text-primary text-white space-y-4">
            <h4 className="font-bold text-xl">Join the Community</h4>
            <p className="opacity-70 text-sm leading-relaxed">
              Sign up for our weekly editorial digest and get the latest stories delivered straight to your inbox.
            </p>
            <button className="pill-button bg-white text-text-primary w-full mt-4">
              Join Now
            </button>
          </div>
        </div>

        {/* Contact Form */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-white p-8 md:p-12 rounded-[40px] border border-border-light shadow-xl space-y-8"
        >
          <div className="space-y-6">
            <div className="space-y-2">
              <label className="text-xs font-black uppercase tracking-widest text-text-secondary">Full Name</label>
              <input 
                type="text" 
                placeholder="John Doe"
                className="w-full px-6 py-4 rounded-2xl bg-bg-outer/50 border border-transparent focus:border-text-primary/20 focus:bg-white focus:outline-none transition-all"
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-black uppercase tracking-widest text-text-secondary">Email Address</label>
              <input 
                type="email" 
                placeholder="john@example.com"
                className="w-full px-6 py-4 rounded-2xl bg-bg-outer/50 border border-transparent focus:border-text-primary/20 focus:bg-white focus:outline-none transition-all"
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-black uppercase tracking-widest text-text-secondary">Message</label>
              <textarea 
                rows={5}
                placeholder="How can we help you?"
                className="w-full px-6 py-4 rounded-2xl bg-bg-outer/50 border border-transparent focus:border-text-primary/20 focus:bg-white focus:outline-none transition-all resize-none"
              ></textarea>
            </div>
          </div>
          <button className="w-full pill-button bg-text-primary text-white py-4 flex items-center justify-center space-x-2 group">
            <span>Send Message</span>
            <Send size={18} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </button>
        </motion.div>
      </div>
    </div>
  );
}
