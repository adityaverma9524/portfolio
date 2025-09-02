'use client';
import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  const toggleMenu = () => setIsOpen(!isOpen);
  const links = ["about", "education", "skills", "projects", "certificates", "contact"];

  // Detect current scroll section
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      let current = '';
      links.forEach((id) => {
        const section = document.getElementById(id);
        if (section && section.offsetTop - 80 <= scrollY) {
          current = id;
        }
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
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="fixed top-0 left-0 w-full z-50 bg-black/40 backdrop-blur-md shadow-md border-b border-white/10"
    >
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between text-white">
        {/* Logo */}
        <motion.a
          href="#"
          whileHover={{ scale: 1.08 }}
          transition={{ type: 'spring', stiffness: 300 }}
          className="text-2xl font-extrabold tracking-tight bg-gradient-to-r from-indigo-400 to-fuchsia-400 bg-clip-text text-transparent"
        >
          Aditya Verma
        </motion.a>

        {/* Desktop Links */}
        <ul className="hidden sm:flex space-x-8 text-sm font-medium">
          {links.map((item) => (
            <li key={item}>
              <a
                href={`#${item}`}
                className={`group relative inline-block transition ${
                  activeSection === item ? 'text-indigo-400' : 'text-gray-200'
                }`}
              >
                <span className="group-hover:text-indigo-400 transition-colors duration-200">
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </span>
                {/* Animated underline */}
                <span
                  className={`absolute left-0 -bottom-1 h-[2px] bg-gradient-to-r from-indigo-400 to-fuchsia-400 transition-all duration-300 ${
                    activeSection === item ? 'w-full' : 'w-0'
                  } group-hover:w-full`}
                />
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Toggle Button */}
        <div className="sm:hidden">
          <button onClick={toggleMenu} className="text-gray-200 focus:outline-none">
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu with Slide Animation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="sm:hidden px-6 pb-4 pt-2 bg-black/80 backdrop-blur-md text-sm text-white space-y-3 shadow-lg border-t border-white/10"
          >
            {links.map((item) => (
              <a
                key={item}
                href={`#${item}`}
                onClick={() => setIsOpen(false)}
                className={`block py-2 px-3 rounded-md transition ${
                  activeSection === item
                    ? 'bg-gradient-to-r from-indigo-500/20 to-fuchsia-500/20 text-indigo-400'
                    : 'hover:text-indigo-400 hover:bg-white/5'
                }`}
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