import type { Config } from "tailwindcss";

/**
 * The visual identity is intentionally tiny: one dark theme, two typefaces,
 * hairline rules, and a restrained neutral palette. Everything else is
 * whitespace and photography. Keep this file small on purpose.
 */
const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#0c0b0a",
        fg: "#e8e6e1",
        ivory: "#f6f5f2",
        onyx: "#0c0b0a",
        line: "rgba(232,230,225,0.16)",
        muted: "rgba(232,230,225,0.5)",
        faint: "rgba(232,230,225,0.32)",
        ph1: "#1c1b18",
        ph2: "#151412",
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        label: "0.28em",
        wide: "0.2em",
      },
      maxWidth: {
        page: "1440px",
      },
      transitionTimingFunction: {
        editorial: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
