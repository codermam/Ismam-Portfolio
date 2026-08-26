import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center bg-gradient-to-r from-gray-800 to-black text-white px-6"
    >
      <div className="text-center mt-16 max-w-3xl">
        <motion.h1
          className="text-4xl md:text-6xl font-bold tracking-wide"
          initial={{ y: -50, opacity: 0, scale: 0.8 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          transition={{ type: "spring", stiffness: 120, damping: 12 }}
        >
          Ismam Sadat Alam Taseen
        </motion.h1>

        <motion.h2
          className="mt-3 text-xl md:text-2xl text-amber-400 font-semibold tracking-wide"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Software Engineer
        </motion.h2>

        <motion.p
          className="mt-4 text-lg text-gray-300 leading-relaxed"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          Motivated software engineer with a strong background in web
          development, data handling, and problem-solving — building smooth,
          well-tested user experiences.
        </motion.p>

        <motion.div
          className="mt-8 flex flex-wrap gap-4 justify-center"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.6 }}
        >
          <a
            href="#projects"
            className="btn btn-outline text-white border-white hover:bg-white hover:text-black"
          >
            View Projects
          </a>

          <a
            href="#contact"
            className="btn bg-amber-500 border-amber-500 text-black hover:bg-amber-400"
          >
            Contact Me
          </a>

          <a
            href="/Ismam_Sadat_Alam_Taseen_CV.pdf"
            download
            className="btn btn-outline text-white border-white hover:bg-white hover:text-black"
          >
            Download CV
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
