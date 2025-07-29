import { Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#0f172a] text-white py-10 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6 text-sm">
        
        {/* Left Section: Info */}
        <div className="text-center md:text-left space-y-1">
          <p className="text-gray-300">
            &copy; {new Date().getFullYear()} <span className="text-white font-medium">Aditya Verma</span>. All rights reserved.
          </p>
          <p className="text-gray-400">
            Designed & built with <span className="text-indigo-400">Next.js</span>, <span className="text-indigo-400">Tailwind CSS</span>, and <span className="text-indigo-400">Framer Motion</span>.
          </p>
        </div>

        {/* Right Section: Socials */}
        <div className="flex gap-5">
          <a
            href="https://github.com/adityaverma9524"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-indigo-400 transition"
            aria-label="GitHub"
          >
            <Github size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/aditya-verma-914415196/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-indigo-400 transition"
            aria-label="LinkedIn"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="mailto:averma6_be22@thapar.edu"
            className="text-gray-300 hover:text-indigo-400 transition"
            aria-label="Email"
          >
            <Mail size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}