"use client";

import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "IronJudge",
    highlight: "⚔️ Sandboxed Execution Engine",
    description:
      "A blazing-fast, sandboxed code execution engine built in Rust. Executes untrusted code securely using Linux namespaces, cgroups v2, chroot & seccomp. Features async job pipeline via Redis Streams, multi-language support (C++, Rust, Java, Python, JS, TS), and a production-ready Axum HTTP API.",
    techStack: ["Rust", "Axum", "Redis", "Docker", "Linux", "seccomp"],
    githubUrl: "https://github.com/pankajyadav-dev/ironjudge",
    liveUrl: "https://ironjudge.1000xdevs.dev/",
  },
  {
    title: "xForces",
    highlight: "🏆 Competitive Programming Platform",
    description:
      "A high-performance competitive programming platform designed to host coding contests, practice problems, and provide real-time code execution. Features a microservices architecture with Next.js frontend, Redis message queue, and Docker-based sandboxing with strict resource limits.",
    techStack: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "Redis", "Docker"],
    githubUrl: "https://github.com/pankajyadav-dev/xforces",
  },
  {
    title: "AI Resume Builder",
    highlight: "🤖 AI-Powered Tool",
    description:
      "An advanced web application for creating professional resumes with AI. Features Gemini-powered resume generation, ATS compatibility checker, grammar analysis, originality detection, multiple professional templates, and a Google Docs-like rich text editor.",
    techStack: ["React", "Next.js", "MongoDB", "Gemini AI", "Tailwind CSS", "JWT"],
    githubUrl: "https://github.com/pankajyadav-dev/airesumebuilder",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative">
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
            <span className="text-muted mr-2">03.</span>projects
          </h2>
          <div className="h-px bg-gradient-to-r from-accent/50 to-transparent max-w-md" />
        </motion.div>

        {/* Project Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} {...project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
