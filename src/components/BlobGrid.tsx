"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Download } from "lucide-react";

const BLOB_IMAGES = [
  "/blob_cyan Background Removed.png",
  "/blob_pink Background Removed.png",
  "/blob_orange Background Removed.png",
  "/blob_purple_pill Background Removed.png",
  "/blob_yellow_spring Background Removed.png",
  "/blob_green_ring Background Removed.png",
  "/blob_red_heart Background Removed.png",
  "/blob_blue_drop Background Removed.png",
  "/blob_gold_sphere Background Removed.png",
];

// mockBlobs: Generates 9 placeholder blob entries cycling through the BLOB_IMAGES array
const mockBlobs = Array.from({ length: 9 }).map((_, i) => ({
  id: i,
  title: `Blob ${i + 1}`,
  user: `@creator_${i}`,
  image: BLOB_IMAGES[i % BLOB_IMAGES.length],
}));

// BlobGrid: Responsive 3-column masonry-style grid of animated blob cards with download support
export default function BlobGrid() {
  return (
    <section
      id="blobgrid"
      className="relative w-full max-w-[95%] mx-auto mt-12 pb-48 scroll-mt-24">
      {/* Grid — 1-col on mobile, 2-col on sm, 3-col on lg; cards fade-slide in on viewport entry */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockBlobs.map((blob, index) => (
          <motion.div
            key={blob.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            className="group relative bg-white rounded-[32px] aspect-[4/3] flex items-center justify-center overflow-hidden cursor-pointer hover:shadow-xl transition-all duration-300">
            <motion.div
              animate={{
                rotate: index % 2 === 0 ? [0, 10, -10, 0] : [0, -5, 5, 0],
                scale: index % 3 === 0 ? [1, 1.05, 1] : [1, 1.02, 1],
              }}
              transition={{
                duration: index % 2 === 0 ? 10 : 8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative w-[85%] h-[85%] transition-transform duration-500 group-hover:scale-105">
              <Image
                src={blob.image}
                alt={blob.title}
                fill
                className="object-contain drop-shadow-2xl"
              />
            </motion.div>

            <div className="absolute top-4 left-4 right-4 flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity">
              <span className="bg-white/80 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-black border border-white">
                {blob.user}
              </span>
              <span className="bg-white/80 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-black border border-white">
                {blob.title}
              </span>
            </div>

            <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity z-10">
              <a
                href={blob.image}
                download={`${blob.title.replace(/\s+/g, "_")}.png`}
                onClick={(e) => e.stopPropagation()}
                className="bg-white/80 backdrop-blur-md w-10 h-10 rounded-full text-black hover:bg-white hover:scale-110 transition-all border border-white shadow-md flex items-center justify-center"
                aria-label={`Download ${blob.title}`}
              >
                <Download size={18} strokeWidth={2.5} />
              </a>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Waitlist Overlay — fixed pill that slides in when the grid is in view */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ margin: "100px 0px -200px 0px" }} // Trigger later
        className="fixed bottom-10 left-1/2 -translate-x-1/2 z-40">
        <div className="bg-black text-white px-8 py-5 rounded-[24px] shadow-2xl flex flex-col sm:flex-row items-center gap-6 border border-white/20">
          <div>
            <h4 className="font-bold text-lg">Join The Waitlist</h4>
            <p className="text-gray-400 text-sm font-medium">
              Get early access to all 3D blobs when we launch!
            </p>
          </div>
          <button className="bg-blob-cyan text-black px-6 py-2.5 rounded-full font-bold hover:scale-105 transition-transform whitespace-nowrap">
            Sign Up Now
          </button>
        </div>
      </motion.div>
    </section>
  );
}
