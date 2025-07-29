'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'

export default function Contact() {
  const [done, setDone] = useState(false)
  const [error, setError] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
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

    if (res.ok) {
      setDone(true)
      setError(null)
      e.target.reset()
    } else {
      setError('Message failed. Try again.')
    }
  }

  return (
    <section id="contact" className="py-20 px-6 bg-[#0f172a] text-white relative">
      {/* Subtle grid background */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5 bg-repeat z-0" />

      <div className="max-w-xl mx-auto relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-indigo-500 mb-10 text-center"
        >
          Let's Connect
        </motion.h2>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl border border-white/10 shadow-xl space-y-6"
        >
          <div className="space-y-4">
            <input
              type="text"
              name="name"
              required
              placeholder="Your Name"
              className="w-full px-4 py-3 rounded-lg bg-white/5 text-white border border-white/20 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
            />
            <input
              type="email"
              name="email"
              required
              placeholder="Your Email"
              className="w-full px-4 py-3 rounded-lg bg-white/5 text-white border border-white/20 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
            />
            <textarea
              name="message"
              rows="5"
              required
              placeholder="Your Message"
              className="w-full px-4 py-3 rounded-lg bg-white/5 text-white border border-white/20 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition resize-none"
            />
          </div>

          <button
            type="submit"
            className="w-full px-6 py-3 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 transition text-white font-semibold shadow-md"
          >
            Send Message
          </button>

          {done && (
            <p className="text-green-400 text-center mt-4 font-medium">
              ✅ Message sent successfully!
            </p>
          )}
          {error && (
            <p className="text-red-400 text-center mt-4 font-medium">
              ❌ {error}
            </p>
          )}
        </motion.form>
      </div>
    </section>
  )
}