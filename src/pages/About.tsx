import { motion } from "motion/react";

export default function About() {
  return (
    <div className="space-y-24 pb-20">
      {/* Intro */}
      <section className="max-w-3xl mx-auto text-center space-y-8">
        <motion.span 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-[10px] font-black uppercase tracking-[0.4em] text-text-secondary/60"
        >
          Our Story
        </motion.span>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-5xl md:text-7xl font-black tracking-tighter"
        >
          Beyond the Interface.
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-xl text-text-secondary leading-relaxed"
        >
          We believe that the best digital experiences are the ones that feel invisible, yet indispensable. Beyond UI is a curated platform exploring the deep connections between design, technology, and human emotion.
        </motion.p>
      </section>

      {/* Banner */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="aspect-[21/9] rounded-[40px] overflow-hidden border border-border-light shadow-2xl"
      >
        <img 
          src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=2000" 
          alt="Office space" 
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Story Sections */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
        <div className="space-y-6">
          <h2 className="text-3xl font-black tracking-tight">The Editorial Vision</h2>
          <p className="text-text-secondary leading-relaxed">
            Founded in 2024, Beyond UI started as a small newsletter for design enthusiasts. Today, it has grown into a global community of thinkers, makers, and dreamers who are redefining what it means to build for the web.
          </p>
          <p className="text-text-secondary leading-relaxed">
            Our mission is simple: to provide a space for deep, thoughtful analysis in an era of shallow scrolling. We prioritize quality over quantity, and insight over engagement.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-4">
            <div className="bg-bg-outer p-8 rounded-[32px] text-center">
              <p className="text-4xl font-black text-text-primary">50k+</p>
              <p className="text-xs font-bold uppercase tracking-widest text-text-secondary">Readers</p>
            </div>
            <div className="bg-text-primary p-8 rounded-[32px] text-center text-white">
              <p className="text-4xl font-black">120+</p>
              <p className="text-xs font-bold uppercase tracking-widest opacity-60">Articles</p>
            </div>
          </div>
          <div className="pt-12 space-y-4">
            <div className="bg-bg-outer p-8 rounded-[32px] text-center">
              <p className="text-4xl font-black text-text-primary">15</p>
              <p className="text-xs font-bold uppercase tracking-widest text-text-secondary">Awards</p>
            </div>
            <div className="bg-bg-outer p-8 rounded-[32px] text-center">
              <p className="text-4xl font-black text-text-primary">24/7</p>
              <p className="text-xs font-bold uppercase tracking-widest text-text-secondary">Passion</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
