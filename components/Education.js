'use client';
import { motion } from 'framer-motion';

export default function Education() {
  return (
    <section id="education" className="py-20 px-6 bg-[#0f172a] text-white relative overflow-hidden scroll-smooth">
      {/* Subtle Background Grid */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.03] bg-repeat z-0" />

      {/* Accent Glow Blobs */}
      <div className="absolute top-[10%] left-[10%] w-[180px] h-[180px] bg-indigo-500/20 blur-3xl rounded-full animate-pulse z-0" />
      <div className="absolute bottom-[10%] right-[15%] w-[140px] h-[140px] bg-fuchsia-600/20 blur-2xl rounded-full animate-ping z-0" />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-indigo-500 mb-12 text-center"
        >
          Education
        </motion.h2>

        {/* Education Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.02 }}
          className="bg-white/5 p-8 rounded-2xl shadow-[0_0_50px_rgba(139,92,246,0.2)] hover:shadow-purple-600/30 border border-white/10 backdrop-blur-lg flex flex-col md:flex-row items-center gap-6 transition-all duration-500"
        >
          {/* College Logo */}
          <img
            src="/thapar-logo.png"
            alt="Thapar Institute Logo"
            className="w-24 h-24 object-contain rounded-md bg-white p-2 shadow-md"
          />

          {/* Details */}
          <div>
            <h3 className="text-xl font-semibold text-indigo-400 mb-1">
              Thapar Institute of Engineering & Technology
            </h3>
            <p className="text-gray-300 text-sm">
              B.E. in Electronics & Communication Engineering
            </p>
            <p className="text-gray-400 text-sm mt-1">
              2022 – 2026
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}