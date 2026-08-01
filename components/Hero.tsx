"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { profile } from "@/lib/data";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center overflow-hidden pt-24"
    >
      <div className="absolute inset-0 bg-grid-pattern bg-[size:48px_48px] opacity-40" />
      <div className="pointer-events-none absolute -top-32 left-1/2 h-[480px] w-[480px] -translate-x-1/2 rounded-full bg-accent/20 blur-[120px]" />

      <div className="section-container relative grid items-center gap-12 md:grid-cols-[1.2fr_0.8fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-border px-4 py-1.5 text-sm text-text-secondary">
            <span className="h-2 w-2 rounded-full bg-accent-teal" />
            Available for new opportunities
          </p>

          <h1 className="font-display text-4xl font-semibold leading-[1.1] sm:text-5xl lg:text-6xl">
            Hi, I&apos;m {profile.name.split(" ")[0]}{" "}
            {profile.name.split(" ").slice(1).join(" ")}
            <br />
            <span className="text-gradient">{profile.title}</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg text-text-secondary">
            {profile.subtitle} • 6+ years turning Django, FastAPI, Vue, React
            and Next.js into fast, reliable products — with AI woven in where
            it earns its keep.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="rounded-full bg-accent px-6 py-3 text-sm font-medium text-white transition-transform hover:scale-105"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="rounded-full border border-border px-6 py-3 text-sm font-medium text-text-primary transition-colors hover:border-accent hover:text-accent"
            >
              Get in Touch
            </a>
          </div>

          <div className="mt-10 flex items-center gap-5 text-text-secondary">
            <a
              href={`mailto:${profile.email}`}
              className="transition-colors hover:text-accent"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-accent"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-accent"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          className="relative mx-auto aspect-square w-64 sm:w-80 md:w-full"
        >
          <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-accent to-accent-teal opacity-20 blur-2xl" />
          <div className="relative h-full w-full overflow-hidden rounded-[2rem] border border-border bg-bg-card">
            <Image
              src="/images/profile.jpg"
              alt={profile.name}
              fill
              priority
              sizes="(max-width: 768px) 320px, 420px"
              className="object-cover"
            />
          </div>
        </motion.div>
      </div>

      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-text-secondary"
        aria-label="Scroll down"
      >
        <ArrowDown size={20} />
      </a>
    </section>
  );
}
