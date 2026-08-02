"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ExternalLink, Github } from "lucide-react";
import { projects, type Category } from "@/lib/data";

const filters: { key: Category | "all"; label: string }[] = [
  { key: "all", label: "All" },
  { key: "web", label: "Web Development" },
  { key: "ai", label: "AI" },
  { key: "both", label: "Web + AI" },
];

export default function Projects() {
  const [active, setActive] = useState<Category | "all">("all");

  const visible = useMemo(
    () =>
      active === "all" ? projects : projects.filter((p) => p.category === active),
    [active]
  );

  return (
    <section id="projects" className="section-container py-24">
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-2 text-sm uppercase tracking-widest text-accent"
      >
        Projects
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.05 }}
        className="mb-8 font-display text-3xl font-semibold sm:text-4xl"
      >
        A mix of web platforms and AI-powered tools.
      </motion.h2>

      <p className="mb-8 max-w-2xl text-sm text-text-secondary">
        The projects below use placeholder demo links and thumbnails while
        real project sites are being prepared — swap in live URLs and
        screenshots as each one ships.
      </p>

      <div className="mb-10 flex flex-wrap gap-3">
        {filters.map((f) => (
          <button
            key={f.key}
            onClick={() => setActive(f.key)}
            className={`rounded-full border px-4 py-2 text-sm transition-colors ${
              active === f.key
                ? "border-accent bg-accent/10 text-accent"
                : "border-border text-text-secondary hover:border-accent hover:text-text-primary"
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      <motion.div layout className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {visible.map((project) => (
            <motion.article
              key={project.slug}
              layout
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.35 }}
              className="group overflow-hidden rounded-2xl border border-border bg-bg-card"
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute right-3 top-3 rounded-full bg-bg-primary/80 px-3 py-1 text-xs capitalize text-text-secondary backdrop-blur">
                  {project.category === "both" ? "Web + AI" : project.category}
                </span>
              </div>

              <div className="p-6">
                <h3 className="mb-2 text-lg font-semibold text-text-primary">
                  {project.title}
                </h3>
                <p className="mb-4 text-sm text-text-secondary">
                  {project.description}
                </p>

                <div className="mb-5 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-border px-2.5 py-1 text-xs text-text-secondary"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4 text-sm">
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-accent transition-colors hover:text-accent-teal"
                  >
                    <ExternalLink size={16} /> Live demo
                  </a>
                  {project.repoUrl && (
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-text-secondary transition-colors hover:text-text-primary"
                    >
                      <Github size={16} /> Code
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
