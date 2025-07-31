'use client';

import { motion } from 'framer-motion';
import { ArrowDownTrayIcon, ChevronDownIcon } from '@heroicons/react/24/outline';
import Tilt from 'react-parallax-tilt';

export default function Hero() {
  return (
    <section className="relative h-screen w-full flex flex-col items-center justify-center text-white overflow-hidden px-4 scroll-smooth">
      {/* Background Image */}
      <img
        src="/banner.png"
        alt="Banner"
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-60"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/60 to-black/90 z-10 backdrop-blur-sm" />

      {/* Accent Glows */}
      <div className="absolute top-[10%] left-[15%] w-[250px] h-[250px] bg-indigo-500/30 blur-3xl rounded-full animate-pulse z-0" />
      <div className="absolute bottom-[10%] right-[10%] w-[180px] h-[180px] bg-fuchsia-600/30 blur-2xl rounded-full animate-ping z-0" />

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-20 w-full max-w-md flex flex-col items-center"
      >
        {/* Tilted Card */}
        <Tilt
          tiltMaxAngleX={10}
          tiltMaxAngleY={10}
          perspective={1000}
          scale={1.03}
          transitionSpeed={1200}
          glareEnable={true}
          glareMaxOpacity={0.15}
          className="w-full"
        >
          <div className="bg-white/5 border border-white/20 backdrop-blur-md rounded-2xl p-6 shadow-[0_0_50px_rgba(139,92,246,0.35)] hover:shadow-purple-600/30 transition-all duration-500 flex flex-col items-center text-center">
            <img
  src="/profile.jpeg"
  alt="Aditya Verma"
  className="w-32 h-32 md:w-36 md:h-36 rounded-full border-4 border-indigo-500 shadow-xl mb-4 transition-transform duration-500 ease-in-out hover:scale-110 hover:shadow-[0_0_30px_rgba(139,92,246,0.6)]"
/>
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">
              Aditya Verma
            </h1>
            <p className="text-sm md:text-base mt-4 text-gray-300 leading-relaxed">
              Final-year engineering student & a passionate <span className="text-indigo-400 font-medium">full-stack developer</span> crafting cutting-edge digital systems, <span className="text-indigo-400 font-medium">AI-integrated platforms</span> & performant user experiences.
            </p>
          </div>
        </Tilt>

        {/* Resume Button */}
        <motion.a
          href="/AdityaVerma_Resume.pdf"
          download
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-6 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-indigo-600 to-fuchsia-600 hover:from-indigo-700 hover:to-fuchsia-700 text-white font-semibold shadow-lg transition"
        >
          <ArrowDownTrayIcon className="w-5 h-5" />
          Download Resume
        </motion.a>

        {/* Scroll Down Arrow */}
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 1.6, repeat: Infinity }}
          className="mt-8 cursor-pointer"
          onClick={() => {
            const el = document.getElementById('about');
            el?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          <div className="flex flex-col items-center text-indigo-400">
            <ChevronDownIcon className="w-8 h-8" />
            <span className="text-xs font-light tracking-wide mt-1 animate-pulse">Scroll</span>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}