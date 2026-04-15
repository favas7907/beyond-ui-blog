import { motion } from "motion/react";

export default function About() {
  return (
    <div className="space-y-24 pb-24 px-6 md:px-12 pt-16">
      {/* Intro */}
      <section className="max-w-4xl space-y-8">
        <motion.span 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-[11px] font-bold uppercase tracking-[0.4em] text-text-muted"
        >
          Our Story
        </motion.span>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-5xl md:text-8xl font-bold tracking-tighter leading-[0.95]"
        >
          Beyond the <br /> Interface.
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-xl md:text-2xl text-text-secondary leading-relaxed max-w-2xl font-medium"
        >
          We believe that the best digital experiences are the ones that feel invisible, yet indispensable. Beyond UI is a curated platform exploring the deep connections between design, technology, and human emotion.
        </motion.p>
      </section>

      {/* Banner */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="aspect-[21/9] rounded-premium overflow-hidden border border-border-base shadow-lg"
      >
        <img 
          src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=2000" 
          alt="Office space" 
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Story Sections */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
        <div className="space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">The Editorial Vision</h2>
          <div className="space-y-6 text-[18px] text-text-secondary leading-relaxed">
            <p>
              Founded in 2024, Beyond UI started as a small newsletter for design enthusiasts. Today, it has grown into a global community of thinkers, makers, and dreamers who are redefining what it means to build for the web.
            </p>
            <p>
              Our mission is simple: to provide a space for deep, thoughtful analysis in an era of shallow scrolling. We prioritize quality over quantity, and insight over engagement.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-6">
          <div className="bg-gray-50 p-10 rounded-premium border border-border-base text-center space-y-2">
            <p className="text-5xl font-bold text-text-primary tracking-tighter">50k+</p>
            <p className="text-[11px] font-bold uppercase tracking-widest text-text-muted">Readers</p>
          </div>
          <div className="bg-accent-base p-10 rounded-premium text-center text-white space-y-2">
            <p className="text-5xl font-bold tracking-tighter">120+</p>
            <p className="text-[11px] font-bold uppercase tracking-widest opacity-60">Articles</p>
          </div>
          <div className="bg-gray-50 p-10 rounded-premium border border-border-base text-center space-y-2">
            <p className="text-5xl font-bold text-text-primary tracking-tighter">15</p>
            <p className="text-[11px] font-bold uppercase tracking-widest text-text-muted">Awards</p>
          </div>
          <div className="bg-gray-50 p-10 rounded-premium border border-border-base text-center space-y-2">
            <p className="text-5xl font-bold text-text-primary tracking-tighter">24/7</p>
            <p className="text-[11px] font-bold uppercase tracking-widest text-text-muted">Passion</p>
          </div>
        </div>
      </section>
    </div>
  );
}
