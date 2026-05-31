'use client';
import { motion } from 'framer-motion';
import {
  FaJava, FaPython, FaNodeJs, FaGitAlt, FaDocker, FaLinux,
} from 'react-icons/fa';
import {
  SiCplusplus, SiTypescript, SiJavascript, SiReact, SiNextdotjs,
  SiMongodb, SiMysql, SiPostman, SiVercel, SiSpringboot,
  SiHuggingface, SiPandas, SiNumpy, SiScikitlearn,
} from 'react-icons/si';
import { Database, Wrench, Brain, Code2, Layers } from 'lucide-react';

const skillGroups = [
  {
    label: 'Languages',
    icon: <Code2 size={18} />,
    skills: [
      { name: 'JavaScript', icon: <SiJavascript style={{ color: '#f7df1e' }} /> },
      { name: 'TypeScript', icon: <SiTypescript style={{ color: '#3178c6' }} /> },
      { name: 'Python', icon: <FaPython style={{ color: '#ffd43b' }} /> },
      { name: 'Java', icon: <FaJava style={{ color: '#f89820' }} /> },
      { name: 'C/C++', icon: <SiCplusplus style={{ color: '#659ad2' }} /> },
      { name: 'SQL', icon: <SiMysql style={{ color: '#4479a1' }} /> },
    ],
  },
  {
    label: 'Frontend',
    icon: <Layers size={18} />,
    skills: [
      { name: 'Next.js', icon: <SiNextdotjs style={{ color: '#fff' }} /> },
      { name: 'React', icon: <SiReact style={{ color: '#61dafb' }} /> },
      { name: 'TailwindCSS', icon: null },
      { name: 'Shadcn/UI', icon: null },
      { name: 'HTML/CSS', icon: null },
    ],
  },
  {
    label: 'Backend',
    icon: <Database size={18} />,
    skills: [
      { name: 'Node.js', icon: <FaNodeJs style={{ color: '#68a063' }} /> },
      { name: 'Express.js', icon: <FaNodeJs style={{ color: '#68a063' }} /> },
      { name: 'Spring Boot', icon: <SiSpringboot style={{ color: '#6db33f' }} /> },
      { name: 'REST APIs', icon: null },
      { name: 'WebSockets', icon: null },
      { name: 'JWT / Auth', icon: null },
    ],
  },
  {
    label: 'Database & Cloud',
    icon: <Database size={18} />,
    skills: [
      { name: 'MongoDB', icon: <SiMongodb style={{ color: '#47a248' }} /> },
      { name: 'MySQL', icon: <SiMysql style={{ color: '#4479a1' }} /> },
      { name: 'Mongoose', icon: null },
      { name: 'Docker', icon: <FaDocker style={{ color: '#2496ed' }} /> },
      { name: 'Vercel', icon: <SiVercel style={{ color: '#fff' }} /> },
    ],
  },
  {
    label: 'AI / ML',
    icon: <Brain size={18} />,
    skills: [
      { name: 'Model Fine-tuning', icon: null },
      { name: 'HuggingFace', icon: <SiHuggingface style={{ color: '#ff9d00' }} /> },
      { name: 'Pandas', icon: <SiPandas style={{ color: '#150458' }} /> },
      { name: 'NumPy', icon: <SiNumpy style={{ color: '#4dabcf' }} /> },
      { name: 'scikit-learn', icon: <SiScikitlearn style={{ color: '#f7931e' }} /> },
    ],
  },
  {
    label: 'Tools',
    icon: <Wrench size={18} />,
    skills: [
      { name: 'Git / GitHub', icon: <FaGitAlt style={{ color: '#f05032' }} /> },
      { name: 'Postman', icon: <SiPostman style={{ color: '#ff6c37' }} /> },
      { name: 'Jira', icon: null },
      { name: 'Linux', icon: <FaLinux style={{ color: '#fcc624' }} /> },
      { name: 'VS Code', icon: null },
      { name: 'CI/CD', icon: null },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" style={{ padding: '100px 32px', position: 'relative' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          style={{ marginBottom: '56px' }}
        >
          <span style={{ fontSize: '0.72rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)', fontWeight: 500 }}>
            05 — Skills
          </span>
          <h2 className="section-title" style={{ marginTop: '10px' }}>
            Technologies<br />&amp; Tooling
          </h2>
          <span className="gold-rule" />
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(290px, 1fr))', gap: '20px' }}>
          {skillGroups.map((group, i) => (
            <motion.div
              key={group.label}
              className="card"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08, duration: 0.55 }}
              viewport={{ once: true }}
              style={{ padding: '28px 24px' }}
            >
              {/* Category header */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px', paddingBottom: '14px', borderBottom: '1px solid var(--border)' }}>
                <span style={{ color: 'var(--gold)', opacity: 0.8 }}>{group.icon}</span>
                <h3 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.05rem', fontWeight: 600, color: 'var(--cream)', margin: 0, letterSpacing: '0.01em' }}>
                  {group.label}
                </h3>
              </div>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {group.skills.map((skill) => (
                  <span key={skill.name} className="skill-pill">
                    {skill.icon && <span style={{ fontSize: '13px', lineHeight: 1, display: 'flex' }}>{skill.icon}</span>}
                    {skill.name}
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
