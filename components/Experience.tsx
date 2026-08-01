"use client";

import { motion } from "framer-motion";
import { experience } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience" className="section-container py-24">
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-2 text-sm uppercase tracking-widest text-accent"
      >
        Experience
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.05 }}
        className="mb-12 font-display text-3xl font-semibold sm:text-4xl"
      >
        6+ years, four teams, one focus.
      </motion.h2>

      <div className="relative space-y-10 border-l border-border pl-8">
        {experience.map((job, i) => (
          <motion.div
            key={job.company}
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="relative"
          >
            <span className="absolute -left-[2.35rem] top-1.5 h-3 w-3 rounded-full bg-accent ring-4 ring-bg-primary" />

            <div className="mb-1 flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="text-xl font-semibold text-text-primary">
                {job.role}
              </h3>
              <span className="text-sm text-text-secondary">{job.period}</span>
            </div>
            <p className="mb-3 text-sm font-medium text-accent-teal">
              {job.company}
              {job.location ? ` · ${job.location}` : ""}
            </p>
            <p className="mb-4 text-text-secondary">{job.summary}</p>
            <ul className="space-y-2">
              {job.highlights.map((point) => (
                <li key={point} className="flex gap-2 text-sm text-text-secondary">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
