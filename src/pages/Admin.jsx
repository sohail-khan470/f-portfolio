import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Plus,
  LogOut,
  Edit,
  Trash2,
  Image as ImageIcon,
  Cloud,
} from "lucide-react";
import useStore from "../store";
import AdminProjectForm from "../components/AdminProjectForm";
import LoadingSpinner from "../components/LoadingSpinner";

const Admin = () => {
  const { projects, deleteProject, logout, user, fetchProjects } = useStore();
  const [showForm, setShowForm] = useState(false);
  const [editingProject, setEditingProject] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      await fetchProjects();
      setLoading(false);
    };
    loadData();
  }, []);

  const handleEdit = (project) => {
    setEditingProject(project);
    setShowForm(true);
  };

  const handleDelete = async (id) => {
    if (
      window.confirm(
        "Are you sure you want to delete this project? This action cannot be undone."
      )
    ) {
      await deleteProject(id);
    }
  };

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="pt-24 pb-20">
      <div className="container mx-auto px-6">
        {/* Admin Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-10"
        >
          <div>
            <h1 className="text-4xl font-bold mb-2">Admin Dashboard</h1>
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
              <p className="text-text-secondary">
                Welcome,{" "}
                <span className="text-primary font-medium">{user?.email}</span>
              </p>
              <div className="flex items-center gap-1 text-sm text-text-secondary">
                <Cloud className="w-4 h-4" />
                <span>Cloudinary Active</span>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                setEditingProject(null);
                setShowForm(true);
              }}
              className="flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-full font-medium hover:bg-primary/90 transition-colors"
            >
              <Plus className="w-5 h-5" />
              Add Project
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={logout}
              className="flex items-center gap-2 px-6 py-3 border-2 border-primary text-primary rounded-full font-medium hover:bg-primary/10 transition-colors"
            >
              <LogOut className="w-5 h-5" />
              Logout
            </motion.button>
          </div>
        </motion.div>

        {/* Stats Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10"
        >
          <div className="p-6 rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10">
            <div className="text-3xl font-bold mb-2">{projects.length}</div>
            <div className="text-text-secondary">Total Projects</div>
          </div>

          <div className="p-6 rounded-2xl bg-gradient-to-br from-secondary/10 to-accent/10">
            <div className="text-3xl font-bold mb-2">
              {projects.filter((p) => p.category === "Web Design").length}
            </div>
            <div className="text-text-secondary">Web Design</div>
          </div>

          <div className="p-6 rounded-2xl bg-gradient-to-br from-accent/10 to-primary/10">
            <div className="text-3xl font-bold mb-2">
              {projects.filter((p) => p.featured).length}
            </div>
            <div className="text-text-secondary">Featured</div>
          </div>

          <div className="p-6 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10">
            <div className="flex items-center justify-center">
              <Cloud className="w-8 h-8 text-primary" />
            </div>
            <div className="text-text-secondary mt-2">Cloud Images</div>
          </div>
        </motion.div>

        {/* Projects List */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">Projects ({projects.length})</h2>
            <div className="text-sm text-text-secondary">
              Images hosted on Cloudinary
            </div>
          </div>

          {projects.length === 0 ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-16 rounded-2xl bg-bg-secondary"
            >
              <div className="text-6xl mb-6">📁</div>
              <h3 className="text-2xl font-semibold mb-3">No projects yet</h3>
              <p className="text-text-secondary mb-8 max-w-md mx-auto">
                Start by adding your first project. Images will be automatically
                uploaded to Cloudinary.
              </p>
              <button
                onClick={() => setShowForm(true)}
                className="px-8 py-3 bg-primary text-white rounded-full font-medium hover:bg-primary/90 transition-colors"
              >
                Create Your First Project
              </button>
            </motion.div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="group relative overflow-hidden rounded-2xl bg-bg-secondary"
                >
                  {/* Project Image */}
                  <div className="relative h-48 overflow-hidden bg-gradient-to-br from-primary/10 to-secondary/10">
                    {project.imageUrl ? (
                      <>
                        <img
                          src={project.imageUrl}
                          alt={project.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute top-2 right-2">
                          <div className="flex items-center gap-1 px-2 py-1 bg-black/50 backdrop-blur-sm rounded-full">
                            <Cloud className="w-3 h-3 text-white" />
                          </div>
                        </div>
                      </>
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <ImageIcon className="w-12 h-12 text-accent" />
                      </div>
                    )}

                    {/* Overlay with Actions */}
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                      <button
                        onClick={() => handleEdit(project)}
                        className="p-3 bg-white rounded-full hover:bg-primary hover:text-white transition-colors"
                      >
                        <Edit className="w-5 h-5" />
                      </button>
                      <button
                        onClick={() => handleDelete(project.id)}
                        className="p-3 bg-white rounded-full hover:bg-red-500 hover:text-white transition-colors"
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </div>
                  </div>

                  {/* Project Info */}
                  <div className="p-5">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="font-semibold text-lg truncate">
                        {project.title}
                      </h3>
                      <div className="flex flex-col items-end gap-1">
                        {project.featured && (
                          <span className="text-xs px-2 py-1 bg-primary text-white rounded-full">
                            Featured
                          </span>
                        )}
                        <span className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-full">
                          {project.category}
                        </span>
                      </div>
                    </div>

                    <p className="text-text-secondary text-sm mb-4 line-clamp-2">
                      {project.description}
                    </p>

                    <div className="flex items-center justify-between text-sm">
                      <span className="text-text-secondary">
                        {project.year}
                      </span>
                      <span className="text-primary font-medium">
                        {project.client || "Personal Project"}
                      </span>
                    </div>
                  </div>

                  {/* Quick Actions Bar */}
                  <div className="px-5 pb-5">
                    <div className="flex gap-2">
                      <button
                        onClick={() => handleEdit(project)}
                        className="flex-1 text-center py-2 text-sm bg-bg-primary rounded-lg hover:bg-primary hover:text-white transition-colors"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(project.id)}
                        className="flex-1 text-center py-2 text-sm bg-bg-primary text-red-500 rounded-lg hover:bg-red-500 hover:text-white transition-colors"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>

        {/* Instructions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="rounded-2xl bg-gradient-to-r from-primary/5 to-secondary/5 border border-accent/10 p-8"
        >
          <div className="flex items-center gap-3 mb-4">
            <Cloud className="w-6 h-6 text-primary" />
            <h3 className="text-xl font-semibold">Cloudinary Image Hosting</h3>
          </div>
          <ul className="grid md:grid-cols-2 gap-4">
            <li className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center text-sm font-bold">
                1
              </div>
              <span className="text-text-secondary">
                Images auto-optimized for web
              </span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center text-sm font-bold">
                2
              </div>
              <span className="text-text-secondary">
                Supports JPG, PNG, WebP (max 10MB)
              </span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center text-sm font-bold">
                3
              </div>
              <span className="text-text-secondary">
                Automatic CDN delivery
              </span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center text-sm font-bold">
                4
              </div>
              <span className="text-text-secondary">
                Deleted images are removed from Cloudinary
              </span>
            </li>
          </ul>
        </motion.div>
      </div>

      {/* Project Form Modal */}
      {showForm && (
        <AdminProjectForm
          project={editingProject}
          onClose={() => {
            setShowForm(false);
            setEditingProject(null);
          }}
        />
      )}
    </div>
  );
};

export default Admin;
