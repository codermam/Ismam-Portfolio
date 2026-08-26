import React from "react";
import { motion } from "framer-motion";

const skillGroups = [
  { title: "Languages", skills: ["JavaScript", "Python", "HTML", "CSS"] },
  { title: "Frontend", skills: ["React.js", "Tailwind CSS"] },
  { title: "Backend", skills: ["Node.js", "Express.js"] },
  { title: "Databases", skills: ["MongoDB", "MySQL"] },
  {
    title: "Tools",
    skills: ["Git", "GitHub", "VS Code", "Vercel", "Render", "Canva"],
  },
  {
    title: "Other",
    skills: ["AI-assisted development", "Data Structures & Algorithms"],
  },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white p-10"
    >
      <motion.h2
        className="text-4xl font-bold mb-12 relative inline-block after:content-[''] after:block after:w-20 after:h-1 after:bg-amber-500 after:mt-2 after:mx-auto"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Skills
      </motion.h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl w-full">
        {skillGroups.map((group, i) => (
          <motion.div
            key={group.title}
            className="bg-gray-800 rounded-lg p-6 shadow-lg"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
          >
            <h3 className="text-amber-400 font-semibold mb-3">{group.title}</h3>
            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="badge badge-outline border-amber-500 text-gray-200 py-3 px-3"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
