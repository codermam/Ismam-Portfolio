import React from "react";
import { motion } from "framer-motion";
import {
  Code2,
  Database,
  Globe,
  Layers3,
  Settings2,
  BrainCircuit,
  Sparkles,
  ArrowDown,
} from "lucide-react";

const skillGroups = [
  {
    title: "Languages",
    icon: Code2,
    description: "Core programming & web languages",
    skills: ["JavaScript", "Python", "HTML", "CSS"],
  },
  {
    title: "Frontend",
    icon: Globe,
    description: "Modern user interface development",
    skills: ["React.js", "Tailwind CSS"],
  },
  {
    title: "Backend",
    icon: Layers3,
    description: "Server-side & API development",
    skills: ["Node.js", "Express.js"],
  },
  {
    title: "Databases",
    icon: Database,
    description: "Data storage & management",
    skills: ["MongoDB", "MySQL"],
  },
  {
    title: "Tools",
    icon: Settings2,
    description: "Development & deployment workflow",
    skills: ["Git", "GitHub", "VS Code", "Vercel", "Render", "Canva"],
  },
  {
    title: "Other",
    icon: BrainCircuit,
    description: "Problem solving & modern workflows",
    skills: ["AI-assisted development", "Data Structures & Algorithms"],
  },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="relative min-h-screen overflow-hidden bg-gradient-to-br from-gray-900 via-gray-950 to-black text-white px-6 py-24 md:px-10"
    >
      {/* ================= BACKGROUND ================= */}

      <div
        className="absolute inset-0 opacity-[0.06]"
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
        className="absolute -left-40 top-1/4 h-[450px] w-[450px] rounded-full bg-amber-500/10 blur-[130px]"
        animate={{
          x: [0, 40, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute -right-40 bottom-0 h-[500px] w-[500px] rounded-full bg-orange-500/10 blur-[140px]"
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

      {/* ================= CONTENT ================= */}

      <div className="relative z-10 mx-auto max-w-6xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="mb-14 text-center"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-amber-400/20 bg-amber-400/5 px-4 py-2 text-sm text-amber-300 backdrop-blur-md">
            <Sparkles className="h-4 w-4" />
            My technical toolkit
          </div>

          <h2 className="text-4xl font-black tracking-tight sm:text-5xl md:text-6xl">
            Skills &{" "}
            <span className="bg-gradient-to-r from-amber-300 to-orange-500 bg-clip-text text-transparent">
              Technologies
            </span>
          </h2>

          <div className="mx-auto mt-5 h-1 w-16 rounded-full bg-gradient-to-r from-amber-400 to-orange-500" />

          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-gray-400 md:text-lg">
            Technologies and tools I use to design, develop, deploy, and
            maintain modern digital experiences.
          </p>
        </motion.div>

        {/* ================= SKILL GRID ================= */}

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, index) => {
            const Icon = group.icon;

            return (
              <motion.div
                key={group.title}
                initial={{
                  opacity: 0,
                  y: 40,
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
                  delay: index * 0.08,
                  duration: 0.6,
                  ease: "easeOut",
                }}
                whileHover={{
                  y: -7,
                }}
                className="group relative"
              >
                {/* Card glow */}
                <div className="absolute -inset-px rounded-2xl bg-gradient-to-r from-amber-400/0 via-amber-400/20 to-orange-500/0 opacity-0 blur-sm transition-opacity duration-500 group-hover:opacity-100" />

                {/* Card */}
                <div className="relative h-full rounded-2xl border border-white/10 bg-white/[0.035] p-6 backdrop-blur-xl transition-all duration-500 group-hover:border-amber-400/20 group-hover:bg-white/[0.055]">
                  {/* Icon + title */}
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-amber-400/10 bg-amber-400/10 text-amber-400 transition-all duration-300 group-hover:scale-110 group-hover:bg-amber-400/15">
                        <Icon className="h-6 w-6" />
                      </div>

                      <div>
                        <h3 className="text-lg font-bold text-white">
                          {group.title}
                        </h3>

                        <p className="mt-1 text-xs text-gray-500">
                          {group.description}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="my-5 h-px bg-gradient-to-r from-white/10 via-white/5 to-transparent" />

                  {/* Skills */}
                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill, skillIndex) => (
                      <motion.span
                        key={skill}
                        initial={{
                          opacity: 0,
                          scale: 0.85,
                        }}
                        whileInView={{
                          opacity: 1,
                          scale: 1,
                        }}
                        viewport={{
                          once: true,
                        }}
                        transition={{
                          delay: 0.25 + index * 0.08 + skillIndex * 0.05,
                          duration: 0.3,
                        }}
                        className="rounded-lg border border-white/10 bg-white/[0.04] px-3 py-2 text-sm text-gray-300 transition-all duration-300 hover:border-amber-400/30 hover:bg-amber-400/10 hover:text-amber-300"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>

                  {/* Bottom accent */}
                  <div className="absolute bottom-0 left-6 right-6 h-px origin-left scale-x-0 bg-gradient-to-r from-amber-400 to-orange-500 transition-transform duration-500 group-hover:scale-x-100" />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* ================= BOTTOM MESSAGE ================= */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-12 text-center"
        >
          <p className="text-sm text-gray-500">
            Always learning. Always building.{" "}
            <span className="text-amber-400">Always improving.</span>
          </p>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="mt-10 flex justify-center"
        >
          <motion.button
            onClick={() =>
              document
                .querySelector("#experience")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            animate={{ y: [0, 6, 0] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="text-gray-600 transition-colors hover:text-amber-400"
            aria-label="Scroll to experience section"
          >
            <ArrowDown className="h-5 w-5" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
