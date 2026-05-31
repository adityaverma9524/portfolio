'use client';
import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const links = ['about', 'experience', 'projects', 'skills', 'education', 'certificates', 'contact'];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
      let current = '';
      links.forEach((id) => {
        const section = document.getElementById(id);
        if (section && section.offsetTop - 100 <= window.scrollY) current = id;
      });
      setActiveSection(current);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      style={{
        position: 'fixed', top: 0, left: 0, width: '100%', zIndex: 50,
        background: scrolled ? 'rgba(20,20,24,0.92)' : 'transparent',
        borderBottom: scrolled ? '1px solid rgba(201,168,76,0.1)' : '1px solid transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        transition: 'all 0.4s ease',
      }}
    >
      <nav style={{ maxWidth: '1200px', margin: '0 auto', padding: '18px 32px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Logo */}
        <motion.a
          href="#"
          whileHover={{ scale: 1.02 }}
          style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.35rem', fontWeight: 600, color: 'var(--gold-light)', letterSpacing: '-0.01em', textDecoration: 'none' }}
        >
          Aditya Verma
        </motion.a>

        {/* Desktop Links */}
        <ul style={{ display: 'flex', gap: '32px', listStyle: 'none', margin: 0, padding: 0 }} className="hidden sm:flex">
          {links.map((item) => (
            <li key={item}>
              <a
                href={`#${item}`}
                className={`nav-link ${activeSection === item ? 'active' : ''}`}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="sm:hidden"
          style={{ background: 'none', border: 'none', color: 'var(--gold-light)', cursor: 'pointer' }}
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="sm:hidden"
            style={{ background: 'rgba(20,20,24,0.97)', borderTop: '1px solid rgba(201,168,76,0.1)', padding: '16px 24px 20px' }}
          >
            {links.map((item) => (
              <a
                key={item}
                href={`#${item}`}
                onClick={() => setIsOpen(false)}
                style={{
                  display: 'block', padding: '10px 0',
                  color: activeSection === item ? 'var(--gold-light)' : 'var(--text-secondary)',
                  fontSize: '0.85rem', letterSpacing: '0.07em', textTransform: 'uppercase',
                  textDecoration: 'none', borderBottom: '1px solid rgba(201,168,76,0.05)',
                }}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
