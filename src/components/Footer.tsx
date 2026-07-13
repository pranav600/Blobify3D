import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

// Footer: Site footer with brand info, legal links, and social icon links
export default function Footer() {
  return (
    <footer className="w-full max-w-[95%] mx-auto mt-10 md:mt-16 mb-10 md:mb-8 bg-gray-100 rounded-[32px] px-6 py-8 md:px-8 md:py-10 flex flex-col md:flex-row items-center justify-between shadow-sm border border-gray-200">
      {/* Brand block — logo name and copyright notice */}
      <div className="flex flex-col gap-2 mb-6 md:mb-0 items-center text-center md:items-start md:text-left">
        <h4 className="text-xl font-extrabold tracking-tight">Blobify3D</h4>
        <div className="text-sm font-medium text-gray-500 flex flex-col sm:flex-row items-center justify-center md:justify-start gap-1 sm:gap-2 flex-wrap">
          <span>© {new Date().getFullYear()} Blobify3D Inc. All rights reserved.</span>
          <span className="hidden sm:inline text-gray-300">•</span>
          <span>Developed by Pranav.</span>
        </div>
      </div>

      {/* Right cluster — legal links and social icons separated by a divider */}
      <div className="flex items-center gap-6">
        <span className="text-sm font-semibold text-gray-600 hover:text-black cursor-pointer transition-colors">
          Terms
        </span>
        <span className="text-sm font-semibold text-gray-600 hover:text-black cursor-pointer transition-colors">
          Privacy
        </span>
        {/* Vertical divider between legal links and social icons */}
        <div className="h-6 w-[1px] bg-gray-300 mx-2" />
        {/* Social icons — env vars keep URLs out of the bundle */}
        <div className="flex items-center gap-4 text-gray-400">
          <a
            href={process.env.NEXT_PUBLIC_GITHUB}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black transition-colors"
          >
            <FaGithub className="w-5 h-5" />
          </a>
          <a
            href={process.env.NEXT_PUBLIC_LINKEDIN}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#0A66C2] transition-colors"
          >
            <FaLinkedin className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
