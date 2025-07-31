'use client';
import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';

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
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-[#0f172a]/80 to-[#1f2937]/80 backdrop-blur-md shadow-md border-b border-white/10"
    >
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between text-white">
        {/* Logo */}
        <a href="#" className="text-2xl font-bold tracking-tight text-indigo-400 hover:text-indigo-500 transition-colors duration-300">
          Aditya Verma
        </a>

        {/* Desktop Links */}
        <ul className="hidden sm:flex space-x-8 text-sm font-medium">
          {links.map((item) => (
            <li key={item}>
              <a
                href={`#${item}`}
                className={`group relative inline-block transition ${
                  activeSection === item ? 'text-indigo-400' : 'text-white'
                }`}
              >
                <span className="group-hover:text-indigo-400 transition-colors duration-200">
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </span>
                <span className={`absolute left-0 -bottom-1 h-[2px] bg-indigo-400 transition-all duration-300 ${activeSection === item ? 'w-full' : 'w-0'} group-hover:w-full`} />
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Toggle Button */}
        <div className="sm:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="sm:hidden px-6 pb-4 pt-2 bg-[#0f172a]/95 text-sm text-white space-y-3"
        >
          {links.map((item) => (
            <a
              key={item}
              href={`#${item}`}
              onClick={() => setIsOpen(false)}
              className="block hover:text-indigo-400 transition-colors duration-200"
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </a>
          ))}
        </motion.div>
      )}
    </motion.header>
  );
}