"use client";

import { motion } from "framer-motion";
import { Github, Instagram, Linkedin, Mail, Menu, X } from "lucide-react";
import { useState } from "react";
import { portfolioData } from "../data";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center p-4 sm:p-6">
      <motion.div 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="glass rounded-full px-4 sm:px-8 py-3 flex items-center gap-4 sm:gap-12 max-w-4xl w-full justify-between"
      >
        <span className="text-2xl font-bold font-space-grotesk tracking-tighter text-slate-900">
                Muhammed <span className="text-purple-500 font-bold transition-all">Riyas.</span>
        </span>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
                className="hidden md:block text-sm font-medium text-slate-400 hover:text-cyan-400 transition-colors relative group"
            >
              {link.name}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-6">
              {[
                { icon: Github, href: portfolioData.contact.github },
                { icon: Linkedin, href: portfolioData.contact.linkedin },
                { icon: Instagram, href: portfolioData.contact.instagram },
                { icon: Mail, href: `mailto:${portfolioData.contact.email}` },
              ].map((social, i) => (
                <motion.a
                  key={i}
                  href={social.href}
                  target="_blank"
                  className="text-slate-400 hover:text-cyan-400 transition-colors"
                  whileHover={{ scale: 1.1, y: -2 }}
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </div>
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </motion.div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-20 sm:top-24 left-4 right-4 sm:left-6 sm:right-6 glass p-6 rounded-3xl md:hidden z-[60]"
        >
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="text-lg font-medium"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </nav>
  );
}
