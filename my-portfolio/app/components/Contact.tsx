"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Send } from "lucide-react";
import { portfolioData } from "../data";

import Terminal from "./Terminal";
import VisualExplainer from "./VisualExplainer";
import ContactExplainer from "./ContactExplainer";

export default function Contact() {
  const [isSending, setIsSending] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);
    
    // Construct WhatsApp message
    const whatsappMessage = `Hello Riyas, I am ${formData.name} (${formData.email}).\n\n${formData.message}`;
    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappUrl = `https://wa.me/919037753791?text=${encodedMessage}`;
    
    // Open WhatsApp in a new tab
    window.open(whatsappUrl, "_blank");
    
    setTimeout(() => {
      setIsSending(false);
      setFormData({ name: "", email: "", message: "" });
    }, 2000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <section id="contact" className="py-32 px-6 max-w-7xl mx-auto relative overflow-hidden">

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true, amount: 0.2 }}
          >
            <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold font-space-grotesk mb-6">
              Let&apos;s <span className="text-purple-500">Scale.</span>
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed mb-12">
              Ready to bring your ideas to life? Connect with me for collaborations, inquiries, 
              or just to talk about the future of tech.
            </p>
            
            <VisualExplainer className="mb-12">
               <ContactExplainer />
            </VisualExplainer>
          </motion.div>

          <div className="flex flex-wrap gap-6">
            <a href={`mailto:${portfolioData.contact.email}`} className="glass p-6 rounded-[2.5rem] flex items-center gap-6 group hover:bg-white/5 transition-all w-fit">
              <div className="w-14 h-14 rounded-2xl bg-purple-500/20 flex items-center justify-center text-purple-400 group-hover:bg-purple-500 group-hover:text-black transition-all">
                <Mail size={24} />
              </div>
              <div>
                <p className="text-[10px] text-slate-500 font-bold uppercase tracking-[0.2em] mb-1">Direct Line</p>
                <p className="text-lg font-bold font-space-grotesk">{portfolioData.contact.email}</p>
              </div>
            </a>

            <a 
              href={`https://wa.me/919037753791`} 
              target="_blank"
              className="glass p-6 rounded-[2.5rem] flex items-center gap-6 group hover:bg-white/5 transition-all w-fit border-green-500/10 hover:border-green-500/30"
            >
              <div className="w-14 h-14 rounded-2xl bg-green-500/20 flex items-center justify-center text-green-400 group-hover:bg-green-500 group-hover:text-black transition-all">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              </div>
              <div>
                <p className="text-[10px] text-slate-500 font-bold uppercase tracking-[0.2em] mb-1">WhatsApp</p>
                <p className="text-lg font-bold font-space-grotesk">{portfolioData.contact.phone}</p>
              </div>
            </a>
          </div>

          <Terminal 
            title="system.log"
            className="max-w-md hidden md:block bg-white/5"
            commands={[
              "connection: pending",
              isSending ? "sending packet..." : "awaiting input...",
              isSending ? "success: messaged delivered" : "status: online"
            ]}
          />
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.1 }}
          className="glass p-6 sm:p-10 md:p-16 rounded-3xl md:rounded-[4rem] border-purple-500/10 relative min-h-[500px] md:min-h-[600px] flex flex-col justify-center"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/10 rounded-full blur-[100px] -mr-32 -mt-32" />
          
          <form className="space-y-6 relative z-10" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500 ml-4">Full Name</label>
                <input 
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Riyas K I" 
                  required
                  className="w-full px-6 sm:px-8 py-4 sm:py-5 rounded-2xl md:rounded-[2rem] bg-white/5 border border-white/10 focus:border-purple-500/50 outline-none transition-all placeholder:text-slate-700 text-white"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500 ml-4">Email Address</label>
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="name@company.com" 
                  required
                  className="w-full px-6 sm:px-8 py-4 sm:py-5 rounded-2xl md:rounded-[2rem] bg-white/5 border border-white/10 focus:border-purple-500/50 outline-none transition-all placeholder:text-slate-700 text-white"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500 ml-4">Message</label>
              <textarea 
                rows={4} 
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="How can I help you today?" 
                required
                className="w-full px-8 py-5 rounded-[2rem] bg-white/5 border border-white/10 focus:border-cyan-500/50 outline-none transition-all resize-none placeholder:text-slate-700 text-white"
              ></textarea>
            </div>
            <motion.button 
              type="submit"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-4 md:py-6 rounded-2xl md:rounded-[2rem] bg-purple-500 text-black font-bold flex items-center justify-center gap-3 glow-purple text-base md:text-lg"
            >
              {isSending ? "System: Transmitting..." : "Establish Connection"}
              <Send size={20} className={isSending ? "animate-ping" : ""} />
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
