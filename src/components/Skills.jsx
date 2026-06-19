import { motion } from "framer-motion";

const skills = [
  "Java",
  "C",
  "JavaScript",
  "React",
  "Spring Boot",
  "MySQL",
  "Version Control",
  "AWS",
  "REST APIs",
  "Deep Learning",
  "Data Structures",
  "Object Oriented Principles",
];

function Skills() {
  return (
    <section
      id="skills"
      className="py-24 px-6 md:px-12 bg-slate-900 text-white"
    >
      <div className="max-w-7xl mx-auto">

        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Technical Skills
        </h2>

        <p className="text-center text-slate-400 mb-14">
          Technologies and tools I use to build scalable applications
          and AI-powered solutions.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              whileHover={{
                scale: 1.08,
                transition: { duration: 0.2 },
              }}
              whileTap={{ scale: 0.95 }}
              className="skill-card"
            >
              {skill}
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Skills;