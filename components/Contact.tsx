"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Phone } from "lucide-react";
import { profile } from "@/lib/data";

export default function Contact() {
  return (
    <section id="contact" className="section-container pt-32 pb-40">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="rounded-3xl border border-border bg-bg-card p-10 text-center sm:p-16"
      >
        <p className="mb-2 text-sm uppercase tracking-widest text-accent">
          Contact
        </p>
        <h2 className="mb-4 font-display text-3xl font-semibold sm:text-4xl">
          Let&apos;s build something reliable together.
        </h2>
        <p className="mx-auto mb-8 max-w-xl text-text-secondary">
          Open to full-time roles, contract work, and collaborations across
          Python, JavaScript, and AI-integrated products.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-white transition-transform hover:scale-105"
          >
            <Mail size={18} /> {profile.email}
          </a>
          <a
            href={`tel:${profile.phone.replace(/\s/g, "")}`}
            className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm text-text-primary transition-colors hover:border-accent hover:text-accent"
          >
            <Phone size={18} /> {profile.phone}
          </a>
        </div>

        <div className="mt-8 flex items-center justify-center gap-6 text-text-secondary">
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
    </section>
  );
}
