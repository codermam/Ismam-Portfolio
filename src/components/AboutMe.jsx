import React from 'react';
import { motion } from 'framer-motion';
import ismam from '../assets/ismam.jpg';

const AboutMe = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col md:flex-row justify-center items-center gap-10 p-10 bg-gradient-to-r from-gray-800 to-black text-white"
    >
      {/* Animated Image */}
      <motion.img
        src={ismam}
        alt="Ismam"
        className="w-60 h-60 object-cover p-2 rounded-full shadow-lg border-4 border-amber-500"
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ type: 'spring', stiffness: 120, damping: 12 }}
      />

      {/* Animated Text */}
      <motion.div
        className="flex flex-col gap-6 max-w-prose text-center md:text-left"
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ type: 'spring', stiffness: 120, damping: 12, delay: 0.3 }}
      >
        <h1 className="text-4xl font-bold relative inline-block after:content-[''] after:block after:w-16 after:h-1 after:bg-amber-500 after:mt-2 after:mx-auto md:after:mx-0">
          About Me
        </h1>
        <p className="antialiased text-lg text-gray-300 leading-relaxed">
          Hi! I’m <span className="text-amber-400 font-semibold">Ismam Sadat</span>, a final-year
          <span className="font-semibold"> Software Engineering</span> student and passionate
          <span className="text-amber-400"> Front-End Developer</span>. I love turning ideas into
          beautiful, responsive websites. Using <span className="font-semibold">React JS</span>,
          <span className="font-semibold"> Tailwind CSS</span>, and <span className="font-semibold">Canva</span>,
          I design and code websites that not only look amazing but also work seamlessly. Got an idea?
          I’ll bring it to life with clean, modern code—and a touch of AI magic. Let’s create something awesome together!
        </p>
      </motion.div>
    </section>
  );
};

export default AboutMe;
