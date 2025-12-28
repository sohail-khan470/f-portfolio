import { create } from "zustand";
import {
  getAuth,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { auth, db } from "../firebase/config";
import { uploadToCloudinary, deleteFromCloudinary } from "../utils/cloudinary";

const ADMIN_EMAILS = ["sohailturk470@gmail.com", "developer@studio.com"];

const useStore = create((set, get) => ({
  // Auth state
  user: null,
  isLoading: true,
  isAdmin: false,

  // Theme state
  theme: "light",

  // Projects state
  projects: [],

  // Auth actions
  initializeAuth: () => {
    onAuthStateChanged(auth, (user) => {
      const isAdmin = user && ADMIN_EMAILS.includes(user.email);
      set({
        user,
        isAdmin,
        isLoading: false,
      });
    });
  },

  login: async (email, password) => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const isAdmin = ADMIN_EMAILS.includes(userCredential.user.email);
      if (!isAdmin) {
        await signOut(auth);
        return {
          success: false,
          error: "Access denied. Admin privileges required.",
        };
      }
      set({ user: userCredential.user, isAdmin });
      return { success: true };
    } catch (error) {
      return { success: false, error: error.message };
    }
  },

  logout: async () => {
    await signOut(auth);
    set({ user: null, isAdmin: false });
  },

  // Theme actions
  toggleTheme: () => {
    set((state) => ({
      theme: state.theme === "light" ? "dark" : "light",
    }));
  },

  setTheme: (theme) => set({ theme }),

  // Projects actions
  fetchProjects: async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "projects"));
      const projects = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      // Sort by featured first, then by creation date
      projects.sort((a, b) => {
        if (a.featured && !b.featured) return -1;
        if (!a.featured && b.featured) return 1;
        return new Date(b.createdAt) - new Date(a.createdAt);
      });
      set({ projects });
    } catch (error) {
      console.error("Error fetching projects:", error);
    }
  },

  addProject: async (projectData, imageFile) => {
    try {
      // Upload image to Cloudinary if exists
      let imageUrl = "";
      if (imageFile) {
        imageUrl = await uploadToCloudinary(imageFile);
      }

      const project = {
        ...projectData,
        imageUrl,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      };

      const docRef = await addDoc(collection(db, "projects"), project);
      const newProject = { id: docRef.id, ...project };

      set((state) => ({
        projects: [newProject, ...state.projects],
      }));

      return { success: true, id: docRef.id };
    } catch (error) {
      return { success: false, error: error.message };
    }
  },

  updateProject: async (id, projectData, imageFile) => {
    try {
      let updates = { ...projectData, updatedAt: new Date().toISOString() };

      if (imageFile) {
        // Upload new image to Cloudinary
        updates.imageUrl = await uploadToCloudinary(imageFile);

        // Delete old image from Cloudinary if exists
        const oldProject = get().projects.find((p) => p.id === id);
        if (
          oldProject?.imageUrl &&
          oldProject.imageUrl.includes("cloudinary")
        ) {
          await deleteFromCloudinary(oldProject.imageUrl);
        }
      }

      await updateDoc(doc(db, "projects", id), updates);

      set((state) => ({
        projects: state.projects.map((project) =>
          project.id === id ? { ...project, ...updates } : project
        ),
      }));

      return { success: true };
    } catch (error) {
      return { success: false, error: error.message };
    }
  },

  deleteProject: async (id) => {
    try {
      const project = get().projects.find((p) => p.id === id);

      // Delete image from Cloudinary if exists
      if (project?.imageUrl && project.imageUrl.includes("cloudinary")) {
        await deleteFromCloudinary(project.imageUrl);
      }

      // Delete from Firestore
      await deleteDoc(doc(db, "projects", id));

      set((state) => ({
        projects: state.projects.filter((project) => project.id !== id),
      }));

      return { success: true };
    } catch (error) {
      return { success: false, error: error.message };
    }
  },
}));

export default useStore;
