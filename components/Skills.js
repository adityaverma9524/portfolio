'use client';
import { motion } from 'framer-motion';

const skills = {
  Languages: ['C++', 'Python', 'Java', 'SQL', 'TypeScript', 'JavaScript'],
  'Frameworks & Libraries': ['Next.js', 'Node.js', 'Express.js', 'Spring (basic)', 'MVC frameworks'],
  'Tools & Platforms': ['Git', 'GitHub', 'Linux', 'Vercel', 'Postman', 'Swagger'],
  'Databases & Cloud': ['MongoDB', 'MySQL', 'Cloudinary', 'Clerk'],
  'Core Concepts': ['DSA', 'RESTful APIs', 'OOP', 'Authentication']
};

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 px-6 bg-gradient-to-b from-[#0f172a] to-[#060b16] text-white overflow-hidden">
      {/* Optional Background Pattern */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.02] z-0" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-indigo-500 mb-14 text-center"
        >
          Skills & Technologies
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {Object.entries(skills).map(([category, items], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              className="bg-white/5 p-6 rounded-xl border border-white/10 shadow-lg hover:shadow-indigo-500/20 transition duration-300 backdrop-blur-xl"
            >
              <h3 className="text-xl font-semibold text-indigo-400 mb-4 border-b border-indigo-500 pb-2">
                {category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {items.map((skill) => (
                  <span
                    key={skill}
                    className="text-sm px-3 py-1 bg-indigo-600/20 text-indigo-100 rounded-full hover:bg-indigo-600/30 transition"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}