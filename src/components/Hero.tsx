"use client";

import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { ArrowDown, FileText } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background grid */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `linear-gradient(var(--accent) 1px, transparent 1px),
              linear-gradient(90deg, var(--accent) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* Radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-accent/5 blur-[120px]" />

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Profile Image */}

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, type: "spring" }}
          className="mb-8 flex justify-center"
        >
          <div className="relative w-42 h-42 md:w-60 md:h-60 rounded-full p-1 border-2 border-accent/50 bg-card/50 backdrop-blur-sm shadow-[0_0_30px_rgba(37,99,235,0.15)] overflow-hidden group">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/pankaj.png"
              alt="Pankaj Yadav"
              className="w-full h-full object-cover rounded-full group-hover:scale-105 transition-transform duration-500 bg-muted/20"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.onerror = null; // Prevent infinite loop if fallback fails
                target.src = "https://ui-avatars.com/api/?name=Pankaj+Yadav&background=0D0D0D&color=2563EB&size=256";
              }}
            />
          </div>
        </motion.div>
        {/* Terminal prompt */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-card/50 mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-terminal animate-pulse" />
          <span className="text-sm font-mono text-secondary">
            ~/pankaj-yadav
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-5xl sm:text-7xl md:text-8xl font-bold tracking-tight mb-6"
        >
          <span className="font-mono text-gradient">Pankaj</span>
          <br />
          <span className="text-foreground">Yadav</span>
        </motion.h1>

        {/* Typing subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mb-10"
        >
          <div className="inline-flex items-center gap-2 text-lg sm:text-xl font-mono">
            <span className="text-secondary">❯</span>
            <TypeAnimation
              sequence={[
                "Software Engineer",
                2000,
                "Building Scalable Systems",
                2000,
                "Crafting System Tools",
                2000,
                "Rust & TypeScript Enthusiast",
                2000,
                ""
              ]}
              wrapper="span"
              speed={40}
              repeat={Infinity}
              className="text-secondary"
            />
          </div>
        </motion.div>

        {/* Professional Intro */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-secondary max-w-2xl mx-auto mb-10 text-base sm:text-lg leading-relaxed"
        >
          I build scalable, high-performance web applications and backend systems. Passionate about clean code, modern architecture, and solving complex problems with cutting-edge technologies.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#projects"
            className="group flex items-center gap-2 px-8 py-3.5 bg-accent text-[#09090B] font-semibold rounded-lg hover:bg-accent-bright transition-all duration-300 hover:shadow-[0_0_30px_rgba(37,99,235,0.3)]"
          >
            View Work
            <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 px-8 py-3.5 border border-accent text-accent font-semibold rounded-lg hover:bg-accent/10 transition-all duration-300"
          >
            <FileText className="w-4 h-4" />
            Download Resume
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 rounded-full border-2 border-border flex justify-center pt-2"
        >
          <div className="w-1 h-2 rounded-full bg-accent" />
        </motion.div>
      </motion.div>
    </section>
  );
}
