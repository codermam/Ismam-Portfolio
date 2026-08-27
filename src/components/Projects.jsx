import React from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  ExternalLink,
  FolderGit2,
  Github,
  Sparkles,
} from "lucide-react";

import jado from "../assets/jado.PNG";
import tokoImg from "../assets/tokoapp.PNG";
import addTaskImg from "../assets/Addtask.PNG";

const projects = [
  {
    title: "TOKO",
    description:
      "A MERN-based data visualization platform that transforms CSV, Excel, and manual data into downloadable charts and graphs.",
    image: tokoImg,
    link: "https://github.com/codermam/TOKO",
    liveLink: "https://toko-three-tau.vercel.app",
    technologies: ["React", "Node.js", "Express", "MongoDB"],
    featured: true,
  },
  {
    title: "AddTask",
    description:
      "A MERN-based task management system with user authentication, dashboard analytics, activity tracking, and full CRUD functionality.",
    image: addTaskImg,
    link: "https://github.com/codermam/AddTask",
    liveLink: "https://add-task-self.vercel.app",
    technologies: ["React", "Node.js", "Express", "MongoDB"],
    featured: true,
  },
  {
    title: "Landing Page",
    description:
      "A responsive travelling landing page featuring a modern interface, clean layouts, and reusable UI components.",
    image: jado,
    link: "https://github.com/codermam/Jadoo",
    technologies: ["React", "JavaScript", "CSS"],
    featured: false,
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="relative min-h-screen overflow-hidden bg-gradient-to-br from-gray-900 via-gray-950 to-black px-6 py-24 text-white md:px-10"
    >
      {/* ================= BACKGROUND ================= */}

      <div
        className="absolute inset-0 opacity-[0.055]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
        }}
      />

      {/* Glow */}
      <motion.div
        className="absolute -right-40 top-1/4 h-[500px] w-[500px] rounded-full bg-amber-500/10 blur-[140px]"
        animate={{
          x: [0, -40, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute -left-40 bottom-0 h-[450px] w-[450px] rounded-full bg-orange-500/10 blur-[130px]"
        animate={{
          x: [0, 30, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* ================= CONTENT ================= */}

      <div className="relative z-10 mx-auto max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="mb-14 text-center"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-amber-400/20 bg-amber-400/5 px-4 py-2 text-sm text-amber-300 backdrop-blur-md">
            <Sparkles className="h-4 w-4" />
            Selected work
          </div>

          <h2 className="text-4xl font-black tracking-tight sm:text-5xl md:text-6xl">
            Featured{" "}
            <span className="bg-gradient-to-r from-amber-300 to-orange-500 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>

          <div className="mx-auto mt-5 h-1 w-16 rounded-full bg-gradient-to-r from-amber-400 to-orange-500" />

          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-gray-400 md:text-lg">
            A collection of projects where I turn ideas into functional,
            responsive, and user-focused applications.
          </p>
        </motion.div>

        {/* ================= PROJECT GRID ================= */}

        <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{
                opacity: 0,
                y: 50,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{
                delay: index * 0.12,
                duration: 0.7,
                ease: "easeOut",
              }}
              whileHover={{
                y: -8,
              }}
              className="group relative"
            >
              {/* Glow */}
              <div className="absolute -inset-px rounded-3xl bg-gradient-to-r from-amber-400/0 via-amber-400/20 to-orange-500/0 opacity-0 blur-sm transition-opacity duration-500 group-hover:opacity-100" />

              {/* Card */}
              <div className="relative h-full overflow-hidden rounded-3xl border border-white/10 bg-white/[0.035] backdrop-blur-xl transition-all duration-500 group-hover:border-amber-400/20 group-hover:bg-white/[0.055]">
                {/* ================= IMAGE ================= */}

                <div className="relative h-56 overflow-hidden bg-gray-900">
                  {project.image ? (
                    <motion.img
                      src={project.image}
                      alt={`${project.title} project screenshot`}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center">
                      <FolderGit2 className="h-16 w-16 text-amber-400/50" />
                    </div>
                  )}

                  {/* Image gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-black/10" />

                  {/* Hover overlay */}
                  <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 backdrop-blur-[2px] transition-opacity duration-300 group-hover:opacity-100">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-400 text-black shadow-xl">
                      <ArrowUpRight className="h-6 w-6" />
                    </div>
                  </div>

                  {/* Featured badge */}
                  {project.featured && (
                    <div className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full border border-amber-400/20 bg-black/60 px-3 py-1.5 text-xs font-semibold text-amber-300 backdrop-blur-md">
                      <Sparkles className="h-3.5 w-3.5" />
                      Featured
                    </div>
                  )}
                </div>

                {/* ================= CARD BODY ================= */}

                <div className="p-6">
                  {/* Project title */}
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="text-xl font-bold text-white transition-colors duration-300 group-hover:text-amber-300">
                      {project.title}
                    </h3>

                    <FolderGit2 className="mt-1 h-5 w-5 shrink-0 text-gray-600 transition-colors duration-300 group-hover:text-amber-400" />
                  </div>

                  {/* Description */}
                  <p className="mt-3 min-h-[72px] text-sm leading-relaxed text-gray-400">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="rounded-md border border-white/10 bg-white/[0.04] px-2.5 py-1 text-xs text-gray-400 transition-colors duration-300 group-hover:border-amber-400/10 group-hover:text-gray-300"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>

                  {/* Divider */}
                  <div className="my-5 h-px bg-gradient-to-r from-white/10 via-white/5 to-transparent" />

                  {/* Buttons */}
                  <div className="flex gap-3">
                    {/* Live demo */}
                    {project.liveLink && (
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/btn inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-amber-400 to-orange-500 px-4 py-2.5 text-sm font-bold text-black transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-orange-500/20"
                        aria-label={`View live demo of ${project.title}`}
                      >
                        <ExternalLink className="h-4 w-4" />
                        Live Demo
                        <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5" />
                      </a>
                    )}

                    {/* GitHub */}
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-2.5 text-sm font-semibold text-gray-300 transition-all duration-300 hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/[0.08] hover:text-white"
                      aria-label={`View ${project.title} on GitHub`}
                    >
                      <Github className="h-4 w-4" />
                      GitHub
                    </a>
                  </div>
                </div>

                {/* Bottom accent */}
                <div className="absolute bottom-0 left-6 right-6 h-px origin-left scale-x-0 bg-gradient-to-r from-amber-400 to-orange-500 transition-transform duration-500 group-hover:scale-x-100" />
              </div>
            </motion.article>
          ))}
        </div>

        {/* ================= BOTTOM CTA ================= */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            delay: 0.3,
            duration: 0.6,
          }}
          className="mt-14 text-center"
        >
          <p className="mb-5 text-sm text-gray-500">
            Interested in seeing more of my work?
          </p>

          <a
            href="https://github.com/codermam"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-xl border border-amber-400/20 bg-amber-400/5 px-6 py-3 text-sm font-semibold text-amber-300 transition-all duration-300 hover:-translate-y-1 hover:border-amber-400/40 hover:bg-amber-400/10"
          >
            <Github className="h-5 w-5" />
            Visit My GitHub
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/40 to-transparent" />
    </section>
  );
};

export default Projects;
