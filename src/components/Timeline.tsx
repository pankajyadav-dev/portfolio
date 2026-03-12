"use client";

import { motion } from "framer-motion";
import { details } from "framer-motion/client";
import { GraduationCap } from "lucide-react";

interface TimelineItem {
  degree: string;
  institution: string;
  period: string;
  details: string[];
}

const education: TimelineItem[] = [
  {
    degree: "B.Tech in Computer Science & Engineering",
    institution: "Lovely Professional University",
    period: "2023 — present",
    details: [
      "Data Structures & Algorithms",
      "Operating Systems & Computer Networks",
      "Database Management Systems",
      "Machine Learning & AI Fundamentals",
    ],
  },
  {
    degree: "Secondary & Senior Secondary Education",
    institution: "The Trigat School",
    period: "2020 — 2023",
    details: []
  },
];

export default function Timeline() {
  return (
    <section id="education" className="relative">
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
            <span className="text-muted mr-2">06.</span>education
          </h2>
          <div className="h-px bg-gradient-to-r from-accent/50 to-transparent max-w-md" />
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-2xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-accent/50 via-border to-transparent" />

          {education.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="relative pl-16 pb-12"
            >
              {/* Timeline Dot */}
              <div className="absolute left-4 top-1 w-5 h-5 rounded-full border-2 border-accent bg-[#09090B] flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-accent" />
              </div>

              {/* Card */}
              <div className="p-6 rounded-xl border border-border bg-card/50 hover:border-accent/30 transition-all duration-300">
                {/* Period Badge */}
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-mono bg-accent/10 text-accent border border-accent/20 mb-4">
                  {item.period}
                </span>

                <div className="flex items-start gap-3 mb-3">
                  <GraduationCap className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-lg font-bold text-foreground">
                      {item.degree}
                    </h3>
                    <p className="text-sm text-secondary">{item.institution}</p>
                  </div>
                </div>

                {/* Major Coursework */}
                {item.details.length >= 1 && <div className="mt-4 ml-8">
                  <p className="text-xs font-mono text-muted mb-2 uppercase tracking-wider">
                    Major Coursework
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {item.details.map((detail) => (
                      <span
                        key={detail}
                        className="px-2.5 py-1 text-xs font-mono rounded-md bg-[#09090B] border border-border text-secondary"
                      >
                        {detail}
                      </span>
                    ))}
                  </div>
                </div>
                }
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
