"use client";

import { motion } from "framer-motion";
import { Github, Code2, ExternalLink } from "lucide-react";

interface StatCardProps {
  platform: string;
  handle: string;
  icon: React.ElementType;
  stats: { label: string; value: string; max?: number; current?: number }[];
  color: string;
  url: string;
}

const statCards: StatCardProps[] = [
  {
    platform: "LeetCode",
    handle: "@pankajyadav-dev",
    icon: Code2,
    color: "#FFA116",
    url: "https://leetcode.com/pankajyadav-dev",
    stats: [
      { label: "Problems Solved", value: "350+", max: 3000, current: 350 },
      { label: "Max Streak", value: "55 days", max: 365, current: 55 },
    ],
  },
  {
    platform: "GitHub",
    handle: "@pankajyadav-dev",
    icon: Github,
    color: "#2ea043", // GitHub green
    url: "https://github.com/pankajyadav-dev",
    stats: [
      { label: "Repositories", value: "13+", max: 20, current: 13 },
      { label: "Contributions (Year)", value: "800+", max: 1000, current: 800 },
    ],
  },
];

function ProgressBar({
  current,
  max,
  color,
}: {
  current: number;
  max: number;
  color: string;
}) {
  const percent = Math.min((current / max) * 100, 100);
  return (
    <div className="w-full h-2.5 rounded-full bg-background/60 overflow-hidden relative border border-white/5 shadow-inner">
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: `${percent}%` }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
        className="h-full rounded-full relative"
        style={{
          background: `linear-gradient(90deg, ${color}33, ${color})`,
          boxShadow: `0 0 15px ${color}80, 0 0 5px ${color}`,
        }}
      >
        <div className="absolute right-0 top-0 bottom-0 w-2 bg-white/60 blur-[1px]" />
      </motion.div>
    </div>
  );
}

export default function CPStats() {
  return (
    <section id="cp-stats" className="relative">
      <div className="section-container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 flex items-center justify-between"
        >
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold font-mono text-accent mb-2">
              <span className="text-muted mr-2">04.</span>stats_&_metrics
            </h2>
            <div className="h-px bg-gradient-to-r from-accent/50 to-transparent max-w-md" />
          </div>
        </motion.div>

        {/* Stat Cards Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {statCards.map((card, cardIdx) => (
            <motion.a
              key={card.platform}
              href={card.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: cardIdx * 0.15 }}
              style={{ "--hover-color": `${card.color}40` } as React.CSSProperties}
              className="group relative rounded-2xl border border-white/10 bg-card/20 backdrop-blur-md overflow-hidden hover:border-white/20 transition-all duration-500 block hover:-translate-y-1 shadow-lg hover:shadow-[0_0_40px_-10px_var(--hover-color)]"
            >
              {/* Background Gradient Glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none"
                style={{ background: `radial-gradient(circle at top right, ${card.color}, transparent 60%)` }}
              />

              {/* Top Highlight Line */}
              <div className="absolute inset-x-0 h-px top-0 bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover:via-white/20 transition-all duration-500" />

              {/* Dashboard Header */}
              <div className="flex items-center justify-between p-6 border-b border-white/5 relative z-10">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-background/50 border border-white/5 group-hover:scale-110 transition-transform duration-500 shadow-inner group-hover:border-white/10">
                    <card.icon className="w-6 h-6 drop-shadow-lg" style={{ color: card.color, filter: `drop-shadow(0 0 8px ${card.color}60)` }} />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground text-xl group-hover:text-white transition-colors flex items-center gap-2">
                      {card.platform}
                      <ExternalLink className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-muted group-hover:text-white" />
                    </h3>
                    <p className="text-sm font-mono text-muted group-hover:text-secondary transition-colors">{card.handle}</p>
                  </div>
                </div>
              </div>

              {/* Stats */}
              <div className="p-6 space-y-6 relative z-10">
                {card.stats.map((stat) => (
                  <div key={stat.label} className="group/stat">
                    <div className="flex items-end justify-between mb-3">
                      <span className="text-sm text-secondary font-medium tracking-wide group-hover/stat:text-white transition-colors">{stat.label}</span>
                      <span
                        className="text-2xl font-mono font-bold transition-all duration-300 group-hover/stat:scale-105 origin-right"
                        style={{ color: card.color, textShadow: `0 0 20px ${card.color}40` }}
                      >
                        {stat.value}
                      </span>
                    </div>
                    {stat.max && stat.current && (
                      <ProgressBar
                        current={stat.current}
                        max={stat.max}
                        color={card.color}
                      />
                    )}
                  </div>
                ))}
              </div>
            </motion.a>
          ))}
        </div>

        {/* Tip text */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center text-xs text-muted font-mono mt-8 group flex justify-center items-center gap-2"
        >
          <span className="h-px w-8 bg-border"></span>
          <span className="group-hover:text-accent transition-colors duration-300">
            {"// click cards to view my profiles ↗"}
          </span>
          <span className="h-px w-8 bg-border"></span>
        </motion.p>
      </div>
    </section>
  );
}
