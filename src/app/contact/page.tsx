"use client";

import { Mail, MapPin, Phone, Send } from "lucide-react";
import { motion } from "motion/react";

export default function Contact() {
  return (
    <div className="space-y-32 pb-32 pt-20">
      <section className="editorial-container">
        <div className="max-w-5xl space-y-10">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center space-x-4"
          >
            <span className="h-px w-8 bg-border-base" />
            <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-text-muted">Get in Touch</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.8 }}
            className="text-5xl md:text-9xl font-bold tracking-tighter leading-[0.9] text-text-primary"
          >
            Let's Start <br /> a Conversation.
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-xl md:text-3xl text-text-secondary leading-relaxed max-w-3xl font-medium opacity-80"
          >
            Have a story to share, a question to ask, or just want to say hello? We'd love to hear from you. Our editorial team is always looking for new perspectives.
          </motion.p>
        </div>
      </section>

      <div className="editorial-container grid grid-cols-1 lg:grid-cols-12 gap-24">
        {/* Contact Info */}
        <div className="lg:col-span-5 space-y-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-16">
            <div className="space-y-6">
              <div className="w-14 h-14 rounded-2xl bg-gray-50 border border-border-base flex items-center justify-center text-text-primary shadow-sm">
                <Mail size={24} />
              </div>
              <div className="space-y-2">
                <h3 className="font-bold text-[18px] tracking-tight">Email Us</h3>
                <div className="space-y-1 text-text-secondary text-[15px] font-medium opacity-80">
                  <p>editorial@beyondui.com</p>
                  <p>support@beyondui.com</p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="w-14 h-14 rounded-2xl bg-gray-50 border border-border-base flex items-center justify-center text-text-primary shadow-sm">
                <MapPin size={24} />
              </div>
              <div className="space-y-2">
                <h3 className="font-bold text-[18px] tracking-tight">Visit Us</h3>
                <div className="space-y-1 text-text-secondary text-[15px] font-medium opacity-80">
                  <p>123 Design District</p>
                  <p>San Francisco, CA 94103</p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="w-14 h-14 rounded-2xl bg-gray-50 border border-border-base flex items-center justify-center text-text-primary shadow-sm">
                <Phone size={24} />
              </div>
              <div className="space-y-2">
                <h3 className="font-bold text-[18px] tracking-tight">Call Us</h3>
                <div className="space-y-1 text-text-secondary text-[15px] font-medium opacity-80">
                  <p>+1 (555) 123-4567</p>
                  <p>Mon-Fri, 9am-6pm PST</p>
                </div>
              </div>
            </div>
          </div>

          <div className="p-12 rounded-[40px] bg-accent-base text-white space-y-8 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
            <h4 className="font-bold text-3xl tracking-tight relative z-10">Join the Circle</h4>
            <p className="opacity-70 text-[16px] leading-relaxed font-medium relative z-10">
              Sign up for our weekly editorial digest and get the latest stories delivered straight to your inbox.
            </p>
            <button className="pill-button bg-white text-text-primary w-full border-none hover:bg-gray-100 py-4 font-bold tracking-widest relative z-10">
              Join Now
            </button>
          </div>
        </div>

        {/* Contact Form */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-7 bg-gray-50/50 p-10 md:p-16 rounded-[40px] border border-border-base space-y-12 shadow-sm"
        >
          <div className="space-y-8">
            <div className="space-y-3">
              <label className="text-[11px] font-bold uppercase tracking-[0.2em] text-text-muted ml-2">Full Name</label>
              <input 
                type="text" 
                placeholder="John Doe"
                className="w-full px-8 py-5 rounded-[24px] bg-white border border-border-base focus:ring-8 focus:ring-accent-base/5 focus:outline-none transition-all text-[15px] font-medium shadow-sm"
              />
            </div>
            <div className="space-y-3">
              <label className="text-[11px] font-bold uppercase tracking-[0.2em] text-text-muted ml-2">Email Address</label>
              <input 
                type="email" 
                placeholder="john@example.com"
                className="w-full px-8 py-5 rounded-[24px] bg-white border border-border-base focus:ring-8 focus:ring-accent-base/5 focus:outline-none transition-all text-[15px] font-medium shadow-sm"
              />
            </div>
            <div className="space-y-3">
              <label className="text-[11px] font-bold uppercase tracking-[0.2em] text-text-muted ml-2">Message</label>
              <textarea 
                rows={6}
                placeholder="How can we help you?"
                className="w-full px-8 py-5 rounded-[24px] bg-white border border-border-base focus:ring-8 focus:ring-accent-base/5 focus:outline-none transition-all resize-none text-[15px] font-medium shadow-sm"
              ></textarea>
            </div>
          </div>
          <button className="w-full pill-button btn-dark py-5 flex items-center justify-center space-x-3 group text-[14px]">
            <span>Send Message</span>
            <Send size={18} className="transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </button>
        </motion.div>
      </div>
    </div>
  );
}
