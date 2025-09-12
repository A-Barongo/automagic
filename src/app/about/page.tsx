"use client";

import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <main className="max-w-7xl mx-auto px-6 py-20">
      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-5xl font-bold mb-10 bg-gradient-to-r from-blue-700 via-purple-600 to-pink-500 bg-clip-text text-transparent"
      >
        About Us
      </motion.h1>

      {/* Intro */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="text-xl text-gray-700 leading-relaxed mb-12"
      >
        At <span className="font-semibold">Automagic Solutions</span>, we help
        businesses and individuals harness the power of{" "}
        <span className="text-blue-700 font-semibold">IoT</span>,{" "}
        <span className="text-purple-700 font-semibold">software development</span>
        , and <span className="text-pink-600 font-semibold">smart home solutions</span>{" "}
        to simplify operations, reduce costs, and unlock new opportunities.
      </motion.p>

      {/* Founder Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.7 }}
        className="bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-100 rounded-2xl shadow-sm p-8 mb-16"
      >
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          Founded by Allan Barongo
        </h2>
        <p className="text-gray-700 text-lg">
          A full-stack developer and Electrical & Electronics Engineering
          graduate, Allan’s mission is to bridge the gap between technology and
          everyday life. With expertise spanning IoT integration, automation
          platforms, AI-driven software solutions, and smart energy systems, we
          deliver customized consultation services that empower clients to scale
          with confidence.
        </p>
      </motion.div>

      {/* Why Choose Us - Grid */}
      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="text-3xl font-bold mb-8 text-gray-900"
      >
        Why Choose Us?
      </motion.h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {[
          {
            title: "IoT Consultation",
            desc: "End-to-end support for device connectivity, cloud integration, and data analytics.",
            color: "from-blue-500 to-blue-700",
          },
          {
            title: "Software Development",
            desc: "Scalable solutions including web apps, mobile apps, and backend systems.",
            color: "from-purple-500 to-purple-700",
          },
          {
            title: "Smart Home & Energy",
            desc: "Intelligent automation for security, comfort, and sustainable energy management.",
            color: "from-pink-500 to-pink-700",
          },
          {
            title: "Proven Expertise",
            desc: "A unique blend of engineering and software skills, ensuring reliable and innovative results.",
            color: "from-green-500 to-green-700",
          },
        ].map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 * (i + 1) }}
            className={`p-6 rounded-xl shadow-md bg-gradient-to-r ${s.color} text-white`}
          >
            <h3 className="text-xl font-semibold mb-3">{s.title}</h3>
            <p className="text-sm opacity-90">{s.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* Closing Statement */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="mt-16 text-center"
      >
        <p className="text-2xl font-semibold text-gray-800">
          We believe technology should not just work — it should work{" "}
          <span className="text-blue-700">for you</span>.
        </p>
        <p className="text-lg text-gray-600 mt-4">
          That’s why our focus is on creating systems that are user-friendly,
          future-proof, and aligned with your goals.
        </p>
        <button className="mt-8 px-8 py-3 bg-gradient-to-r from-blue-700 via-purple-600 to-pink-500 text-white rounded-lg shadow-lg hover:opacity-90 transition">
          Let’s Shape the Future Together
        </button>
      </motion.div>
    </main>
  );
}
