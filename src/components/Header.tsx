"use client";

import React from 'react';
import { Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

// Header: Sticky top navigation bar with status pill, centered logo, and CTA button
export default function Header() {
  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="sticky top-0 z-50 w-full px-4 py-4 md:px-8 md:py-5 flex items-center justify-between bg-background/70 backdrop-blur-xl"
    >
      {/* Status Pill — animated green dot indicates early access availability */}
      <div className="hidden md:flex items-center gap-2.5 bg-gray-200/50 hover:bg-gray-200/80 transition-colors px-5 py-2.5 rounded-full text-sm font-semibold tracking-wide border border-gray-300/30 cursor-pointer shadow-sm">
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
        </span>
        Early Access Available
      </div>
      
      {/* Center Logo — absolutely positioned to stay perfectly centred regardless of sibling widths on desktop, relative layout on mobile */}
      <div className="relative md:absolute md:left-1/2 md:-translate-x-1/2 text-2xl md:text-3xl font-extrabold tracking-tighter cursor-pointer select-none">
        Blobify3D
      </div>
      
      {/* Right CTA — sparkle icon rotates on hover for a playful micro-interaction */}
      <button className="bg-foreground text-background px-4 py-2 md:px-7 md:py-2.5 text-sm md:text-base rounded-full font-bold hover:-translate-y-0.5 hover:shadow-lg transition-all flex items-center gap-2 group duration-300 cursor-pointer">
        Join Now
        <Sparkles className="w-4 h-4 text-blob-cyan group-hover:rotate-12 transition-transform duration-300" />
      </button>
    </motion.header>
  );
}
