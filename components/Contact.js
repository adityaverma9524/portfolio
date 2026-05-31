'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import { Send } from 'lucide-react';

const contactLinks = [
  { label: 'Email', value: 'adityaverma9524@gmail.com', href: 'mailto:adityaverma9524@gmail.com', icon: <FaEnvelope size={16} /> },
  { label: 'LinkedIn', value: 'adityaverma0101', href: 'https://linkedin.com/in/adityaverma0101', icon: <FaLinkedin size={16} /> },
  { label: 'GitHub', value: 'adityaverma9524', href: 'https://github.com/adityaverma9524', icon: <FaGithub size={16} /> },
  { label: 'LeetCode', value: 'adityaverma0101', href: 'https://leetcode.com/u/adityaverma0101', icon: <SiLeetcode size={16} /> },
];

export default function Contact() {
  const [done, setDone] = useState(false);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setDone(false);
    setError(null);

    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      message: e.target.message.value,
    };

    const res = await fetch('/api/send-email', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    setLoading(false);
    if (res.ok) { setDone(true); e.target.reset(); }
    else setError('Something went wrong. Please try again.');
  };

  return (
    <section id="contact" style={{ padding: '100px 32px', position: 'relative' }}>
      <div style={{
        position: 'absolute', inset: 0,
        background: 'radial-gradient(ellipse 50% 50% at 50% 100%, rgba(201,168,76,0.05) 0%, transparent 70%)',
      }} />

      <div style={{ maxWidth: '1100px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          style={{ marginBottom: '56px' }}
        >
          <span style={{ fontSize: '0.72rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)', fontWeight: 500 }}>
            08 — Contact
          </span>
          <h2 className="section-title" style={{ marginTop: '10px' }}>
            Let's Build<br />Something
          </h2>
          <span className="gold-rule" />
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'start' }} className="md:grid-cols-2 grid-cols-1">
          {/* Left: Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <input type="text" name="name" required placeholder="Your Name" className="form-input" />
              <input type="email" name="email" required placeholder="Your Email" className="form-input" />
              <textarea name="message" rows={5} required placeholder="Your Message" className="form-input" style={{ resize: 'vertical' }} />

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={loading}
                style={{
                  padding: '14px 28px',
                  background: loading ? 'rgba(201,168,76,0.4)' : 'linear-gradient(135deg, var(--gold-dim), var(--gold))',
                  border: 'none',
                  borderRadius: '8px',
                  color: '#141418',
                  fontWeight: 600,
                  fontSize: '0.88rem',
                  letterSpacing: '0.04em',
                  cursor: loading ? 'not-allowed' : 'pointer',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
                  fontFamily: 'DM Sans, sans-serif',
                }}
              >
                {loading ? 'Sending…' : (<><Send size={15} /> Send Message</>)}
              </motion.button>

              {done && <p style={{ color: '#4ade80', fontSize: '0.85rem', textAlign: 'center' }}>✓ Message sent successfully!</p>}
              {error && <p style={{ color: '#f87171', fontSize: '0.85rem', textAlign: 'center' }}>{error}</p>}
            </form>
          </motion.div>

          {/* Right: Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            viewport={{ once: true }}
          >
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.97rem', lineHeight: 1.8, fontWeight: 300, marginBottom: '36px' }}>
              Open to full-time roles, interesting projects, and good conversations about engineering. Don't hesitate to reach out.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {contactLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'flex', alignItems: 'center', gap: '14px',
                    padding: '14px 18px',
                    background: 'var(--bg-card)',
                    border: '1px solid var(--border)',
                    borderRadius: '10px',
                    textDecoration: 'none',
                    transition: 'all 0.25s',
                    color: 'inherit',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(201,168,76,0.4)'; e.currentTarget.style.background = 'var(--bg-card-hover)'; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(201,168,76,0.15)'; e.currentTarget.style.background = 'var(--bg-card)'; }}
                >
                  <span style={{ color: 'var(--gold)', opacity: 0.85 }}>{link.icon}</span>
                  <div>
                    <div style={{ fontSize: '0.7rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '2px' }}>{link.label}</div>
                    <div style={{ fontSize: '0.88rem', color: 'var(--cream-muted)' }}>{link.value}</div>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
