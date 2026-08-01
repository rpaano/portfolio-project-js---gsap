"use client";

import { motion } from "framer-motion";
import { GraduationCap, MapPin } from "lucide-react";
import { profile, education } from "@/lib/data";

export default function About() {
  return (
    <section id="about" className="section-container py-24">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        <p className="mb-2 text-sm uppercase tracking-widest text-accent">
          About Me
        </p>
        <h2 className="mb-8 font-display text-3xl font-semibold sm:text-4xl">
          Building reliable software, end to end.
        </h2>

        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr]">
          <p className="text-lg leading-relaxed text-text-secondary">
            {profile.overview}
          </p>

          <div className="space-y-6">
            <div className="rounded-2xl border border-border bg-bg-card p-6">
              <div className="mb-2 flex items-center gap-2 text-accent-teal">
                <MapPin size={18} />
                <span className="text-sm font-medium">Location</span>
              </div>
              <p className="text-text-primary">{profile.location}</p>
            </div>

            <div className="rounded-2xl border border-border bg-bg-card p-6">
              <div className="mb-2 flex items-center gap-2 text-accent-teal">
                <GraduationCap size={18} />
                <span className="text-sm font-medium">Education</span>
              </div>
              <p className="text-text-primary">{education.degree}</p>
              <p className="text-sm text-text-secondary">
                {education.school} · {education.period}
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
