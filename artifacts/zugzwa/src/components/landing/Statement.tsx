import React from "react";
import { motion } from "framer-motion";

export function Statement() {
  return (
    <section className="py-32 md:py-48 px-6 bg-background relative z-10">
      <div className="max-w-5xl mx-auto text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-4xl md:text-5xl lg:text-7xl font-display font-bold leading-tight text-white/90"
        >
          We don't build software. <br />
          <span className="text-white">We build competitive advantages.</span>
        </motion.h2>
      </div>
    </section>
  );
}
