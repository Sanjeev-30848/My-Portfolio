import { motion } from "framer-motion";

function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center bg-black text-white">
      <motion.h1
        initial={{opacity:0,y:-50}}
        animate={{opacity:1,y:0}}
        className="text-6xl font-bold"
      >
        KUCHUN VENKATA SANJEEV
      </motion.h1>

      <h2 className="text-2xl mt-4">
        AI Researcher | Full Stack Developer
      </h2>

      <p className="mt-5 max-w-xl">
        Building AI-powered healthcare solutions and
        scalable web applications.
      </p>

      <div className="mt-8 flex gap-4">
        <a
          href="#projects"
          className="bg-blue-500 px-6 py-3 rounded-lg"
        >
          Projects
        </a>

        <a
          href="/resume.pdf"
          className="border px-6 py-3 rounded-lg"
        >
          Resume
        </a>
      </div>
    </section>
  );
}

export default Hero;