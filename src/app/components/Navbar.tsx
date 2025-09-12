"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo / Brand */}
          <Link
            href="/"
            className="text-2xl font-bold text-blue-700 hover:text-blue-900"
          >
            Automagic Consulting
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 text-gray-700 font-medium">
            <Link href="/about" className="hover:text-blue-600">About</Link>
            <Link href="/services" className="hover:text-blue-600">Services</Link>
            <Link href="/portfolio" className="hover:text-blue-600">Portfolio</Link>
            <Link href="/blog" className="hover:text-blue-600">Blog</Link>
            <Link
              href="/contact"
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
            >
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-gray-600 hover:text-blue-600 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? "✖" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Menu (only shows when open & on small screens) */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md px-4 py-4 space-y-3 text-gray-700 font-medium">
          <Link href="/about" className="block hover:text-blue-600">About</Link>
          <Link href="/services" className="block hover:text-blue-600">Services</Link>
          <Link href="/portfolio" className="block hover:text-blue-600">Portfolio</Link>
          <Link href="/blog" className="block hover:text-blue-600">Blog</Link>
          <Link
            href="/contact"
            className="block bg-blue-600 text-white px-3 py-2 rounded-md hover:bg-blue-700 transition"
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
}
