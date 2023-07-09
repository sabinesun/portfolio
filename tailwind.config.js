/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      blackish: "#2D2D2B",
      powder: "#F0E4D8",
      white: "#FFFFFF",
      "off-white": "#F6F5F0",
      supple: "#C39E9E",
      "faded-pink": "#F6F0F1",
    },
    extend: {
      keyframes: {
        wiggle: {
          "0%": { transform: "translateY(-0.5rem)" },
          "50%": { transform: "translateY(0rem)" },
          "100%": {
            transform: "translateY(0.5rem) rotate(45deg)",
            "transform-origin": "center",
          },
        },
        up: {
          "0%": { transform: "translateY(0.5rem)" },
          "50%": { transform: "translateY(0.25rem)" },
          "100%": { transform: "translateY(0) rotate(-45deg)" },
        },
        hidden: {
          "0%": { opacity: 1 },
          "50%": { opacity: 0 },
          "100%": { opacity: 0 },
        },
        backUp: {
          "0%": { transform: "translateY(0) rotate(45deg)" },
          "50%": { transform: "translateY(-0.25rem)" },
          "100%": { transform: "translateY-0.5rem)" },
        },
        backDown: {
          "0%": { transform: "translateY(0) rotate(-45deg)" },
          "50%": { transform: "translateY(0.25rem)" },
          "100%": { transform: "translateY0.5rem)" },
        },
      },
      animation: {
        wiggle: "wiggle 1s ease-in-out",
        up: "up 1s ease-in-out",
        hidden: "hidden 1s ease-in-out",
        backUp: "backUp 1s ease-in-out",
        backDown: "backDown 1s ease-in-out",
        "spin-slow": "spin 30s linear infinite",
      },
    },
  },
  plugins: [],
};
