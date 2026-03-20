"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal } from "lucide-react";

export default function SplashScreen() {
  const [isVisible, setIsVisible] = useState(true);
  const [textIndex, setTextIndex] = useState(0);

  const loadingTexts = [""
  ];

  useEffect(() => {
    // Cycle through texts
    const textInterval = setInterval(() => {
      setTextIndex((prev) => (prev < loadingTexts.length - 1 ? prev + 1 : prev));
    }, 100); // Change text every 400ms

    // Hide splash screen after a total delay
    const totalDuration = 1000; // 2.5 seconds
    const hideTimeout = setTimeout(() => {
      setIsVisible(false);
      // Allow scrolling again after the exit animation completes (0.6s)
      setTimeout(() => {
        document.body.style.overflow = "";
      }, 600);
    }, totalDuration);

    // Prevent scrolling while loading
    document.body.style.overflow = "hidden";

    return () => {
      clearInterval(textInterval);
      clearTimeout(hideTimeout);
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#09090b] text-foreground"
        >
          {/* Subtle background glow */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-96 h-96 bg-terminal/10 rounded-full blur-[100px] animate-pulse" />
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative z-10 flex flex-col items-center gap-6"
          >
            {/* Logo animation */}
            <div className="relative flex items-center justify-center w-20 h-20 rounded-2xl bg-card border border-white/10 shadow-2xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-tr from-terminal/20 to-transparent opacity-50" />
              <Terminal className="w-10 h-10 text-terminal animate-pulse" />

              {/* Scanning line */}
              <motion.div
                className="absolute left-0 right-0 h-0.5 bg-terminal/50 blur-[1px]"
                animate={{ top: ["0%", "100%", "0%"] }}
                transition={{ duration: 1, ease: "linear", repeat: Infinity }}
              />
            </div>

            {/* Terminal specific loading text */}
            <div className="flex flex-col items-center gap-3">
              <div className="flex items-center gap-2 font-mono text-lg font-semibold tracking-tight">
                <span className="text-terminal">pankaj</span>
                <span className="text-secondary">@</span>
                <span>portfolio</span>
              </div>

              <div className="h-6 flex items-center justify-center font-mono text-sm text-muted">
                <span className="mr-2 text-terminal">{">"}</span>
                {loadingTexts[textIndex]}
                <span className="ml-1 animate-cursor-blink text-terminal">▋</span>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="w-48 h-1 mt-4 bg-white/10 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 1.2, ease: "easeInOut" }}
                className="h-full bg-terminal relative"
              >
                <div className="absolute right-0 top-0 bottom-0 w-4 bg-white/50 blur-[2px]" />
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
