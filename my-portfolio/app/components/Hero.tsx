"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import { portfolioData } from "../data";

import Terminal from "./Terminal";

const techStack = ["React.js", "Node.js", "Express.js", "MongoDB", "Next.js", "TypeScript", "PostgreSQL"];

export default function Hero() {
  const [techIndex, setTechIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentTech = techStack[techIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentTech.slice(0, displayText.length + 1));
        if (displayText.length === currentTech.length) {
          setTimeout(() => setIsDeleting(true), 1500);
        }
      } else {
        setDisplayText(currentTech.slice(0, displayText.length - 1));
        if (displayText.length === 0) {
          setIsDeleting(false);
          setTechIndex((prev) => (prev + 1) % techStack.length);
        }
      }
    }, isDeleting ? 50 : 150);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, techIndex]);

  return (
    <section className="min-h-screen flex flex-col items-center justify-center pt-24 px-6 text-center relative overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto w-full">
        
        <div className="order-2 lg:order-1 flex flex-col items-center lg:items-start text-center lg:text-left">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="px-4 py-1.5 rounded-full bg-db-2777/10 border border-pink-500/20 text-pink-600 text-xs font-bold tracking-widest uppercase mb-6"
          >
            System initialized • MERN Stack Expert
          </motion.div>

          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-4xl sm:text-6xl md:text-8xl font-bold font-space-grotesk tracking-tight mb-6"
          >
            Muhammed <span className="text-purple-500">Riyas</span>
          </motion.h1>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-xl sm:text-2xl md:text-4xl font-medium text-slate-400 mb-8 min-h-[3rem]"
          >
            <span>I build with</span>
            <span className="mx-2 sm:mx-3 text-pink-500">_</span>
            <span className="text-slate-100 font-bold underline decoration-pink-500/30">{displayText}</span>
            <span className="animate-blink text-pink-500">|</span>
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-12"
          >
            <a 
              href="#projects"
              className="w-full sm:w-auto px-8 sm:px-10 py-3.5 sm:py-4 rounded-full bg-purple-500 text-black font-bold hover:bg-purple-400 transition-all hover:scale-105 glow-purple text-center"
            >
              View Projects
            </a>
            <a 
              href="/RIYAS.RESUME.pdf" 
              download="RIYAS_RESUME.pdf"
              className="w-full sm:w-auto px-8 sm:px-10 py-3.5 sm:py-4 rounded-full glass border border-white/10 font-bold hover:bg-white/5 transition-all hover:scale-105 text-center"
            >
              Download CV
            </a>
          </motion.div>

          <Terminal 
            className="w-full max-w-md hidden md:block"
            commands={[
              "npm install success",
              "starting developer portfolio...",
              "status: ready to build"
            ]}
          />
        </div>

        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="order-1 lg:order-2 relative"
        >
          <div className="absolute inset-0 bg-pink-500/10 rounded-full blur-[100px] animate-pulse" />
          
          {/* Floating Logos Animation */}
          <div className="absolute inset-0 z-0">
             {["MongoDB", "Express", "React", "Node"].map((logo, i) => (
                <motion.div
                  key={logo}
                  animate={{ 
                    y: [0, -40, 0],
                    x: [0, i % 2 === 0 ? 20 : -20, 0],
                    opacity: [0.2, 0.5, 0.2]
                  }}
                  transition={{ 
                    duration: 4 + i, 
                    repeat: Infinity,
                    delay: i * 0.5
                  }}
                  className="absolute text-[10px] font-bold tracking-tighter text-pink-600/40 glass px-3 py-1 rounded-full whitespace-nowrap shadow-sm"
                  style={{
                    top: `${20 + i * 20}%`,
                    left: i % 2 === 0 ? "80%" : "-10%"
                  }}
                >
                  {logo}
                </motion.div>
             ))}
          </div>

          <motion.div 
            whileHover={{ scale: 1.05, rotate: 2 }}
            className="relative w-64 h-64 md:w-[450px] md:h-[450px] mx-auto rounded-full overflow-hidden glass border-2 border-pink-500/20 shadow-xl z-10"
          >
            <Image
              src="/hero-avatar-v2.jpg"
              alt={portfolioData.name}
              fill
              className="object-cover"
              priority
            />
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-20">
        <div className="w-6 h-10 rounded-full border-2 border-white flex justify-center p-1">
          <div className="w-1 h-2 bg-white rounded-full" />
        </div>
      </div>
    </section>
  );
}
