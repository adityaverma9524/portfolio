'use client';
import { motion } from 'framer-motion';
import { ExternalLink, Award } from 'lucide-react';

const certificates = [
  {
    title: 'Software Engineering Job Simulation',
    issuer: 'J.P. Morgan',
    platform: 'Forage',
    link: 'https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/Sj7temL583QAYpHXD/E6McHJDKsQYh79moz_Sj7temL583QAYpHXD_t4YoCRDqrcHDpWoC4_1751975378556_completion_certificate.pdf',
  },
  {
    title: 'Technology Job Simulation',
    issuer: 'Deloitte Australia',
    platform: 'Forage',
    link: 'https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/9PBTqmSxAf6zZTseP/udmxiyHeqYQLkTPvf_9PBTqmSxAf6zZTseP_t4YoCRDqrcHDpWoC4_1751718228891_completion_certificate.pdf',
  },
  {
    title: 'Data Structures in C++',
    issuer: 'Coding Ninjas',
    platform: 'Certificate',
    link: 'https://certificate.codingninjas.com/view/5165e232c9f4f399',
  },
  {
    title: 'Front End & Full Stack Web Development',
    issuer: 'Coding Ninjas',
    platform: 'Certificate',
    link: 'https://certificate.codingninjas.com/view/1040a241e5367826',
  },
  {
    title: 'Hack2skill Participation',
    issuer: 'The/Nudge Institute & Google',
    platform: 'Hackathon',
    link: 'https://certificate.hack2skill.com/user/h4cparticipation/2024H2S07H4C-P00222',
  },
];

export default function Certificates() {
  return (
    <section id="certificates" style={{ padding: '100px 32px', position: 'relative' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          style={{ marginBottom: '56px' }}
        >
          <span style={{ fontSize: '0.72rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)', fontWeight: 500 }}>
            07 — Certifications
          </span>
          <h2 className="section-title" style={{ marginTop: '10px' }}>
            Credentials &amp;<br />Recognition
          </h2>
          <span className="gold-rule" />
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '16px' }}>
          {certificates.map((cert, i) => (
            <motion.div
              key={i}
              className="card"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.55 }}
              viewport={{ once: true }}
              style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '12px' }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <div style={{
                  width: '36px', height: '36px',
                  background: 'rgba(201,168,76,0.1)',
                  border: '1px solid rgba(201,168,76,0.2)',
                  borderRadius: '8px',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <Award size={16} color="var(--gold)" />
                </div>
                <span className="gold-badge" style={{ fontSize: '0.65rem' }}>{cert.platform}</span>
              </div>

              <div>
                <h3 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.1rem', fontWeight: 600, color: 'var(--cream)', margin: '0 0 4px', lineHeight: 1.3 }}>
                  {cert.title}
                </h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.83rem', margin: 0 }}>
                  {cert.issuer}
                </p>
              </div>

              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '6px',
                  fontSize: '0.78rem', color: 'var(--gold)', textDecoration: 'none',
                  marginTop: 'auto', fontWeight: 500,
                  transition: 'opacity 0.2s',
                }}
                onMouseEnter={e => e.currentTarget.style.opacity = '0.75'}
                onMouseLeave={e => e.currentTarget.style.opacity = '1'}
              >
                <ExternalLink size={13} /> View Certificate
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
