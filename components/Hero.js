'use client';
import { motion } from 'framer-motion';
import { ArrowDownTrayIcon } from '@heroicons/react/24/outline';

export default function Hero() {
  return (
    <section className="relative h-[90vh] flex items-center justify-center text-white overflow-hidden px-4">
      {/* Optimized Background Image */}
      <img
        src="/banner.png"
        alt="Banner"
        className="absolute inset-0 w-full h-full object-cover object-center z-0 opacity-70 md:opacity-80"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/60 to-black/90 z-10 backdrop-blur-sm" />

      {/* Accent Glow Effects */}
      <div className="absolute top-[15%] left-[10%] w-[250px] h-[250px] bg-indigo-500/20 blur-3xl rounded-full z-0 animate-pulse" />
      <div className="absolute bottom-[8%] right-[8%] w-[200px] h-[200px] bg-indigo-700/30 blur-2xl rounded-full z-0 animate-ping" />

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        className="relative z-20 text-center flex flex-col items-center"
      >
        {/* Profile Image */}
        <img
          src="/profile.jpeg"
          alt="Aditya Verma"
          className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-white shadow-xl mb-5 hover:scale-105 transition duration-300"
        />

        {/* Name */}
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight drop-shadow-2xl">
          Aditya Verma
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl mt-4 max-w-2xl text-gray-200 drop-shadow-sm leading-relaxed">
          Final-year <span className="text-indigo-400 font-medium">ECE student</span> & passionate <span className="text-indigo-400 font-medium">full-stack developer</span> building scalable, modern, and intelligent systems.
        </p>

        {/* CTA Button */}
        <a
          href="/AdityaVerma_Resume.pdf"
          download
          className="mt-6 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold transition shadow-lg hover:shadow-indigo-500/30"
        >
          <ArrowDownTrayIcon className="w-5 h-5" />
          Download Resume
        </a>
      </motion.div>
    </section>
  );
}