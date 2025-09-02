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
      className="relative py-24 px-6 bg-gradient-to-b from-[#111827] to-[#1f2937] text-white overflow-hidden"
    >
      {/* Subtle Grid Background */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.03] bg-repeat z-0" />

      {/* Glowing Blurs */}
      <div className="absolute top-[12%] left-[8%] w-[200px] h-[200px] bg-indigo-500/25 rounded-full blur-3xl animate-pulse z-0" />
      <div className="absolute bottom-[15%] right-[12%] w-[220px] h-[220px] bg-fuchsia-600/25 rounded-full blur-3xl animate-ping z-0" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-extrabold text-center mb-16"
        >
          <span className="bg-gradient-to-r from-indigo-400 to-fuchsia-400 bg-clip-text text-transparent">
            Certifications
          </span>
          <span className="block mx-auto mt-2 h-[3px] w-20 bg-gradient-to-r from-indigo-400 to-fuchsia-400 rounded-full" />
        </motion.h2>

        {/* Certificate Grid */}
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
              whileHover={{ scale: 1.03 }}
              className="bg-black/40 border border-white/10 backdrop-blur-xl rounded-2xl p-6 shadow-[0_0_25px_rgba(139,92,246,0.2)] hover:shadow-[0_0_40px_rgba(139,92,246,0.35)] hover:border-indigo-400 transition-all duration-500"
            >
              <h3 className="text-lg font-semibold text-indigo-400 mb-1 group-hover:text-indigo-300 transition">
                {cert.title}
              </h3>
              <p className="text-sm text-gray-300 mb-4">{cert.issuer}</p>
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm px-4 py-2 rounded-lg bg-indigo-600/20 border border-indigo-400/40 text-indigo-200 hover:bg-indigo-600/30 hover:text-white transition-all duration-300"
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