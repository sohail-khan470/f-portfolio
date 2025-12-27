import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { X, Upload, Image as ImageIcon, Trash2, Cloud } from "lucide-react";
import useStore from "../store";

const AdminProjectForm = ({ project, onClose }) => {
  const { addProject, updateProject } = useStore();
  const [loading, setLoading] = useState(false);
  const [imagePreview, setImagePreview] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const [errors, setErrors] = useState({});

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "Web Design",
    tags: "",
    link: "",
    client: "",
    year: new Date().getFullYear().toString(),
    role: "UI/UX Designer",
    challenge: "",
    solution: "",
    featured: false,
  });

  const categories = ["Web Design", "Mobile App", "Branding", "UI/UX", "Other"];
  const years = Array.from(
    { length: 10 },
    (_, i) => new Date().getFullYear() - i
  );

  useEffect(() => {
    if (project) {
      setFormData({
        title: project.title || "",
        description: project.description || "",
        category: project.category || "Web Design",
        tags: project.tags?.join(", ") || "",
        link: project.link || "",
        client: project.client || "",
        year: project.year || new Date().getFullYear().toString(),
        role: project.role || "UI/UX Designer",
        challenge: project.challenge || "",
        solution: project.solution || "",
        featured: project.featured || false,
      });
      setImagePreview(project.imageUrl || "");
    }
  }, [project]);

  const validateForm = () => {
    const newErrors = {};

    if (!formData.title.trim()) newErrors.title = "Title is required";
    if (!formData.description.trim())
      newErrors.description = "Description is required";
    if (formData.description.length > 500)
      newErrors.description = "Description too long (max 500 chars)";
    if (formData.link && !formData.link.startsWith("http")) {
      newErrors.link = "Link must start with http:// or https://";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Validate file type and size
      if (!file.type.startsWith("image/")) {
        setErrors({
          ...errors,
          image: "Please upload an image file (JPEG, PNG, etc.)",
        });
        return;
      }
      if (file.size > 10 * 1024 * 1024) {
        // 10MB limit (Cloudinary allows more)
        setErrors({ ...errors, image: "Image must be less than 10MB" });
        return;
      }

      setImageFile(file);
      setImagePreview(URL.createObjectURL(file));
      setErrors({ ...errors, image: "" });
    }
  };

  const removeImage = () => {
    setImageFile(null);
    setImagePreview("");
    setErrors({ ...errors, image: "" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setLoading(true);

    const projectData = {
      ...formData,
      tags: formData.tags
        .split(",")
        .map((tag) => tag.trim())
        .filter((tag) => tag),
      updatedAt: new Date().toISOString(),
    };

    try {
      if (project) {
        await updateProject(project.id, projectData, imageFile);
      } else {
        projectData.createdAt = new Date().toISOString();
        await addProject(projectData, imageFile);
      }
      onClose();
    } catch (error) {
      setErrors({
        ...errors,
        submit: error.message || "Failed to save project",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-bg-primary rounded-3xl shadow-2xl"
      >
        {/* Header */}
        <div className="sticky top-0 z-10 bg-bg-primary border-b border-accent/10 p-6">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-2xl font-bold">
                {project ? "Edit Project" : "Add New Project"}
              </h2>
              <div className="flex items-center gap-2 mt-1 text-sm text-text-secondary">
                <Cloud className="w-4 h-4" />
                <span>Images hosted on Cloudinary</span>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-bg-secondary rounded-xl transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-8">
          {/* Image Upload Section */}
          <div>
            <label className="block text-sm font-medium mb-3">
              Project Image *
              <span className="text-text-secondary text-sm font-normal ml-2">
                (Supports: JPEG, PNG, WebP. Max: 10MB)
              </span>
            </label>

            <div className="relative">
              {imagePreview ? (
                <div className="relative rounded-2xl overflow-hidden border-2 border-accent/20">
                  <img
                    src={imagePreview}
                    alt="Preview"
                    className="w-full h-64 object-cover"
                  />
                  <button
                    type="button"
                    onClick={removeImage}
                    className="absolute top-4 right-4 p-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                  <div className="absolute inset-0 bg-black/50 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center">
                    <label className="cursor-pointer">
                      <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full">
                        <Upload className="w-5 h-5" />
                        <span>Change Image</span>
                      </div>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageChange}
                        className="hidden"
                      />
                    </label>
                  </div>
                </div>
              ) : (
                <label className="block cursor-pointer">
                  <div className="flex flex-col items-center justify-center h-64 rounded-2xl border-2 border-dashed border-accent/30 hover:border-primary transition-colors bg-bg-secondary">
                    <div className="relative mb-4">
                      <ImageIcon className="w-12 h-12 text-accent" />
                      <Cloud className="w-6 h-6 text-primary absolute -top-2 -right-2" />
                    </div>
                    <span className="text-accent mb-2">
                      Click to upload image
                    </span>
                    <span className="text-sm text-text-secondary">
                      or drag and drop
                    </span>
                    <span className="text-xs text-text-secondary mt-2">
                      Will be uploaded to Cloudinary
                    </span>
                  </div>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    className="hidden"
                  />
                </label>
              )}
              {errors.image && (
                <p className="text-red-500 text-sm mt-2">{errors.image}</p>
              )}
              <div className="mt-2 flex items-center gap-2 text-sm text-text-secondary">
                <Cloud className="w-4 h-4" />
                <span>Images are automatically optimized by Cloudinary</span>
              </div>
            </div>
          </div>

          {/* Basic Information */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium mb-2">
                Project Title *
              </label>
              <input
                type="text"
                value={formData.title}
                onChange={(e) =>
                  setFormData({ ...formData, title: e.target.value })
                }
                className={`w-full px-4 py-3 rounded-xl border ${
                  errors.title ? "border-red-500" : "border-accent/20"
                } bg-bg-secondary focus:outline-none focus:ring-2 focus:ring-primary/50`}
                placeholder="Project Name"
              />
              {errors.title && (
                <p className="text-red-500 text-sm mt-2">{errors.title}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                Category *
              </label>
              <select
                value={formData.category}
                onChange={(e) =>
                  setFormData({ ...formData, category: e.target.value })
                }
                className="w-full px-4 py-3 rounded-xl border border-accent/20 bg-bg-secondary focus:outline-none focus:ring-2 focus:ring-primary/50"
              >
                {categories.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-medium mb-2">
              Description *
              <span className="text-text-secondary text-sm font-normal ml-2">
                ({formData.description.length}/500 characters)
              </span>
            </label>
            <textarea
              value={formData.description}
              onChange={(e) =>
                setFormData({ ...formData, description: e.target.value })
              }
              rows={4}
              className={`w-full px-4 py-3 rounded-xl border ${
                errors.description ? "border-red-500" : "border-accent/20"
              } bg-bg-secondary focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none`}
              placeholder="Describe the project, your role, and the outcomes..."
            />
            {errors.description && (
              <p className="text-red-500 text-sm mt-2">{errors.description}</p>
            )}
          </div>

          {/* Tags */}
          <div>
            <label className="block text-sm font-medium mb-2">
              Tags (comma separated)
            </label>
            <input
              type="text"
              value={formData.tags}
              onChange={(e) =>
                setFormData({ ...formData, tags: e.target.value })
              }
              className="w-full px-4 py-3 rounded-xl border border-accent/20 bg-bg-secondary focus:outline-none focus:ring-2 focus:ring-primary/50"
              placeholder="UI Design, UX Research, Mobile, Web..."
            />
          </div>

          {/* Additional Details */}
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <label className="block text-sm font-medium mb-2">
                Project Link
              </label>
              <input
                type="url"
                value={formData.link}
                onChange={(e) =>
                  setFormData({ ...formData, link: e.target.value })
                }
                className={`w-full px-4 py-3 rounded-xl border ${
                  errors.link ? "border-red-500" : "border-accent/20"
                } bg-bg-secondary focus:outline-none focus:ring-2 focus:ring-primary/50`}
                placeholder="https://example.com"
              />
              {errors.link && (
                <p className="text-red-500 text-sm mt-2">{errors.link}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                Client/Company
              </label>
              <input
                type="text"
                value={formData.client}
                onChange={(e) =>
                  setFormData({ ...formData, client: e.target.value })
                }
                className="w-full px-4 py-3 rounded-xl border border-accent/20 bg-bg-secondary focus:outline-none focus:ring-2 focus:ring-primary/50"
                placeholder="Client Name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Year</label>
              <select
                value={formData.year}
                onChange={(e) =>
                  setFormData({ ...formData, year: e.target.value })
                }
                className="w-full px-4 py-3 rounded-xl border border-accent/20 bg-bg-secondary focus:outline-none focus:ring-2 focus:ring-primary/50"
              >
                {years.map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Role */}
          <div>
            <label className="block text-sm font-medium mb-2">Your Role</label>
            <input
              type="text"
              value={formData.role}
              onChange={(e) =>
                setFormData({ ...formData, role: e.target.value })
              }
              className="w-full px-4 py-3 rounded-xl border border-accent/20 bg-bg-secondary focus:outline-none focus:ring-2 focus:ring-primary/50"
              placeholder="UI/UX Designer, Lead Designer, etc."
            />
          </div>

          {/* Challenge & Solution */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium mb-2">
                The Challenge
              </label>
              <textarea
                value={formData.challenge}
                onChange={(e) =>
                  setFormData({ ...formData, challenge: e.target.value })
                }
                rows={3}
                className="w-full px-4 py-3 rounded-xl border border-accent/20 bg-bg-secondary focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
                placeholder="What problem were you solving?"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                The Solution
              </label>
              <textarea
                value={formData.solution}
                onChange={(e) =>
                  setFormData({ ...formData, solution: e.target.value })
                }
                rows={3}
                className="w-full px-4 py-3 rounded-xl border border-accent/20 bg-bg-secondary focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
                placeholder="How did you solve it?"
              />
            </div>
          </div>

          {/* Featured Toggle */}
          <div className="flex items-center gap-3">
            <input
              type="checkbox"
              id="featured"
              checked={formData.featured}
              onChange={(e) =>
                setFormData({ ...formData, featured: e.target.checked })
              }
              className="w-5 h-5 rounded border-accent/20 bg-bg-secondary text-primary focus:ring-primary/50"
            />
            <label htmlFor="featured" className="text-sm">
              Mark as featured project (will appear first in portfolio)
            </label>
          </div>

          {/* Form Actions */}
          <div className="sticky bottom-0 bg-bg-primary border-t border-accent/10 -mx-6 px-6 py-4">
            <div className="flex justify-between items-center">
              <button
                type="button"
                onClick={onClose}
                className="px-6 py-3 rounded-xl hover:bg-bg-secondary transition-colors"
                disabled={loading}
              >
                Cancel
              </button>

              <div className="flex items-center gap-4">
                {errors.submit && (
                  <p className="text-red-500 text-sm">{errors.submit}</p>
                )}
                <motion.button
                  type="submit"
                  disabled={loading}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-8 py-3 bg-primary text-white rounded-xl font-medium hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <span className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      {project ? "Updating..." : "Creating..."}
                    </span>
                  ) : project ? (
                    "Update Project"
                  ) : (
                    "Create Project"
                  )}
                </motion.button>
              </div>
            </div>
          </div>
        </form>
      </motion.div>
    </motion.div>
  );
};

export default AdminProjectForm;
