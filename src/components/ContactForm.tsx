"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle, Loader2 } from "lucide-react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");
    // Simulate sending — replace with your API endpoint
    setTimeout(() => setStatus("sent"), 1500);
    setTimeout(() => setStatus("idle"), 4000);
  };

  return (
    <section id="contact" className="relative">
      <div className="section-container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl sm:text-4xl font-bold font-mono text-accent mb-2">
            <span className="text-muted mr-2">07.</span>contact
          </h2>
          <div className="h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent max-w-md mx-auto" />
          <p className="text-secondary mt-4 max-w-md mx-auto">
            Have a project idea or just want to say hi? Send me a message.
          </p>
        </motion.div>

        {/* Contact Form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-lg mx-auto space-y-5"
        >
          {/* Name */}
          <div>
            <label
              htmlFor="contact-name"
              className="block text-xs font-mono text-muted mb-2 uppercase tracking-wider"
            >
              name
            </label>
            <input
              id="contact-name"
              type="text"
              required
              placeholder="John Doe"
              className="w-full px-4 py-3 rounded-lg bg-input border border-border text-foreground placeholder:text-muted/50 font-mono text-sm focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all duration-300"
            />
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="contact-email"
              className="block text-xs font-mono text-muted mb-2 uppercase tracking-wider"
            >
              email
            </label>
            <input
              id="contact-email"
              type="email"
              required
              placeholder="john@example.com"
              className="w-full px-4 py-3 rounded-lg bg-input border border-border text-foreground placeholder:text-muted/50 font-mono text-sm focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all duration-300"
            />
          </div>

          {/* Message */}
          <div>
            <label
              htmlFor="contact-message"
              className="block text-xs font-mono text-muted mb-2 uppercase tracking-wider"
            >
              message
            </label>
            <textarea
              id="contact-message"
              required
              rows={5}
              placeholder="Your message..."
              className="w-full px-4 py-3 rounded-lg bg-input border border-border text-foreground placeholder:text-muted/50 font-mono text-sm focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all duration-300 resize-none"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={status !== "idle"}
            className="group w-full flex items-center justify-center gap-2 px-8 py-3.5 bg-accent text-[#09090B] font-semibold rounded-lg hover:bg-accent-bright transition-all duration-300 hover:shadow-[0_0_30px_rgba(16,185,129,0.3)] disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {status === "idle" && (
              <>
                Send Message
                <Send className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </>
            )}
            {status === "sending" && (
              <>
                Sending...
                <Loader2 className="w-4 h-4 animate-spin" />
              </>
            )}
            {status === "sent" && (
              <>
                Message Sent!
                <CheckCircle className="w-4 h-4" />
              </>
            )}
          </button>
        </motion.form>
      </div>
    </section>
  );
}
