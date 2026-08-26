import React from "react";
import { motion } from "framer-motion";
// import portfolioImg from "../assets/crud.png";
import jado from "../assets/jado.png";
// import mernImg from "../assets/mern.png";
// Add real screenshots when available:
import tokoImg from "../assets/tokoapp.PNG";
import addTaskImg from "../assets/Addtask.PNG";

const projects = [
  {
    title: "TOKO",
    description:
      "A MERN-based data visualization platform that transforms CSV, Excel, and manual data into downloadable charts and graphs.",
    image: tokoImg, // tokoImg
    link: "https://github.com/codermam/TOKO",
    liveLink: "https://toko-three-tau.vercel.app",
  },
  {
    title: "AddTask",
    description:
      "A MERN-based task management system with user authentication, dashboard analytics, activity tracking, and full CRUD functionality.",
    image: addTaskImg, // addTaskImg
    link: "https://github.com/codermam/AddTask",
    liveLink: "https://add-task-self.vercel.app",
  },
  // {
  //   title: "ThinkBoard",
  //   description:
  //     "A full-stack note-taking web application built with the MERN stack (MongoDB, Express.js, React.js, Node.js).",
  //   image: mernImg,
  //   link: "https://github.com/codermam/mern-thinkboard",
  // },
  // {
  //   title: "CRUD",
  //   description:
  //     "A simple React web app that Create, Read, Update, and Delete users information.",
  //   image: portfolioImg,
  //   link: "https://github.com/codermam/Crud-app",
  // },
  {
    title: "Landing Page",
    description: "Responsive travelling page with modern UI components.",
    image: jado,
    link: "https://github.com/codermam/Jadoo",
  },
];

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 50,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 120,
      damping: 20,
    },
  },
  hover: {
    scale: 1.05,
    y: -5,
    transition: {
      type: "spring",
      stiffness: 300,
    },
  },
};

const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center bg-gray-950 text-white p-6 md:p-10"
    >
      <div className="max-w-5xl w-full">
        <h2 className="text-3xl font-bold mb-6 text-center">Projects</h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {projects.map((project) => (
            <motion.div
              key={project.title}
              className="card bg-gray-800 text-white shadow-xl rounded-lg overflow-hidden cursor-pointer"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              viewport={{ once: true }}
            >
              <motion.figure
                className="overflow-hidden h-40 bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center"
                whileHover={{
                  scale: 1.1,
                  transition: { duration: 0.3 },
                }}
              >
                {project.image ? (
                  <img
                    src={project.image}
                    alt={`${project.title} project screenshot`}
                    loading="lazy"
                    className="w-full h-40 object-cover"
                  />
                ) : (
                  <span className="text-amber-400 font-bold text-lg">
                    {project.title}
                  </span>
                )}
              </motion.figure>

              <div className="card-body">
                <h3 className="card-title text-lg font-semibold">
                  {project.title}
                </h3>

                <p className="text-gray-300 text-sm">{project.description}</p>

                <div className="card-actions justify-end mt-2 gap-2">
                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-outline btn-sm"
                      aria-label={`View live demo of ${project.title}`}
                    >
                      Live Demo
                    </a>
                  )}

                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline btn-sm"
                    aria-label={`View ${project.title} on GitHub`}
                  >
                    GitHub
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
