'use client';
import { motion } from 'framer-motion';
import {
  FaJava,
  FaPython,
  FaNodeJs,
  FaGitAlt,
  FaDocker,
  FaLinux,
} from 'react-icons/fa';
import {
  SiCplusplus,
  SiTypescript,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiMongodb,
  SiMysql,
  SiTensorflow,
  SiPytorch,
  SiPostman,
  SiSwagger,
  SiGithubactions,
  SiVercel,
  SiSpringboot,
} from 'react-icons/si';

const skills = {
  Languages: [
    { name: 'C++', icon: <SiCplusplus className="text-blue-500" /> },
    { name: 'Java', icon: <FaJava className="text-red-500" /> },
    { name: 'Python', icon: <FaPython className="text-yellow-400" /> },
    { name: 'JavaScript', icon: <SiJavascript className="text-yellow-300" /> },
    { name: 'TypeScript', icon: <SiTypescript className="text-blue-500" /> },
    { name: 'SQL', icon: <SiMysql className="text-blue-400" /> },
  ],
  'Frameworks & Libraries': [
    { name: 'React.js', icon: <SiReact className="text-sky-400" /> },
    { name: 'Next.js', icon: <SiNextdotjs className="text-white" /> },
    { name: 'Node.js', icon: <FaNodeJs className="text-green-500" /> },
    { name: 'Express.js', icon: <FaNodeJs className="text-green-600" /> },
    { name: 'Spring Boot', icon: <SiSpringboot className="text-green-500" /> },
    { name: 'TensorFlow (basic)', icon: <SiTensorflow className="text-orange-400" /> },
    { name: 'PyTorch (basic)', icon: <SiPytorch className="text-red-500" /> },
  ],
  'Databases & Cloud': [
    { name: 'MongoDB', icon: <SiMongodb className="text-green-400" /> },
    { name: 'MySQL', icon: <SiMysql className="text-blue-400" /> },
    { name: 'Docker', icon: <FaDocker className="text-blue-500" /> },
  ],
  'Tools & Platforms': [
    { name: 'Git & GitHub', icon: <FaGitAlt className="text-orange-500" /> },
    { name: 'Linux', icon: <FaLinux className="text-yellow-500" /> },
    { name: 'Postman', icon: <SiPostman className="text-orange-400" /> },
    { name: 'Swagger', icon: <SiSwagger className="text-green-500" /> },
    { name: 'GitHub Actions (CI/CD)', icon: <SiGithubactions className="text-white" /> },
    { name: 'Vercel', icon: <SiVercel className="text-white" /> },
  ],
  'Core Concepts': [
    { name: 'Data Structures & Algorithms (DSA)', icon: '📊' },
    { name: 'Object-Oriented Programming (OOP)', icon: '🧩' },
    { name: 'Operating Systems', icon: '💻' },
    { name: 'Database Management Systems (DBMS)', icon: '🗄️' },
    { name: 'Computer Networks', icon: '🌐' },
    { name: 'System Design', icon: '🏗️' },
    { name: 'RESTful APIs', icon: '🔗' },
    { name: 'Authentication & Security', icon: '🔒' },
  ],
};

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative py-24 px-6 bg-gradient-to-b from-[#111827] to-[#1f2937] text-white overflow-hidden scroll-smooth"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.02] bg-repeat z-0" />

      {/* Accent Glows */}
      <div className="absolute top-[15%] right-[8%] w-[220px] h-[220px] bg-indigo-500/25 blur-3xl rounded-full animate-pulse z-0" />
      <div className="absolute bottom-[12%] left-[10%] w-[200px] h-[200px] bg-fuchsia-500/25 blur-2xl rounded-full animate-ping z-0" />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-extrabold text-center mb-16"
        >
          <span className="bg-gradient-to-r from-indigo-400 to-fuchsia-400 bg-clip-text text-transparent">
            Skills & Technologies
          </span>
          <span className="block mx-auto mt-2 h-[3px] w-20 bg-gradient-to-r from-indigo-400 to-fuchsia-400 rounded-full" />
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
              whileHover={{ scale: 1.04 }}
              className="bg-black/40 p-8 rounded-3xl border border-white/10 shadow-[0_0_25px_rgba(139,92,246,0.2)] hover:shadow-[0_0_35px_rgba(139,92,246,0.4)] hover:border-indigo-400 transition-all duration-500 backdrop-blur-xl"
            >
              <h3 className="text-xl font-semibold text-indigo-400 mb-6 pb-2 border-b border-indigo-500/40">
                {category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {items.map((skill) => (
                  <span
                    key={skill.name || skill}
                    className="flex items-center gap-2 text-sm px-3 py-1 bg-indigo-600/20 text-indigo-100 rounded-full hover:bg-indigo-500/40 transition-all duration-300 shadow-sm"
                  >
                    <span className="text-lg">
                      {skill.icon || '🔹'}
                    </span>
                    {skill.name || skill}
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