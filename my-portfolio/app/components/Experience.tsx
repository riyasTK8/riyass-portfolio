"use client";

import { motion } from "framer-motion";
import { Briefcase, MapPin } from "lucide-react";
import { portfolioData } from "../data";

import VisualExplainer from "./VisualExplainer";
import ExperienceExplainer from "./ExperienceExplainer";
import EducationExplainer from "./EducationExplainer";

export default function Experience() {
  return (
    <section id="experience" className="py-32 px-6 max-w-7xl mx-auto relative overflow-hidden">

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
        <div className="lg:col-span-4 flex flex-col gap-12 sticky top-32 h-fit">
          <div className="text-left">
            <h2 className="text-4xl md:text-6xl font-bold font-space-grotesk mb-6">
              Growth <span className="text-purple-500">Timeline.</span>
            </h2>
            <p className="text-slate-400">My professional trajectory and educational background.</p>
          </div>
          
          <VisualExplainer>
            <ExperienceExplainer />
          </VisualExplainer>
          
          <VisualExplainer>
            <EducationExplainer />
          </VisualExplainer>
        </div>

        <div className="lg:col-span-8 relative border-l border-white/10 ml-4 md:ml-0">
          {portfolioData.experience.map((exp, idx) => (
            <motion.div
              key={exp.role + exp.company}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="mb-12 ml-8 relative"
            >
              <div className="absolute -left-[45px] top-0 w-8 h-8 rounded-full bg-[#020617] border-2 border-cyan-500 flex items-center justify-center glow-cyan">
                <Briefcase size={14} className="text-cyan-400" />
              </div>
              
              <div className="glass p-8 rounded-3xl hover:border-cyan-500/30 transition-all duration-500">
                <span className="text-sm font-bold text-cyan-500 uppercase tracking-widest mb-2 block">{exp.period}</span>
                <h3 className="text-2xl font-bold font-space-grotesk mb-1 text-white">{exp.role}</h3>
                <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mb-4">
                  <p className="text-slate-300 font-medium">{exp.company}</p>
                  {exp.location && (
                    <div className="flex items-center gap-1.5 text-slate-500 text-xs py-1 px-2 rounded-full bg-white/5 border border-white/5">
                      <MapPin size={12} className="text-cyan-500" />
                      {exp.location}
                    </div>
                  )}
                </div>
                
                <ul className="space-y-3">
                  {exp.description.map((item, i) => (
                    <li key={i} className="text-slate-400 text-sm flex gap-3">
                      <span className="text-cyan-500 mt-1.5">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
          
          {/* Education Item */}
          {portfolioData.education.map((edu, idx) => (
             <motion.div
              key={edu.institution}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="ml-8 relative"
            >
               <div className="absolute -left-[45px] top-0 w-8 h-8 rounded-full bg-[#020617] border-2 border-purple-500 flex items-center justify-center glow-purple">
                <div className="w-2 h-2 rounded-full bg-purple-400" />
              </div>
               <div className="glass p-8 rounded-3xl border-purple-500/10 hover:border-purple-500/30 transition-all duration-500">
                <span className="text-sm font-bold text-purple-500 uppercase tracking-widest mb-2 block">{edu.period}</span>
                <h3 className="text-2xl font-bold font-space-grotesk mb-1 text-white">{edu.degree}</h3>
                <p className="text-slate-300 font-medium">{edu.institution}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
