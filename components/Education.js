'use client';
import { motion } from 'framer-motion';

export default function Education() {
  return (
    <section
      id="education"
      className="py-24 px-6 bg-gradient-to-b from-[#0f172a] to-[#1f2937] text-white relative overflow-hidden scroll-smooth"
    >
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.03] bg-repeat z-0" />

      {/* Accent Glows */}
      <div className="absolute top-[12%] left-[8%] w-[200px] h-[200px] bg-indigo-500/20 blur-3xl rounded-full animate-pulse z-0" />
      <div className="absolute bottom-[12%] right-[12%] w-[160px] h-[160px] bg-fuchsia-600/20 blur-2xl rounded-full animate-ping z-0" />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-extrabold tracking-tight text-center mb-14"
        >
          <span className="bg-gradient-to-r from-indigo-400 to-fuchsia-400 bg-clip-text text-transparent">
            Education
          </span>
          <span className="block mx-auto mt-2 h-[3px] w-20 bg-gradient-to-r from-indigo-400 to-fuchsia-400 rounded-full" />
        </motion.h2>

        {/* Education Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.03, boxShadow: '0 0 40px rgba(139,92,246,0.4)' }}
          className="bg-black/40 border border-white/10 backdrop-blur-xl p-8 rounded-3xl flex flex-col md:flex-row items-center gap-8 transition-all duration-500 shadow-[0_0_30px_rgba(139,92,246,0.2)] hover:shadow-purple-600/40"
        >
          {/* Logo in Glass Frame */}
          <div className="bg-white/10 p-3 rounded-2xl backdrop-blur-md shadow-md">
            <img
              src="/thapar-logo.png"
              alt="Thapar Institute Logo"
              className="w-20 h-20 object-contain"
            />
          </div>

          {/* Education Details */}
          <div>
            <h3 className="text-xl md:text-2xl font-semibold text-indigo-400 mb-1">
              Thapar Institute of Engineering & Technology
            </h3>
            <p className="text-gray-300 text-sm md:text-base">
              B.E. in Electronics & Communication Engineering
            </p>
            <p className="text-gray-400 text-sm mt-1">2022 – 2026</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}