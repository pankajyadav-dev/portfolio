"use client";

import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import { projectsData } from "@/data/projects";

// Unique Animations for each project
const EngineAnim = () => (
  <motion.div
    animate={{ rotate: 360 }}
    transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
    className="relative w-72 h-72 text-accent"
  >
    {/* Outer Gear */}
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.5" className="w-full h-full absolute inset-0">
      <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
    {/* Inner opposite rotating gear */}
    <motion.svg
      animate={{ rotate: -360 }}
      transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
      viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.5" className="w-3/5 h-3/5 absolute top-[20%] left-[20%]"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
    </motion.svg>
  </motion.div>
);

const AlgoAnim = () => (
  <motion.div
    animate={{ rotate: -360 }}
    transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
    className="relative w-72 h-72 text-accent"
  >
    {/* Intertwined algorithm/network circles */}
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.5" className="w-full h-full absolute inset-0 opacity-80">
      <circle cx="12" cy="12" r="10" strokeDasharray="4 4" />
      <path d="M12 2v20M2 12h20" strokeDasharray="2 6" />
      <circle cx="12" cy="12" r="6" strokeDasharray="3 3" />
      <path d="M5 5l14 14M19 5L5 19" strokeDasharray="2 4" />
    </svg>
    {/* Inner pulsating core */}
    <motion.svg
      animate={{ scale: [1, 1.2, 1], rotate: 360 }}
      transition={{ rotate: { repeat: Infinity, duration: 20, ease: "linear" }, scale: { repeat: Infinity, duration: 3, ease: "easeInOut" } }}
      viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.8" className="w-2/5 h-2/5 absolute top-[30%] left-[30%]"
    >
      <circle cx="12" cy="12" r="8" />
      <path d="M12 8v8M8 12h8" />
    </motion.svg>
  </motion.div>
);

const NeuralAnim = () => (
  <motion.div
    animate={{ rotate: 360 }}
    transition={{ repeat: Infinity, duration: 35, ease: "linear" }}
    className="relative w-72 h-72 text-accent"
  >
    {/* Outer Neural Ring */}
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.6" className="w-full h-full absolute inset-0 opacity-70">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" strokeDasharray="8 4" />
      <path d="M12 2a10 10 0 0110 10" strokeWidth="1" />
      <circle cx="20.5" cy="7.5" r="1.5" fill="currentColor" />
      <circle cx="3.5" cy="16.5" r="1.5" fill="currentColor" />
      <circle cx="16.5" cy="20.5" r="1.5" fill="currentColor" />
    </svg>
    {/* Inner Neural Connections */}
    <motion.svg
      animate={{ rotate: -360 }}
      transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
      viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.5" className="w-3/5 h-3/5 absolute top-[20%] left-[20%]"
    >
      <path d="M12 4L4 20L20 20Z" strokeLinejoin="round" strokeDasharray="2 3" />
      <circle cx="12" cy="4" r="2" fill="currentColor" />
      <circle cx="4" cy="20" r="2" fill="currentColor" />
      <circle cx="20" cy="20" r="2" fill="currentColor" />
      <path d="M12 4v10M4 20l8-6M20 20l-8-6" strokeWidth="0.3" />
      <circle cx="12" cy="14" r="3" />
    </motion.svg>
  </motion.div>
);

export const getBgAnimation = (type: string) => {
  switch (type) {
    case "engine": return <EngineAnim />;
    case "algo": return <AlgoAnim />;
    case "neural": return <NeuralAnim />;
    default: return <EngineAnim />;
  }
};

export default function Projects() {
  return (
    <section id="projects" className="relative">
      <div className="section-container relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold font-mono text-accent mb-2">
            <span className="text-muted mr-2">02.</span>projects
          </h2>
          <div className="h-px bg-gradient-to-r from-accent/50 to-transparent max-w-md" />
        </motion.div>

        {/* Project Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectsData.map((project, index) => (
            <ProjectCard
              key={project.id}
              {...project}
              index={index}
              bgAnimation={getBgAnimation(project.bgAnimationType)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
