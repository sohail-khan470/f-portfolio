import React, { useEffect } from "react";
import { motion } from "framer-motion";
import useStore from "../store";
import ProjectCard from "../components/ProjectCard";

const Work = () => {
  const { projects, fetchProjects } = useStore();

  useEffect(() => {
    fetchProjects();
  }, []);

  // Editorial staggered layout
  const getColumnClass = (index) => {
    const patterns = [
      "lg:col-span-7 lg:row-span-2", // Large card
      "lg:col-span-5", // Medium card
      "lg:col-span-5 lg:col-start-8", // Medium card offset
      "lg:col-span-4", // Small card
      "lg:col-span-4", // Small card
      "lg:col-span-4", // Small card
    ];
    return patterns[index % patterns.length];
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen pt-20"
    >
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
              <span className="block text-[#5C5C5C]">Work</span>
            </h1>
            <p className="text-xl text-[#5C5C5C] mt-8 max-w-2xl">
              A curated collection of projects that represent my approach to
              intentional design.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Staggered Grid */}
      <section className="px-8 md:px-16 pb-32">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 auto-rows-[300px]">
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
                className={`${getColumnClass(index)}`}
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
