// stores/projectStore.js
import { create } from "zustand";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  query,
  orderBy,
} from "firebase/firestore";
import { db } from "../config/firebase";

export const useProjects = create((set, get) => ({
  projects: [],
  loading: false,
  error: null,

  fetchProjects: async () => {
    set({ loading: true, error: null });
    try {
      const projectsRef = collection(db, "projects");
      const q = query(projectsRef, orderBy("order", "asc"));
      const snapshot = await getDocs(q);
      const projects = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      set({ projects, loading: false });
    } catch (error) {
      set({ error: error.message, loading: false });
    }
  },

  addProject: async (project) => {
    try {
      const docRef = await addDoc(collection(db, "projects"), {
        ...project,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      });
      set((state) => ({
        projects: [...state.projects, { id: docRef.id, ...project }],
      }));
      return docRef.id;
    } catch (error) {
      set({ error: error.message });
      throw error;
    }
  },

  updateProject: async (id, updates) => {
    try {
      const projectRef = doc(db, "projects", id);
      await updateDoc(projectRef, {
        ...updates,
        updatedAt: new Date().toISOString(),
      });
      set((state) => ({
        projects: state.projects.map((p) =>
          p.id === id ? { ...p, ...updates } : p
        ),
      }));
    } catch (error) {
      set({ error: error.message });
      throw error;
    }
  },

  deleteProject: async (id) => {
    try {
      await deleteDoc(doc(db, "projects", id));
      set((state) => ({
        projects: state.projects.filter((p) => p.id !== id),
      }));
    } catch (error) {
      set({ error: error.message });
      throw error;
    }
  },
}));
