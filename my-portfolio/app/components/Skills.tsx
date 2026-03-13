"use client";

import { motion } from "framer-motion";
import { portfolioData } from "../data";

import Terminal from "./Terminal";
import VisualExplainer from "./VisualExplainer";
import SkillsExplainer from "./SkillsExplainer";

const skillCategories = [
  { name: "Frontend", skills: portfolioData.skills.frontend, color: "bg-cyan-500", terminal: ["init react app", "rendering components...", "applying tailwind styles"] },
  { name: "Backend", skills: portfolioData.skills.backend, color: "bg-purple-500", terminal: ["auth middleware active", "jwt token verified", "rabbitmq: message consumed"] },
  { name: "Cloud & DB", skills: portfolioData.skills.databases, color: "bg-orange-500", terminal: ["aws s3 connected", "r2 bucket synced", "cloudflare cache purged"] },
  { name: "Tools", skills: portfolioData.skills.tools, color: "bg-green-500", terminal: ["git push origin main", "ci/deploying...", "dockerized"] },
];

const allSkills = [
  ...portfolioData.skills.frontend,
  ...portfolioData.skills.backend,
  ...portfolioData.skills.databases,
  ...portfolioData.skills.tools,
];

export default function Skills() {
  return (
    <section id="skills" className="py-32 px-6 relative overflow-hidden">
      {/* Infinite Horizontal Marquee */}
      <div className="absolute top-0 left-0 right-0 py-8 overflow-hidden pointer-events-none opacity-30 select-none">
        <div className="flex whitespace-nowrap">
          <motion.div 
            animate={{ x: [-1920, 0] }}
            transition={{ 
              duration: 40,
              repeat: Infinity,
              ease: "linear"
            }}
            className="flex gap-12 items-center pr-12"
          >
            {[...allSkills, ...allSkills, ...allSkills].map((skill, i) => (
              <span key={i} className="text-4xl md:text-6xl font-black font-space-grotesk tracking-tighter text-white">
                {skill}
              </span>
            ))}
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          <div className="lg:col-span-4 lg:sticky lg:top-32">
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold font-space-grotesk mb-6">
              Core <span className="text-purple-500">Engine.</span>
            </h2>
            <p className="text-slate-400 mb-12">
              Powering modern web experiences with a refined and powerful technology stack.
            </p>

            <VisualExplainer className="w-full">
              <SkillsExplainer />
            </VisualExplainer>
            
            <div className="space-y-4 mt-8">
              {["Microservice Architecture", "JWT Security & RabbitMQ", "AWS & Cloudflare R2"].map((item, i) => (
                <motion.div 
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                 viewport={{ once: true, amount: 0.2 }}
                  className="flex items-center gap-4 text-slate-400 font-medium"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-pink-500" />
                  {item}
                </motion.div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            {skillCategories.map((category, idx) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: idx * 0.1 }}
                className="glass p-6 rounded-3xl group border-white/5 hover:border-cyan-500/30 transition-all duration-500"
              >
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-xl font-bold font-space-grotesk">{category.name}</h3>
                  <div className={`w-8 h-8 rounded-xl ${category.color} opacity-20`} />
                </div>

                <div className="space-y-4 mb-6">
                  {category.skills.slice(0, 6).map((skill, i) => (
                    <div key={skill} className="space-y-1">
                      <div className="flex justify-between text-[10px] font-bold uppercase text-slate-400">
                        <span>{skill}</span>
                        <span>{90 - i * 5}%</span>
                      </div>
                      <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                        <motion.div 
                          initial={{ width: 0 }}
                          whileInView={{ width: `${90 - i * 5}%` }}
                          transition={{ duration: 1.5, ease: "easeOut" }}
                         viewport={{ once: true, amount: 0.2 }}
                          className={`h-full ${category.color}`}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                <Terminal 
                  title="console.log"
                  commands={category.terminal}
                  className="bg-black/40 border-none !p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
