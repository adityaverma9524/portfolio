'use client';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Lock } from 'lucide-react';
import { FaNodeJs, FaPython } from 'react-icons/fa';
import {
  SiNextdotjs, SiMongodb, SiTypescript, SiStripe, SiExpress,
  SiCloudinary, SiPandas, SiScikitlearn,
} from 'react-icons/si';

const projects = [
  {
    name: 'Pixora',
    tag: 'AI SaaS',
    tech: ['Next.js', 'TypeScript', 'MongoDB', 'Cloudinary', 'Stripe'],
    desc: 'Full-stack AI SaaS platform for intelligent image transformations — generative fill, object & background removal, recoloring. Integrated Clerk auth + Stripe payments with credit-based monetization. Deployed on Vercel with CI/CD.',
    github: 'https://github.com/adityaverma9524/pixora',
    live: 'https://pixora-seven.vercel.app',
    image: '/projects/pixora.png',
    accent: 'rgba(201,168,76,0.12)',
  },
  {
    name: 'StockWise',
    tag: 'Backend',
    tech: ['Node.js', 'Express.js', 'MongoDB', 'JWT'],
    desc: 'Stock management platform supporting real-time inventory tracking, automated order processing, and streamlined product lifecycle management. Role-based JWT auth + Mongoose-optimized APIs achieving 25% faster response time.',
    github: 'https://github.com/adityaverma9524/Inventory-Application',
    accent: 'rgba(74,222,128,0.07)',
  },
  {
    name: 'Customer Segmentation',
    tag: 'Machine Learning',
    tech: ['Python', 'Pandas', 'scikit-learn'],
    desc: 'Retail customer segmentation analysis using KMeans clustering with feature engineering. Preprocessed data with Pandas, performed EDA to extract key insights, and visualized segments using Matplotlib/Seaborn to support data-driven decisions.',
    github: 'https://github.com/adityaverma9524',
    accent: 'rgba(168,85,247,0.07)',
  },
];

const techIcons = {
  'Next.js': <SiNextdotjs size={13} />,
  'TypeScript': <SiTypescript size={13} />,
  'MongoDB': <SiMongodb size={13} />,
  'Cloudinary': <SiCloudinary size={13} />,
  'Stripe': <SiStripe size={13} />,
  'Node.js': <FaNodeJs size={13} />,
  'Express.js': <SiExpress size={13} />,
  'JWT': <Lock size={12} />,
  'Python': <FaPython size={13} />,
  'Pandas': <SiPandas size={13} />,
  'scikit-learn': <SiScikitlearn size={13} />,
};

const tagColors = {
  'AI SaaS': { bg: 'rgba(201,168,76,0.12)', color: 'var(--gold-light)', border: 'rgba(201,168,76,0.25)' },
  'Backend': { bg: 'rgba(74,222,128,0.1)', color: '#4ade80', border: 'rgba(74,222,128,0.2)' },
  'Machine Learning': { bg: 'rgba(168,85,247,0.1)', color: '#c084fc', border: 'rgba(168,85,247,0.2)' },
};

export default function Projects() {
  return (
    <section id="projects" style={{ padding: '100px 32px', position: 'relative', overflow: 'hidden' }}>
      <div style={{
        position: 'absolute', right: 0, bottom: '20%',
        width: '1px', height: '180px',
        background: 'linear-gradient(to bottom, transparent, rgba(201,168,76,0.2), transparent)',
      }} />

      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          style={{ marginBottom: '56px' }}
        >
          <span style={{ fontSize: '0.72rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)', fontWeight: 500 }}>
            03 — Projects
          </span>
          <h2 className="section-title" style={{ marginTop: '10px' }}>
            Things I've<br />Built
          </h2>
          <span className="gold-rule" />
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '24px' }}>
          {projects.map((project, index) => {
            const previewImage = project.image
              ? project.image
              : `https://opengraph.githubassets.com/1/${project.github.replace('https://github.com/', '')}`;

            const tc = tagColors[project.tag];

            return (
              <motion.div
                key={index}
                className="card"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                whileHover={{ y: -4 }}
                viewport={{ once: true }}
                style={{ padding: '0', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}
              >
                {/* Preview */}
                <a
                  href={project.live || project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ display: 'block', position: 'relative', overflow: 'hidden' }}
                >
                  <img
                    src={previewImage}
                    alt={project.name}
                    style={{
                      width: '100%', height: '180px', objectFit: 'cover',
                      borderBottom: '1px solid var(--border)',
                      transition: 'transform 0.5s ease',
                      display: 'block',
                    }}
                  />
                  <div style={{
                    position: 'absolute', inset: 0,
                    background: 'linear-gradient(to top, rgba(20,20,24,0.6), transparent)',
                    transition: 'opacity 0.3s',
                  }} />
                  {project.live && (
                    <div style={{
                      position: 'absolute', top: '12px', right: '12px',
                      background: 'rgba(20,20,24,0.85)',
                      border: '1px solid rgba(201,168,76,0.2)',
                      borderRadius: '6px', padding: '5px 8px',
                      display: 'flex', alignItems: 'center', gap: '4px',
                      color: 'var(--gold-light)', fontSize: '0.72rem',
                    }}>
                      <ExternalLink size={11} /> Live
                    </div>
                  )}
                </a>

                {/* Content */}
                <div style={{ padding: '24px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px' }}>
                    <h3 style={{
                      fontFamily: 'Cormorant Garamond, serif',
                      fontSize: '1.35rem', fontWeight: 600, color: 'var(--cream)', margin: 0,
                    }}>
                      {project.name}
                    </h3>
                    <span style={{
                      fontSize: '0.68rem', fontWeight: 500, letterSpacing: '0.06em',
                      background: tc.bg, border: `1px solid ${tc.border}`, color: tc.color,
                      padding: '3px 10px', borderRadius: '99px',
                    }}>
                      {project.tag}
                    </span>
                  </div>

                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', lineHeight: 1.75, margin: '0 0 20px', fontWeight: 300, flex: 1 }}>
                    {project.desc}
                  </p>

                  {/* Tech */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '20px' }}>
                    {project.tech.map((t) => (
                      <span key={t} className="skill-pill" style={{ fontSize: '0.72rem', padding: '3px 10px' }}>
                        {techIcons[t] || null} {t}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div style={{ display: 'flex', gap: '16px', borderTop: '1px solid var(--border)', paddingTop: '16px' }}>
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--text-secondary)', fontSize: '0.82rem', textDecoration: 'none', transition: 'color 0.2s' }}
                        onMouseEnter={e => e.currentTarget.style.color = 'var(--cream)'}
                        onMouseLeave={e => e.currentTarget.style.color = 'var(--text-secondary)'}
                      >
                        <Github size={15} /> GitHub
                      </a>
                    )}
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--gold)', fontSize: '0.82rem', textDecoration: 'none' }}
                      >
                        <ExternalLink size={15} /> Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
