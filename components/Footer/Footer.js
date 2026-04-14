"use client";

import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative bg-[#0B2A66] text-white overflow-hidden">

      {/* Top Wave */}
      <div className="absolute top-0 left-0 w-full">
        <svg viewBox="0 0 1440 120" className="w-full">
          <path
            fill="#ffffff"
            d="M0,40 C300,120 1100,0 1440,60 L1440,0 L0,0 Z"
          />
        </svg>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 pt-32 pb-12">

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row items-center justify-between mb-12 text-center md:text-left"
        >
          <h2 className="text-lg md:text-xl font-medium">
            Please <span className="text-cyan-400">Call Us</span> to Take an Extraordinary Service
          </h2>

          <button className="mt-4 md:mt-0 bg-cyan-500 px-5 py-2 rounded-full flex items-center gap-2">
            <Phone size={16} />
            (773) 225-3523
          </button>
        </motion.div>

        {/* Divider */}
        <div className="border-t border-blue-400/20 mb-12"></div>

        {/* Grid */}
        <div className="grid md:grid-cols-4 gap-10">

          {/* Logo + About */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Image src="/logo.png" alt="logo" width={40} height={40} />
              <h3 className="text-xl font-semibold">PinaachTechno</h3>
            </div>

            <p className="text-sm text-gray-300 mb-4">
              Natural execution ullamco laboris nisi aliquip commodo luctus.
            </p>

            <p className="text-sm text-gray-300">
              <strong>Open Hours:</strong> <br />
              Mon - Sat: 9AM - 6PM <br />
              Sunday: Closed
            </p>
          </div>

          {/* Address */}
          <div>
            <h4 className="font-semibold mb-4">Address</h4>
            <ul className="text-sm text-gray-300 space-y-2">
              <li>Flat 20, Reynolds Neck, FT77 8WS</li>
              <li>Call Us: 333-666-0001</li>
              <li>info@example.com</li>
            </ul>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-4">Useful Link</h4>
            <ul className="text-sm text-gray-300 space-y-2">
              <li className="hover:text-cyan-400 cursor-pointer">About Company</li>
              <li className="hover:text-cyan-400 cursor-pointer">Services</li>
              <li className="hover:text-cyan-400 cursor-pointer">How it Works</li>
              <li className="hover:text-cyan-400 cursor-pointer">Our Blog</li>
              <li className="hover:text-cyan-400 cursor-pointer">Contact Us</li>
            </ul>
          </div>

          {/* Subscribe */}
          <div>
            <h4 className="font-semibold mb-4">Subscribe</h4>
            <p className="text-sm text-gray-300 mb-4">
              Lorem ipsum dolor sit amet, consec adipiscing elit sed do eiusmod.
            </p>

            <div className="flex bg-white rounded-full overflow-hidden">
              <input
                type="email"
                placeholder="Your Email"
                className="px-4 py-2 w-full text-black outline-none"
              />
              <button className="bg-cyan-500 px-4 text-white">→</button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-[#061B44] py-4">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between text-sm text-gray-300">

          <p>© PinaachTechno 2026 All Right Reserved</p>

          {/* Social Icons */}
          <div className="flex gap-4 my-3 md:my-0">
            <FaFacebookF className="cursor-pointer hover:text-cyan-400" />
            <FaTwitter className="cursor-pointer hover:text-cyan-400" />
            <FaLinkedinIn className="cursor-pointer hover:text-cyan-400" />
          </div>

          <div className="flex gap-4">
            <span className="hover:text-cyan-400 cursor-pointer">Terms of Service</span>
            <span className="hover:text-cyan-400 cursor-pointer">Privacy Policy</span>
          </div>
        </div>
      </div>
    </footer>
  );
}