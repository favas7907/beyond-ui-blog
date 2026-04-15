import { Layout, Zap, Shield, Globe, Cpu, Palette } from "lucide-react";
import { motion } from "motion/react";

const FEATURES = [
  {
    icon: <Layout className="w-8 h-8" />,
    title: "Editorial Layouts",
    description: "Handcrafted layouts designed for maximum readability and visual impact on any device."
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: "Blazing Performance",
    description: "Optimized for speed with SSR and intelligent asset loading, ensuring a seamless experience."
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Privacy First",
    description: "No invasive tracking or bloated scripts. We respect your data and your digital space."
  },
  {
    icon: <Globe className="w-8 h-8" />,
    title: "Global Reach",
    description: "A platform built for a global audience, with support for diverse perspectives and voices."
  },
  {
    icon: <Cpu className="w-8 h-8" />,
    title: "Modern Tech Stack",
    description: "Built with the latest technologies including React, Vite, and Express for a robust foundation."
  },
  {
    icon: <Palette className="w-8 h-8" />,
    title: "Premium Design",
    description: "A distinctive visual language that sets your content apart from the generic web."
  }
];

export default function Features() {
  return (
    <div className="space-y-24 pb-20">
      <div className="max-w-3xl">
        <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-6">
          Built for the Future.
        </h1>
        <p className="text-xl text-text-secondary leading-relaxed">
          Beyond UI is more than just a blog. It's a carefully engineered platform designed to elevate your content and provide a premium experience for your readers.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {FEATURES.map((feature, index) => (
          <motion.div 
            key={feature.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
            className="p-10 rounded-[40px] border border-border-light bg-white hover:shadow-xl transition-all group"
          >
            <div className="w-16 h-16 rounded-2xl bg-bg-outer flex items-center justify-center text-text-primary mb-8 group-hover:bg-text-primary group-hover:text-white transition-colors">
              {feature.icon}
            </div>
            <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
            <p className="text-text-secondary leading-relaxed">
              {feature.description}
            </p>
          </motion.div>
        ))}
      </div>

      {/* CTA Section */}
      <section className="bg-bg-outer rounded-[48px] p-12 md:p-20 text-center space-y-8">
        <h2 className="text-3xl md:text-5xl font-black tracking-tight max-w-2xl mx-auto">
          Ready to elevate your digital presence?
        </h2>
        <p className="text-lg text-text-secondary max-w-xl mx-auto">
          Join the ranks of premium publishers who choose Beyond UI for their editorial needs.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="pill-button bg-text-primary text-white px-10 py-4">
            Get Started Now
          </button>
          <button className="pill-button bg-white text-text-primary border border-border-light px-10 py-4">
            View Documentation
          </button>
        </div>
      </section>
    </div>
  );
}
