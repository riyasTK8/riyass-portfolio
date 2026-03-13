"use client";

import { motion } from "framer-motion";
import { Code2, Cpu, Rocket, Calendar, GraduationCap, MapPin } from "lucide-react";
import { portfolioData } from "../data";
import VisualExplainer from "./VisualExplainer";
import AboutExplainer from "./AboutExplainer";

export default function About() {
  return (
    <section id="about" className="py-32 px-6 max-w-7xl mx-auto relative overflow-hidden">

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center"
      >
        <div className="relative order-2 lg:order-1 flex flex-col gap-12">
          <VisualExplainer className="w-full">
            <AboutExplainer />
          </VisualExplainer>

          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="glass p-6 sm:p-8 rounded-[2rem] border-cyan-500/20 relative z-10"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 flex items-center justify-center text-cyan-600">
                <Calendar size={24} />
              </div>
              <div>
                <h3 className="font-bold text-xl font-space-grotesk">The Journey</h3>
                <p className="text-xs text-slate-500 uppercase tracking-widest font-bold">2017 — PRESENT</p>
              </div>
            </div>

            <div className="space-y-8">
              {[
                { year: "2017", text: "Journey Started", icon: GraduationCap },
                { year: "2023", text: "Started specializing in MERN stack", icon: Code2 },
                { year: "2025", text: "Professional Development", icon: Rocket },
                { year: "Now", text: "Scaleable Solutions", icon: Cpu },
              ].map((step, i) => (
                <motion.div 
                  key={step.year} 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.2 }}
                  viewport={{ once: true, amount: 0.2 }}
                  className="flex gap-6 items-start group"
                >
                  <div className="flex flex-col items-center">
                     <div className="w-4 h-4 rounded-full border-2 border-purple-500 bg-[#020617] group-hover:bg-purple-500 transition-colors" />
                     {i !== 3 && <div className="w-0.5 h-12 bg-white/10 group-hover:bg-purple-500/30 transition-colors" />}
                  </div>
                  <div className="pb-4">
                     <span className="text-purple-600 font-bold font-mono text-sm">{step.year}</span>
                    <p className="text-slate-400 font-medium group-hover:text-white transition-colors">{step.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl" />
        </div>

        <div className="space-y-8 order-1 lg:order-2">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold font-space-grotesk mb-6 md:mb-8">
              Coding with <span className="text-gradient">Purpose.</span>
            </h2>
            <div className="space-y-6 text-slate-400 text-lg leading-relaxed">
              <p>
                {portfolioData.summary}
              </p>
              <p>
                As a developer, I don&apos;t just write code; I architect experiences. My process involves deep analysis, 
                modern design principles, and a relentless pursuit of performance.
              </p>
            </div>
          </motion.div>

          <div className="grid grid-cols-2 gap-4">
            <div className="glass p-6 rounded-2xl hover:bg-white/5 transition-all">
              <MapPin className="text-cyan-500 mb-3" size={24} />
              <h4 className="font-bold text-white">Location</h4>
              <p className="text-sm text-slate-400">Ernakulam, Kerala</p>
            </div>
            <div className="glass p-6 rounded-2xl hover:bg-white/5 transition-all">
              <Code2 className="text-pink-600 mb-3" size={24} />
              <h4 className="font-bold text-white">Tech Stack</h4>
              <p className="text-sm text-slate-400">MERN Specialist</p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
