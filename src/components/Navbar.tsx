"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Terminal } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

// Added '/' before the hash so it always routes back to the homepage first
const navLinks = [
    { label: "About", href: "/#about" },
    { label: "Projects", href: "/#projects" },
    { label: "Skills", href: "/#skills" },
    { label: "CP Stats", href: "/#cp-stats" },
    { label: "Achievements", href: "/#achievements" },
    { label: "Education", href: "/#education" },
    { label: "Contact", href: "/#contact" },
];

// Extracted outside to prevent recalculating on every scroll
// Using split to grab the ID without the '/#'
const sectionIds = navLinks.map((l) => l.href.split("#")[1]);

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState("");
    const [mobileOpen, setMobileOpen] = useState(false);

    // Use pathname to know if we are on the homepage
    const pathname = usePathname();
    const isHomePage = pathname === "/";

    useEffect(() => {
        const onScroll = () => {
            setIsScrolled(window.scrollY > 50);

            // Only track active sections if we are on the home page
            if (!isHomePage) return;

            let currentSection = "";
            for (let i = sectionIds.length - 1; i >= 0; i--) {
                const el = document.getElementById(sectionIds[i]);
                if (el && el.getBoundingClientRect().top <= 120) {
                    currentSection = sectionIds[i];
                    break;
                }
            }

            // Update only if a section is found and it's different from current
            if (currentSection && currentSection !== activeSection) {
                setActiveSection(currentSection);
            } else if (window.scrollY < 100) {
                // Reset to top section if scrolled all the way up
                setActiveSection(sectionIds[0]);
            }
        };

        window.addEventListener("scroll", onScroll, { passive: true });
        // Call once on mount to set initial state
        onScroll();
        return () => window.removeEventListener("scroll", onScroll);
    }, [activeSection, isHomePage]);

    return (
        <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${isScrolled
                ? "glass shadow-lg shadow-black/20"
                : "bg-transparent"
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 group">
                    <Terminal className="w-5 h-5 text-secondary" />
                    <span className="font-mono text-secondary font-bold text-lg tracking-tight group-hover:text-terminal-bright transition-colors">
                        pankaj<span className="text-secondary">@</span>dev
                    </span>
                    <span className="animate-cursor-blink text-accent font-mono">
                        ▋
                    </span>
                </Link>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center gap-1">
                    {navLinks.map((link) => {
                        const sectionId = link.href.split("#")[1];
                        // Only show as active if we are on the homepage AND the section matches
                        const isActive =
                            isHomePage && activeSection === sectionId;

                        return (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ${isActive
                                    ? "text-accent bg-glow"
                                    : "text-secondary hover:text-accent hover:bg-glow"
                                    }`}
                            >
                                {link.label}
                            </Link>
                        );
                    })}
                </div>

                {/* Mobile Toggle */}
                <button
                    onClick={() => setMobileOpen(!mobileOpen)}
                    className="md:hidden text-secondary hover:text-accent transition-colors p-2"
                    aria-label="Toggle menu"
                >
                    {mobileOpen ? (
                        <X className="w-5 h-5" />
                    ) : (
                        <Menu className="w-5 h-5" />
                    )}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden glass border-t border-border overflow-hidden"
                    >
                        <div className="px-6 py-4 flex flex-col gap-1">
                            {navLinks.map((link) => {
                                const sectionId = link.href.split("#")[1];
                                const isActive =
                                    isHomePage && activeSection === sectionId;

                                return (
                                    <Link
                                        key={link.href}
                                        href={link.href}
                                        onClick={() => setMobileOpen(false)}
                                        className={`px-4 py-2.5 rounded-md text-sm font-medium transition-all ${isActive
                                            ? "text-accent bg-glow"
                                            : "text-secondary hover:text-accent hover:bg-glow"
                                            }`}
                                    >
                                        <span className="font-mono text-muted mr-2">
                                            ~/
                                        </span>
                                        {link.label}
                                    </Link>
                                );
                            })}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
}
