"use client";

import { motion } from "motion/react";
import Image from "next/image";

export default function About() {
  return (
    <div className="space-y-32 pb-32 pt-20">
      {/* Intro */}
      <section className="editorial-container">
        <div className="max-w-4xl space-y-10">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center space-x-4"
          >
            <span className="h-px w-8 bg-border-base" />
            <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-text-muted">Our Story</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.8 }}
            className="text-5xl md:text-9xl font-bold tracking-tighter leading-[0.9] text-text-primary"
          >
            Beyond the <br /> Interface.
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-xl md:text-3xl text-text-secondary leading-relaxed max-w-3xl font-medium opacity-90"
          >
            We believe that the best digital experiences are the ones that feel invisible, yet indispensable. Beyond UI is a curated platform exploring the deep connections between design, technology, and human emotion.
          </motion.p>
        </div>
      </section>

      {/* Banner */}
      <div className="editorial-container">
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative aspect-[21/9] rounded-[40px] overflow-hidden border border-border-base shadow-2xl"
        >
          <Image 
            src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=2000" 
            alt="Office space" 
            fill
            priority
            sizes="100vw"
            referrerPolicy="no-referrer"
            className="object-cover"
          />
        </motion.div>
      </div>

      {/* Story Sections */}
      <section className="editorial-container grid grid-cols-1 lg:grid-cols-2 gap-32 items-start">
        <div className="space-y-10">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter">The Editorial Vision</h2>
          <div className="space-y-8 text-xl text-text-secondary leading-relaxed font-medium opacity-80">
            <p>
              Founded in 2024, Beyond UI started as a small newsletter for design enthusiasts. Today, it has grown into a global community of thinkers, makers, and dreamers who are redefining what it means to build for the web.
            </p>
            <p>
              Our mission is simple: to provide a space for deep, thoughtful analysis in an era of shallow scrolling. We prioritize quality over quantity, and insight over engagement.
            </p>
          </div>
          <div className="pt-8">
            <button className="pill-button btn-dark">
              Join the Community
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-8">
          <div className="bg-gray-50/50 p-12 rounded-[32px] border border-border-base text-center space-y-3 transition-transform hover:-translate-y-2 duration-500">
            <p className="text-6xl font-bold text-text-primary tracking-tighter">50k+</p>
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-text-muted">Global Readers</p>
          </div>
          <div className="bg-accent-base p-12 rounded-[32px] text-center text-white space-y-3 shadow-xl transition-transform hover:-translate-y-2 duration-500">
            <p className="text-6xl font-bold tracking-tighter">120+</p>
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] opacity-60">Premium Articles</p>
          </div>
          <div className="bg-gray-50/50 p-12 rounded-[32px] border border-border-base text-center space-y-3 transition-transform hover:-translate-y-2 duration-500">
            <p className="text-6xl font-bold text-text-primary tracking-tighter">15</p>
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-text-muted">Design Awards</p>
          </div>
          <div className="bg-gray-50/50 p-12 rounded-[32px] border border-border-base text-center space-y-3 transition-transform hover:-translate-y-2 duration-500">
            <p className="text-6xl font-bold text-text-primary tracking-tighter">24/7</p>
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-text-muted">Creative Passion</p>
          </div>
        </div>
      </section>
    </div>
  );
}
