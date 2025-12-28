import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import useStore from "../store";
import ThemeToggle from "./ThemeToggle";

const Header = () => {
  const location = useLocation();
  const { user, isAdmin } = useStore();

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/work", label: "Work" },
    { path: "/about", label: "About" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-bg-primary/80 backdrop-blur-md border-b border-accent/10"
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="group">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-2xl font-bold tracking-tight"
            >
              <span className="text-primary">Fatima</span>
              <span className="text-accent group-hover:text-primary transition-colors">
                .design
              </span>
            </motion.div>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link key={item.path} to={item.path} className="relative group">
                <span className="text-text-secondary group-hover:text-text-primary transition-colors">
                  {item.label}
                </span>
                {location.pathname === item.path && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary"
                  />
                )}
              </Link>
            ))}

            {isAdmin && (
              <Link
                to="/admin"
                className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium hover:bg-primary/20 transition-colors"
              >
                Admin
              </Link>
            )}

            {!user && location.pathname !== "/login" && (
              <Link
                to="/login"
                className="text-sm text-text-secondary hover:text-text-primary transition-colors"
              >
                Login
              </Link>
            )}
          </nav>

          <div className="flex items-center space-x-4">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
