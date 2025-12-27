import { motion } from "framer-motion";
import useStore from "../store";
import { Sun, Moon } from "lucide-react";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useStore();

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={toggleTheme}
      className="relative w-12 h-6 rounded-full bg-bg-secondary border border-accent/20 p-1 focus:outline-none focus:ring-2 focus:ring-primary/50"
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
    >
      <motion.div
        className="absolute top-1/2 left-1 -translate-y-1/2"
        animate={{ x: theme === "light" ? 0 : 24 }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
      >
        <div className="w-4 h-4 rounded-full bg-primary flex items-center justify-center">
          {theme === "light" ? (
            <Sun className="w-2.5 h-2.5 text-white" />
          ) : (
            <Moon className="w-2.5 h-2.5 text-white" />
          )}
        </div>
      </motion.div>
    </motion.button>
  );
};

export default ThemeToggle;
