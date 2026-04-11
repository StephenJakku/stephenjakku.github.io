module.exports = {
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
          DEFAULT: "#38bdf8", // sky-400
          dim: "#0ea5e9",     // sky-500
        },
      },
      backgroundImage: {
        "hero-gradient": "radial-gradient(ellipse at top left, #0f172a 0%, #000000 60%)",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
