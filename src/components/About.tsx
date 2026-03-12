"use client";

import { motion } from "framer-motion";
import { Code2, Cpu, Rocket } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="relative">
      <div className="section-container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold font-mono text-accent mb-2">
            <span className="text-muted mr-2">01.</span>about_me
          </h2>
          <div className="h-px bg-gradient-to-r from-accent/50 to-transparent max-w-md" />
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 items-center">
          {/* Photo / Visual */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-2 flex justify-center"
          >
            <div className="relative group">
              {/* Glow border */}
              <div className="absolute -inset-1 bg-gradient-to-br from-accent to-accent-dim rounded-xl blur-md opacity-30 group-hover:opacity-50 transition-opacity duration-500" />
              {/* Image container */}
              <div className="relative w-64 h-72 sm:w-72 sm:h-80 rounded-xl overflow-hidden border border-border bg-card">
                {/* Terminal-style avatar placeholder */}
                <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-card to-[#09090B] p-6">
                  {/* Terminal top bar */}
                  <div className="w-full flex items-center gap-1.5 mb-4 px-3 py-2 bg-[#09090B] rounded-t-md border border-border">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
                    <span className="ml-2 text-[10px] font-mono text-muted">zsh</span>
                  </div>
                  {/* Terminal content */}
                  <div className="w-full flex-1 bg-[#09090B] rounded-b-md border border-t-0 border-border p-3 font-mono text-xs space-y-1.5">
                    <p className="text-muted">
                      <span className="text-accent">❯</span> whoami
                    </p>
                    <p className="text-accent-bright">pankaj-yadav</p>
                    <p className="text-muted mt-2">
                      <span className="text-accent">❯</span> cat role.txt
                    </p>
                    <p className="text-foreground">Software Engineer</p>
                    <p className="text-muted mt-2">
                      <span className="text-accent">❯</span> echo $PASSION
                    </p>
                    <p className="text-foreground">Building from scratch</p>
                    <p className="text-muted mt-2">
                      <span className="text-accent">❯</span>{" "}
                      <span className="animate-cursor-blink text-accent">▋</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-3 space-y-6"
          >
            <p className="text-lg text-secondary leading-relaxed">
              I&apos;m a{" "}
              <span className="text-foreground font-semibold">Software Engineer</span>{" "}
              passionate about building highly scalable web applications and AI-powered tools.
              I love diving deep into systems — from crafting{" "}
              <span className="text-accent font-mono">sandboxed execution engines</span> in Rust
              to designing full-stack platforms with modern TypeScript.
            </p>
            <p className="text-secondary leading-relaxed">
              My approach is to build from the ground up, understanding every layer of
              the stack. I&apos;m deeply interested in{" "}
              <span className="text-foreground">containerization</span>,{" "}
              <span className="text-foreground">monorepo architectures</span>, and
              creating developer tools that others love to use. Currently mastering{" "}
              <span className="text-accent font-mono">Rust</span> for low-level systems
              programming and optimizing workflows with{" "}
              <span className="text-accent font-mono">Turborepo</span>.
            </p>

            {/* Highlights */}
            <div className="grid sm:grid-cols-3 gap-4 pt-4">
              {[
                { icon: Code2, label: "Full-Stack", desc: "React · Node · Rust" },
                { icon: Cpu, label: "Systems", desc: "Linux · Docker · Sandbox" },
                { icon: Rocket, label: "AI / ML", desc: "Gemini · LLMs · Agents" },
              ].map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  className="flex items-center gap-3 p-3 rounded-lg border border-border bg-card/50 hover:border-accent/30 hover:bg-card transition-all"
                >
                  <item.icon className="w-5 h-5 text-accent shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-foreground">{item.label}</p>
                    <p className="text-xs text-muted font-mono">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
