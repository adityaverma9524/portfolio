'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Github, Lock } from 'lucide-react';
import { FaReact, FaNodeJs, FaJava, FaPython, FaJs, FaDatabase } from 'react-icons/fa';
import {
  SiNextdotjs,
  SiMongodb,
  SiTypescript,
  SiClerk,
  SiCloudinary,
  SiStripe,
  SiExpress,
  SiSwagger,
  SiDocker,
} from 'react-icons/si';

const projects = [
  {
    name: "Pixora",
    tech: ["Next.js", "TypeScript", "MongoDB", "Clerk", "Cloudinary", "Stripe"],
    desc: "AI SaaS platform for intelligent image processing — restoration, recoloring, background removal, and generative fill.",
    github: "https://github.com/adityaverma9524/pixora",
    live: "https://pixora-seven.vercel.app",
    image: "/projects/pixora.png"
  },
  {
    name: "StockWise",
    tech: ["Node.js", "Express.js", "MongoDB", "Mongoose", "JWT"],
    desc: "Stock tracking and order processing system with role-based authentication, optimized DB queries, and logging.",
    github: "https://github.com/adityaverma9524/Inventory-Application"
  },
  {
    name: "ShopAPI",
    tech: ["Node.js", "Express.js", "MongoDB", "Swagger", "JWT"],
    desc: "Scalable RESTful API for shopping cart operations with Swagger docs, performance tuning, and secure auth.",
    github: "https://github.com/adityaverma9524/E-Commerce-Website"
  }
];

// Map technologies to icons
const techIcons = {
  "React.js": <FaReact className="text-sky-400" />,
  "Next.js": <SiNextdotjs className="text-white" />,
  "Node.js": <FaNodeJs className="text-green-500" />,
  "Express.js": <SiExpress className="text-gray-300" />,
  "MongoDB": <SiMongodb className="text-green-400" />,
  "MySQL": <FaDatabase className="text-blue-400" />,
  "Docker": <SiDocker className="text-blue-500" />,
  "Java": <FaJava className="text-red-500" />,
  "Python": <FaPython className="text-yellow-400" />,
  "JavaScript": <FaJs className="text-yellow-300" />,
  "TypeScript": <SiTypescript className="text-blue-500" />,
  "Clerk": <SiClerk className="text-pink-400" />,
  "Cloudinary": <SiCloudinary className="text-blue-400" />,
  "Stripe": <SiStripe className="text-purple-400" />,
  "Swagger": <SiSwagger className="text-green-500" />,
  "JWT": <Lock className="w-3 h-3 text-emerald-400" />, // ✅ fixed
};

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative py-24 px-6 bg-gradient-to-b from-[#111827] to-[#1f2937] text-white overflow-hidden"
    >
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.03] bg-repeat z-0" />

      {/* Glowing Orbs */}
      <div className="absolute top-[15%] left-[10%] w-[180px] h-[180px] bg-indigo-500/30 blur-3xl rounded-full animate-pulse z-0" />
      <div className="absolute bottom-[20%] right-[10%] w-[200px] h-[200px] bg-fuchsia-500/20 blur-2xl rounded-full animate-ping z-0" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-extrabold text-center mb-8"
        >
          <span className="bg-gradient-to-r from-indigo-400 to-fuchsia-500 bg-clip-text text-transparent">
            Projects
          </span>
          <span className="block mx-auto mt-3 h-[3px] w-20 bg-gradient-to-r from-indigo-400 to-fuchsia-500 rounded-full" />
        </motion.h2>

        {/* Project Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => {
            const previewImage = project.image
              ? project.image
              : `https://opengraph.githubassets.com/1/${project.github.replace('https://github.com/', '')}`;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                whileHover={{
                  scale: 1.05,
                  y: -10,
                  boxShadow: "0 15px 40px rgba(139, 92, 246, 0.4)",
                  transition: { duration: 0.25, ease: "easeOut" },
                }}
                className="group bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-white/10 shadow-[0_0_25px_rgba(139,92,246,0.15)] hover:border-indigo-500"
              >
                {/* 🔥 Project Preview (clickable with icon bottom-left) */}
                <a
                  href={project.live || project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative block"
                >
                  <img
                    src={previewImage}
                    alt={`${project.name} preview`}
                    className="w-full h-40 object-cover rounded-lg border border-white/10 mb-4 group-hover:opacity-90 transition"
                  />
                  {/* Open Link Icon Overlay (bottom-left) */}
                  <div className="absolute bottom-3 left-3 bg-black/60 p-1.5 rounded-full group-hover:scale-110 transition">
                    <ExternalLink size={16} className="text-white" />
                  </div>
                </a>

                {/* Project Details */}
                <h3 className="text-xl font-semibold text-indigo-400 group-hover:text-indigo-300 transition mb-2 tracking-wide">
                  {project.name}
                </h3>
                <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                  {project.desc}
                </p>

                {/* Tech Tags with Icons */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, idx) => (
                    <span
                      key={idx}
                      className="flex items-center gap-1 text-xs bg-indigo-500/20 text-indigo-200 px-3 py-1 rounded-full"
                    >
                      {techIcons[tech] || null} {tech}
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
            );
          })}
        </div>
      </div>
    </section>
  );
}