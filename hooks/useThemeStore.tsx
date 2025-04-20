"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";

type ThemeState = {
  mode: "light" | "dark"; // mode can be either light or dark
  toggleMode: () => void; // function to toggle the mode
};

export const useThemeStore = create<ThemeState>()(
  persist(
    (set) => ({
      mode: "light",
      toggleMode: () => {
        return set((state) => ({
          mode: state.mode === "light" ? "dark" : "light",
        }));
      },
    }),
    {
      name: "theme-storage",
    },
  ),
);
