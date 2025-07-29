'use client';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  const links = ["about", "skills", "projects", "certificates", "contact"];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-[#0f172a]/70 to-[#1f2937]/70 backdrop-blur-md shadow-md border-b border-white/10">
      <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between text-white">
        {/* Logo */}
        <h1 className="text-xl sm:text-2xl font-semibold tracking-tight text-indigo-400">
          Aditya Verma
        </h1>

        {/* Desktop Links */}
        <div className="hidden sm:flex space-x-8 text-sm font-medium">
          {links.map((item) => (
            <a
              key={item}
              href={`#${item}`}
              className="relative group transition"
            >
              <span className="text-white group-hover:text-indigo-400 transition">
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </span>
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-indigo-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>

        {/* Mobile Toggle */}
        <div className="sm:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="sm:hidden bg-[#0f172a]/90 px-6 pb-4 pt-2 text-sm text-white flex flex-col space-y-3">
          {links.map((item) => (
            <a
              key={item}
              href={`#${item}`}
              onClick={() => setIsOpen(false)}
              className="hover:text-indigo-400 transition"
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}