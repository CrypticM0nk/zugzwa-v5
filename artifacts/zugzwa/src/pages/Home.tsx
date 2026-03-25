import React from "react";
import { AnimatedBackground } from "@/components/AnimatedBackground";
import { Navbar } from "@/components/landing/Navbar";
import { Hero } from "@/components/landing/Hero";
import { Statement } from "@/components/landing/Statement";
import { Values } from "@/components/landing/Values";
import { Features } from "@/components/landing/Features";
import { CtaSection } from "@/components/landing/CtaSection";
import { Footer } from "@/components/landing/Footer";

export default function Home() {
  return (
    <main className="min-h-screen w-full selection:bg-primary/30 selection:text-white">
      <AnimatedBackground />
      <Navbar />
      
      {/* Content wrapper to ensure it sits above the fixed background */}
      <div className="relative z-10">
        <Hero />
        <Statement />
        <Values />
        <Features />
        <CtaSection />
        <Footer />
      </div>
    </main>
  );
}
