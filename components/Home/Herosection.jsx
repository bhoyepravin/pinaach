"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative bg-[#0B3D91] text-white overflow-hidden pt-32 pb-20">

      {/* Top Wave */}
      <div className="absolute top-0 left-0 w-full">
        <svg viewBox="0 0 1440 120" className="w-full">
          <path
            fill="#ffffff"
            d="M0,40 C300,120 1100,0 1440,60 L1440,0 L0,0 Z"
          />
        </svg>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
  <svg
    viewBox="0 0 1440 200"
    className="w-full h-32 md:h-1"
    preserveAspectRatio="none"
  >
    <path
      fill="#ffffff"
      d="M0,100 C300,0 1100,200 1440,80 L1440,200 L0,200 Z"
    />
  </svg>
</div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 items-center gap-10 relative z-10">

        {/* LEFT TEXT */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
            Always Want Safe <br />
            and Good Water <br />
            for Healthy Life
          </h1>

          <p className="text-gray-200 mb-6">
            Excepteur sint occaecat cupidatat non proident sunt culpa
            qui officia deserunt mollit.
          </p>

          <div className="flex gap-4">
            <button className="bg-cyan-500 hover:bg-cyan-600 px-6 py-2 rounded-full font-medium">
              Our Services
            </button>

            <button className="border border-white px-6 py-2 rounded-full hover:bg-white hover:text-[#0B3D91] transition">
              Discover
            </button>
          </div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="flex justify-center md:justify-end"
        >
          <Image
            src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=800" // 👈 put your image in public folder
            alt="water"
            width={400}
            height={500}
            className="object-contain"
            priority
          />
        </motion.div>
      </div>
    </section>
  );
}