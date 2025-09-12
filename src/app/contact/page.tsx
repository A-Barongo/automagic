"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const phoneNumber = "254735368038"; // 🔹 Replace with your WhatsApp number in international format
    const text = `Hello Automagic Solutions,%0A%0AName: ${form.name}%0AEmail: ${form.email}%0A%0A${form.message}`;
    const url = `https://wa.me/${phoneNumber}?text=${text}`;
    window.open(url, "_blank");
  };

  return (
    <main className="relative max-w-3xl mx-auto px-6 py-20">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-pink-500 to-green-500 opacity-20 blur-3xl -z-10" />

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-5xl font-bold mb-10 bg-clip-text text-transparent bg-gradient-to-r from-blue-600  via-pink-500 to-green-500"
      >
        Contact Us
      </motion.h1>

      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="space-y-6 bg-white/80 backdrop-blur-md p-8 shadow-xl rounded-2xl border border-blue-100"
      >
        <div>
          <label className="block text-gray-700 font-medium">Name</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full border rounded-md px-3 py-2 mt-1 focus:ring-2 focus:ring-blue-400 outline-none"
          />
        </div>
        <div>
          <label className="block text-gray-700 font-medium">Email</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full border rounded-md px-3 py-2 mt-1 focus:ring-2 focus:ring-blue-400 outline-none"
          />
        </div>
        <div>
          <label className="block text-gray-700 font-medium">Message</label>
          <textarea
            rows={4}
            name="message"
            value={form.message}
            onChange={handleChange}
            required
            className="w-full border rounded-md px-3 py-2 mt-1 focus:ring-2 focus:ring-blue-400 outline-none"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full py-3 bg-gradient-to-r from-blue-600  to-green-500 text-white font-semibold rounded-lg shadow-lg hover:opacity-90 transition"
        >
          Send via WhatsApp
        </button>
      </motion.form>
    </main>
  );
}
