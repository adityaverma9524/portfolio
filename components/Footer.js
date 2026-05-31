'use client';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';

const socials = [
  { href: 'https://github.com/adityaverma9524', icon: <FaGithub size={16} />, label: 'GitHub' },
  { href: 'https://linkedin.com/in/adityaverma0101', icon: <FaLinkedin size={16} />, label: 'LinkedIn' },
  { href: 'mailto:adityaverma9524@gmail.com', icon: <FaEnvelope size={16} />, label: 'Email' },
  { href: 'https://leetcode.com/u/adityaverma0101', icon: <SiLeetcode size={16} />, label: 'LeetCode' },
];

export default function Footer() {
  return (
    <footer style={{
      borderTop: '1px solid rgba(201,168,76,0.1)',
      padding: '32px',
    }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '20px' }}>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <p style={{ margin: 0, fontSize: '0.82rem', color: 'var(--text-muted)' }}>
            <span style={{ fontFamily: 'Cormorant Garamond, serif', color: 'var(--cream-muted)', fontWeight: 500 }}>Aditya Verma</span>
            {' '}· Built with Next.js, Tailwind & Framer Motion
          </p>
          <p style={{ margin: '4px 0 0', fontSize: '0.75rem', color: 'var(--text-muted)' }}>
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          style={{ display: 'flex', gap: '8px' }}
        >
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              style={{
                width: '34px', height: '34px',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                background: 'rgba(201,168,76,0.06)',
                border: '1px solid rgba(201,168,76,0.12)',
                borderRadius: '7px',
                color: 'var(--text-secondary)',
                textDecoration: 'none',
                transition: 'all 0.2s',
              }}
              onMouseEnter={e => { e.currentTarget.style.color = 'var(--gold-light)'; e.currentTarget.style.borderColor = 'rgba(201,168,76,0.35)'; }}
              onMouseLeave={e => { e.currentTarget.style.color = 'var(--text-secondary)'; e.currentTarget.style.borderColor = 'rgba(201,168,76,0.12)'; }}
            >
              {s.icon}
            </a>
          ))}
        </motion.div>
      </div>
    </footer>
  );
}
