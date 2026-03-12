"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Github, Globe } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projectsData } from "@/data/projects";
import { getBgAnimation } from "@/components/Projects";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { use } from "react";
import ReactMarkdown from "react-markdown";
export default function ProjectDetail({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params);
  const project = projectsData.find((p) => p.id === resolvedParams.id);

  if (!project) return notFound();

  return (
    <>
      {/* We reuse the navbar but hide its internal scroll links for this page */}
      <Navbar />

      <main className="min-h-screen pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Back Button */}
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-muted hover:text-accent font-mono text-sm mb-12 transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            cd ..
          </Link>

          {/* Header Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative p-8 sm:p-12 rounded-2xl border border-border bg-card/50 overflow-hidden mb-12"
          >
            {/* Background Animation */}
            <div className="absolute inset-0 z-0 overflow-hidden opacity-[0.05] pointer-events-none flex justify-end items-center mr-[-10%]">
              {getBgAnimation(project.bgAnimationType)}
            </div>

            <div className="relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div>
                <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-mono bg-accent/10 text-accent border border-accent/20 mb-4">
                  {project.highlight}
                </div>
                <h1 className="text-4xl sm:text-5xl font-bold font-mono text-foreground mb-4">
                  {project.title}
                </h1>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-sm font-mono rounded-md bg-[#09090B] border border-border text-accent-bright"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-3 shrink-0">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-2.5 rounded-lg border border-border bg-card hover:border-accent/40 hover:text-accent transition-all duration-300"
                >
                  <Github className="w-5 h-5" />
                  Source Code
                </a>
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-5 py-2.5 bg-accent text-[#09090B] font-semibold rounded-lg hover:bg-accent-bright transition-all duration-300 shadow-[0_0_15px_rgba(16,185,129,0.2)]"
                  >
                    <Globe className="w-5 h-5" />
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          </motion.div>



          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-full"
          >
            <ReactMarkdown
              components={{
                h1: ({ node, ...props }) => <h1 className="text-3xl font-bold text-foreground mt-10 mb-6 border-b border-border pb-2" {...props} />,
                h2: ({ node, ...props }) => <h2 className="text-2xl font-bold text-foreground mt-10 mb-6 border-b border-border pb-2" {...props} />,
                h3: ({ node, ...props }) => <h3 className="text-xl font-bold font-mono text-accent mt-8 mb-4" {...props} />,
                p: ({ node, ...props }) => <p className="text-secondary leading-relaxed mb-6 text-[15px] sm:text-base" {...props} />,
                ul: ({ node, ...props }) => <ul className="list-disc pl-6 space-y-2 text-secondary mb-6 text-[15px] sm:text-base marker:text-accent" {...props} />,
                ol: ({ node, ...props }) => <ol className="list-decimal pl-6 space-y-2 text-secondary mb-6 text-[15px] sm:text-base marker:text-accent" {...props} />,
                li: ({ node, ...props }) => <li className="pl-2" {...props} />,
                strong: ({ node, ...props }) => <strong className="font-semibold text-foreground" {...props} />,
                a: ({ node, ...props }) => <a className="text-accent hover:text-accent-bright underline decoration-accent/30 underline-offset-4 transition-colors" {...props} />,
                code: ({ node, inline, ...props }: any) =>
                  inline ? (
                    <code className="bg-[#09090B] text-accent-bright px-1.5 py-0.5 rounded-md font-mono text-sm border border-border" {...props} />
                  ) : (
                    <div className="bg-[#09090B] border border-border rounded-xl p-4 overflow-x-auto mb-6">
                      <code className="text-sm font-mono text-accent-bright" {...props} />
                    </div>
                  ),
              }}
            >
              {project.content}
            </ReactMarkdown>
          </motion.div>
        </div>
      </main>

      <Footer />
    </>
  );
}
