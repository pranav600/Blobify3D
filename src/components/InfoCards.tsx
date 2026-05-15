"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Users, Presentation } from 'lucide-react';

// InfoCards: Three-column bento section — community card, library headline, and stats card
export default function InfoCards() {
  return (
    <section className="w-full max-w-[95%] mx-auto mt-20 mb-12 grid grid-cols-1 md:grid-cols-3 gap-6">
      
      {/* Left Card — highlights the creator community with avatar stack and tagline */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="bg-white rounded-[32px] p-8 flex flex-col justify-between shadow-sm border border-gray-100"
      >
        <div>
          <h3 className="text-xl font-bold tracking-tight mb-2">Powered for Creators</h3>
          <p className="text-gray-500 font-medium leading-relaxed">
            Join thousands of designers building the future of the web with beautiful 3D shapes.
          </p>
        </div>
        <div className="flex -space-x-4 mt-8">
          {[{name: 'Alex'}, {name: 'Sam'}, {name: 'Jordan'}, {name: 'Taylor'}, {name: 'end'}].map((user, i) => (
            <div key={i} className={`w-12 h-12 rounded-full border-4 border-white bg-gray-200 flex items-center justify-center text-xs font-bold ${i === 4 ? 'bg-blob-cyan text-black z-10' : 'z-0 overflow-hidden'}`}>
              {i === 4 ? '+2k' : (
                <img
                  src={`https://api.dicebear.com/9.x/lorelei/svg?seed=${encodeURIComponent(user.name)}&backgroundColor=b6e3f4,c0aede,d1d4f9`}
                  alt={`${user.name}'s avatar`}
                  className="w-full h-full object-cover"
                />
              )}
            </div>
          ))}
        </div>
      </motion.div>

      {/* Middle Text Area — centered icon, main library headline, and supporting tagline */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="flex flex-col items-center justify-center text-center p-8"
      >
        <Presentation size={48} className="text-blob-pink mb-4" />
        <h2 className="text-4xl font-extrabold tracking-tighter">
          3D Blob Library
        </h2>
        <p className="text-gray-500 font-medium mt-3">
          Explore our vast collection of unique shapes
        </p>
      </motion.div>

      {/* Right Card — dark news card showcasing upcoming blob collection count */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="bg-black text-white rounded-[32px] p-8 flex flex-col shadow-xl"
      >
        <span className="bg-white/20 w-fit px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-auto">
          Latest News
        </span>
        <div className="mt-12">
          <h3 className="text-5xl font-black mb-2 tracking-tighter">150+</h3>
          <p className="text-gray-400 font-medium">New premium shapes arriving this January.</p>
        </div>
      </motion.div>

    </section>
  );
}
