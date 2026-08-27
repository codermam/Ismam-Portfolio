import React from "react";
import { motion } from "framer-motion";
import {
  BriefcaseBusiness,
  ExternalLink,
  MapPin,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";

const experiences = [
  {
    company: "Autoworx Tech Solution",
    role: "Full Stack Developer Intern",
    type: "Internship",
    location: "Dhaka, Bangladesh",
    description:
      "Acquired practical experience in MERN stack development, RESTful APIs, and modern software development practices through intensive industry training.",
    skills: ["React", "Node.js", "Express.js", "MongoDB", "REST APIs"],
  },
  {
    company: "The Attorney World Limited",
    role: "Web Developer",
    type: "Professional Experience",
    location: "Dhaka, Bangladesh",
    description:
      "Developed a responsive law firm website and collaborated with clients to deliver a professional online presence focused on usability, responsiveness, and a polished visual experience.",
    skills: [
      "Web Development",
      "Responsive Design",
      "UI Development",
      "Client Collaboration",
    ],
    link: "https://theattorneyworldltd.com",
    linkLabel: "Visit Website",
  },
];

const Experience = () => {
  return (
    <section
      id="experience"
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
        className="absolute -right-40 top-1/4 h-[500px] w-[500px] rounded-full bg-amber-500/10 blur-[140px]"
        animate={{
          x: [0, -35, 0],
          y: [0, 25, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute -left-40 bottom-0 h-[450px] w-[450px] rounded-full bg-orange-500/10 blur-[140px]"
        animate={{
          x: [0, 35, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* ================= CONTENT ================= */}

      <div className="relative z-10 mx-auto max-w-5xl">
        {/* Header */}
        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.7,
          }}
          className="mb-16 text-center"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-amber-400/20 bg-amber-400/5 px-4 py-2 text-sm text-amber-300 backdrop-blur-md">
            <BriefcaseBusiness className="h-4 w-4" />
            Professional journey
          </div>

          <h2 className="text-4xl font-black tracking-tight sm:text-5xl md:text-6xl">
            Work{" "}
            <span className="bg-gradient-to-r from-amber-300 to-orange-500 bg-clip-text text-transparent">
              Experience
            </span>
          </h2>

          <div className="mx-auto mt-5 h-1 w-16 rounded-full bg-gradient-to-r from-amber-400 to-orange-500" />

          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-gray-400 md:text-lg">
            Experiences that have helped me grow as a developer, problem solver,
            and technology professional.
          </p>
        </motion.div>

        {/* ================= TIMELINE ================= */}

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-5 top-0 h-full w-px bg-gradient-to-b from-amber-400 via-amber-500/40 to-transparent md:left-1/2 md:-translate-x-1/2" />

          <div className="space-y-14">
            {experiences.map((experience, index) => (
              <motion.div
                key={experience.company}
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
                {/* Timeline icon */}
                <div className="absolute left-5 z-20 flex h-10 w-10 -translate-x-1/2 items-center justify-center rounded-full border-4 border-gray-950 bg-amber-400 shadow-lg shadow-amber-500/20 md:left-1/2">
                  <BriefcaseBusiness className="h-5 w-5 text-black" />
                </div>

                {/* Empty side */}
                <div className="hidden w-[45%] md:block" />

                {/* Experience card */}
                <motion.article
                  whileHover={{
                    y: -6,
                  }}
                  className="ml-14 w-full md:ml-0 md:w-[45%]"
                >
                  <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.035] p-6 backdrop-blur-xl transition-all duration-500 hover:border-amber-400/20 hover:bg-white/[0.055]">
                    {/* Top label */}
                    <div className="flex items-center justify-between gap-3">
                      <span className="rounded-full border border-amber-400/15 bg-amber-400/10 px-3 py-1.5 text-xs font-semibold text-amber-300">
                        {experience.type}
                      </span>

                      <span className="text-xs text-gray-600">
                        0{index + 1}
                      </span>
                    </div>

                    {/* Company */}
                    <h3 className="mt-5 text-2xl font-bold text-white transition-colors duration-300 group-hover:text-amber-300">
                      {experience.company}
                    </h3>

                    {/* Role */}
                    <p className="mt-1 text-base font-semibold text-amber-400">
                      {experience.role}
                    </p>

                    {/* Location */}
                    <div className="mt-3 flex items-center gap-2 text-sm text-gray-500">
                      <MapPin className="h-4 w-4" />
                      {experience.location}
                    </div>

                    {/* Divider */}
                    <div className="my-5 h-px bg-gradient-to-r from-white/10 via-white/5 to-transparent" />

                    {/* Description */}
                    <p className="text-sm leading-relaxed text-gray-400">
                      {experience.description}
                    </p>

                    {/* Skills */}
                    <div className="mt-5 flex flex-wrap gap-2">
                      {experience.skills.map((skill) => (
                        <span
                          key={skill}
                          className="rounded-lg border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs text-gray-400 transition-all duration-300 hover:border-amber-400/20 hover:bg-amber-400/10 hover:text-amber-300"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>

                    {/* Website */}
                    {experience.link && (
                      <a
                        href={experience.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/link mt-6 inline-flex items-center gap-2 rounded-xl border border-amber-400/20 bg-amber-400/5 px-4 py-2.5 text-sm font-semibold text-amber-300 transition-all duration-300 hover:border-amber-400/40 hover:bg-amber-400/10"
                      >
                        <ExternalLink className="h-4 w-4" />

                        {experience.linkLabel}

                        <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
                      </a>
                    )}

                    {/* Bottom accent */}
                    <div className="absolute bottom-0 left-6 right-6 h-px origin-left scale-x-0 bg-gradient-to-r from-amber-400 to-orange-500 transition-transform duration-500 group-hover:scale-x-100" />
                  </div>
                </motion.article>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom statement */}
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            delay: 0.4,
          }}
          className="mt-16 flex flex-col items-center text-center"
        >
          <Sparkles className="h-5 w-5 text-amber-400" />

          <p className="mt-3 max-w-lg text-sm leading-relaxed text-gray-500">
            Every experience has been another opportunity to learn, build,
            collaborate, and become a better engineer.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
