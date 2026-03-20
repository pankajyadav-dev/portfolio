"use client";

import { motion } from "framer-motion";
import {
  SiRust, SiTypescript, SiJavascript, SiCplusplus, SiPython,
  SiNextdotjs, SiReact, SiNodedotjs, SiTailwindcss, SiPrisma,
  SiDocker, SiRedis, SiPostgresql, SiMongodb, SiLinux, SiNginx,
  SiGit, SiGithubactions, SiVercel, SiGnubash, SiTurborepo,
  SiClaude,
  SiGooglecloud
} from "react-icons/si";

interface Category {
  title: string;
  icon: string;
  skills: { name: string; Icon: React.ElementType }[];
}

const categories: Category[] = [
  {
    title: "Languages",
    icon: "⌘",
    skills: [
      { name: "Rust", Icon: SiRust },
      { name: "TypeScript", Icon: SiTypescript },
      { name: "JavaScript", Icon: SiJavascript },
      { name: "C++", Icon: SiCplusplus },
    ],
  },
  {
    title: "Frameworks / ORM",
    icon: "⚛",
    skills: [
      { name: "Next.js", Icon: SiNextdotjs },
      { name: "React", Icon: SiReact },
      { name: "Node.js", Icon: SiNodedotjs },
      { name: "Tailwind CSS", Icon: SiTailwindcss },
      { name: "Prisma", Icon: SiPrisma },
    ],
  },
  {
    title: "Infrastructure",
    icon: "☁",
    skills: [
      { name: "Docker", Icon: SiDocker },
      { name: "Redis", Icon: SiRedis },
      { name: "PostgreSQL", Icon: SiPostgresql },
      { name: "MongoDB", Icon: SiMongodb },
      { name: "Linux", Icon: SiLinux },
      { name: "Nginx", Icon: SiNginx },
      { name: "Aws", Icon: SiGooglecloud }
    ],
  },
  {
    title: "Tools & Workflow",
    icon: "⚡",
    skills: [
      { name: "Git", Icon: SiGit },
      { name: "Zsh / Bash", Icon: SiGnubash },
      { name: "GitHub Actions", Icon: SiGithubactions },
      { name: "Vercel", Icon: SiVercel },
      { name: "Turborepo", Icon: SiTurborepo }
    ],
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
            <span className="text-muted mr-2">03.</span>tech_stack
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

                {/* Code-style Tags with Icons */}
                <div className="font-mono text-sm leading-8">
                  <span className="text-muted block mb-2">{"["}</span>
                  <div className="flex flex-wrap gap-2 pl-4">
                    {cat.skills.map((skill, i) => (
                      <span
                        key={skill.name}
                        className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-[#09090B] border border-border text-foreground hover:text-accent-bright text-xs font-mono hover:border-accent/50 hover:shadow-[0_0_10px_rgba(37,99,235,0.1)] transition-all cursor-default"
                      >
                        <skill.Icon className="w-3.5 h-3.5" />
                        &apos;{skill.name}&apos;
                        {i < cat.skills.length - 1 && (
                          <span className="text-muted ml-0.5">,</span>
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
