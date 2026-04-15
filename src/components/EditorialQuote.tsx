"use client";

import { motion } from "motion/react";

export default function EditorialQuote() {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="py-32 border-y border-border-base text-center bg-gray-50/30"
    >
      <div className="max-w-4xl mx-auto space-y-10 px-6">
        <div className="inline-flex items-center space-x-4">
          <span className="h-px w-8 bg-border-base" />
          <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-text-muted">The Beyond UI Philosophy</span>
          <span className="h-px w-8 bg-border-base" />
        </div>
        <h2 className="text-4xl md:text-6xl font-serif italic text-text-primary leading-[1.1] tracking-tight">
          "Design is not just what it looks like and feels like. Design is how it works and how it makes us feel."
        </h2>
        <div className="space-y-1">
          <p className="text-[12px] font-bold uppercase tracking-[0.2em] text-text-primary">Editorial Team</p>
          <p className="text-[11px] font-medium text-text-muted">Spring Edition 2024</p>
        </div>
      </div>
    </motion.section>
  );
}
