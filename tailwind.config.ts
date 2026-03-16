import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        sunset: {
          50: "#fffde7",
          100: "#fff9c4",
          200: "#fff176",
          300: "#ffe54f",
          400: "#ffd54f",
          500: "#ffb300",
          600: "#ff9800",
          700: "#f57c00",
          800: "#ef6c00",
          900: "#e65100",
        },
        warm: {
          cream: "#fff8e1",
          gray: "#3e2723",
          stone: "#5d4037",
        },
        sunrise: "#ffb800",

        cream: "#fff7e6",

        earth: "#4b3a2a",
        charcoal: "#2f2a24",
 
        "sage-dark": "#5e6f5f",
  
        gold: "#ffd56a",

        linearGradientToRight: "linear-gradient(to right, #ffb800, #ff710d)",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "Georgia", "serif"],
        display: ["var(--font-display)", "Georgia", "serif"],
      },
    },
  },
  plugins: [],
};

export default config;
