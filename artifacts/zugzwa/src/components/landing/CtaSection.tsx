import React from "react";
import { motion } from "framer-motion";
import { ContactModal } from "@/components/ContactModal";

export function CtaSection() {
  return (
    <section className="py-32 relative z-10 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-primary/5 border-y border-primary/20" />
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/20 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-display font-bold text-white mb-6"
        >
          Ready to build something <br className="hidden md:block" />
          <span className="text-gradient">exceptional?</span>
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto"
        >
          Let's turn your vision into a product the world notices. 
          Stop compromising on quality and start moving faster.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <ContactModal>
            <button className="px-10 py-5 rounded-full font-bold text-lg bg-gradient-to-r from-primary to-accent text-white shadow-[0_0_40px_-5px_rgba(124,58,237,0.5)] hover:shadow-[0_0_60px_0px_rgba(124,58,237,0.7)] hover:-translate-y-1 hover:scale-105 transition-all duration-300">
              Start a Project Today
            </button>
          </ContactModal>
        </motion.div>
      </div>
    </section>
  );
}
