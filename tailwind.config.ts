import { type Config } from "tailwindcss";

const config = {
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./features/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  darkMode: ["class"],
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  plugins: [require("tailwindcss-animate")],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        spark: "spark 2s linear infinite",
        spark1: "spark1 2s linear infinite",
        spark2: "spark2 2s linear infinite",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        background: "hsl(var(--background))",
        border: "hsl(var(--border))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        foreground: "hsl(var(--foreground))",
        input: "hsl(var(--input))",
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        ring: "hsl(var(--ring))",
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        spark: {
          "0%": { opacity: "0", transform: "rotate(0deg) scale(0)" },
          "25%": { opacity: "1", transform: "rotate(180deg) scale(1)" },
          "100%": { opacity: "0", transform: "rotate(360deg) scale(0)" },
        },
        spark1: {
          "0%": {
            opacity: "0",
            transform: "rotate(0deg) scale(0)",
          },
          "50%": { opacity: "1", transform: "rotate(180deg) scale(1)" },
          "100%": { opacity: "0", transform: "rotate(360deg) scale(0)" },
        },
        spark2: {
          "0%": {
            opacity: "0",
            transform: "rotate(0deg) scale(0)",
          },
          "75%": { opacity: "1", transform: "rotate(180deg) scale(1)" },
          "100%": { opacity: "0", transform: "rotate(360deg) scale(0)" },
        },
      },
    },
  },
} satisfies Config;

export default config;
