"use client";

import { motion } from "framer-motion";
import { Github, Globe } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  techStack: string[];
  githubUrl: string;
  liveUrl?: string;
  highlight: string;
  index: number;
}

export default function ProjectCard({
  title,
  description,
  techStack,
  githubUrl,
  liveUrl,
  highlight,
  index,
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="group relative flex flex-col h-full rounded-xl border border-border bg-card/50 overflow-hidden hover:border-accent/50 transition-all duration-500"
    >
      {/* Hover neon glow */}
      <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          boxShadow: "0 0 30px rgba(16, 185, 129, 0.08), inset 0 0 30px rgba(16, 185, 129, 0.03)",
        }}
      />

      {/* Top accent bar */}
      <div className="h-0.5 bg-gradient-to-r from-transparent via-accent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="relative z-10 p-6 flex flex-col flex-1">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div>
            <h3 className="text-xl font-bold font-mono text-foreground group-hover:text-accent transition-colors duration-300">
              {title}
            </h3>
            <p className="text-xs font-mono text-accent mt-1">{highlight}</p>
          </div>
          <div className="flex items-center gap-2">
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-muted hover:text-accent hover:bg-glow transition-all"
              aria-label={`${title} GitHub`}
            >
              <Github className="w-5 h-5" />
            </a>
            {liveUrl && (
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg text-muted hover:text-accent hover:bg-glow transition-all"
                aria-label={`${title} Live Demo`}
              >
                <Globe className="w-5 h-5" />
              </a>
            )}
          </div>
        </div>

        {/* Description */}
        <p className="text-secondary text-sm leading-relaxed flex-1 mb-5">
          {description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2">
          {techStack.map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 text-xs font-mono rounded-md bg-[#09090B] border border-border text-accent/80"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
