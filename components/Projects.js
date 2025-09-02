'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    name: "Pixora",
    tech: ["Next.js", "TypeScript", "MongoDB", "Clerk", "Cloudinary", "Stripe"],
    desc: "AI SaaS platform for intelligent image processing — restoration, recoloring, background removal, and generative fill.",
    github: "https://github.com/adityaverma9524/pixora",
    live: "https://pixora-seven.vercel.app"
  },
  {
    name: "StockWise",
    tech: ["Node.js", "Express", "MongoDB", "Mongoose", "JWT"],
    desc: "Stock tracking and order processing system with role-based authentication, optimized DB queries, and logging.",
    github: "https://github.com/adityaverma9524/Inventory-Application"
  },
  {
    name: "ShopAPI",
    tech: ["Node.js", "Express", "MongoDB", "Swagger", "JWT"],
    desc: "Scalable RESTful API for shopping cart operations with Swagger docs, performance tuning, and secure auth.",
    github: "https://github.com/adityaverma9524/E-Commerce-Website"
  }
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative py-24 px-6 bg-gradient-to-b from-[#111827] to-[#1f2937] text-white overflow-hidden"
    >
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.03] bg-repeat z-0" />

      {/* Animated Accent Glows */}
      <div className="absolute top-[15%] left-[10%] w-[200px] h-[200px] bg-indigo-500/25 blur-3xl rounded-full animate-pulse z-0" />
      <div className="absolute bottom-[18%] right-[12%] w-[220px] h-[220px] bg-fuchsia-500/20 blur-2xl rounded-full animate-ping z-0" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-extrabold text-center mb-14"
        >
          <span className="bg-gradient-to-r from-indigo-400 to-fuchsia-400 bg-clip-text text-transparent">
            Projects
          </span>
          <span className="block mx-auto mt-2 h-[3px] w-20 bg-gradient-to-r from-indigo-400 to-fuchsia-400 rounded-full" />
        </motion.h2>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="group bg-black/40 border border-white/10 backdrop-blur-xl p-6 rounded-2xl shadow-[0_0_25px_rgba(139,92,246,0.15)] hover:shadow-[0_0_40px_rgba(139,92,246,0.35)] hover:border-indigo-400 transition-all duration-500"
            >
              {/* Project Title */}
              <h3 className="text-xl font-semibold text-indigo-400 group-hover:text-indigo-300 transition mb-3 tracking-wide">
                {project.name}
              </h3>

              {/* Description */}
              <p className="text-gray-300 text-sm mb-4 leading-relaxed">{project.desc}</p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, idx) => (
                  <span
                    key={idx}
                    className="text-xs bg-indigo-500/20 text-indigo-200 px-3 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="mt-4 flex gap-4">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-indigo-300 hover:text-white transition"
                  >
                    <Github size={18} /> GitHub
                  </a>
                )}
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-indigo-300 hover:text-white transition"
                  >
                    <ExternalLink size={18} /> Live
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}