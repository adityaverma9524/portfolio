'use client';

import { motion } from 'framer-motion';
import { ArrowDownTrayIcon, ChevronDownIcon } from '@heroicons/react/24/outline';
import Tilt from 'react-parallax-tilt';

export default function Hero() {
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
      <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/70 to-black/95 z-10 backdrop-blur-sm" aria-hidden="true" />

      {/* Accent Glows - toned down for subtlety */}
      <motion.div
        className="absolute top-[12%] left-[12%] w-[260px] h-[260px] bg-indigo-500/20 rounded-full blur-3xl animate-[pulse_3s_ease-in-out_infinite] z-0"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.6 }}
        transition={{ delay: 0.5, duration: 1.5 }}
        aria-hidden="true"
      />
      <motion.div
        className="absolute bottom-[12%] right-[12%] w-[180px] h-[180px] bg-fuchsia-600/20 rounded-full blur-2xl animate-[ping_4s_ease-in-out_infinite] z-0"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.5 }}
        transition={{ delay: 0.8, duration: 1.5 }}
        aria-hidden="true"
      />

      {/* Floating Particles - smaller, fewer, slower for subtle ambiance */}
      {[...Array(8)].map((_, i) => (
        <motion.span
          key={i}
          className="absolute w-1.5 h-1.5 bg-white/30 rounded-full"
          initial={{
            x: Math.random() * window.innerWidth - window.innerWidth / 2,
            y: Math.random() * window.innerHeight - window.innerHeight / 2,
            opacity: 0,
          }}
          animate={{
            y: ['0%', '-100%'],
            opacity: [0, 0.7, 0],
          }}
          transition={{
            duration: 8 + Math.random() * 4,
            repeat: Infinity,
            delay: Math.random() * 6,
            ease: 'easeInOut',
          }}
          aria-hidden="true"
        />
      ))}

      {/* Main Content */}
      <motion.div
        className="relative z-20 w-full max-w-md flex flex-col items-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
      >
        {/* Tilt Card */}
        <Tilt
          tiltMaxAngleX={8}
          tiltMaxAngleY={8}
          perspective={1100}
          scale={1.07}
          transitionSpeed={900}
          glareEnable
          glareMaxOpacity={0.15}
          className="w-full"
        >
          <motion.div
            whileHover={{ scale: 1.04 }}
            className="bg-white/6 border border-white/15 backdrop-blur-xl rounded-3xl p-10 shadow-[0_0_80px_rgba(139,92,246,0.3)] hover:shadow-purple-500/50 transition-shadow duration-600 flex flex-col items-center text-center"
          >
            <motion.img
              src="/profile.jpeg"
              alt="Aditya Verma"
              className="w-40 h-40 rounded-full border-4 border-indigo-500 shadow-2xl mb-8 cursor-pointer"
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              whileHover={{
                scale: 1.15,
                boxShadow: '0 0 40px rgba(139,92,246,0.8)',
              }}
              tabIndex={0}
              role="img"
              aria-label="Profile picture of Aditya Verma"
            />
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-indigo-400 to-fuchsia-400 bg-clip-text text-transparent select-text">
              Aditya Verma
            </h1>
            <p className="text-base sm:text-lg mt-5 text-gray-300 leading-relaxed max-w-sm select-text">
              Final-year engineering student & a passionate{' '}
              <span className="text-indigo-400 font-semibold">full-stack developer</span> crafting cutting-edge digital systems,{' '}
              <span className="text-indigo-400 font-semibold">AI-integrated platforms</span> & performant user experiences.
            </p>
          </motion.div>
        </Tilt>

        {/* Resume Button */}
        <motion.a
          href="/AdityaVerma_Resume.pdf"
          download
          whileHover={{ scale: 1.1, boxShadow: '0 0 25px rgba(139,92,246,0.75)' }}
          whileTap={{ scale: 0.95 }}
          className="mt-10 inline-flex items-center gap-3 px-10 py-4 rounded-full bg-gradient-to-r from-indigo-600 to-fuchsia-600 hover:from-indigo-700 hover:to-fuchsia-700 text-white font-semibold shadow-xl transition-all cursor-pointer select-none focus:outline-none focus:ring-4 focus:ring-indigo-500"
          aria-label="Download Aditya Verma's Resume"
        >
          <ArrowDownTrayIcon className="w-6 h-6" />
          Download Resume
        </motion.a>

        {/* Scroll Down Indicator */}
        <motion.button
          aria-label="Scroll down to about section"
          onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
          className="mt-12 flex flex-col items-center text-indigo-400 cursor-pointer focus:outline-none focus:ring-2 focus:ring-indigo-400 rounded"
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
            }
          }}
        >
          <ChevronDownIcon className="w-9 h-9" />
          <span className="mt-1 text-xs font-light tracking-wide animate-pulse select-none">Scroll</span>
        </motion.button>
      </motion.div>
    </section>
  );
}