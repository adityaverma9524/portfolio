'use client';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

const experiences = [
  {
    role: 'Software Engineering Intern',
    company: 'Pratt & Whitney',
    location: 'Bangalore, India',
    period: 'Feb 2026 – Jul 2026',
    type: 'Internship',
    current: true,
    bullets: [
      'Built an end-to-end internal automation tool — sole owner of backend logic, desktop UI, and deployment — reducing manual workflow time by 40% for the engineering team.',
      'Fine-tuned a domain-specific AI/ML model on proprietary data, improving relevance of automated outputs by a measurable margin; iterated on model performance through rigorous testing cycles.',
      'Collaborated cross-functionally to gather requirements, designed core features independently, and delivered a production-ready tool used by the internal team — within 5 months, from scratch.',
    ],
    stack: ['Python', 'AI/ML Fine-tuning', 'HuggingFace', 'Desktop UI', 'Automation'],
  },
];

export default function Experience() {
  return (
    <section id="experience" style={{ padding: '100px 32px', position: 'relative', overflow: 'hidden' }}>
      <div style={{
        position: 'absolute', left: '7%', top: '20%',
        width: '1px', height: '160px',
        background: 'linear-gradient(to bottom, transparent, rgba(201,168,76,0.25), transparent)',
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
            02 — Experience
          </span>
          <h2 className="section-title" style={{ marginTop: '10px' }}>
            Where I've<br />Applied My Skills
          </h2>
          <span className="gold-rule" />
        </motion.div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              className="card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              style={{ padding: '36px 40px', position: 'relative', overflow: 'hidden' }}
            >
              {/* Left gold accent bar */}
              <div style={{
                position: 'absolute', left: 0, top: 0, bottom: 0,
                width: '3px',
                background: 'linear-gradient(to bottom, var(--gold), transparent)',
                borderRadius: '0 0 0 12px',
              }} />

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '16px', marginBottom: '20px' }}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '6px' }}>
                    <div style={{
                      width: '36px', height: '36px',
                      background: 'rgba(201,168,76,0.1)',
                      border: '1px solid rgba(201,168,76,0.2)',
                      borderRadius: '8px',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                    }}>
                      <Briefcase size={16} color="var(--gold)" />
                    </div>
                    <div>
                      <h3 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.45rem', fontWeight: 600, color: 'var(--cream)', margin: 0, lineHeight: 1 }}>
                        {exp.role}
                      </h3>
                    </div>
                  </div>
                  <p style={{ color: 'var(--gold-light)', fontWeight: 500, fontSize: '0.95rem', margin: '0 0 2px 48px' }}>
                    {exp.company}
                  </p>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.82rem', margin: '0 0 0 48px' }}>
                    {exp.location}
                  </p>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '8px' }}>
                  <span className="gold-badge">{exp.type}</span>
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>{exp.period}</span>
                  {exp.current && (
                    <span style={{
                      fontSize: '0.7rem', background: 'rgba(74,222,128,0.12)',
                      border: '1px solid rgba(74,222,128,0.25)', color: '#4ade80',
                      padding: '2px 10px', borderRadius: '99px', letterSpacing: '0.04em',
                    }}>
                      Current
                    </span>
                  )}
                </div>
              </div>

              {/* Bullets */}
              <ul style={{ margin: '0 0 24px 0', padding: '0', listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {exp.bullets.map((b, j) => (
                  <li key={j} style={{ display: 'flex', gap: '12px', color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.7, fontWeight: 300 }}>
                    <span style={{ color: 'var(--gold)', flexShrink: 0, marginTop: '2px' }}>›</span>
                    {b}
                  </li>
                ))}
              </ul>

              {/* Stack */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {exp.stack.map((t) => (
                  <span key={t} className="skill-pill">{t}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
