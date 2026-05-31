'use client';
import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';

const coursework = [
  'Data Structures & Algorithms',
  'Object-Oriented Programming',
  'Database Management Systems',
  'Computer Architecture',
  'Machine Learning',
  'Artificial Intelligence',
  'Computer Networks',
  'Operating Systems',
];

export default function Education() {
  return (
    <section id="education" style={{ padding: '100px 32px', position: 'relative' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          style={{ marginBottom: '56px' }}
        >
          <span style={{ fontSize: '0.72rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)', fontWeight: 500 }}>
            06 — Education
          </span>
          <h2 className="section-title" style={{ marginTop: '10px' }}>
            Academic<br />Foundation
          </h2>
          <span className="gold-rule" />
        </motion.div>

        <motion.div
          className="card"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          style={{ padding: '40px', overflow: 'hidden', position: 'relative' }}
        >
          {/* Gold bar */}
          <div style={{
            position: 'absolute', left: 0, top: 0, bottom: 0, width: '3px',
            background: 'linear-gradient(to bottom, var(--gold), transparent)',
          }} />

          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '32px', flexWrap: 'wrap' }}>
            {/* Logo container */}
            <div style={{
              width: '72px', height: '72px', flexShrink: 0,
              background: 'rgba(255,255,255,0.05)',
              border: '1px solid var(--border)',
              borderRadius: '12px',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              overflow: 'hidden',
            }}>
              <img src="/thapar-logo.png" alt="Thapar" style={{ width: '52px', height: '52px', objectFit: 'contain' }} />
            </div>

            <div style={{ flex: 1, minWidth: '260px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
                <GraduationCap size={18} color="var(--gold)" />
                <h3 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.5rem', fontWeight: 600, color: 'var(--cream)', margin: 0 }}>
                  Thapar Institute of Engineering & Technology
                </h3>
              </div>
              <p style={{ color: 'var(--gold-light)', fontWeight: 500, fontSize: '0.95rem', margin: '0 0 4px' }}>
                B.E. in Electronics & Communication Engineering
              </p>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.83rem', margin: '0 0 24px' }}>
                Patiala, Punjab, India &nbsp;·&nbsp; Sep 2022 – May 2026
              </p>

              {/* Coursework */}
              <div>
                <p style={{ fontSize: '0.72rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--gold)', fontWeight: 500, marginBottom: '12px' }}>
                  Relevant Coursework
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {coursework.map((c) => (
                    <span key={c} className="skill-pill">{c}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
