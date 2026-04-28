import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="w-full max-w-[95%] mx-auto mb-6 bg-gray-100 rounded-[32px] px-8 py-10 flex flex-col md:flex-row items-center justify-between shadow-sm border border-gray-200">
      <div className="flex flex-col gap-2 mb-6 md:mb-0">
        <h4 className="text-xl font-extrabold tracking-tight">Blobify3D</h4>
        <p className="text-sm font-medium text-gray-500 flex items-center gap-2 flex-wrap">
          © {new Date().getFullYear()} Blobify3D Inc. All rights reserved. • Developed by Pranav.
        </p>
      </div>

      <div className="flex items-center gap-6">
        <span className="text-sm font-semibold text-gray-600 hover:text-black cursor-pointer transition-colors">
          Terms
        </span>
        <span className="text-sm font-semibold text-gray-600 hover:text-black cursor-pointer transition-colors">
          Privacy
        </span>
        <div className="h-6 w-[1px] bg-gray-300 mx-2" />
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
