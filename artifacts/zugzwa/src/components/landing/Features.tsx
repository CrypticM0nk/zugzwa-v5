import React from "react";
import { motion } from "framer-motion";
import { Code2, Maximize, Server, HeartCrack } from "lucide-react";

const features = [
  {
    title: "Precision Engineering",
    description: "Every line of code is intentional. We build clean, maintainable systems.",
    icon: Code2
  },
  {
    title: "Scalable by Design",
    description: "Built for 10x, ready for 100x. Future-proof from the foundation up.",
    icon: Maximize
  },
  {
    title: "Battle-Tested Reliability",
    description: "99.99% uptime. Zero excuses. Infrastructure you can bet your business on.",
    icon: Server
  },
  {
    title: "Deep Partnership",
    description: "We're in it with you, not just for you. Your goals become our goals.",
    icon: HeartCrack
  }
];

export function Features() {
  return (
    <section className="py-32 px-6 relative z-10 border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-display font-bold text-white mb-6"
          >
            Why Zugzwa
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
          {features.map((feature, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="flex gap-6"
            >
              <div className="flex-shrink-0 mt-1">
                <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                  <feature.icon className="w-5 h-5 text-primary" />
                </div>
              </div>
              <div>
                <h4 className="text-xl font-display font-bold text-white mb-2">{feature.title}</h4>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
