"use client";

import { Github, Linkedin, Twitter, Mail, Heart } from "lucide-react";

const socials = [
  {
    label: "GitHub",
    url: "https://github.com/pankajyadav-dev",
    icon: Github,
  },
  {
    label: "LinkedIn",
    url: "https://linkedin.com/in/pankaj-yadav-dev",
    icon: Linkedin,
  },
  {
    label: "Twitter",
    url: "https://x.com/PankajY32816894",
    icon: Twitter,
  },
  {
    label: "Email",
    url: "mailto:yadavpankaj.tech@gmail.com",
    icon: Mail,
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col items-center gap-8">
        {/* Social Links */}
        <div className="flex items-center gap-4">
          {socials.map((social) => (
            <a
              key={social.label}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className="w-11 h-11 flex items-center justify-center rounded-lg border border-border text-secondary hover:text-accent hover:border-accent/40 hover:bg-glow transition-all duration-300"
            >
              <social.icon className="w-5 h-5" />
            </a>
          ))}
        </div>

        {/* Divider */}
        <div className="h-px w-32 bg-gradient-to-r from-transparent via-border to-transparent" />

        {/* Copyright */}
        <div className="text-center space-y-1.5">
          <p className="text-xs font-mono text-muted">
            <span className="text-accent">❯</span> designed & built by{" "}
            <span className="text-accent">Pankaj Yadav</span>
          </p>
          <p className="text-[10px] text-muted/60 flex items-center justify-center gap-1">
            Made with <Heart className="w-3 h-3 text-accent" /> and lots of{" "}
            <span className="font-mono text-accent/60">coffee</span>
          </p>
          <p className="text-[10px] text-muted/40 font-mono">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
