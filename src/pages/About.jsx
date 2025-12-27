import { motion } from "framer-motion";
import { Award, Users, Clock, Heart } from "lucide-react";

const skills = [
  { name: "UI/UX Design", level: 95 },
  { name: "Product Strategy", level: 90 },
  { name: "User Research", level: 85 },
  { name: "Prototyping", level: 95 },
  { name: "Design Systems", level: 88 },
  { name: "Frontend Dev", level: 75 },
];

const tools = [
  "Figma",
  "Sketch",
  "Adobe Creative Suite",
  "Framer",
  "Webflow",
  "React",
  "Tailwind CSS",
];

const stats = [
  { icon: Award, label: "Projects", value: "50+" },
  { icon: Users, label: "Happy Clients", value: "30+" },
  { icon: Clock, label: "Years Experience", value: "7" },
  { icon: Heart, label: "Design Iterations", value: "∞" },
];

const About = () => {
  return (
    <div className="pt-24 pb-20">
      <div className="container mx-auto px-6">
        {/* Hero Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              About<span className="text-primary">.</span>
            </h1>
            <p className="text-2xl text-text-secondary mb-8">
              I believe in creating digital experiences that are not just
              beautiful, but meaningful and impactful.
            </p>
            <p className="text-text-secondary mb-8">
              With over 7 years in the industry, I've had the privilege of
              working with startups and established companies to transform
              complex problems into simple, elegant solutions.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-square rounded-3xl overflow-hidden bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20" />
          </motion.div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="text-center p-6 rounded-2xl bg-bg-secondary"
            >
              <stat.icon className="w-8 h-8 text-primary mx-auto mb-4" />
              <div className="text-3xl font-bold mb-2">{stat.value}</div>
              <div className="text-text-secondary">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Skills */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          <div>
            <h2 className="text-3xl font-bold mb-8">Skills & Expertise</h2>
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-primary">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-bg-secondary rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                      className="h-full bg-gradient-to-r from-primary to-secondary rounded-full"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-8">Tools & Technologies</h2>
            <div className="flex flex-wrap gap-3">
              {tools.map((tool, index) => (
                <motion.span
                  key={tool}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ scale: 1.05 }}
                  className="px-4 py-2 bg-bg-secondary text-text-primary rounded-full hover:bg-primary/10 hover:text-primary transition-colors"
                >
                  {tool}
                </motion.span>
              ))}
            </div>
          </div>
        </div>

        {/* Philosophy */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl font-bold mb-6">Design Philosophy</h2>
          <p className="text-xl text-text-secondary">
            "Good design is as little design as possible. Less, but better –
            because it concentrates on the essential aspects, and the products
            are not burdened with non-essentials. Back to purity, back to
            simplicity."
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
