'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'

export default function Contact() {
  const [done, setDone] = useState(false)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false) // New state

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true) // Start loader
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

    setLoading(false) // Stop loader

    if (res.ok) {
      setDone(true)
      e.target.reset()
    } else {
      setError('Message failed. Try again.')
    }
  }

  return (
    <section id="contact" className="py-20 px-6 bg-[#0f172a] text-white">
      <div className="max-w-xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-indigo-500 mb-8 text-center"
        >
          Get in Touch
        </motion.h2>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-white/10 backdrop-blur-md p-8 rounded-xl border border-white/10 shadow-lg space-y-5"
        >
          <input
            type="text"
            name="name"
            required
            placeholder="Your Name"
            className="w-full px-4 py-3 rounded-md bg-white/5 text-white border border-white/20 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <input
            type="email"
            name="email"
            required
            placeholder="Your Email"
            className="w-full px-4 py-3 rounded-md bg-white/5 text-white border border-white/20 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <textarea
            name="message"
            rows="5"
            required
            placeholder="Your Message"
            className="w-full px-4 py-3 rounded-md bg-white/5 text-white border border-white/20 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />

          <button
            type="submit"
            className="w-full px-6 py-3 rounded-lg bg-indigo-600 hover:bg-indigo-700 transition text-white font-semibold flex items-center justify-center"
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
          </button>

          {done && <p className="text-green-400 text-center mt-2">✅ Message sent successfully!</p>}
          {error && <p className="text-red-400 text-center mt-2">{error}</p>}
        </motion.form>
      </div>
    </section>
  )
}