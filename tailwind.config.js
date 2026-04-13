module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./Components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      colors: {
        accent: {
          DEFAULT: "#38bdf8",
          dim: "#0ea5e9",
        },
      },
      backgroundImage: {
        "hero-gradient": "radial-gradient(ellipse at top left, #0f172a 0%, #000000 60%)",
        "hero-gradient-light": "radial-gradient(ellipse at top left, #e0f2fe 0%, #f8fafc 60%)",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
