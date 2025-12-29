import React, { useEffect } from "react";
import { motion } from "framer-motion";
import useStore from "../store";
import ProjectCard from "../components/ProjectCard";

const Work = () => {
  const { projects, fetchProjects } = useStore();

  useEffect(() => {
    fetchProjects();
  }, []);

  // Uniform grid layout for equal card sizes

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen pt-20 relative overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
            opacity: [0.02, 0.03, 0.02],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-1/4 -left-20 w-96 h-96 rounded-full bg-gradient-to-br from-amber-100/10 to-yellow-200/10 blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [90, 0, 90],
            opacity: [0.03, 0.02, 0.03],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute bottom-1/4 -right-20 w-96 h-96 rounded-full bg-gradient-to-br from-orange-100/10 to-amber-200/10 blur-3xl"
        />
      </div>
      {/* Editorial Header */}
      <section className="py-24 px-8 md:px-16">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl md:text-7xl font-serif leading-tight">
              Selected
              <span className="block bg-gradient-to-r from-amber-500 via-yellow-500 to-orange-400 bg-clip-text text-transparent">
                Work
              </span>
            </h1>
            <p className="text-xl text-amber-700 dark:text-amber-300 mt-8 max-w-2xl">
              A curated collection of projects that represent my approach to
              intentional design.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Staggered Grid */}
      <section className="px-8 md:px-16 pb-32">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="h-80"
              >
                <ProjectCard project={project} index={index} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Work;
