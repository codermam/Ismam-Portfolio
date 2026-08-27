import React from "react";
import { motion } from "framer-motion";
import {
  GraduationCap,
  CalendarDays,
  MapPin,
  Sparkles,
  ArrowDown,
} from "lucide-react";

import mapleLogo from "../assets/maple.png";
import aiubLogo from "../assets/aiub.png";

const education = [
  {
    institution: "Maple Leaf International School",
    logo: mapleLogo,
    type: "School Education",
    location: "Dhaka, Bangladesh",
    periods: ["O Levels — 2018", "A Levels — 2021"],
    description:
      "Completed O Levels and A Levels with a strong academic foundation before moving into computer science and software engineering.",
  },
  {
    institution: "American International University-Bangladesh",
    logo: aiubLogo,
    type: "University",
    location: "Dhaka, Bangladesh",
    periods: [
      "BSc in Computer Science & Engineering",
      "Major in Software Engineering",
    ],
    description:
      "Pursuing a bachelor's degree focused on computer science, software engineering, programming, algorithms, databases, and modern application development.",
    current: true,
  },
];

const Education = () => {
  return (
    <section
      id="education"
      className="relative min-h-screen overflow-hidden bg-gradient-to-br from-gray-900 via-gray-950 to-black px-6 py-24 text-white md:px-10"
    >
      {/* ================= BACKGROUND ================= */}

      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
        }}
      />

      <motion.div
        className="absolute -left-40 top-1/3 h-[450px] w-[450px] rounded-full bg-amber-500/10 blur-[140px]"
        animate={{
          x: [0, 35, 0],
          y: [0, -25, 0],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute -right-40 bottom-0 h-[450px] w-[450px] rounded-full bg-orange-500/10 blur-[140px]"
        animate={{
          x: [0, -30, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* ================= CONTENT ================= */}

      <div className="relative z-10 mx-auto max-w-5xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16 text-center"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-amber-400/20 bg-amber-400/5 px-4 py-2 text-sm text-amber-300 backdrop-blur-md">
            <GraduationCap className="h-4 w-4" />
            Academic journey
          </div>

          <h2 className="text-4xl font-black tracking-tight sm:text-5xl md:text-6xl">
            My{" "}
            <span className="bg-gradient-to-r from-amber-300 to-orange-500 bg-clip-text text-transparent">
              Education
            </span>
          </h2>

          <div className="mx-auto mt-5 h-1 w-16 rounded-full bg-gradient-to-r from-amber-400 to-orange-500" />

          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-gray-400 md:text-lg">
            The academic path that shaped my foundation in computer science and
            software engineering.
          </p>
        </motion.div>

        {/* ================= TIMELINE ================= */}

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-5 top-0 h-full w-px bg-gradient-to-b from-amber-400 via-amber-500/40 to-transparent md:left-1/2 md:-translate-x-1/2" />

          <div className="space-y-12">
            {education.map((item, index) => (
              <motion.div
                key={item.institution}
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
                  delay: index * 0.15,
                  duration: 0.7,
                }}
                className={`relative flex items-center md:justify-between ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-5 z-20 flex h-10 w-10 -translate-x-1/2 items-center justify-center rounded-full border-4 border-gray-950 bg-amber-400 shadow-lg shadow-amber-500/20 md:left-1/2">
                  <GraduationCap className="h-5 w-5 text-black" />
                </div>

                {/* Empty half */}
                <div className="hidden w-[45%] md:block" />

                {/* Card */}
                <motion.div
                  whileHover={{
                    y: -5,
                  }}
                  className="ml-14 w-full md:ml-0 md:w-[45%]"
                >
                  <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.035] p-6 backdrop-blur-xl transition-all duration-500 hover:border-amber-400/20 hover:bg-white/[0.055]">
                    {/* Top row */}
                    <div className="flex items-start justify-between gap-4">
                      {/* Logo */}
                      <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.05] p-2">
                        <img
                          src={item.logo}
                          alt={`${item.institution} logo`}
                          className="h-full w-full object-contain"
                        />
                      </div>

                      {/* Current badge */}
                      {item.current && (
                        <span className="flex items-center gap-1.5 rounded-full border border-green-400/20 bg-green-400/10 px-3 py-1 text-xs font-medium text-green-300">
                          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-green-400" />
                          Current
                        </span>
                      )}
                    </div>

                    {/* Type */}
                    <p className="mt-5 text-xs font-semibold uppercase tracking-[0.2em] text-amber-400">
                      {item.type}
                    </p>

                    {/* Institution */}
                    <h3 className="mt-2 text-xl font-bold leading-snug text-white">
                      {item.institution}
                    </h3>

                    {/* Location */}
                    <div className="mt-3 flex items-center gap-2 text-sm text-gray-500">
                      <MapPin className="h-4 w-4" />
                      {item.location}
                    </div>

                    {/* Periods */}
                    <div className="mt-5 space-y-2">
                      {item.periods.map((period) => (
                        <div
                          key={period}
                          className="flex items-center gap-2 text-sm text-gray-300"
                        >
                          <CalendarDays className="h-4 w-4 text-amber-400" />
                          {period}
                        </div>
                      ))}
                    </div>

                    {/* Description */}
                    <p className="mt-5 border-t border-white/10 pt-5 text-sm leading-relaxed text-gray-400">
                      {item.description}
                    </p>

                    {/* Bottom accent */}
                    <div className="absolute bottom-0 left-6 right-6 h-px origin-left scale-x-0 bg-gradient-to-r from-amber-400 to-orange-500 transition-transform duration-500 group-hover:scale-x-100" />
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16 flex flex-col items-center gap-3 text-center"
        >
          <Sparkles className="h-5 w-5 text-amber-400" />

          <p className="text-sm text-gray-500">
            Building knowledge, one step at a time.
          </p>

          <ArrowDown className="mt-3 h-5 w-5 animate-bounce text-gray-700" />
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
