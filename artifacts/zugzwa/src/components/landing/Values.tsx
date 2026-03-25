import React from "react";
import { motion } from "framer-motion";
import { Zap, Layers, Shield } from "lucide-react";

const values = [
  {
    title: "Ship Faster",
    description: "From concept to production in weeks, not months. Velocity is our default state.",
    icon: Zap,
    color: "text-amber-400",
    bg: "bg-amber-400/10"
  },
  {
    title: "Built to Scale",
    description: "Architecture that grows with you. No rewrites, no regrets. Ready for your next million users.",
    icon: Layers,
    color: "text-blue-400",
    bg: "bg-blue-400/10"
  },
  {
    title: "Zero Compromise",
    description: "Security, performance, and reliability baked in from day one. We don't cut corners.",
    icon: Shield,
    color: "text-purple-400",
    bg: "bg-purple-400/10"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
};

export function Values() {
  return (
    <section className="py-24 px-6 relative z-10">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {values.map((value, idx) => (
            <motion.div 
              key={idx} 
              variants={itemVariants}
              className="group relative rounded-3xl glass-panel p-8 md:p-10 hover:-translate-y-2 transition-transform duration-500"
            >
              {/* Hover Glow Effect */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className={`w-14 h-14 rounded-2xl ${value.bg} flex items-center justify-center mb-8 border border-white/5`}>
                <value.icon className={`w-7 h-7 ${value.color}`} />
              </div>
              
              <h3 className="text-2xl font-display font-bold text-white mb-4">
                {value.title}
              </h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
