import React from "react";
import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react"; // Icon for education
import mapleLogo from "../assets/maple.png"; // replace with your actual logo
import aiubLogo from "../assets/aiub.png";       // replace with your actual logo

const Education = () => {
  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 60 } },
  };

  return (
    <section
      id="education"
      className="min-h-screen bg-gradient-to-r from-gray-800 to-black text-white flex flex-col items-center p-10"
    >
      {/* Section Heading */}
      <motion.h1
        className="text-4xl font-bold mb-12 relative inline-block after:content-[''] after:block after:w-20 after:h-1 after:bg-amber-500 after:mt-2 after:mx-auto"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Education
      </motion.h1>

      {/* Timeline Container */}
      <div className="relative border-l-4 border-amber-500 pl-10 space-y-16 max-w-2xl">
        {/* Maple Leaf */}
        <motion.div
          className="relative flex items-start gap-6"
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {/* Icon */}
          <div className="absolute -left-14 bg-amber-500 p-3 rounded-full shadow-lg">
            <GraduationCap className="text-black w-6 h-6" />
          </div>

          {/* Content */}
          <div>
            <img src={mapleLogo} alt="Maple Leaf" className="w-14 h-14 mb-2 object-contain" />
            <h2 className="text-xl font-semibold">Maple Leaf International School</h2>
            <p className="text-gray-300">O Levels - 2018</p>
            <p className="text-gray-300">A Levels – 2021</p>
          </div>
        </motion.div>

        {/* AIUB */}
        <motion.div
          className="relative flex items-start gap-6"
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {/* Icon */}
          <div className="absolute -left-14 bg-amber-500 p-3 rounded-full shadow-lg">
            <GraduationCap className="text-black w-6 h-6" />
          </div>

          {/* Content */}
          <div>
            <img src={aiubLogo} alt="AIUB" className="w-14 h-14 mb-2 object-contain" />
            <h2 className="text-xl font-semibold">American International University-Bangladesh</h2>
            <p className="text-gray-300">
              BSc in Computer Science & Engineering <br />
              Major in Software Engineering – Expected 2025
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
