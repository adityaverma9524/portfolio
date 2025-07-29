'use client';
import { motion } from 'framer-motion';

export default function Education() {
  return (
    <section id="education" className="py-20 px-6 bg-[#0f172a] text-white relative overflow-hidden">
      {/* Subtle Background */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.03] bg-repeat z-0" />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-indigo-500 mb-12 text-center"
        >
          Education
        </motion.h2>

        {/* Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white/5 p-8 rounded-xl shadow-lg border border-white/10 backdrop-blur-md flex flex-col md:flex-row items-center gap-6"
        >
          {/* College Logo */}
          <img
            src="/thapar-logo.png"
            alt="Thapar Institute Logo"
            className="w-24 h-24 object-contain rounded-md bg-white p-2"
          />

          {/* Details */}
          <div>
            <h3 className="text-xl font-semibold text-indigo-400 mb-1">Thapar Institute of Engineering & Technology</h3>
            <p className="text-gray-300 text-sm">B.E. in Electronics & Communication Engineering</p>
            <p className="text-gray-400 text-sm mt-1">2022 – 2026</p>
            <p className="text-gray-300 text-sm mt-2">
              CGPA: <span className="text-white font-medium">8.7 / 10</span> (Current)
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}