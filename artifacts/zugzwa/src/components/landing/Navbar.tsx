import React, { useState, useEffect } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { ContactModal } from "@/components/ContactModal";

export function Navbar() {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-background/60 backdrop-blur-xl border-b border-white/5 py-4 shadow-2xl shadow-black/50" 
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg shadow-primary/20">
            <span className="font-display font-bold text-white text-lg leading-none">Z</span>
          </div>
          <span className="font-display font-bold text-xl tracking-wide text-white">Zugzwa</span>
        </div>

        <ContactModal>
          <button className="px-5 py-2.5 rounded-full text-sm font-semibold bg-white/5 hover:bg-white/10 border border-white/10 text-white backdrop-blur-md transition-all duration-300 hover:shadow-[0_0_20px_-5px_rgba(255,255,255,0.3)] hover:-translate-y-0.5">
            Start a Project
          </button>
        </ContactModal>
      </div>
    </motion.header>
  );
}
