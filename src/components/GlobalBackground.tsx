"use client";

import { motion } from "framer-motion";

export default function GlobalBackground() {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none opacity-[0.03]">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 150, ease: "linear" }}
        className="absolute -top-[20%] -right-[10%] w-[80vw] h-[80vw] text-accent"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.2" className="w-full h-full">
          <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <circle cx="12" cy="12" r="8" strokeDasharray="1 3" />
          <circle cx="12" cy="12" r="4" strokeWidth="0.1" />
        </svg>
      </motion.div>
      
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ repeat: Infinity, duration: 120, ease: "linear" }}
        className="absolute -bottom-[20%] -left-[10%] w-[60vw] h-[60vw] text-accent"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.2" className="w-full h-full">
           <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
           <path d="M12 2v20M2 12h20" strokeDasharray="0.5 2" />
        </svg>
      </motion.div>
    </div>
  );
}
