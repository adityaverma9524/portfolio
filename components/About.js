'use client';
import { motion } from 'framer-motion';

const highlights = [
  { label: 'Internship', value: 'Pratt & Whitney' },
  { label: 'Degree', value: 'B.E. ECE' },
  { label: 'Institute', value: 'Thapar Institute' },
  { label: 'Focus', value: 'Full-Stack + AI/ML' },
];

export default function About() {
  return (
    <section id="about" style={{ padding: '100px 32px', position: 'relative', overflow: 'hidden' }}>
      {/* Subtle bg line accent */}
      <div style={{
        position: 'absolute', right: 0, top: '20%',
        width: '1px', height: '200px',
        background: 'linear-gradient(to bottom, transparent, rgba(201,168,76,0.2), transparent)',
      }} />

      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          style={{ marginBottom: '48px' }}
        >
          <span style={{ fontSize: '0.72rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)', fontWeight: 500 }}>
            01 — About
          </span>
          <h2 className="section-title" style={{ marginTop: '10px' }}>
            The Person<br />Behind the Code
          </h2>
          <span className="gold-rule" />
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'start' }} className="md:grid-cols-2 grid-cols-1">
          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', color: 'var(--text-secondary)', lineHeight: 1.8, fontWeight: 300, fontSize: '0.97rem' }}>
              <p>
                I'm <strong style={{ color: 'var(--cream)', fontWeight: 500 }}>Aditya Verma</strong>, a full-stack developer and software engineering intern at{' '}
                <strong style={{ color: 'var(--gold-light)', fontWeight: 500 }}>Pratt & Whitney</strong>, Bangalore — where I built an end-to-end automation tool from scratch that reduced manual engineering workflow time by 40%.
              </p>
              <p>
                Pursuing B.E. in Electronics & Communication Engineering at{' '}
                <strong style={{ color: 'var(--cream)', fontWeight: 500 }}>Thapar Institute of Engineering & Technology</strong>, I blend hardware foundations with modern software craftsmanship to build things that actually work at scale.
              </p>
              <p>
                My work spans{' '}
                <strong style={{ color: 'var(--cream)', fontWeight: 500 }}>Next.js</strong>,{' '}
                <strong style={{ color: 'var(--cream)', fontWeight: 500 }}>Node.js</strong>, and{' '}
                <strong style={{ color: 'var(--cream)', fontWeight: 500 }}>AI/ML</strong> — from SaaS products with payment integrations to fine-tuned domain-specific models. I care deeply about clean architecture, performance, and developer experience.
              </p>
              <p>
                Outside of work, I explore ML research, participate in hackathons, and occasionally break things productively.
              </p>
            </div>
          </motion.div>

          {/* Right: Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            viewport={{ once: true }}
          >
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
              {highlights.map((h, i) => (
                <motion.div
                  key={h.label}
                  className="card"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 + 0.2 }}
                  viewport={{ once: true }}
                  style={{ padding: '24px 20px' }}
                >
                  <div style={{ fontSize: '0.68rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '8px', fontWeight: 500 }}>
                    {h.label}
                  </div>
                  <div style={{ fontSize: '0.98rem', color: 'var(--cream)', fontWeight: 500, lineHeight: 1.3 }}>
                    {h.value}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Profile image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              viewport={{ once: true }}
              style={{ marginTop: '16px' }}
            >
              <div style={{ position: 'relative', display: 'inline-block' }}>
                <img
                  src="/profile.jpeg"
                  alt="Aditya Verma"
                  style={{
                    width: '100%',
                    maxWidth: '320px',
                    height: '200px',
                    objectFit: 'cover',
                    borderRadius: '10px',
                    border: '1px solid var(--border)',
                    display: 'block',
                  }}
                />
                <div style={{
                  position: 'absolute', inset: 0, borderRadius: '10px',
                  background: 'linear-gradient(to top, rgba(20,20,24,0.5), transparent)',
                }} />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
