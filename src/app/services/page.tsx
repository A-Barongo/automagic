"use client";

import { motion } from "framer-motion";

export default function ServicesPage() {
  return (
    <main className="max-w-7xl mx-auto px-6 py-20">
      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-5xl font-bold mb-10 bg-gradient-to-r from-blue-600 via-purple-600 via-pink-500 to-green-500 bg-clip-text text-transparent"
      >
        Our Services
      </motion.h1>

      {/* Intro */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="text-xl text-gray-700 leading-relaxed mb-12"
      >
        At{" "}
        <span className="bg-gradient-to-r from-blue-600 via-purple-600 via-pink-500 to-green-500 bg-clip-text text-transparent font-semibold">
          Automagic Solutions
        </span>
        , we deliver modern{" "}
        <span className="bg-gradient-to-r from-blue-600 via-purple-600 via-pink-500 to-green-500 bg-clip-text text-transparent font-semibold">
          IoT
        </span>{" "}
        systems,{" "}
        <span className="bg-gradient-to-r from-blue-600 via-purple-600 via-pink-500 to-green-500 bg-clip-text text-transparent font-semibold">
          software development
        </span>{" "}
        expertise, and{" "}
        <span className="bg-gradient-to-r from-blue-600 via-purple-600 via-pink-500 to-green-500 bg-clip-text text-transparent font-semibold">
          automation solutions
        </span>{" "}
        that shape the future of technology.
      </motion.p>

      {/* Services Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          {
            title: "IoT Solutions",
            desc: "From device integration to cloud analytics, we bring your IoT vision to life.",
          },
          {
            title: "Software Development",
            desc: "Full-stack solutions including apps, APIs, and automation platforms.",
          },
          {
            title: "Smart Homes & Energy",
            desc: "Build sustainable, automated spaces with intelligent energy systems.",
          },
          {
            title: "AI & Automation",
            desc: "Enhance efficiency with AI-driven process automation and decision support.",
          },
          {
            title: "Consulting & Strategy",
            desc: "Technology roadmaps tailored to your business needs and growth goals.",
          },
          {
            title: "Innovation Lab",
            desc: "R&D for futuristic solutions blending IoT, AI, and cloud-native systems.",
          },
        ].map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 * (i + 1) }}
            className="p-6 rounded-xl border border-blue-100 shadow-md bg-gradient-to-br from-white via-blue-50 to-purple-50 hover:shadow-lg hover:scale-105 transition"
          >
            <h3 className="text-xl font-semibold mb-3 bg-gradient-to-r from-blue-600 via-purple-600 via-pink-500 to-green-500 bg-clip-text text-transparent">
              {s.title}
            </h3>
            <p className="text-gray-700 text-sm leading-relaxed">{s.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* Why Automagic Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="mt-20 text-center"
      >
        <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 via-pink-500 to-green-500 bg-clip-text text-transparent">
          Why Automagic Solutions?
        </h2>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
          We don’t just provide technology — we design{" "}
          <span className="bg-gradient-to-r from-blue-600 via-purple-600 via-pink-500 to-green-500 bg-clip-text text-transparent font-semibold">
            futuristic systems
          </span>{" "}
          that are intuitive, scalable, and future-proof. Partner with us to
          unlock the next era of{" "}
          <span className="bg-gradient-to-r from-blue-600 via-purple-600 via-pink-500 to-green-500 bg-clip-text text-transparent font-semibold">
            innovation
          </span>
          .
        </p>
      </motion.div>
    </main>
  );
}
