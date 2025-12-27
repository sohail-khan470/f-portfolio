import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, Calendar, User, Briefcase } from "lucide-react";

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, y: 20 }}
          animate={{ scale: 1, y: 0 }}
          exit={{ scale: 0.9, y: 20 }}
          onClick={(e) => e.stopPropagation()}
          className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-bg-primary rounded-3xl"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 p-2 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-colors"
          >
            <X className="w-5 h-5 text-white" />
          </button>

          {/* Hero Image */}
          {project.imageUrl && (
            <div className="relative h-64 md:h-96">
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>
          )}

          {/* Content */}
          <div className="p-6 md:p-10">
            <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
              <div>
                <span className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-3">
                  {project.category}
                </span>
                <h2 className="text-3xl md:text-4xl font-bold">
                  {project.title}
                </h2>
              </div>

              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-full hover:bg-primary/90 transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  View Live Project
                </a>
              )}
            </div>

            {/* Project Meta */}
            <div className="grid md:grid-cols-3 gap-4 mb-8">
              {project.client && (
                <div className="flex items-center gap-3 p-3 rounded-xl bg-bg-secondary">
                  <Briefcase className="w-5 h-5 text-primary" />
                  <div>
                    <div className="text-sm text-text-secondary">Client</div>
                    <div className="font-medium">{project.client}</div>
                  </div>
                </div>
              )}

              {project.year && (
                <div className="flex items-center gap-3 p-3 rounded-xl bg-bg-secondary">
                  <Calendar className="w-5 h-5 text-primary" />
                  <div>
                    <div className="text-sm text-text-secondary">Year</div>
                    <div className="font-medium">{project.year}</div>
                  </div>
                </div>
              )}

              {project.role && (
                <div className="flex items-center gap-3 p-3 rounded-xl bg-bg-secondary">
                  <User className="w-5 h-5 text-primary" />
                  <div>
                    <div className="text-sm text-text-secondary">Role</div>
                    <div className="font-medium">{project.role}</div>
                  </div>
                </div>
              )}
            </div>

            {/* Description */}
            <div className="prose prose-lg max-w-none mb-8">
              <p className="text-text-secondary text-lg leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* Tags */}
            {project.tags && project.tags.length > 0 && (
              <div className="mb-8">
                <h3 className="text-lg font-semibold mb-3">
                  Technologies & Tools
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-bg-secondary text-text-secondary rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Challenge & Solution */}
            {(project.challenge || project.solution) && (
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                {project.challenge && (
                  <div>
                    <h3 className="text-xl font-semibold mb-4">
                      The Challenge
                    </h3>
                    <p className="text-text-secondary">{project.challenge}</p>
                  </div>
                )}

                {project.solution && (
                  <div>
                    <h3 className="text-xl font-semibold mb-4">The Solution</h3>
                    <p className="text-text-secondary">{project.solution}</p>
                  </div>
                )}
              </div>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ProjectModal;
