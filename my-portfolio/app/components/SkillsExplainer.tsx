"use client";

import { motion } from "framer-motion";
import { Database, Server, Smartphone, Layers } from "lucide-react";

export default function SkillsExplainer() {
  return (
    <div className="flex flex-col h-full gap-6 p-4">
      {/* Visual Tech Diagram */}
      <div className="relative h-48 w-full flex items-center justify-around border-b border-white/5 pb-8">
        {/* Frontend */}
        <div className="flex flex-col items-center gap-2">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="w-16 h-16 rounded-2xl glass border-cyan-500/30 flex items-center justify-center text-cyan-400"
          >
            <Smartphone size={32} />
          </motion.div>
          <span className="text-[10px] uppercase font-bold text-cyan-500">Frontend</span>
        </div>

        {/* Sync Line */}
        <div className="flex-1 px-4 relative">
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 1, repeat: Infinity }}
            className="h-px bg-purple-500/50" 
          />
          <motion.div
            animate={{ x: ["0%", "100%"] }}
            transition={{ duration: 1, repeat: Infinity }}
            className="absolute top-1/2 -mt-1 w-2 h-2 rounded-full bg-cyan-500 shadow-[0_0_10px_rgba(34,211,238,0.3)]"
          />
        </div>

        {/* Backend */}
        <div className="flex flex-col items-center gap-2">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3 }}
            className="w-16 h-16 rounded-2xl glass border-purple-500/30 flex items-center justify-center text-purple-400"
          >
            <Server size={32} />
          </motion.div>
          <span className="text-[10px] uppercase font-bold text-purple-500">Backend</span>
        </div>

        {/* Sync Line */}
        <div className="flex-1 px-4 relative">
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 1, repeat: Infinity, delay: 0.5 }}
            className="h-px bg-orange-500/50" 
          />
        </div>

        {/* Database */}
        <div className="flex flex-col items-center gap-2">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.6 }}
            className="w-16 h-16 rounded-2xl glass border-orange-500/30 flex items-center justify-center text-orange-400"
          >
            <Database size={32} />
          </motion.div>
          <span className="text-[10px] uppercase font-bold text-orange-500">Database</span>
        </div>
      </div>

      {/* Floating Logos Stream */}
      <div className="relative h-12 overflow-hidden flex items-center gap-8 px-4 opacity-50">
        {["React", "Node", "Mongo", "Next", "Redux", "SQL", "AWS"].map((tech, i) => (
          <motion.span
            key={tech}
            animate={{ x: [-100, 500] }}
            transition={{ duration: 10 + i, repeat: Infinity, ease: "linear" }}
            className="text-[10px] font-mono whitespace-nowrap"
          >
            {tech}.init()
          </motion.span>
        ))}
      </div>

      {/* Interactive Logs */}
      <div className="glass bg-black/40 p-4 rounded-2xl flex-1 font-mono text-[10px] text-slate-500 space-y-1 overflow-hidden">
        <motion.p animate={{ opacity: [0, 1] }} transition={{ delay: 1 }}>[System] Aggregating tech arsenal...</motion.p>
        <motion.p animate={{ opacity: [0, 1] }} transition={{ delay: 1.5 }}>[System] Frontend stack ready.</motion.p>
        <motion.p animate={{ opacity: [0, 1] }} transition={{ delay: 2 }}>[System] Backend orchestration active.</motion.p>
        <motion.p animate={{ opacity: [0, 1] }} transition={{ delay: 2.5 }} className="text-cyan-500 underline">Compiling Muhammed Riyas Portfolio...</motion.p>
      </div>
    </div>
  );
}
