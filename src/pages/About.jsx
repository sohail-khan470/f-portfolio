import { motion } from "framer-motion";
import {
  Award,
  Users,
  Clock,
  Heart,
  Sparkles,
  Target,
  Zap,
  Palette,
  Star,
  Circle,
} from "lucide-react";

const skills = [
  { name: "UI/UX Design", level: 95, icon: Palette },
  { name: "Product Strategy", level: 90, icon: Target },
  { name: "User Research", level: 85, icon: Users },
  { name: "Prototyping", level: 95, icon: Zap },
  { name: "Design Systems", level: 88, icon: Sparkles },
  // { name: "Frontend Dev", level: 75, icon: Heart },
];

const tools = [
  { name: "Figma", color: "from-purple-400/20 to-pink-400/20" },
  { name: "Sketch", color: "from-orange-400/20 to-amber-400/20" },
  { name: "Adobe Creative Suite", color: "from-red-400/20 to-rose-400/20" },
  { name: "Framer", color: "from-blue-400/20 to-cyan-400/20" },
  { name: "Webflow", color: "from-emerald-400/20 to-teal-400/20" },
];

const stats = [
  { icon: Award, label: "Projects", value: "50+", suffix: "" },
  { icon: Users, label: "Happy Clients", value: "30+", suffix: "" },
  { icon: Clock, label: "Years", value: "7", suffix: "" },
  { icon: Heart, label: "Design Iterations", value: "∞", suffix: "" },
];

const About = () => {
  return (
    <div className="pt-24 pb-20 relative overflow-hidden">
      {/* Animated Background Elements with more sophistication */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating Particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-amber-400/30 rounded-full"
            initial={{
              x: Math.random() * 100 + "vw",
              y: Math.random() * 100 + "vh",
              scale: 0,
            }}
            animate={{
              x: [null, Math.random() * 100 + "vw"],
              y: [null, Math.random() * 100 + "vh"],
              scale: [0, 1, 0],
              opacity: [0, 0.5, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 4,
              repeat: Infinity,
              delay: i * 0.2,
            }}
          />
        ))}

        {/* Animated Gradient Orbs */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
            opacity: [0.03, 0.05, 0.03],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-1/4 left-1/4 w-[40vw] h-[40vw] rounded-full bg-gradient-to-br from-amber-200/5 via-yellow-200/5 to-orange-200/5 blur-[100px]"
        />

        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
            opacity: [0.04, 0.02, 0.04],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute bottom-1/4 right-1/4 w-[30vw] h-[30vw] rounded-full bg-gradient-to-tr from-orange-200/5 via-amber-200/5 to-yellow-200/5 blur-[80px]"
        />

        {/* Geometric Flare Elements */}
        <motion.div
          animate={{
            rotate: 360,
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 40,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-1/3 -right-32 w-64 h-64 border border-amber-400/10 rounded-full"
        />

        <motion.div
          animate={{
            rotate: -360,
            scale: [1.1, 1, 1.1],
          }}
          transition={{
            duration: 35,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute bottom-1/3 -left-32 w-64 h-64 border border-yellow-400/10 rounded-full"
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Hero Section with Elegant Typography */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto mb-24 text-center relative"
        >
          {/* Decorative Accents */}
          <motion.div
            animate={{
              rotate: 360,
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute -top-8 left-1/2 -translate-x-1/2 w-32 h-32 border border-amber-400/20 rounded-full"
          />

          <div className="relative">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3, type: "spring" }}
              className="absolute -top-6 right-1/4"
            >
              <Sparkles className="w-8 h-8 text-amber-400/60" />
            </motion.div>

            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.4, type: "spring" }}
              className="absolute -bottom-6 left-1/4"
            >
              <Star className="w-6 h-6 text-yellow-400/60" />
            </motion.div>

            <h1 className="text-6xl md:text-8xl font-bold mb-8 tracking-tight">
              About
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="inline-block bg-gradient-to-r from-amber-500 via-yellow-500 to-orange-400 bg-clip-text text-transparent ml-4"
              >
                .
              </motion.span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-3xl md:text-4xl text-text-secondary mb-8 leading-relaxed font-light"
            >
              Crafting digital experiences that are{" "}
              <span className="relative">
                <span className="bg-gradient-to-r from-amber-400 to-yellow-400 bg-clip-text text-transparent font-semibold">
                  meaningful
                </span>
                <motion.div
                  animate={{ width: ["0%", "100%", "0%"] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-amber-400 to-yellow-400"
                />
              </span>
              ,{" "}
              <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent font-semibold">
                impactful
              </span>
              , and truly{" "}
              <span className="bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent font-semibold">
                beautiful
              </span>
              .
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-lg text-text-secondary/80 max-w-2xl mx-auto leading-relaxed"
            >
              With over 7 years of transforming complex challenges into elegant
              solutions, I've collaborated with visionary startups and
              established industry leaders to create experiences that resonate
              deeply with users.
            </motion.p>
          </div>
        </motion.div>

        {/* Stats with Enhanced Animation */}
        {/* <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-24">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                delay: index * 0.1,
                type: "spring",
                stiffness: 100,
              }}
              whileHover={{
                y: -8,
                scale: 1.05,
                transition: { type: "spring", stiffness: 300 },
              }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-amber-400/10 via-yellow-400/10 to-orange-400/10 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500" />
              <div className="relative p-8 rounded-3xl bg-gradient-to-br from-amber-50/80 via-yellow-50/80 to-orange-50/80 dark:from-amber-900/20 dark:via-yellow-900/20 dark:to-orange-900/20 border border-amber-200/40 dark:border-amber-700/30 backdrop-blur-sm text-center overflow-hidden">
              
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-amber-400/0 via-yellow-400/0 to-orange-400/0"
                  whileHover={{
                    background: [
                      "linear-gradient(to bottom right, rgba(251, 191, 36, 0) 0%, rgba(250, 204, 21, 0) 0%, rgba(249, 115, 22, 0) 0%)",
                      "linear-gradient(to bottom right, rgba(251, 191, 36, 0.1) 0%, rgba(250, 204, 21, 0.1) 50%, rgba(249, 115, 22, 0.1) 100%)",
                    ],
                  }}
                  transition={{ duration: 0.3 }}
                />

               
                <motion.div
                  className="absolute inset-0 rounded-3xl pointer-events-none"
                  style={{
                    background:
                      "conic-gradient(from 0deg, transparent, rgba(251, 191, 36, 0.3), transparent)",
                  }}
                  animate={{ rotate: 360 }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                />
                <div className="absolute inset-[1px] rounded-3xl bg-gradient-to-br from-amber-50/80 via-yellow-50/80 to-orange-50/80 dark:from-amber-900/20 dark:via-yellow-900/20 dark:to-orange-900/20" />

                <div className="relative z-10">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                    className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-amber-400/20 to-yellow-400/20 mb-6"
                  >
                    <stat.icon className="w-8 h-8 text-amber-600 dark:text-amber-400" />
                  </motion.div>

                  <motion.div
                    initial={{ scale: 0.5 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: index * 0.1 + 0.3 }}
                    className="text-5xl font-bold mb-2 bg-gradient-to-r from-amber-600 to-yellow-600 dark:from-amber-400 dark:to-yellow-400 bg-clip-text text-transparent"
                  >
                    {stat.value}
                  </motion.div>

                  <div className="text-text-secondary font-medium tracking-wide">
                    {stat.label}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div> */}

        {/* Skills with Icon Integration */}
        <div className="grid lg:grid-cols-2 gap-16 mb-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 rounded-2xl bg-gradient-to-br from-amber-400/20 to-yellow-400/20">
                <Zap className="w-6 h-6 text-amber-600 dark:text-amber-400" />
              </div>
              <h2 className="text-4xl font-bold">Skills & Expertise</h2>
            </div>

            <div className="space-y-8">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ x: 5 }}
                  className="group"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <skill.icon className="w-5 h-5 text-amber-600 dark:text-amber-400 group-hover:scale-110 transition-transform" />
                      <span className="font-semibold text-lg">
                        {skill.name}
                      </span>
                    </div>
                    <motion.span
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: index * 0.05 + 0.5 }}
                      className="text-amber-600 dark:text-amber-400 font-bold text-xl"
                    >
                      {skill.level}%
                    </motion.span>
                  </div>
                  <div className="h-3 bg-gradient-to-r from-amber-100/50 to-yellow-100/50 dark:from-amber-900/20 dark:to-yellow-900/20 rounded-full overflow-hidden relative">
                    {/* Animated background effect */}
                    <motion.div
                      animate={{
                        backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                      }}
                      className="absolute inset-0 opacity-30"
                      style={{
                        background:
                          "linear-gradient(90deg, transparent, rgba(251, 191, 36, 0.3), transparent)",
                        backgroundSize: "200% 100%",
                      }}
                    />
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{
                        duration: 1.5,
                        delay: index * 0.1,
                        ease: "easeOut",
                      }}
                      className="h-full relative"
                    >
                      {/* Main gradient bar */}
                      <div className="absolute inset-0 bg-gradient-to-r from-amber-400 via-yellow-400 to-orange-400 rounded-full" />

                      {/* Shimmer effect */}
                      <motion.div
                        animate={{
                          x: ["-100%", "100%"],
                        }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          delay: index * 0.1,
                        }}
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent rounded-full"
                      />
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Tools Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 rounded-2xl bg-gradient-to-br from-amber-400/20 to-yellow-400/20">
                <Sparkles className="w-6 h-6 text-amber-600 dark:text-amber-400" />
              </div>
              <h2 className="text-4xl font-bold">Tools & Technologies</h2>
            </div>

            <div className="flex flex-wrap gap-4">
              {tools.map((tool, index) => (
                <motion.div
                  key={tool.name}
                  initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  transition={{
                    delay: index * 0.05,
                    type: "spring",
                    stiffness: 200,
                  }}
                  whileHover={{
                    scale: 1.1,
                    rotate: [0, -5, 5, -5, 0],
                    transition: { duration: 0.5 },
                  }}
                  className="relative group"
                >
                  {/* Glow effect */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${tool.color} rounded-2xl blur-lg group-hover:blur-xl transition-all duration-300`}
                  />

                  <div className="relative px-6 py-4 rounded-2xl bg-gradient-to-br from-white/90 to-amber-50/90 dark:from-gray-900/90 dark:to-amber-900/20 backdrop-blur-sm border border-amber-200/40 dark:border-amber-700/30 overflow-hidden">
                    {/* Hover shine effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "100%" }}
                      transition={{ duration: 0.6 }}
                    />

                    <span className="font-semibold text-text-primary relative z-10">
                      {tool.name}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Decorative Element */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              className="mt-12 w-full h-px bg-gradient-to-r from-transparent via-amber-400/30 to-transparent"
            />
          </motion.div>
        </div>

        {/* Philosophy Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, type: "spring" }}
          className="relative max-w-3xl mx-auto"
        >
          {/* Decorative circles */}
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute -top-6 -left-6 w-12 h-12 border border-amber-400/20 rounded-full"
          />
          <motion.div
            animate={{ scale: [1.1, 1, 1.1] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="absolute -bottom-6 -right-6 w-12 h-12 border border-yellow-400/20 rounded-full"
          />

          <div className="relative p-12 rounded-3xl bg-gradient-to-br from-amber-50/60 via-yellow-50/60 to-orange-50/60 dark:from-amber-900/10 dark:via-yellow-900/10 dark:to-orange-900/10 border border-amber-200/40 dark:border-amber-700/30 backdrop-blur-sm overflow-hidden">
            {/* Animated border gradient */}
            <motion.div
              className="absolute inset-0 rounded-3xl pointer-events-none"
              style={{
                background:
                  "conic-gradient(from 0deg, transparent, rgba(251, 191, 36, 0.2), rgba(250, 204, 21, 0.2), rgba(249, 115, 22, 0.2), transparent)",
              }}
              animate={{ rotate: 360 }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            />
            <div className="absolute inset-[2px] rounded-3xl bg-gradient-to-br from-amber-50/60 via-yellow-50/60 to-orange-50/60 dark:from-amber-900/10 dark:via-yellow-900/10 dark:to-orange-900/10" />

            <div className="relative z-10 text-center">
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="inline-flex items-center gap-2 mb-8"
              >
                <Heart className="w-6 h-6 text-amber-600 dark:text-amber-400" />
                <h2 className="text-4xl font-bold">Design Philosophy</h2>
                <Heart className="w-6 h-6 text-amber-600 dark:text-amber-400" />
              </motion.div>

              <motion.blockquote
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
                className="text-2xl md:text-3xl font-light leading-relaxed italic text-text-secondary mb-6"
              >
                "Good design is as little design as possible. Less, but better –
                because it concentrates on the essential aspects, and the
                products are not burdened with non-essentials. Back to purity,
                back to simplicity."
              </motion.blockquote>

              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ delay: 1, duration: 1.5 }}
                className="h-px bg-gradient-to-r from-transparent via-amber-400/50 to-transparent my-8"
              />

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
                className="text-text-secondary/70 text-lg"
              >
                Where every pixel has purpose and every interaction tells a
                story
              </motion.p>
            </div>
          </div>
        </motion.div>

        {/* Floating Decorative Elements */}
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="absolute bottom-10 right-10 w-4 h-4 rounded-full bg-gradient-to-r from-amber-400 to-yellow-400 opacity-30"
        />
        <motion.div
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
          className="absolute top-20 left-10 w-3 h-3 rounded-full bg-gradient-to-r from-orange-400 to-amber-400 opacity-30"
        />
      </div>
    </div>
  );
};

export default About;
