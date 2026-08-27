import React from "react";
import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowUpRight,
  Download,
  FolderOpen,
  Mail,
  Sparkles,
} from "lucide-react";

const Hero = () => {
  const scrollToSection = (id) => {
    document.querySelector(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen overflow-hidden bg-gradient-to-br from-gray-900 via-gray-950 to-black text-white"
    >
      {/* ================= BACKGROUND EFFECTS ================= */}

      {/* Grid */}
      <div
        className="absolute inset-0 opacity-[0.08]"
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
        className="absolute -left-40 top-1/4 w-[450px] h-[450px] rounded-full bg-amber-500/10 blur-[120px]"
        animate={{
          x: [0, 40, 0],
          y: [0, -30, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Right glow */}
      <motion.div
        className="absolute -right-40 bottom-10 w-[500px] h-[500px] rounded-full bg-orange-500/10 blur-[130px]"
        animate={{
          x: [0, -40, 0],
          y: [0, 30, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Small floating glow */}
      <motion.div
        className="absolute top-32 right-[20%] w-3 h-3 bg-amber-400 rounded-full shadow-[0_0_30px_10px_rgba(251,191,36,0.25)]"
        animate={{
          y: [0, -25, 0],
          opacity: [0.4, 1, 0.4],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* ================= HERO CONTENT ================= */}

      <div className="relative z-10 min-h-screen flex items-center justify-center px-6 pt-20 pb-16">
        <div className="w-full max-w-5xl mx-auto text-center">
          {/* Status badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 flex justify-center"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-amber-400/20 bg-amber-400/5 px-4 py-2 text-sm text-amber-300 backdrop-blur-md">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-400" />
              </span>
              Available for opportunities
              <Sparkles className="w-4 h-4" />
            </div>
          </motion.div>

          {/* Main heading */}
          <motion.h1
            initial={{
              opacity: 0,
              y: 40,
              scale: 0.95,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
            }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[0.95]"
          >
            Ismam Sadat
            <br />
            <span className="bg-gradient-to-r from-amber-300 via-amber-500 to-orange-500 bg-clip-text text-transparent">
              Alam Taseen
            </span>
          </motion.h1>

          {/* Job title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.25,
              duration: 0.6,
            }}
            className="mt-6"
          >
            <p className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-200">
              Software Engineer
            </p>

            <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-amber-400 to-orange-500" />
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.4,
              duration: 0.7,
            }}
            className="mx-auto mt-7 max-w-2xl text-base sm:text-lg md:text-xl leading-relaxed text-gray-400"
          >
            I build{" "}
            <span className="text-gray-200 font-medium">
              scalable, reliable, and user-focused
            </span>{" "}
            digital experiences through clean code, thoughtful design, and
            modern web technologies.
          </motion.p>

          {/* ================= BUTTONS ================= */}

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.6,
              duration: 0.6,
            }}
            className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            {/* Projects */}
            <button
              onClick={() => scrollToSection("#projects")}
              className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-amber-400 to-orange-500 px-6 py-3.5 font-bold text-black shadow-lg shadow-orange-500/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-orange-500/40"
            >
              <FolderOpen className="w-5 h-5" />
              View Projects
              <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </button>

            {/* Contact */}
            <button
              onClick={() => scrollToSection("#contact")}
              className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-6 py-3.5 font-semibold text-white backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-amber-400/40 hover:bg-amber-400/10 hover:text-amber-300"
            >
              <Mail className="w-5 h-5" />
              Contact Me
            </button>

            {/* CV */}
            <a
              href="/Ismam_Sadat_Alam_Taseen_CV.pdf"
              download
              className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 px-6 py-3.5 font-semibold text-gray-300 transition-all duration-300 hover:border-white/20 hover:bg-white/5 hover:text-white"
            >
              <Download className="w-5 h-5" />
              Download CV
            </a>
          </motion.div>

          {/* ================= QUICK INFO ================= */}

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: 0.9,
              duration: 1,
            }}
            className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-gray-500"
          >
            <span className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
              Web Development
            </span>

            <span className="hidden sm:block text-gray-700">•</span>

            <span className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
              Data Handling
            </span>

            <span className="hidden sm:block text-gray-700">•</span>

            <span className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
              Problem Solving
            </span>
          </motion.div>
        </div>
      </div>

      {/* ================= SCROLL INDICATOR ================= */}

      <motion.button
        onClick={() => scrollToSection("#about")}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: 1.2,
          duration: 0.8,
        }}
        className="absolute bottom-7 left-1/2 -translate-x-1/2 hidden sm:flex flex-col items-center gap-2 text-gray-500 transition-colors hover:text-amber-400"
        aria-label="Scroll to About section"
      >
        <span className="text-xs uppercase tracking-[0.25em]">Scroll</span>

        <motion.div
          animate={{ y: [0, 7, 0] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <ArrowDown className="w-5 h-5" />
        </motion.div>
      </motion.button>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/30 to-transparent pointer-events-none" />
    </section>
  );
};

export default Hero;
