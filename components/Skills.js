'use client';
import { motion } from 'framer-motion';

const skills = {
  Languages: ['C++', 'Python', 'Java', 'SQL', 'TypeScript', 'JavaScript'],
  'Frameworks & Libraries': ['Next.js', 'Node.js', 'Express.js', 'Spring (basic)', 'MVC frameworks'],
  'Tools & Platforms': ['Git', 'GitHub', 'Linux', 'Vercel', 'Postman', 'Swagger'],
  'Databases & Cloud': ['MongoDB', 'MySQL', 'Cloudinary', 'Clerk'],
  'Core Concepts': [
    'Data Structures & Algorithms (DSA)',
    'Operating Systems',
    'RESTful APIs',
    'Database Management Systems (DBMS)',
    'Object-Oriented Programming (OOP)',
    'Computer Networks', 
    'Authentication'
  ]
};

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative py-24 px-6 bg-gradient-to-b from-[#0f172a] to-[#060b16] text-white overflow-hidden scroll-smooth"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.02] bg-repeat z-0" />

      {/* Accent Glows */}
      <div className="absolute top-[12%] right-[10%] w-[180px] h-[180px] bg-indigo-500/25 blur-3xl rounded-full animate-pulse z-0" />
      <div className="absolute bottom-[10%] left-[12%] w-[160px] h-[160px] bg-fuchsia-500/25 blur-2xl rounded-full animate-ping z-0" />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-fuchsia-500 mb-16"
        >
          Skills & Technologies
        </motion.h2>

        {/* Skill Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {Object.entries(skills).map(([category, items], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03 }}
              className="bg-white/5 p-6 rounded-2xl border border-white/10 shadow-[0_0_30px_rgba(139,92,246,0.15)] hover:shadow-[0_0_40px_rgba(139,92,246,0.4)] hover:border-indigo-500 transition-all duration-500 backdrop-blur-xl"
            >
              <h3 className="text-xl font-semibold text-indigo-400 mb-4 border-b border-indigo-500 pb-2">
                {category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {items.map((skill) => (
                  <span
                    key={skill}
                    className="text-sm px-3 py-1 bg-indigo-600/20 text-indigo-100 rounded-full hover:bg-indigo-500/40 transition-all duration-300"
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