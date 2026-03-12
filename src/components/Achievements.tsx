"use client";

import { motion } from "framer-motion";
import { Trophy, Award, ExternalLink } from "lucide-react";

interface Achievement {
  type: "achievement" | "certificate" | "Learning";
  title: string;
  description: string;
  link?: string;
}

const achievements: Achievement[] = [
  {
    type: "achievement",
    title: "Open Source Contributor",
    description:
      "Active contributor to open-source projects. Built IronJudge — a sandboxed code execution engine used in production.",
  },
  {
    type: "achievement",
    title: "Competitive Programming",
    description:
      "Solved 300+ algorithmic problems across LeetCode and Codeforces.",
  },
  {
    type: "achievement",
    title: "Full-Stack Projects",
    description:
      "Shipped multiple production-grade applications including a competitive programming platform and an AI-powered resume builder.",
  },
  {
    type: "Learning",
    title: "Systems Programming in Rust",
    description:
      "Demonstrated proficiency in building low-level systems with Rust including process isolation, namespace management, and seccomp filtering.",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, x: -20 },
  show: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

export default function Achievements() {
  return (
    <section id="achievements" className="relative">
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
            <span className="text-muted mr-2">05.</span>achievements
          </h2>
          <div className="h-px bg-gradient-to-r from-accent/50 to-transparent max-w-md" />
        </motion.div>

        {/* Achievement Cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid sm:grid-cols-2 gap-5 max-w-4xl mx-auto"
        >
          {achievements.map((ach) => (
            <motion.div
              key={ach.title}
              variants={item}
              className="group relative p-5 rounded-xl border border-border bg-card/50 hover:border-accent/40 transition-all duration-300"
            >
              <div className="absolute inset-0 rounded-xl bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                <div className="flex items-start gap-3 mb-3">
                  {ach.type === "achievement" ? (
                    <Trophy className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  ) : (
                    <Award className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  )}
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <h3 className="font-semibold text-foreground text-sm">
                        {ach.title}
                      </h3>
                      {ach.link && (
                        <a
                          href={ach.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted hover:text-accent transition-colors"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      )}
                    </div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-accent/60">
                      {ach.type}
                    </span>
                  </div>
                </div>
                <p className="text-xs text-secondary leading-relaxed ml-8">
                  {ach.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
