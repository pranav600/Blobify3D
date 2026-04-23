"use client";

import React from 'react';
import { motion, useScroll, useTransform, animate } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import Image from 'next/image';

export default function HeroSection() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 150]);
  const y2 = useTransform(scrollY, [0, 500], [0, -100]);
  
  return (
    <section className="relative w-full max-w-[95%] mx-auto mt-6">
      {/* Main Hero Card */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full h-[75vh] min-h-[600px] bg-blob-card rounded-[48px] md:rounded-[60px] relative overflow-hidden flex flex-col items-center justify-center border border-white/40 shadow-xl"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-transparent pointer-events-none" />
        
        {/* Placeholder text for Hero inside */}
        <div className="z-10 text-center flex flex-col items-center gap-6 px-4 mix-blend-difference top-1/2 absolute -translate-y-1/2 text-white">
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter uppercase leading-[0.9]">
              Create<br/>blobs in 3D
            </h1>
            <p className="text-lg md:text-xl font-medium tracking-tight max-w-md mx-auto text-white/90">
              The ultimate library for soft, playful, and dynamic 3D shapes ready for your next project.
            </p>
        </div>

        {/* Real floating 3D Blob images */}
        <motion.div 
          style={{ y: y1 }}
          animate={{ rotate: [0, 10, -10, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[10%] left-[5%] md:left-[15%] w-64 h-64 md:w-80 md:h-80 opacity-90 mix-blend-multiply"
        >
          <Image src="/blob_cyan.png" alt="Cyan Blob" fill className="object-contain" />
        </motion.div>
        
        <motion.div 
          style={{ y: y2 }}
          animate={{ scale: [1, 1.05, 1], rotate: [0, -5, 5, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[20%] md:bottom-[15%] right-[5%] md:right-[15%] w-72 h-72 md:w-96 md:h-96 opacity-90 mix-blend-multiply"
        >
          <Image src="/blob_pink.png" alt="Pink Blob" fill className="object-contain" />
        </motion.div>

      </motion.div>

      {/* Scroll button overlapping bottom edge trick */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20">
        <a 
          href="#blobgrid" 
          aria-label="Scroll to Blob Grid"
          onClick={(e) => {
            e.preventDefault();
            const target = document.getElementById('blobgrid');
            if (target) {
              const currentY = window.scrollY;
              const targetY = currentY + target.getBoundingClientRect().top - 80;
              animate(currentY, targetY, {
                duration: 1.5,
                ease: "easeInOut",
                onUpdate: (latest) => window.scrollTo(0, latest)
              });
            }
          }}
        >
          <motion.div
             animate={{ y: [0, 8, 0] }}
             transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
             className="w-20 h-20 bg-foreground text-background rounded-full flex items-center justify-center cursor-pointer hover:scale-105 transition-transform shadow-xl"
          >
             <ArrowDown size={32} />
          </motion.div>
        </a>
      </div>

      {/* spacer for the overlapping button */}
      <div className="h-16 w-full" />
    </section>
  );
}
