import React from "react";
import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    company: "Autoworx Tech Solution",
    role: "Full Stack Developer Intern",
    description:
      "Acquired practical experience in MERN stack development, RESTful APIs, and modern software development practices through intensive industry training.",
  },
  {
    company: "The Attorney World Limited",
    role: "Web Developer",
    description:
      "Developed a responsive law firm website and collaborated with clients to deliver a professional online presence.",
    link: "https://theattorneyworldltd.com",
    linkLabel: "theattorneyworldltd.com",
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 60,
    },
  },
};

const Experience = () => {
  return (
    <section
      id="experience"
      className="min-h-screen bg-gradient-to-r from-gray-800 to-black text-white flex flex-col items-center p-6 md:p-10"
    >
      <motion.h2
        className="text-4xl font-bold mb-12 relative inline-block after:content-[''] after:block after:w-20 after:h-1 after:bg-amber-500 after:mt-2 after:mx-auto"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Experience
      </motion.h2>

      <div className="relative border-l-4 border-amber-500 pl-8 md:pl-10 space-y-16 max-w-2xl w-full">
        {experiences.map((exp) => (
          <motion.div
            key={exp.company}
            className="relative flex items-start gap-6"
            variants={fadeInUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <div className="absolute -left-11 md:-left-14 bg-amber-500 p-2.5 md:p-3 rounded-full shadow-lg">
              <Briefcase className="text-black w-5 h-5 md:w-6 md:h-6" />
            </div>

            <div>
              <h3 className="text-xl font-semibold">{exp.company}</h3>

              <p className="text-amber-400">{exp.role}</p>

              <p className="text-gray-300 mt-2">{exp.description}</p>

              {exp.link && (
                <a
                  href={exp.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-2 text-sm text-amber-400 underline hover:text-amber-300"
                >
                  Live Website: {exp.linkLabel}
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
