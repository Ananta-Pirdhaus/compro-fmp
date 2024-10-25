/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Raleway", "sans-serif"],
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
      animation: {
        marquee: "marquee 20s linear infinite",
      },
      colors: {
        transparent: "transparent",
        white: "#FFFFFF",

        "green-50": "#E6F7E2",
        "green-100": "#C0E8A0",
        "green-200": "#9AD06E",
        "green-300": "#74B23C",
        "green-400": "#5D9D29",
        "green-500": "#81C912", // Primary Green
        "green-600": "#6DAE0E",
        "green-700": "#589C0A",
        "green-800": "#458A07",
        "green-900": "#2D6D04",

        // Neutral Colors
        "neutral-light": "#F5F5F5", // Light gray for backgrounds
        "neutral-dark": "#333333", // Dark gray for text and accents

        // Accent Colors
        "gold-50": "#FFF8E1",
        "gold-100": "#FFECB3",
        "gold-200": "#FFE082",
        "gold-300": "#FFD54F",
        "gold-400": "#FFCA28",
        "gold-500": "#FFC107", // Accent Gold
        "gold-600": "#FFB300",
        "gold-700": "#FFA000",
        "gold-800": "#FF8F00",
        "gold-900": "#FF6F00",
        // Purple colors
        "purple-20": "#F3E5F5",
        "purple-30": "#E1BEE7",
        "purple-40": "#CE93D8",
        "purple-50": "#BA68C8",
        "purple-60": "#AB47BC",
        "purple-70": "#9C27B0",
        "purple-80": "#8E24AA",
        "purple-90": "#7B1FA2",
        "purple-100": "#6A1B9A",
        "purple-200": "#4A148C",
        "purple-300": "#38006B",
        "purple-400": "#29005D",
        "purple-500": "#1D004D",
        "purple-600": "#0F0035",
        "purple-700": "#080021",
        "purple-800": "#060018",
        "purple-900": "#03000E",
        "purple-gradient": "linear-gradient(90deg, #E1BEE7, #4A148C)",
        // Yellow colors
        "yellow-20": "#FFFDE7",
        "yellow-30": "#FFF9C4",
        "yellow-40": "#FFF59D",
        "yellow-50": "#FFF176",
        "yellow-60": "#FFEE58",
        "yellow-70": "#FFEB3B",
        "yellow-80": "#FDD835",
        "yellow-90": "#FBC02D",
        "yellow-100": "#F9A825",
        "yellow-200": "#F57F17",
        "yellow-300": "#F57F00",
        "yellow-400": "#F9A825",
        "yellow-500": "#FF8F00",
        "yellow-600": "#FF6F00",
        "yellow-700": "#FF5722",
        "yellow-800": "#FF3D00",
        "yellow-900": "#FF3D00",
      },
    },
    daisyui: {
      themes: ["light"],
    },
  },
  plugins: [require("daisyui", require("@tailwindcss/typography"))],
};
