import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center bg-gradient-to-r from-gray-800 to-black text-white"
    >
      <div className="text-center mt-16">
        {/* Animated Title */}
        <motion.h1
          className="text-6xl md:text-8xl font-bold tracking-wide"
          initial={{ y: -50, opacity: 0, scale: 0.8 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          transition={{ type: 'spring', stiffness: 120, damping: 12 }}
        >
          PORTFOLIO
        </motion.h1>

        {/* Animated Subtitle */}
        <motion.p
          className="mt-4 text-lg opacity-80"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          Showcasing my work & passion
        </motion.p>
      </div>
    </section>
  );
};

export default Hero;
