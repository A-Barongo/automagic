"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  return (
    <nav className="bg-white/90 backdrop-blur-md shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Left Section - Back Button */}
          <button
                onClick={() => router.back()}
                className="flex items-center justify-center w-10 h-10 rounded-full 
                            border border-gray-300 bg-white text-gray-700 
                            shadow-sm hover:bg-blue-50 hover:text-blue-600 
                            focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-1 
                            transition"
                aria-label="Go Back"
                >
                ⬅
                </button>

          {/* Logo / Brand */}
          <Link href="/" className="flex items-center space-x-1 text-2xl font-bold">
            <span className="text-blue-700">Automagic</span>
            <span className="text-pink-600">Solutions</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8 text-gray-700 font-medium ml-auto">
            <Link href="/about" className="hover:text-blue-600 transition">
              About
            </Link>
            <Link href="/services" className="hover:text-blue-600 transition">
              Services
            </Link>
            <Link href="/portfolio" className="hover:text-blue-600 transition">
              Portfolio
            </Link>
            <Link href="/blog" className="hover:text-blue-600 transition">
              Blog
            </Link>
            <Link
              href="/contact"
              className="bg-blue-600 text-white px-4 py-2 rounded-md shadow hover:bg-blue-700 transition"
            >
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-gray-600 hover:text-blue-600 focus:outline-none ml-auto"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? "✖" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md shadow-md px-6 py-6 space-y-4 text-gray-700 font-medium">
          <Link href="/about" className="block hover:text-blue-600">
            About
          </Link>
          <Link href="/services" className="block hover:text-blue-600">
            Services
          </Link>
          <Link href="/portfolio" className="block hover:text-blue-600">
            Portfolio
          </Link>
          <Link href="/blog" className="block hover:text-blue-600">
            Blog
          </Link>
          <Link
            href="/contact"
            className="block bg-blue-600 text-white px-4 py-2 rounded-md shadow hover:bg-blue-700 transition"
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
}
