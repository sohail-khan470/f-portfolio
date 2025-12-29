import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const ProjectCard = ({ project, index, onClick }) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      onClick={onClick}
      className="group cursor-pointer h-full flex flex-col"
    >
      <div className="relative overflow-hidden rounded-2xl mb-4 aspect-4/3 bg-gradient-to-br from-amber-50/60 via-yellow-50/60 to-orange-50/60 dark:from-amber-900/10 dark:via-yellow-900/10 dark:to-orange-900/10 border border-amber-200/35 dark:border-amber-700/25">
        {project.imageUrl ? (
          <img
            src={project.imageUrl}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <span className="text-text-secondary">{project.title}</span>
          </div>
        )}

        <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
          <ExternalLink className="w-6 h-6 text-white ml-auto" />
        </div>
      </div>

      <div className="px-2">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-xl font-semibold group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
            {project.title}
          </h3>
          <span className="text-sm text-amber-700 dark:text-amber-300 bg-amber-100/60 dark:bg-amber-900/20 px-3 py-1 rounded-full border border-amber-200/35 dark:border-amber-700/25">
            {project.category}
          </span>
        </div>

        <p className="text-text-secondary line-clamp-2">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mt-3">
          {project.tags?.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="text-xs text-amber-700 dark:text-amber-300 bg-amber-50/60 dark:bg-amber-900/10 px-2 py-1 rounded border border-amber-200/35 dark:border-amber-700/25"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
};

export default ProjectCard;
