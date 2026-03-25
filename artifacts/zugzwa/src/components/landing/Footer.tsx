import React from "react";

export function Footer() {
  return (
    <footer className="py-8 border-t border-white/5 relative z-10 bg-background">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-md bg-gradient-to-br from-primary to-accent flex items-center justify-center">
            <span className="font-display font-bold text-white text-xs leading-none">Z</span>
          </div>
          <span className="font-display font-semibold text-white">Zugzwa</span>
        </div>
        
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Zugzwa Engineering. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
