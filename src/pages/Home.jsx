import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, Palette, Zap, Users } from "lucide-react";
import { useState, useEffect } from "react";
import useStore from "../store";

const Home = () => {
  const { projects } = useStore();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const featuredProjects = projects
    .filter((project) => project.featured)
    .slice(0, 3);

  // Animation variants
  const letterAnimation = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.05,
        duration: 0.5,
        ease: [0.6, 0.05, 0.01, 0.9],
      },
    }),
  };

  const floatingAnimation = {
    y: [0, -20, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
    },
  };

  const text = "Hi, I'm Fatima";
  const subtitle = "UI/UX Designer";

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="min-h-[90vh] flex items-center relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={
              isMobile
                ? {}
                : {
                    scale: [1, 1.2, 1],
                    rotate: [0, 90, 0],
                    opacity: [0.02, 0.03, 0.02],
                  }
            }
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute top-1/4 -left-20 w-96 h-96 rounded-full bg-gradient-to-br from-amber-100/10 to-yellow-200/10 blur-3xl"
          />
          <motion.div
            animate={
              isMobile
                ? {}
                : {
                    scale: [1.2, 1, 1.2],
                    rotate: [90, 0, 90],
                    opacity: [0.03, 0.02, 0.03],
                  }
            }
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute bottom-1/4 -right-20 w-96 h-96 rounded-full bg-gradient-to-br from-orange-100/10 to-amber-200/10 blur-3xl"
          />
          <motion.div
            animate={
              isMobile
                ? {}
                : {
                    scale: [1, 1.3, 1],
                    opacity: [0.01, 0.02, 0.01],
                  }
            }
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-yellow-100/8 to-amber-100/8 blur-3xl"
          />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
                <div className="block mb-2">
                  {text.split("").map((char, i) => (
                    <motion.span
                      key={i}
                      custom={i}
                      initial="hidden"
                      animate="visible"
                      variants={letterAnimation}
                      className="inline-block"
                    >
                      {char === " " ? "\u00A0" : char}
                    </motion.span>
                  ))}
                </div>
                <motion.span
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8, duration: 0.6 }}
                  className="block bg-gradient-to-r from-amber-500 via-yellow-500 to-orange-400 bg-clip-text text-transparent"
                >
                  {subtitle}
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1, duration: 0.6 }}
                  className="block text-text-secondary text-4xl md:text-5xl mt-2"
                >
                  crafting beautiful & usable digital experiences
                </motion.span>
              </h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 0.6 }}
                className="text-xl text-text-secondary mb-8 max-w-2xl"
              >
                I design digital products that are not only visually stunning
                but also intuitive and user-friendly. With 7+ years of
                experience, I bridge the gap between aesthetics and
                functionality.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.4, duration: 0.6 }}
                className="flex flex-wrap gap-4"
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    to="/work"
                    className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-amber-400 to-yellow-400 text-gray-900 rounded-full font-medium hover:shadow-lg hover:shadow-amber-400/20 transition-all"
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
                    className="inline-flex items-center px-8 py-4 border-2 border-amber-400 dark:border-amber-400 text-amber-600 dark:text-amber-300 rounded-full font-medium hover:bg-amber-50/60 dark:hover:bg-amber-900/15 transition-colors"
                  >
                    Get in Touch
                  </Link>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Animated Graphics Section */}
            <div className="relative h-[500px] flex items-center justify-center">
              {/* Center orbiting elements */}
              <motion.div
                animate={isMobile ? {} : { rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="relative w-72 h-72"
              >
                {/* Orbit circles */}
                {[0, 60, 120, 180, 240, 300].map((angle, i) => (
                  <motion.div
                    key={i}
                    animate={isMobile ? {} : floatingAnimation}
                    transition={{
                      ...floatingAnimation.transition,
                      delay: i * 0.2,
                    }}
                    style={{
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      transform: `translate(-50%, -50%) rotate(${angle}deg) translateY(-140px)`,
                    }}
                    className="w-16 h-16 rounded-full bg-gradient-to-br from-amber-200/40 to-yellow-200/40 backdrop-blur-sm border border-amber-300/25"
                  />
                ))}
              </motion.div>

              {/* Center element */}
              <motion.div
                animate={
                  isMobile
                    ? {}
                    : {
                        scale: [1, 1.1, 1],
                        rotate: [0, 180, 360],
                      }
                }
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full bg-gradient-to-br from-amber-300 via-yellow-300 to-orange-300 shadow-2xl shadow-amber-400/20"
              >
                <motion.div
                  animate={isMobile ? {} : { rotate: -360 }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="w-full h-full flex items-center justify-center"
                >
                  <Sparkles className="w-12 h-12 text-white" />
                </motion.div>
              </motion.div>

              {/* Floating decorative elements */}
              <motion.div
                animate={
                  isMobile
                    ? {}
                    : {
                        y: [0, -30, 0],
                        rotate: [0, 10, 0],
                      }
                }
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute top-10 right-10 w-24 h-24 rounded-2xl bg-gradient-to-br from-yellow-200/35 to-amber-200/35 backdrop-blur-sm border border-yellow-300/25 transform rotate-12"
              />
              <motion.div
                animate={
                  isMobile
                    ? {}
                    : {
                        y: [0, 30, 0],
                        rotate: [0, -10, 0],
                      }
                }
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
                className="absolute bottom-10 left-10 w-32 h-32 rounded-2xl bg-gradient-to-br from-orange-200/35 to-amber-200/35 backdrop-blur-sm border border-orange-300/25 transform -rotate-12"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-end mb-12">
            <div>
              <motion.h2
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-4xl font-bold mb-4"
              >
                Selected Works
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-text-secondary"
              >
                A curated selection of recent projects
              </motion.p>
            </div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Link
                to="/work"
                className="text-amber-600 dark:text-amber-400 hover:text-amber-700 dark:hover:text-amber-300 transition-colors"
              >
                View all projects →
              </Link>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.length > 0
              ? featuredProjects.map((project, index) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ y: -10 }}
                    className="group"
                  >
                    <Link to={`/work#${project.id}`}>
                      <div className="relative overflow-hidden rounded-2xl mb-4 aspect-[4/3] bg-gradient-to-br from-amber-50/60 via-yellow-50/60 to-orange-50/60 dark:from-amber-900/10 dark:via-yellow-900/10 dark:to-orange-900/10 border border-amber-200/35 dark:border-amber-700/25">
                        {project.imageUrl ? (
                          <img
                            src={project.imageUrl}
                            alt={project.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center">
                            <Palette className="w-12 h-12 text-amber-400 dark:text-amber-500" />
                          </div>
                        )}
                      </div>
                      <h3 className="text-xl font-semibold mb-2 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
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
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ y: -10 }}
                    className="group"
                  >
                    <Link to={`/work#${project.id}`}>
                      <div className="relative overflow-hidden rounded-2xl mb-4 aspect-[4/3] bg-gradient-to-br from-amber-50/60 via-yellow-50/60 to-orange-50/60 dark:from-amber-900/10 dark:via-yellow-900/10 dark:to-orange-900/10 border border-amber-200/35 dark:border-amber-700/25">
                        {project.imageUrl ? (
                          <img
                            src={project.imageUrl}
                            alt={project.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center">
                            <Palette className="w-12 h-12 text-amber-400 dark:text-amber-500" />
                          </div>
                        )}
                      </div>
                      <h3 className="text-xl font-semibold mb-2 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
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
      {/* Design Philosophy */}
      <section className="py-20 relative overflow-hidden">
        {/* Section background (matches hero + projects) */}
        <div
          className="absolute inset-0 bg-gradient-to-b 
    from-transparent 
    via-amber-100/10 
    to-transparent 
    dark:via-amber-900/10"
        />

        {/* Background glow */}
        <motion.div
          animate={
            isMobile
              ? {}
              : {
                  scale: [1, 1.2, 1],
                  opacity: [0.02, 0.03, 0.02],
                }
          }
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full
    bg-gradient-to-br from-amber-200/10 via-yellow-200/10 to-orange-200/10
    blur-3xl"
        />

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
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
                  color: "from-amber-300 to-yellow-300",
                },
                {
                  icon: Users,
                  title: "User-Centered",
                  description:
                    "Designing with empathy, putting user needs and behaviors at the forefront.",
                  color: "from-yellow-300 to-orange-300",
                },
                {
                  icon: Zap,
                  title: "Purposeful Innovation",
                  description:
                    "Leveraging technology to solve real problems in elegant, intuitive ways.",
                  color: "from-orange-300 to-amber-300",
                },
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="
              p-6 rounded-2xl
              bg-gradient-to-br 
              from-amber-50/60 via-yellow-50/60 to-orange-50/60
              dark:from-amber-900/20 dark:via-yellow-900/20 dark:to-orange-900/20
              backdrop-blur-sm
              border border-amber-200/35 dark:border-amber-800/30
              hover:border-amber-300/50 dark:hover:border-amber-700/40
              transition-all
              hover:shadow-xl hover:shadow-amber-400/10
            "
                >
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} 
              flex items-center justify-center mb-4 mx-auto 
              shadow-lg shadow-amber-400/15`}
                  >
                    <item.icon className="w-6 h-6 text-gray-900" />
                  </motion.div>

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
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative rounded-3xl overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-amber-50/30 via-yellow-50/30 to-orange-50/30 dark:from-amber-950/10 dark:via-yellow-950/10 dark:to-orange-950/10" />
            <motion.div
              animate={
                isMobile
                  ? {}
                  : {
                      backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                    }
              }
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-200/3 to-transparent bg-[length:200%_100%]"
            />
            <div className="relative z-10 py-20 px-8 text-center">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl font-bold mb-6"
              >
                Ready to create something amazing?
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-xl text-text-secondary mb-8 max-w-2xl mx-auto"
              >
                Let's collaborate to bring your vision to life with thoughtful,
                user-centered design.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-amber-400 to-yellow-400 text-gray-900 rounded-full font-medium hover:shadow-lg hover:shadow-amber-400/20 transition-all"
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
