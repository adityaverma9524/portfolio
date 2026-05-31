'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaFileAlt } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import { ChevronDown } from 'lucide-react';
import { ReactTyped } from 'react-typed';

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const socials = [
    { href: 'https://github.com/adityaverma9524', icon: <FaGithub size={18} />, label: 'GitHub' },
    { href: 'https://linkedin.com/in/adityaverma0101', icon: <FaLinkedin size={18} />, label: 'LinkedIn' },
    { href: 'mailto:adityaverma9524@gmail.com', icon: <FaEnvelope size={18} />, label: 'Email' },
    { href: 'https://leetcode.com/u/adityaverma0101', icon: <SiLeetcode size={18} />, label: 'LeetCode' },
  ];

  return (
    <section
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
        padding: '100px 32px 60px',
      }}
    >
      {/* Background mesh */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'radial-gradient(ellipse 80% 60% at 50% -10%, rgba(201,168,76,0.08) 0%, transparent 60%)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', inset: 0,
        background: 'radial-gradient(ellipse 40% 40% at 85% 80%, rgba(201,168,76,0.04) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      {/* Decorative vertical line */}
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: '120px', opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        style={{
          position: 'absolute', left: '7%', top: '30%',
          width: '1px', background: 'linear-gradient(to bottom, transparent, rgba(201,168,76,0.4), transparent)',
        }}
      />

      <div style={{ maxWidth: '860px', width: '100%', position: 'relative', zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {/* Available badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            style={{ marginBottom: '28px' }}
          >
            <span className="gold-badge">
              <span style={{ width: '6px', height: '6px', background: '#4ade80', borderRadius: '50%', display: 'inline-block' }} />
              Software Engineering Intern @ Pratt &amp; Whitney
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="font-display"
            style={{
              fontSize: 'clamp(3.2rem, 8vw, 6.5rem)',
              fontWeight: 600,
              lineHeight: 1.02,
              color: 'var(--cream)',
              marginBottom: '8px',
              letterSpacing: '-0.02em',
            }}
          >
            Aditya<br />
            <span className="gold-shimmer">Verma</span>
          </motion.h1>

          {/* Role typewriter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.7 }}
            style={{ marginBottom: '24px', marginTop: '4px' }}
          >
            {mounted && (
              <ReactTyped
                strings={[
                  'Full-Stack Developer',
                  'Software Engineer',
                  'AI/ML Enthusiast',
                  'Problem Solver',
                ]}
                typeSpeed={55}
                backSpeed={30}
                backDelay={2000}
                loop
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontSize: 'clamp(1rem, 2.5vw, 1.3rem)',
                  color: 'var(--gold)',
                  fontWeight: 400,
                  letterSpacing: '0.04em',
                }}
              />
            )}
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.75, duration: 0.7 }}
            style={{
              fontSize: '1rem',
              color: 'var(--text-secondary)',
              maxWidth: '500px',
              lineHeight: 1.75,
              marginBottom: '40px',
              fontWeight: 300,
            }}
          >
            Building scalable full-stack applications and AI-driven platforms. Currently automating engineering workflows at Pratt &amp; Whitney. B.E. ECE at Thapar Institute, graduating May 2026.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.7 }}
            style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', alignItems: 'center', marginBottom: '48px' }}
          >
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              style={{
                padding: '13px 28px',
                background: 'linear-gradient(135deg, var(--gold-dim), var(--gold))',
                color: '#141418',
                borderRadius: '8px',
                fontWeight: 600,
                fontSize: '0.88rem',
                letterSpacing: '0.04em',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
              }}
            >
              View Projects
            </motion.a>
            <motion.a
              href="/AdityaVerma_Resume.pdf"
              download
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              style={{
                padding: '12px 28px',
                background: 'transparent',
                border: '1px solid var(--border-hover)',
                color: 'var(--cream-muted)',
                borderRadius: '8px',
                fontWeight: 500,
                fontSize: '0.88rem',
                letterSpacing: '0.04em',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                transition: 'all 0.25s',
              }}
            >
              <FaFileAlt size={14} /> Resume
            </motion.a>
          </motion.div>

          {/* Socials */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1, duration: 0.7 }}
            style={{ display: 'flex', gap: '12px' }}
          >
            {socials.map((s) => (
              <motion.a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                whileHover={{ scale: 1.12, y: -2 }}
                style={{
                  width: '40px', height: '40px',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  background: 'rgba(201,168,76,0.07)',
                  border: '1px solid rgba(201,168,76,0.18)',
                  borderRadius: '8px',
                  color: 'var(--gold-light)',
                  textDecoration: 'none',
                  transition: 'all 0.2s',
                }}
              >
                {s.icon}
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{ delay: 1.5, duration: 2, repeat: Infinity, repeatType: 'loop' }}
        style={{
          position: 'absolute', bottom: '32px', left: '50%', transform: 'translateX(-50%)',
          background: 'none', border: 'none', color: 'var(--text-muted)', cursor: 'pointer',
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px',
        }}
        aria-label="Scroll down"
      >
        <span style={{ fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase' }}>scroll</span>
        <ChevronDown size={16} />
      </motion.button>
    </section>
  );
}
