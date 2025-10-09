import React from "react";
import { motion } from "framer-motion";
import portfolioImg from "../assets/crud.png";
import jado from "../assets/jado.png";
import mernImg from "../assets/mern.png";

const Projects = () => {
  const projects = [
    {
      title: "CRUD",
      description:
        "A simple React web app that Create, Read, Update, and Delete users information.",
      image: portfolioImg,
      link: "https://github.com/codermam/Crud-app",
    },
    {
      title: "Landing Page",
      description: "Responsive travelling page with modern UI components.",
      image: jado,
      link: "https://github.com/codermam/Jadoo",
    },
    {
      title: "ThinkBoard",
      description:
        "ThinkBoard is a full-stack note-taking web application built with the MERN stack (MongoDB, Express.js, React.js, Node.js).",
      image: mernImg,
      link: "https://github.com/codermam/mern-thinkboard",
    },
  ];

  // Framer Motion variants
  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { type: "spring", stiffness: 120, damping: 20 },
    },
    hover: {
      scale: 1.05,
      y: -5,
      transition: { type: "spring", stiffness: 300 },
    },
  };

  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center bg-gray-950 text-white p-10"
    >
      <div className="max-w-5xl w-full">
        <h2 className="text-3xl font-bold mb-6 text-center">Projects</h2>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="card bg-gray-800 text-white shadow-xl rounded-lg overflow-hidden cursor-pointer"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              viewport={{ once: true }}
            >
              <motion.figure
                className="overflow-hidden"
                whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-40 object-cover"
                />
              </motion.figure>

              <div className="card-body">
                <h3 className="card-title text-lg font-semibold">{project.title}</h3>
                <p className="text-gray-300 text-sm">{project.description}</p>
                <div className="card-actions justify-end mt-2">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline btn-sm"
                  >
                    View
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
