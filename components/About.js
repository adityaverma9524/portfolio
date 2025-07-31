'use client';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section
      id="about"
      className="py-24 px-6 bg-gradient-to-b from-[#111827] to-[#1f2937] text-white relative overflow-hidden scroll-smooth"
    >
      {/* Subtle grid texture */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5 bg-repeat z-0" />

      {/* Accent Glows */}
      <div className="absolute top-[15%] left-[5%] w-[200px] h-[200px] bg-indigo-500/20 blur-3xl rounded-full animate-pulse z-0" />
      <div className="absolute bottom-[10%] right-[10%] w-[150px] h-[150px] bg-fuchsia-600/20 blur-2xl rounded-full animate-ping z-0" />

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-indigo-500 mb-12 text-center"
        >
          About Me
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.02 }}
          className="bg-white/5 backdrop-blur-lg p-10 rounded-2xl border border-white/10 shadow-[0_0_50px_rgba(139,92,246,0.2)] hover:shadow-purple-600/30 transition-all duration-500 text-gray-300 leading-relaxed space-y-6"
        >
          <p className="text-lg">
            Hi, I’m <span className="text-white font-semibold">Aditya Verma</span>, currently pursuing B.E. in Electronics and Communication Engineering at
            <span className="text-white"> Thapar Institute</span>.
            I’m driven by a passion to create scalable, intelligent software that solves real-world problems.
          </p>

          <p className="text-lg">
            I love building smart full-stack applications with technologies like
            <span className="text-indigo-400 font-medium"> Next.js, Node.js, and MongoDB</span>.
            My focus is always on clean UI, fast performance, and seamless user experience.
          </p>

          <p className="text-lg">
            Outside of code, I’m constantly learning, contributing to open-source, collaborating in hackathons,
            and exploring emerging trends in tech and AI.
          </p>
        </motion.div>
      </div>
    </section>
  );
}