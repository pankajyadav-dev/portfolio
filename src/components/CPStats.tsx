"use client";

import { motion } from "framer-motion";

interface StatCardProps {
  platform: string;
  handle: string;
  stats: { label: string; value: string; max?: number; current?: number }[];
  color: string;
  url: string;
}

const statCards: StatCardProps[] = [
  {
    platform: "LeetCode",
    handle: "@pankajyadav",
    color: "#FFA116",
    url: "https://leetcode.com/pankajyadav-dev",
    stats: [
      { label: "Problems Solved", value: "300+", max: 3000, current: 300 },
      { label: "Max Streak", value: "45 days", max: 365, current: 45 },
    ],
  },
  {
    platform: "GitHub",
    handle: "@pankajyadav-dev",
    color: "#2ea043", // GitHub green
    url: "https://github.com/pankajyadav-dev",
    stats: [
      { label: "Repositories", value: "11+", max: 20, current: 11 },
      { label: "Contributions (Year)", value: "700+", max: 1000, current: 720 },
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
    <div className="w-full h-2 rounded-full bg-[#1a1a1f] overflow-hidden">
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: `${percent}%` }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="h-full rounded-full"
        style={{
          background: `linear-gradient(90deg, ${color}66, ${color})`,
          boxShadow: `0 0 10px ${color}40`,
        }}
      />
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
          className="mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold font-mono text-accent mb-2">
            <span className="text-muted mr-2">04.</span>stats_&_metrics
          </h2>
          <div className="h-px bg-gradient-to-r from-accent/50 to-transparent max-w-md" />
        </motion.div>

        {/* Stat Cards Grid */}
        <div className="grid md:grid-cols-2 gap-6">
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
              className="group relative rounded-xl border border-border bg-card/50 overflow-hidden hover:border-accent/40 transition-all duration-300 block"
            >
              {/* Dashboard Header */}
              <div className="flex items-center justify-between p-5 border-b border-border">
                <div className="flex items-center gap-3">
                  {/* Status indicator */}
                  <div
                    className="w-3 h-3 rounded-full animate-pulse"
                    style={{ backgroundColor: card.color }}
                  />
                  <div>
                    <h3 className="font-mono font-bold text-foreground text-lg">
                      {card.platform}
                    </h3>
                    <p className="text-xs font-mono text-muted">{card.handle}</p>
                  </div>
                </div>
                {/* Terminal dots */}
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
                </div>
              </div>

              {/* Stats */}
              <div className="p-5 space-y-5">
                {card.stats.map((stat) => (
                  <div key={stat.label}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-secondary">{stat.label}</span>
                      <span
                        className="text-sm font-mono font-bold"
                        style={{ color: card.color }}
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
          className="text-center text-xs text-muted font-mono mt-6"
        >
          {"// click cards to view my profiles ↗"}
        </motion.p>
      </div>
    </section>
  );
}
