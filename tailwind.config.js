/** @type {import('tailwindcss').Config} */
const themeClass = {
  darkMode: "class", // 🛑 This is what enables Zustand control
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};

export default themeClass;
