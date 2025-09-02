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
      <div className="absolute top-[20%] left-[8%] w-[220px] h-[220px] bg-indigo-500/20 blur-3xl rounded-full animate-pulse z-0" />
      <div className="absolute bottom-[15%] right-[12%] w-[180px] h-[180px] bg-fuchsia-600/20 blur-2xl rounded-full animate-ping z-0" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-extrabold tracking-tight text-center mb-12"
        >
          <span className="bg-gradient-to-r from-indigo-400 to-fuchsia-400 bg-clip-text text-transparent">
            About Me
          </span>
          <span className="block mx-auto mt-2 h-[3px] w-20 bg-gradient-to-r from-indigo-400 to-fuchsia-400 rounded-full" />
        </motion.h2>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center gap-10 bg-black/40 border border-white/10 backdrop-blur-xl rounded-3xl p-10 shadow-[0_0_40px_rgba(139,92,246,0.25)] hover:shadow-purple-600/40 transition-all duration-500"
        >
          {/* Profile Image (optional) */}
          <motion.img
            src="/profile.jpeg"
            alt="Aditya Verma"
            className="w-40 h-40 md:w-48 md:h-48 rounded-2xl object-cover border-4 border-indigo-400 shadow-xl"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          />

          {/* Text */}
          <div className="space-y-6 text-gray-300 leading-relaxed text-lg">
            <p>
              Hi, I’m <span className="text-white font-semibold">Aditya Verma</span>, currently pursuing B.E. in{' '}
              <span className="text-indigo-400 font-medium">Electronics and Communication Engineering</span> at
              <span className="text-white"> Thapar Institute</span>. I’m passionate about creating
              scalable, intelligent software that solves real-world problems.
            </p>

            <p>
              I love building smart full-stack applications using
              <span className="text-indigo-400 font-medium"> Next.js</span>,{' '}
              <span className="text-indigo-400 font-medium">Node.js</span>, and{' '}
              <span className="text-indigo-400 font-medium">MongoDB</span>. My focus is always on clean UI,
              high performance, and smooth user experiences.
            </p>

            <p>
              Beyond coding, I’m always learning, contributing to open-source, collaborating in hackathons,
              and exploring new trends in tech and AI.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}