"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/layout/ThemeToggle";

const links = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Tracking", href: "#tracking" },
  { label: "About", href: "#why-us" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4"
    >
      <div
        className={`flex w-full max-w-6xl items-center justify-between rounded-full px-5 py-3 transition-all duration-500 ${
          scrolled ? "glass" : "bg-transparent"
        }`}
      >
        <a href="#home" data-cursor-hover className="font-display text-lg font-semibold tracking-tight">
          BM <span className="text-primary">Xpress</span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              data-cursor-hover
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <ThemeToggle />
          <Button size="sm" onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}>
            Get Started
          </Button>
        </div>

        <button
          className="flex h-10 w-10 items-center justify-center rounded-full border border-border md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass absolute inset-x-4 top-20 rounded-2xl p-6 md:hidden"
        >
          <nav className="flex flex-col gap-4">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-base text-foreground"
              >
                {link.label}
              </a>
            ))}
            <div className="flex items-center justify-between pt-2">
              <ThemeToggle />
              <Button size="sm" onClick={() => { setOpen(false); document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }); }}>
                Get Started
              </Button>
            </div>
          </nav>
        </motion.div>
      )}
    </motion.header>
  );
}
