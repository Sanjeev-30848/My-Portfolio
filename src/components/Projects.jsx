import { motion } from "framer-motion";

const projects = [
  {
    title: "Online Service Management System",
    description:
      "Full Stack platform built using React, Spring Boot and MySQL with JWT authentication.",
    tech: "React • Spring Boot • MySQL",
    github: "YOUR_GITHUB_LINK"
  },
  {
    title: "CNN Disease Detection",
    description:
      "AI-powered disease detection from Chest X-Ray images using CNN and Grad-CAM explainability.",
    tech: "Python • TensorFlow • Grad-CAM",
    
  },
  {
    title: "Automatic Fire Alarm System",
    description:
      "Arduino based fire detection system with buzzer alerts and servo motor automation.",
    tech: "Arduino • Embedded Systems",
   
  }
];

function Projects() {
  return (
    <section
      id="projects"
      className="py-20 px-8"
    >
      <h2 className="text-4xl font-bold text-center mb-12">
        Projects
      </h2>

      <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            whileHover={{ y: -10 }}
            className="bg-white shadow-xl rounded-xl p-6"
          >
            <h3 className="text-2xl font-bold mb-3">
              {project.title}
            </h3>

            <p className="text-gray-600 mb-4">
              {project.description}
            </p>

            <p className="font-medium mb-4">
              {project.tech}
            </p>

            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="bg-black text-white px-4 py-2 rounded-lg"
            >
              View Project
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Projects;