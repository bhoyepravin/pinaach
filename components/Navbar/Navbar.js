"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { name: "Home", hasDropdown: true },
    { name: "About" },
    { name: "Service" },
    { name: "Shop" },
    { name: "Testimonial" },
    { name: "Team" },
    { name: "News" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-[999] bg-white transition-all duration-300 ${
          scrolled ? "shadow-md py-3" : "py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6">

          {/* Logo */}
          <div className="flex items-center gap-2">
            {/* <Image src="/logo.png" alt="logo" width={40} height={40} priority /> */}
            <span className="text-xl font-semibold text-gray-800">
              PinaachTechno
            </span>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-8">
            {menuItems.map((item) => (
              <div key={item.name} className="relative group">
                <Link
                  href="#"
                  className="font-medium text-gray-700 hover:text-cyan-600 transition flex items-center gap-1"
                >
                  {item.name}
                  {item.hasDropdown && <ChevronDown size={16} />}
                </Link>
              </div>
            ))}
          </nav>

          {/* Right Section */}
          <div className="flex items-center gap-4">

            {/* CTA */}
            <button className="hidden md:block bg-cyan-500 hover:bg-cyan-600 text-white px-5 py-2 rounded-full font-medium transition">
              Request A Quote
            </button>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-[80px] left-0 w-full bg-white shadow-md z-[998] md:hidden"
          >
            <div className="px-6 py-4 space-y-4">

              {menuItems.map((item, index) => (
                <div key={index}>
                  
                  {/* Menu Item */}
                  <div
                    onClick={() =>
                      item.hasDropdown &&
                      setOpenDropdown(openDropdown === index ? null : index)
                    }
                    className="flex items-center justify-between cursor-pointer text-gray-700 font-medium"
                  >
                    <span>{item.name}</span>
                    {item.hasDropdown && <ChevronDown size={18} />}
                  </div>

                  {/* Dropdown */}
                  {item.hasDropdown && openDropdown === index && (
                    <div className="ml-4 mt-2 space-y-2 text-sm text-gray-500">
                      <p className="cursor-pointer hover:text-cyan-600">
                        Sub Menu 1
                      </p>
                      <p className="cursor-pointer hover:text-cyan-600">
                        Sub Menu 2
                      </p>
                    </div>
                  )}
                </div>
              ))}

              {/* CTA */}
              <button className="w-full bg-cyan-500 hover:bg-cyan-600 text-white px-5 py-2 rounded-full font-medium transition">
                Request A Quote
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}