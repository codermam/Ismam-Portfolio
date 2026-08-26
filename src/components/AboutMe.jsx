import React from "react";
import { motion } from "framer-motion";
import ismam from "../assets/ismam.jpg";

const AboutMe = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col md:flex-row justify-center items-center gap-10 p-6 md:p-10 bg-gradient-to-r from-gray-800 to-black text-white"
    >
      <motion.img
        src={ismam}
        alt="Ismam Sadat Alam Taseen"
        className="w-60 h-60 object-cover p-2 rounded-full shadow-lg border-4 border-amber-500"
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 120, damping: 12 }}
      />

      <motion.div
        className="flex flex-col gap-6 max-w-prose text-center md:text-left"
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 120, damping: 12, delay: 0.3 }}
      >
        <h2 className="text-4xl font-bold relative inline-block after:content-[''] after:block after:w-16 after:h-1 after:bg-amber-500 after:mt-2 after:mx-auto md:after:mx-0">
          About Me
        </h2>
        <p className="antialiased text-lg text-gray-300 leading-relaxed">
          I'm{" "}
          <span className="text-amber-400 font-semibold">
            Ismam Sadat Alam Taseen
          </span>
          , a <span className="font-semibold">Software Engineer</span> with a
          strong background in{" "}
          <span className="text-amber-400">web development</span>, data
          handling, and problem-solving. I'm currently finishing my BSc in{" "}
          <span className="font-semibold">Computer Science & Engineering</span>{" "}
          at AIUB, with hands-on experience building full-stack apps using{" "}
          <span className="font-semibold">
            React, Node.js, Express, and MongoDB
          </span>
          . I care about delivering smooth user experiences and well-tested,
          maintainable features — let's build something great together!
        </p>
      </motion.div>
    </section>
  );
};

export default AboutMe;
