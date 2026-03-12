"use client";

import { motion } from "framer-motion";

interface SkillCategory {
  title: string;
  icon: string;
  skills: string[];
}

const categories: SkillCategory[] = [
  {
    title: "Languages",
    icon: "⌘",
    skills: ["Rust", "TypeScript", "JavaScript", "C++", "Python", "Java"],
  },
  {
    title: "Frameworks",
    icon: "⚛",
    skills: ["Next.js", "React", "Node.js", "Tailwind CSS", "Prisma", "Axum"],
  },
  {
    title: "Infrastructure",
    icon: "☁",
    skills: ["Docker", "Redis", "PostgreSQL", "MongoDB", "Linux", "Nginx"],
  },
  {
    title: "Tools & Workflow",
    icon: "⚡",
    skills: ["Git", "Zsh", "Turborepo", "Bun", "GitHub Actions", "Vercel"],
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
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function SkillsGrid() {
  return (
    <section id="skills" className="relative">
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
            <span className="text-muted mr-2">02.</span>tech_stack
          </h2>
          <div className="h-px bg-gradient-to-r from-accent/50 to-transparent max-w-md" />
        </motion.div>

        {/* Bento Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid sm:grid-cols-2 gap-5"
        >
          {categories.map((cat) => (
            <motion.div
              key={cat.title}
              variants={item}
              className="group relative p-6 rounded-xl border border-border bg-card/50 hover:border-accent/40 hover:bg-card transition-all duration-300"
            >
              {/* Hover glow */}
              <div className="absolute inset-0 rounded-xl bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-5">
                  <span className="text-xl">{cat.icon}</span>
                  <h3 className="font-mono text-accent text-sm font-semibold tracking-wide uppercase">
                    {cat.title}
                  </h3>
                </div>

                {/* Code-style Tags */}
                <div className="font-mono text-sm">
                  <span className="text-muted">{"["}</span>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {cat.skills.map((skill, i) => (
                      <span
                        key={skill}
                        className="inline-flex items-center px-3 py-1.5 rounded-md bg-[#09090B] border border-border text-accent-bright text-xs font-mono hover:border-accent/50 hover:shadow-[0_0_10px_rgba(16,185,129,0.1)] transition-all cursor-default"
                      >
                        &apos;{skill}&apos;
                        {i < cat.skills.length - 1 && (
                          <span className="text-muted ml-1">,</span>
                        )}
                      </span>
                    ))}
                  </div>
                  <span className="text-muted mt-2 block">{"]"}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
