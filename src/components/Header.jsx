import { motion } from "framer-motion";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import useStore from "../store";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { theme, toggleTheme } = useStore();
  const isDark = theme === "dark";

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Work", path: "/work" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-stone-50/80 dark:bg-stone-950/80 backdrop-blur-md border-b border-yellow-400/20"
    >
      {/* Animated gradient line at top */}
      <motion.div
        animate={{
          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear",
        }}
        className="h-0.5 bg-gradient-to-r from-yellow-400 via-amber-500 to-orange-500 bg-[length:200%_100%]"
      />

      <div className="container mx-auto px-6 py-4 max-w-7xl">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="group">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="text-2xl font-bold tracking-tight"
            >
              <span className="bg-gradient-to-r from-yellow-500 via-amber-500 to-orange-500 bg-clip-text text-transparent">
                Fatima
              </span>
              <span className="text-stone-600 dark:text-stone-400 group-hover:text-yellow-500 dark:group-hover:text-yellow-400 transition-colors">
                .design
              </span>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link key={item.path} to={item.path} className="relative group">
                <motion.span
                  whileHover={{ y: -2 }}
                  className="text-stone-600 dark:text-stone-400 group-hover:text-stone-900 dark:group-hover:text-stone-50 transition-colors"
                >
                  {item.name}
                </motion.span>
                {location.pathname === item.path && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-yellow-500 to-amber-500 rounded-full"
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 30,
                    }}
                  />
                )}
                {location.pathname !== item.path && (
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-yellow-400/50 to-amber-400/50 rounded-full origin-left"
                  />
                )}
              </Link>
            ))}

            {/* Admin Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-4 py-2 bg-gradient-to-r from-yellow-400/10 to-amber-400/10 text-yellow-600 dark:text-yellow-400 rounded-full text-sm font-medium hover:from-yellow-400/20 hover:to-amber-400/20 transition-all border border-yellow-400/20"
            >
              Admin
            </motion.button>
          </nav>

          {/* Theme Toggle & Mobile Menu */}
          <div className="flex items-center space-x-4">
            {/* Theme Toggle */}
            <motion.button
              whileHover={{ scale: 1.1, rotate: 180 }}
              whileTap={{ scale: 0.9 }}
              onClick={toggleTheme}
              className="p-2 rounded-full bg-gradient-to-br from-yellow-400/20 to-amber-400/20 text-amber-600 dark:text-amber-400 hover:from-yellow-400/30 hover:to-amber-400/30 transition-all"
            >
              {isDark ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </motion.button>

            {/* Mobile Menu Button */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-full bg-gradient-to-br from-yellow-400/20 to-amber-400/20 text-amber-600 dark:text-amber-400"
            >
              {isMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          initial={false}
          animate={{
            height: isMenuOpen ? "auto" : 0,
            opacity: isMenuOpen ? 1 : 0,
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="md:hidden overflow-hidden"
        >
          <nav className="pt-4 pb-2 space-y-2">
            {navItems.map((item, index) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsMenuOpen(false)}
              >
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{
                    opacity: isMenuOpen ? 1 : 0,
                    x: isMenuOpen ? 0 : -20,
                  }}
                  transition={{ delay: index * 0.1 }}
                  className={`block w-full text-left px-4 py-3 rounded-xl transition-all ${
                    location.pathname === item.path
                      ? "bg-gradient-to-r from-yellow-400/20 to-amber-400/20 text-amber-700 dark:text-amber-300 font-medium"
                      : "text-stone-600 dark:text-stone-400 hover:bg-yellow-400/10"
                  }`}
                >
                  {item.name}
                </motion.div>
              </Link>
            ))}
            <motion.button
              initial={{ opacity: 0, x: -20 }}
              animate={{
                opacity: isMenuOpen ? 1 : 0,
                x: isMenuOpen ? 0 : -20,
              }}
              transition={{ delay: navItems.length * 0.1 }}
              className="block w-full text-left px-4 py-3 rounded-xl bg-gradient-to-r from-yellow-400/10 to-amber-400/10 text-yellow-600 dark:text-yellow-400 font-medium border border-yellow-400/20"
            >
              Admin
            </motion.button>
          </nav>
        </motion.div>
      </div>
    </motion.header>
  );
};

export default Header;
