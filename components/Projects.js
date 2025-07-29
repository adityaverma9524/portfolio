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
    <section id="projects" className="py-20 px-6 bg-gradient-to-b from-[#1f2937] to-[#0f172a] text-white relative overflow-hidden">
      {/* Subtle Background */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.03] bg-repeat z-0" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-indigo-500 mb-12 text-center"
        >
          Projects
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="group bg-white/5 backdrop-blur-lg p-6 rounded-xl border border-white/10 shadow-md transition-transform hover:-translate-y-2 hover:shadow-lg duration-300"
            >
              <div>
                <h3 className="text-xl font-semibold text-indigo-400 mb-2">{project.name}</h3>
                <p className="text-gray-300 mb-4 leading-relaxed text-sm">{project.desc}</p>

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
              </div>

              <div className="mt-4 flex gap-4">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    className="inline-flex items-center gap-2 text-sm text-indigo-300 hover:text-white transition"
                  >
                    <Github size={18} /> GitHub
                  </a>
                )}
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
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