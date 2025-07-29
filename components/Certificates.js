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
    <section id="certificates" className="py-20 px-6 bg-gradient-to-b from-[#1f2937] to-[#0f172a] text-white relative overflow-hidden">
      {/* Subtle Background */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.03] bg-repeat z-0" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-indigo-500 mb-12 text-center"
        >
          Certifications
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {certificates.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6 shadow-md hover:-translate-y-1 hover:shadow-lg transition-transform duration-300"
            >
              <h3 className="text-lg font-semibold text-indigo-400 mb-1">{cert.title}</h3>
              <p className="text-sm text-gray-300 mb-4">{cert.issuer}</p>
              <a
                href={cert.link}
                target="_blank"
                className="inline-flex items-center gap-1 text-indigo-300 hover:text-white transition text-sm"
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