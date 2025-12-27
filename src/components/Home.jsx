import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";
import useStore from "../store";

const Home = () => {
  const { projects } = useStore();

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="min-h-[90vh] flex items-center">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center space-x-2 mb-6 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm">
                <Sparkles className="w-4 h-4" />
                <span>Available for select projects</span>
              </div>

              <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
                <span className="block">Hi, I'm Sania</span>
                <span className="text-primary">UI/UX Designer</span>
                <span className="block text-text-secondary">
                  crafting beautiful & usable digital experiences
                </span>
              </h1>

              <p className="text-xl text-text-secondary mb-8 max-w-2xl">
                I design digital products that are not only visually stunning
                but also intuitive and user-friendly. With 7+ years of
                experience, I bridge the gap between aesthetics and
                functionality.
              </p>

              <div className="flex flex-wrap gap-4">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    to="/work"
                    className="inline-flex items-center px-8 py-4 bg-primary text-white rounded-full font-medium hover:bg-primary/90 transition-colors"
                  >
                    View Projects
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    to="/contact"
                    className="inline-flex items-center px-8 py-4 border-2 border-primary text-primary rounded-full font-medium hover:bg-primary/10 transition-colors"
                  >
                    Get in Touch
                  </Link>
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative w-full h-125 rounded-3xl overflow-hidden">
                {/* Profile image placeholder - replace with actual image */}
                <div className="absolute inset-0 bg-linear-to-br from-primary/20 via-secondary/20 to-accent/20" />

                {/* Decorative elements */}
                <motion.div
                  animate={{
                    y: [0, -20, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute top-10 right-10 w-24 h-24 rounded-full bg-primary/10 border-2 border-primary/30"
                />
                <motion.div
                  animate={{
                    y: [0, 20, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5,
                  }}
                  className="absolute bottom-10 left-10 w-32 h-32 rounded-full bg-secondary/10 border-2 border-secondary/30"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-4xl font-bold mb-4">Selected Works</h2>
              <p className="text-text-secondary">
                A curated selection of recent projects
              </p>
            </div>
            <Link
              to="/work"
              className="text-primary hover:text-primary/80 transition-colors"
            >
              View all projects →
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.slice(0, 3).map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group"
              >
                <Link to={`/work#${project.id}`}>
                  <div className="relative overflow-hidden rounded-2xl mb-4 aspect-4/3 bg-linear-to-br from-primary/10 to-secondary/10">
                    {project.imageUrl ? (
                      <img
                        src={project.imageUrl}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <span className="text-text-secondary">
                          {project.title}
                        </span>
                      </div>
                    )}
                  </div>
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-text-secondary">{project.category}</p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
