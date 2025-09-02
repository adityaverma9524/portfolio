'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'

export default function Contact() {
  const [done, setDone] = useState(false)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setDone(false)
    setError(null)

    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      message: e.target.message.value
    }

    const res = await fetch('/api/send-email', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    })

    setLoading(false)

    if (res.ok) {
      setDone(true)
      e.target.reset()
    } else {
      setError('Message failed. Try again.')
    }
  }

  return (
    <section
      id="contact"
      className="relative py-24 px-6 bg-gradient-to-b from-[#111827] to-[#1f2937] text-white overflow-hidden scroll-smooth"
    >
      {/* Subtle Background */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.03] bg-repeat z-0" />

      {/* Accent Glows */}
      <div className="absolute top-[12%] left-[8%] w-[220px] h-[220px] bg-indigo-500/30 blur-3xl rounded-full animate-pulse z-0" />
      <div className="absolute bottom-[12%] right-[10%] w-[200px] h-[200px] bg-fuchsia-600/30 blur-3xl rounded-full animate-ping z-0" />

      <div className="relative z-20 max-w-xl mx-auto">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-extrabold text-center mb-12"
        >
          <span className="bg-gradient-to-r from-indigo-400 to-fuchsia-400 bg-clip-text text-transparent">
            Let’s Connect
          </span>
          <span className="block mx-auto mt-2 h-[3px] w-20 bg-gradient-to-r from-indigo-400 to-fuchsia-400 rounded-full" />
        </motion.h2>

        {/* Contact Form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-black/40 border border-white/10 backdrop-blur-xl p-8 rounded-3xl shadow-[0_0_25px_rgba(139,92,246,0.2)] hover:shadow-[0_0_35px_rgba(139,92,246,0.35)] transition-all duration-500 space-y-5"
        >
          <input
            type="text"
            name="name"
            required
            placeholder="Your Name"
            className="w-full px-4 py-3 rounded-xl bg-white/10 text-white border border-white/10 focus:outline-none focus:ring-2 focus:ring-indigo-500 placeholder:text-gray-400 transition"
          />
          <input
            type="email"
            name="email"
            required
            placeholder="Your Email"
            className="w-full px-4 py-3 rounded-xl bg-white/10 text-white border border-white/10 focus:outline-none focus:ring-2 focus:ring-indigo-500 placeholder:text-gray-400 transition"
          />
          <textarea
            name="message"
            rows="5"
            required
            placeholder="Your Message"
            className="w-full px-4 py-3 rounded-xl bg-white/10 text-white border border-white/10 focus:outline-none focus:ring-2 focus:ring-indigo-500 placeholder:text-gray-400 transition"
          />

          {/* Submit Button */}
          <motion.button
            type="submit"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            className="w-full px-6 py-3 rounded-full bg-gradient-to-r from-indigo-600 to-fuchsia-600 hover:from-indigo-700 hover:to-fuchsia-700 transition text-white font-semibold flex items-center justify-center shadow-lg"
            disabled={loading}
          >
            {loading ? (
              <svg
                className="animate-spin h-5 w-5 mr-2 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 100 16v-4l-3 3 3 3v-4a8 8 0 01-8-8z"
                ></path>
              </svg>
            ) : null}
            {loading ? 'Sending...' : 'Send Message'}
          </motion.button>

          {/* Success / Error Messages */}
          {done && (
            <p className="text-green-400 text-center mt-2 font-medium">
              ✅ Message sent successfully!
            </p>
          )}
          {error && (
            <p className="text-red-400 text-center mt-2 font-medium">
              {error}
            </p>
          )}
        </motion.form>
      </div>
    </section>
  )
}