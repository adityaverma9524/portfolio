'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import Tilt from 'react-parallax-tilt';
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaEnvelope,
  FaFileAlt,
  FaFolderOpen,
} from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import { ReactTyped } from 'react-typed';

export default function Hero() {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const width = window.innerWidth;
    const height = window.innerHeight;

    const generated = [...Array(8)].map(() => ({
      x: Math.random() * width - width / 2,
      y: Math.random() * height - height / 2,
      duration: 8 + Math.random() * 4,
      delay: Math.random() * 6,
    }));
    setParticles(generated);
  }, []);

  return (
    <section
      className="relative h-screen w-full flex flex-col items-center justify-center text-white overflow-hidden px-6 sm:px-8 md:px-12 scroll-smooth"
      aria-label="Hero section"
    >
      {/* Background */}
      <motion.img
        src="/banner.png"
        alt="Banner"
        className="absolute inset-0 w-full h-full object-cover z-0"
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.5 }}
        transition={{ duration: 2, ease: 'easeOut' }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/70 to-black/95 z-10" />

      {/* Accent Glows */}
      <motion.div
        className="absolute top-[12%] left-[12%] w-[260px] h-[260px] bg-indigo-500/20 rounded-full blur-3xl animate-[pulse_3s_ease-in-out_infinite] z-0"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.6 }}
        transition={{ delay: 0.5, duration: 1.5 }}
      />
      <motion.div
        className="absolute bottom-[12%] right-[12%] w-[180px] h-[180px] bg-fuchsia-600/20 rounded-full blur-2xl animate-[ping_4s_ease-in-out_infinite] z-0"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.5 }}
        transition={{ delay: 0.8, duration: 1.5 }}
      />

      {/* Floating Particles */}
      {particles.map((p, i) => (
        <motion.span
          key={i}
          className="absolute w-1.5 h-1.5 bg-white/30 rounded-full"
          initial={{ x: p.x, y: p.y, opacity: 0 }}
          animate={{ y: ['0%', '-100%'], opacity: [0, 0.7, 0] }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: 'easeInOut',
          }}
        />
      ))}

      {/* Main Content */}
      <motion.div
        className="relative z-20 w-full max-w-lg flex flex-col items-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
      >
        {/* Tilt Card */}
        <Tilt
          tiltMaxAngleX={3}
          tiltMaxAngleY={3}
          perspective={1200}
          scale={1.02}
          transitionSpeed={1500}
          glareEnable={false}
          className="w-full"
        >
          <motion.div
            whileHover={{
              scale: 1.05,
              boxShadow: '0 0 35px rgba(139,92,246,0.6)',
            }}
            transition={{ duration: 0.3 }}
            className="bg-black/50 border border-white/10 rounded-3xl p-10 shadow-[0_0_20px_rgba(139,92,246,0.2)] flex flex-col items-center text-center transition-all duration-300"
          >
            {/* Profile Picture */}
            <div className="relative mb-6">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-500 to-fuchsia-500 blur-2xl opacity-30"></div>
              <motion.img
                src="/profile.jpeg"
                alt="Aditya Verma"
                className="relative sm:w-32 md:w-40 sm:h-32 md:h-40 rounded-full border-4 border-indigo-400 shadow-xl object-cover"
                initial={{ scale: 0.85, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1, delay: 0.3 }}
                whileHover={{
                  scale: 1.1,
                  boxShadow: '0 0 35px rgba(139,92,246,0.9)',
                }}
              />
            </div>

            {/* Name */}
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-indigo-400 to-fuchsia-400 bg-clip-text text-transparent mb-2">
              Aditya Verma
            </h1>

            {/* Role (typed once only) */}
            <ReactTyped
              strings={['Full-Stack Developer']}
              typeSpeed={60}
              showCursor={false}
              loop={false}
              className="text-base sm:text-lg text-indigo-300 font-semibold tracking-wide mb-4"
            />

            {/* Description */}
            <p className="text-sm sm:text-base text-gray-300 leading-relaxed max-w-sm">
              Passionate about building{' '}
              <span className="text-indigo-400 font-semibold">scalable apps</span>,{' '}
              <span className="text-fuchsia-400 font-semibold">AI-driven platforms</span>, and{' '}
              <span className="text-indigo-400 font-semibold">seamless user experiences</span>.
            </p>
          </motion.div>
        </Tilt>

        {/* Social Media Icons */}
        <Tilt
          tiltMaxAngleX={3}
          tiltMaxAngleY={3}
          perspective={1200}
          scale={1.02}
          transitionSpeed={1500}
          glareEnable={false}
          className="mt-6"
        >
          <motion.div
            className="flex items-center gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            {/* GitHub */}
            <a
              href="https://github.com/adityaverma9524"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-black/50 border border-white/10 transition-all duration-300 hover:scale-110 hover:shadow-[0_0_20px_rgba(139,92,246,0.5)]"
            >
              <FaGithub className="w-7 h-7 text-gray-300 hover:text-white" />
            </a>

            {/* LinkedIn */}
            <a
              href="https://linkedin.com/in/adityaverma0101"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-black/50 border border-white/10 transition-all duration-300 hover:scale-110 hover:shadow-[0_0_20px_rgba(59,130,246,0.7)]"
            >
              <FaLinkedin className="w-7 h-7 text-blue-500" />
            </a>

            {/* Gmail */}
            <a
              href="mailto:averma6_be22@thapar.edu"
              className="p-3 rounded-full bg-black/50 border border-white/10 transition-all duration-300 hover:scale-110 hover:shadow-[0_0_20px_rgba(239,68,68,0.7)]"
            >
              <FaEnvelope className="w-7 h-7 text-red-500" />
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/aditya_verma1"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-black/50 border border-white/10 transition-all duration-300 hover:scale-110 hover:shadow-[0_0_20px_rgba(236,72,153,0.7)]"
            >
              <FaInstagram className="w-7 h-7 text-pink-500" />
            </a>

            {/* LeetCode */}
            <a
              href="https://leetcode.com/u/adityaverma0101"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-black/50 border border-white/10 transition-all duration-300 hover:scale-110 hover:shadow-[0_0_20px_rgba(245,158,11,0.7)]"
            >
              <SiLeetcode className="w-7 h-7 text-yellow-500" />
            </a>
          </motion.div>
        </Tilt>

        {/* CTA Buttons */}
        <div className="flex gap-4 mt-6">
          {/* Resume Button */}
          <motion.a
            href="/AdityaVerma_Resume.pdf"
            download
            whileHover={{
              scale: 1.05,
              boxShadow: '0 0 20px rgba(139,92,246,0.5)',
            }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-black/50 border border-white/10 text-gray-200 hover:text-white transition-all duration-300 text-sm font-medium"
          >
            <FaFileAlt className="w-5 h-5 text-indigo-400" />
            Resume
          </motion.a>

          {/* Projects Button */}
          <motion.a
            href="#projects"
            whileHover={{
              scale: 1.05,
              boxShadow: '0 0 20px rgba(139,92,246,0.5)',
            }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-black/50 border border-white/10 text-indigo-300 hover:text-white transition-all duration-300 text-sm font-medium"
          >
            <FaFolderOpen className="w-5 h-5 text-fuchsia-400" />
            Projects
          </motion.a>
        </div>

        {/* Scroll Down Indicator */}
        <motion.button
          aria-label="Scroll down to about section"
          onClick={() =>
            document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
          }
          className="mt-14 sm:mt-16 flex flex-col items-center px-4 py-4 rounded-full bg-black/50 border border-white/10 text-indigo-300 hover:text-white transition-all duration-300 focus:outline-none focus:ring-0"
          animate={{ y: [0, -30, 0] }}
          transition={{ duration: 1.2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDownIcon className="w-7 h-7" />
          <span className="mt-1 text-xs font-medium tracking-wide">Scroll</span>
        </motion.button>
      </motion.div>
    </section>
  );
}