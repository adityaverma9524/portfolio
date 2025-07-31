'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative bg-[#0f172a] text-white py-10 border-t border-white/10 overflow-hidden">
      {/* Subtle Accent Glow */}
      <div className="absolute -top-20 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-fuchsia-600/20 rounded-full blur-3xl opacity-30 z-0 animate-pulse" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-indigo-500/20 rounded-full blur-2xl opacity-25 z-0 animate-ping" />

      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6 text-sm relative z-10">
        {/* Left Section: Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center md:text-left space-y-1"
        >
          <p className="text-gray-300">
            &copy; {new Date().getFullYear()}{' '}
            <span className="text-white font-medium">Aditya Verma</span>. All rights reserved.
          </p>
          <p className="text-gray-400">
            Designed & built with{' '}
            <span className="text-indigo-400">Next.js</span>,{' '}
            <span className="text-indigo-400">Tailwind CSS</span>, and{' '}
            <span className="text-indigo-400">Framer Motion</span>.
          </p>
        </motion.div>

        {/* Right Section: Socials */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex gap-5"
        >
          <a
            href="https://github.com/adityaverma9524"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-indigo-400 transition transform hover:scale-110"
            aria-label="GitHub"
          >
            <Github size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/aditya-verma-914415196/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-indigo-400 transition transform hover:scale-110"
            aria-label="LinkedIn"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="mailto:averma6_be22@thapar.edu"
            className="text-gray-300 hover:text-indigo-400 transition transform hover:scale-110"
            aria-label="Email"
          >
            <Mail size={20} />
          </a>
        </motion.div>
      </div>
    </footer>
  );
}