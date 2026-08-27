import React from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Code2,
  Database,
  GraduationCap,
  MapPin,
  Sparkles,
} from "lucide-react";
import ismam from "../assets/ismam.jpg";

const AboutMe = () => {
  const technologies = ["React", "JavaScript", "Node.js", "Express", "MongoDB"];

  return (
    <section
      id="about"
      className="relative min-h-screen overflow-hidden bg-gradient-to-br from-gray-900 via-gray-950 to-black text-white px-6 py-24 md:px-10"
    >
      {/* ================= BACKGROUND ================= */}

      {/* Grid */}
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

      {/* Left glow */}
      <motion.div
        className="absolute -left-40 top-1/4 w-[450px] h-[450px] rounded-full bg-amber-500/10 blur-[130px]"
        animate={{
          x: [0, 30, 0],
          y: [0, -25, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Right glow */}
      <motion.div
        className="absolute -right-40 bottom-0 w-[500px] h-[500px] rounded-full bg-orange-500/10 blur-[140px]"
        animate={{
          x: [0, -30, 0],
          y: [0, 25, 0],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* ================= CONTENT ================= */}

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 mb-4 rounded-full border border-amber-400/20 bg-amber-400/5 px-4 py-2 text-sm text-amber-300">
            <Sparkles className="w-4 h-4" />
            Get to know me
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight">
            About{" "}
            <span className="bg-gradient-to-r from-amber-300 to-orange-500 bg-clip-text text-transparent">
              Me
            </span>
          </h2>

          <div className="mx-auto mt-5 h-1 w-16 rounded-full bg-gradient-to-r from-amber-400 to-orange-500" />

          <p className="mt-5 max-w-2xl mx-auto text-gray-400 text-base md:text-lg">
            A little about who I am, what I build, and what drives me as a
            software engineer.
          </p>
        </motion.div>

        {/* ================= MAIN GRID ================= */}

        <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-10 lg:gap-16 items-center">
          {/* ================= PROFILE CARD ================= */}

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
            }}
            className="flex justify-center"
          >
            <div className="relative group">
              {/* Animated glow */}
              <motion.div
                className="absolute -inset-3 rounded-[2rem] bg-gradient-to-r from-amber-400/30 to-orange-500/20 blur-2xl opacity-60"
                animate={{
                  opacity: [0.4, 0.7, 0.4],
                  scale: [1, 1.03, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              {/* Card */}
              <div className="relative w-[290px] sm:w-[330px] rounded-[2rem] border border-white/10 bg-white/[0.04] backdrop-blur-xl p-5 shadow-2xl">
                {/* Image container */}
                <div className="relative overflow-hidden rounded-[1.5rem]">
                  <img
                    src={ismam}
                    alt="Ismam Sadat Alam Taseen"
                    className="w-full aspect-square object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* Image overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                  {/* Status */}
                  <div className="absolute bottom-4 left-4 flex items-center gap-2 rounded-full border border-white/10 bg-black/60 px-3 py-2 backdrop-blur-md">
                    <span className="relative flex h-2.5 w-2.5">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                      <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-400" />
                    </span>

                    <span className="text-xs font-medium text-white">
                      Available
                    </span>
                  </div>
                </div>

                {/* Profile info */}
                <div className="mt-5 text-center">
                  <h3 className="text-xl font-bold">Ismam Sadat Alam Taseen</h3>

                  <p className="mt-1 text-sm text-amber-400">
                    Software Engineer
                  </p>
                </div>

                {/* Location */}
                <div className="mt-4 flex items-center justify-center gap-2 text-sm text-gray-400">
                  <MapPin className="w-4 h-4 text-amber-400" />
                  Bangladesh
                </div>
              </div>

              {/* Floating icon */}
              <motion.div
                className="absolute -right-5 top-10 flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-gray-900/90 text-amber-400 shadow-xl backdrop-blur-md"
                animate={{
                  y: [0, -8, 0],
                  rotate: [0, 3, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <Code2 className="w-6 h-6" />
              </motion.div>

              {/* Floating database icon */}
              <motion.div
                className="absolute -left-5 bottom-16 flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-gray-900/90 text-orange-400 shadow-xl backdrop-blur-md"
                animate={{
                  y: [0, 8, 0],
                  rotate: [0, -3, 0],
                }}
                transition={{
                  duration: 4.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <Database className="w-6 h-6" />
              </motion.div>
            </div>
          </motion.div>

          {/* ================= TEXT CONTENT ================= */}

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.8,
              delay: 0.15,
              ease: "easeOut",
            }}
          >
            {/* Small heading */}
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-amber-400">
              Who I am
            </p>

            <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
              Turning ideas into{" "}
              <span className="bg-gradient-to-r from-amber-300 to-orange-500 bg-clip-text text-transparent">
                meaningful digital experiences.
              </span>
            </h3>

            {/* Description */}
            <div className="mt-7 space-y-4 text-base md:text-lg leading-relaxed text-gray-400">
              <p>
                I'm{" "}
                <span className="font-semibold text-white">
                  Ismam Sadat Alam Taseen
                </span>
                , a software engineer passionate about building modern,
                reliable, and user-focused applications.
              </p>

              <p>
                I have a strong background in{" "}
                <span className="text-amber-400 font-medium">
                  web development, data handling, and problem-solving
                </span>
                . I enjoy turning complex requirements into clean, maintainable,
                and intuitive solutions.
              </p>

              <p>
                I'm currently completing my{" "}
                <span className="font-semibold text-gray-200">
                  BSc in Computer Science & Engineering at AIUB
                </span>
                , while gaining practical experience building full-stack
                applications with modern technologies.
              </p>
            </div>

            {/* ================= EDUCATION CARD ================= */}

            <div className="mt-7 rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-md transition-all duration-300 hover:border-amber-400/20 hover:bg-white/[0.05]">
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-amber-400/10 text-amber-400">
                  <GraduationCap className="w-6 h-6" />
                </div>

                <div>
                  <p className="text-xs uppercase tracking-wider text-gray-500">
                    Education
                  </p>

                  <h4 className="mt-1 font-semibold text-white">
                    BSc in Computer Science & Engineering
                  </h4>

                  <p className="mt-1 text-sm text-gray-400">
                    American International University-Bangladesh
                  </p>
                </div>
              </div>
            </div>

            {/* ================= TECHNOLOGIES ================= */}

            <div className="mt-7">
              <p className="mb-3 text-sm font-medium text-gray-500">
                Technologies I work with
              </p>

              <div className="flex flex-wrap gap-2">
                {technologies.map((tech, index) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: 0.4 + index * 0.08,
                    }}
                    className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-gray-300 transition-all duration-300 hover:border-amber-400/30 hover:bg-amber-400/10 hover:text-amber-300"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>

            {/* ================= CTA ================= */}

            <motion.button
              onClick={() =>
                document
                  .querySelector("#projects")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.97 }}
              className="group mt-8 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-amber-400 to-orange-500 px-6 py-3.5 font-bold text-black shadow-lg shadow-orange-500/20 transition-shadow duration-300 hover:shadow-orange-500/40"
            >
              Explore My Work
              <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/40 to-transparent" />
    </section>
  );
};

export default AboutMe;
