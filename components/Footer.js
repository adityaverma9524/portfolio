'use client';

import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaInstagram } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-[#111827] to-[#1f2937] text-white py-10 border-t border-white/10 overflow-hidden">
      {/* Accent Glows */}
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
          <p className="text-gray-400 text-sm">
            Built with{' '}
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
          className="flex gap-4"
        >
          {[
            {
              href: 'https://github.com/adityaverma9524',
              icon: <FaGithub className="w-5 h-5" />,
              label: 'GitHub',
            },
            {
              href: 'https://www.linkedin.com/in/aditya-verma-914415196/',
              icon: <FaLinkedin className="w-5 h-5 text-blue-400" />,
              label: 'LinkedIn',
            },
            {
              href: 'mailto:averma6_be22@thapar.edu',
              icon: <FaEnvelope className="w-5 h-5 text-red-400" />,
              label: 'Email',
            },
            {
              href: 'https://leetcode.com/u/adityaverma0101',
              icon: <SiLeetcode className="w-5 h-5 text-yellow-400" />,
              label: 'LeetCode',
            },
            {
              href: 'https://www.instagram.com/aditya_verma1',
              icon: <FaInstagram className="w-5 h-5 text-pink-400" />,
              label: 'Instagram',
            },
          ].map((social, idx) => (
            <a
              key={idx}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className="p-2 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:scale-110 hover:shadow-[0_0_15px_rgba(139,92,246,0.4)] transition-all duration-300"
            >
              {social.icon}
            </a>
          ))}
        </motion.div>
      </div>
    </footer>
  );
}