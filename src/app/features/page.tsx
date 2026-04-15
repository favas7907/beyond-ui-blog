"use client";

import { Layout, Zap, Shield, Globe, Cpu, Palette, ArrowRight } from "lucide-react";
import { motion } from "motion/react";

const FEATURES = [
  {
    icon: <Layout className="w-7 h-7" />,
    title: "Editorial Layouts",
    description: "Handcrafted layouts designed for maximum readability and visual impact on any device."
  },
  {
    icon: <Zap className="w-7 h-7" />,
    title: "Blazing Performance",
    description: "Optimized for speed with SSR and intelligent asset loading, ensuring a seamless experience."
  },
  {
    icon: <Shield className="w-7 h-7" />,
    title: "Privacy First",
    description: "No invasive tracking or bloated scripts. We respect your data and your digital space."
  },
  {
    icon: <Globe className="w-7 h-7" />,
    title: "Global Reach",
    description: "A platform built for a global audience, with support for diverse perspectives and voices."
  },
  {
    icon: <Cpu className="w-7 h-7" />,
    title: "Modern Tech Stack",
    description: "Built with the latest technologies including Next.js, Tailwind, and TypeScript."
  },
  {
    icon: <Palette className="w-7 h-7" />,
    title: "Premium Design",
    description: "A distinctive visual language that sets your content apart from the generic web."
  }
];

export default function Features() {
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
            <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-text-muted">Capabilities</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.8 }}
            className="text-5xl md:text-9xl font-bold tracking-tighter leading-[0.9] text-text-primary"
          >
            Built for the <br /> Next Era.
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-xl md:text-3xl text-text-secondary leading-relaxed max-w-3xl font-medium opacity-80"
          >
            Beyond UI is more than just a blog. It's a carefully engineered platform designed to elevate your content and provide a premium experience for your readers.
          </motion.p>
        </div>
      </section>

      <div className="editorial-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {FEATURES.map((feature, index) => (
          <motion.div 
            key={feature.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
            viewport={{ once: true }}
            className="p-12 rounded-[40px] border border-border-base bg-white hover:shadow-premium transition-all duration-500 group relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-gray-50 rounded-full translate-x-1/2 -translate-y-1/2 transition-transform duration-700 group-hover:scale-150" />
            
            <div className="relative z-10 space-y-8">
              <div className="w-16 h-16 rounded-2xl bg-gray-50 border border-border-base flex items-center justify-center text-accent-base transition-all duration-500 group-hover:bg-accent-base group-hover:text-white shadow-sm">
                {feature.icon}
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-bold tracking-tight">{feature.title}</h3>
                <p className="text-[16px] text-text-secondary leading-relaxed font-medium opacity-80">
                  {feature.description}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* CTA Section */}
      <div className="editorial-container">
        <motion.section 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-gray-50/50 border border-border-base rounded-[60px] p-12 md:p-32 text-center space-y-12 shadow-sm relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(0,0,0,0.02)_0%,transparent_70%)]" />
          
          <div className="space-y-6 relative z-10">
            <h2 className="text-4xl md:text-7xl font-bold tracking-tighter max-w-4xl mx-auto leading-[1.05]">
              Ready to elevate your digital presence?
            </h2>
            <p className="text-lg md:text-2xl text-text-secondary max-w-2xl mx-auto font-medium opacity-80">
              Join the ranks of premium publishers who choose Beyond UI for their editorial needs.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8 relative z-10">
            <button className="pill-button btn-dark px-12 py-5 text-[14px]">
              Get Started Now
            </button>
            <button className="pill-button bg-white text-text-primary px-12 py-5 hover:bg-gray-100 flex items-center space-x-2 group">
              <span>View Documentation</span>
              <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </div>
        </motion.section>
      </div>
    </div>
  );
}
