'use client';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const certificates = [
  {
    title: "Software Engineering Job Simulation",
    issuer: "J.P. Morgan (Forage)",
    link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/Sj7temL583QAYpHXD/E6McHJDKsQYh79moz_Sj7temL583QAYpHXD_t4YoCRDqrcHDpWoC4_1751975378556_completion_certificate.pdf"
  },
  {
    title: "Technology Job Simulation",
    issuer: "Deloitte Australia (Forage)",
    link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/9PBTqmSxAf6zZTseP/udmxiyHeqYQLkTPvf_9PBTqmSxAf6zZTseP_t4YoCRDqrcHDpWoC4_1751718228891_completion_certificate.pdf"
  },
  {
    title: "Data Structures in C++",
    issuer: "Coding Ninjas",
    link: "https://certificate.codingninjas.com/view/5165e232c9f4f399"
  },
  {
    title: "Front End | Full Stack Web Development",
    issuer: "Coding Ninjas",
    link: "https://certificate.codingninjas.com/view/1040a241e5367826"
  },
  {
    title: "Hack2skill Participation",
    issuer: "The/Nudge Institute & Google",
    link: "https://certificate.hack2skill.com/user/h4cparticipation/2024H2S07H4C-P00222"
  }
];

export default function Certificates() {
  return (
    <section
      id="certificates"
      className="relative py-24 px-6 bg-gradient-to-b from-[#1f2937] to-[#0f172a] text-white overflow-hidden"
    >
      {/* Subtle Grid Background */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.03] bg-repeat z-0" />

      {/* Glowing Blurs */}
      <div className="absolute -top-24 -left-24 w-72 h-72 bg-indigo-500/30 rounded-full blur-3xl animate-pulse z-0" />
      <div className="absolute -bottom-32 -right-28 w-80 h-80 bg-fuchsia-600/30 rounded-full blur-3xl animate-ping z-0" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-white mb-12 text-center tracking-tight"
        >
          Certifications
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {certificates.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * 0.15,
                duration: 0.6,
                type: 'spring',
                stiffness: 80
              }}
              whileHover={{ scale: 1.03, rotate: 0.5 }}
              className="bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl p-6 shadow-[0_0_30px_rgba(16,185,129,0.25)] hover:shadow-[0_0_50px_rgba(139,92,246,0.4)] transition-all duration-500 cursor-pointer group"
            >
              <h3 className="text-lg font-semibold text-white mb-1 group-hover:text-indigo-400 transition">
                {cert.title}
              </h3>
              <p className="text-sm text-gray-300 mb-4 group-hover:text-gray-200 transition">{cert.issuer}</p>
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-emerald-300 hover:text-white transition text-sm"
              >
                <ExternalLink size={16} /> View Certificate
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}