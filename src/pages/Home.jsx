import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, Palette, Zap, Users } from "lucide-react";
import useStore from "../store";

const Home = () => {
  const { projects } = useStore();

  const featuredProjects = projects
    .filter((project) => project.featured)
    .slice(0, 3);

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
              <div className="relative w-full h-[500px] rounded-3xl overflow-hidden">
                {/* Profile image placeholder - replace with actual image */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20" />

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
            {featuredProjects.length > 0
              ? featuredProjects.map((project, index) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ y: -10 }}
                    className="group"
                  >
                    <Link to={`/work#${project.id}`}>
                      <div className="relative overflow-hidden rounded-2xl mb-4 aspect-[4/3] bg-gradient-to-br from-primary/10 to-secondary/10">
                        {project.imageUrl ? (
                          <img
                            src={project.imageUrl}
                            alt={project.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center">
                            <Palette className="w-12 h-12 text-accent" />
                          </div>
                        )}
                      </div>
                      <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-text-secondary">{project.category}</p>
                    </Link>
                  </motion.div>
                ))
              : projects.slice(0, 3).map((project, index) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ y: -10 }}
                    className="group"
                  >
                    <Link to={`/work#${project.id}`}>
                      <div className="relative overflow-hidden rounded-2xl mb-4 aspect-[4/3] bg-gradient-to-br from-primary/10 to-secondary/10">
                        {project.imageUrl ? (
                          <img
                            src={project.imageUrl}
                            alt={project.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center">
                            <Palette className="w-12 h-12 text-accent" />
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

      {/* Design Philosophy */}
      <section className="py-20 bg-gradient-to-b from-transparent to-bg-secondary/50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-4xl font-bold mb-6">Design Philosophy</h2>
            <p className="text-xl text-text-secondary mb-12">
              I believe in creating digital experiences that are not just
              beautiful, but meaningful, accessible, and human-centered.
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: Palette,
                  title: "Aesthetic Excellence",
                  description:
                    "Creating visually stunning interfaces that capture attention and inspire emotion.",
                },
                {
                  icon: Users,
                  title: "User-Centered",
                  description:
                    "Designing with empathy, putting user needs and behaviors at the forefront.",
                },
                {
                  icon: Zap,
                  title: "Purposeful Innovation",
                  description:
                    "Leveraging technology to solve real problems in elegant, intuitive ways.",
                },
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  whileHover={{ y: -8 }}
                  className="p-6 rounded-2xl bg-bg-primary border border-accent/10"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4 mx-auto">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                  <p className="text-text-secondary">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative rounded-3xl overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-secondary/20 to-primary/20" />
            <div className="relative z-10 py-20 px-8 text-center">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Ready to create something amazing?
              </h2>
              <p className="text-xl text-text-secondary mb-8 max-w-2xl mx-auto">
                Let's collaborate to bring your vision to life with thoughtful,
                user-centered design.
              </p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 bg-primary text-white rounded-full font-medium hover:bg-primary/90 transition-colors"
                >
                  Start a Project
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
