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
      className="relative pt-24 pb-10 px-6 bg-[#0f172a] text-white overflow-hidden scroll-smooth"
    >
      {/* Accent Glows */}
      <div className="absolute top-[15%] left-[10%] w-[200px] h-[200px] bg-indigo-500/30 blur-3xl rounded-full animate-pulse z-0" />
      <div className="absolute bottom-[10%] right-[15%] w-[180px] h-[180px] bg-fuchsia-600/30 blur-2xl rounded-full animate-ping z-0" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/90 z-10 backdrop-blur-sm" />

      <div className="relative z-20 max-w-xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-extrabold text-center tracking-tight text-indigo-400 mb-10"
        >
          Let’s Connect
        </motion.h2>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-white/5 border border-white/20 backdrop-blur-md p-8 rounded-2xl shadow-[0_0_50px_rgba(139,92,246,0.2)] hover:shadow-fuchsia-600/20 transition-all duration-500 space-y-5"
        >
          <input
            type="text"
            name="name"
            required
            placeholder="Your Name"
            className="w-full px-4 py-3 rounded-md bg-white/10 text-white border border-white/20 focus:outline-none focus:ring-2 focus:ring-indigo-500 placeholder:text-white/70"
          />
          <input
            type="email"
            name="email"
            required
            placeholder="Your Email"
            className="w-full px-4 py-3 rounded-md bg-white/10 text-white border border-white/20 focus:outline-none focus:ring-2 focus:ring-indigo-500 placeholder:text-white/70"
          />
          <textarea
            name="message"
            rows="5"
            required
            placeholder="Your Message"
            className="w-full px-4 py-3 rounded-md bg-white/10 text-white border border-white/20 focus:outline-none focus:ring-2 focus:ring-indigo-500 placeholder:text-white/70"
          />

          <motion.button
            type="submit"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="w-full px-6 py-3 rounded-full bg-gradient-to-r from-indigo-600 to-fuchsia-600 hover:from-indigo-700 hover:to-fuchsia-700 transition text-white font-semibold flex items-center justify-center shadow-md"
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

          {done && <p className="text-green-400 text-center mt-2">✅ Message sent successfully!</p>}
          {error && <p className="text-red-400 text-center mt-2">{error}</p>}
        </motion.form>
      </div>
    </section>
  )
}