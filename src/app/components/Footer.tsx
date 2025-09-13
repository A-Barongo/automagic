"use client";

import Link from "next/link";
import { Phone, Instagram, MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 mt-16">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Brand Info */}
        <div>
          <h2 className="text-2xl font-bold text-white">Automagic Solutions</h2>
          <p className="mt-3 text-gray-400 text-sm leading-relaxed">
            Bridging technology and everyday life through smart homes, IoT, and
            software solutions.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link
                href="/about"
                className="hover:text-blue-400 transition-colors"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="hover:text-blue-400 transition-colors"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Contact</h3>
          <ul className="space-y-3">
            <li>
              <a
                href="tel:+254735368038"
                className="flex items-center gap-2 hover:text-blue-400 transition-colors"
              >
                <Phone size={18} /> +254 735 368 038
              </a>
            </li>
            <li>
              <a
                href="https://wa.me/254735368038"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-green-400 transition-colors"
              >
                <MessageCircle size={18} /> WhatsApp
              </a>
            </li>
            <li>
              <a
                href="https://instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-pink-400 transition-colors"
              >
                <Instagram size={18} /> Instagram
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-700 mt-8 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Automagic Solutions. All rights reserved.
      </div>
    </footer>
  );
}
