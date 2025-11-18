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
        brand: {
          ink: "#1F2933",      // Deep blue-grey for headings, primary text
          slate: "#4B5563",    // Secondary text, subheadings
          teal: "#0F766E",     // Primary accent (ONLY accent color)
          'teal-dark': "#115E59",  // Teal hover/darker state
          'teal-soft': "#CCF0EC",  // Teal tint for badges/chips
          border: "#D7DCE5",   // Soft blue-grey for borders
        },
        page: {
          bg: "#F5F5F7",       // Page background (warm light grey)
        },
        neutral: {
          50: "#F9FAFB",
          100: "#F3F4F6",
          200: "#E5E7EB",
          300: "#D1D5DB",
          400: "#9CA3AF",
          500: "#6B7280",
          600: "#4B5563",
          700: "#374151",
          800: "#1F2937",
          900: "#111827",
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;
