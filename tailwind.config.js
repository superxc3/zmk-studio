/** @type {import('tailwindcss').Config} */
import trac from "tailwindcss-react-aria-components";
import contQueries from "@tailwindcss/container-queries";

export default {
  content: ["./index.html", "./download.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontSize: {
      xs: "0.4rem",
    },
    extend: {
      fontFamily: {
        sans: ["Inter", "system-ui"],
      },
      colors: {
        // CUSTOM: Changed to vibrant cyan/blue for visibility!
        primary:
          "light-dark(oklch(55% 0.25 210), oklch(70% 0.20 210))",
        "primary-content":
          "light-dark(white, oklch(0.13138 0.0392 210))",
        // CUSTOM: Changed to orange for contrast
        secondary:
          "light-dark(oklch(70% 0.25 40), oklch(75% 0.22 40))",
        accent:
          "light-dark(oklch(76.76% 0.184 183.61), oklch(74.51% 0.167 183.61))",
        "base-content": "light-dark(#1f2937, #A6ADBB)",
        "base-100": "light-dark(oklch(100% 0 0), #1d232a)",
        "base-200": "light-dark(#F2F2F2, #191e24)",
        "base-300": "light-dark(#E5E6E6, #15191e)",
      },
    },

    fontFamily: {
      keycap: ["Inter", "system-ui"],
    },
  },
  plugins: [contQueries, trac({ prefix: "rac" })],
};
