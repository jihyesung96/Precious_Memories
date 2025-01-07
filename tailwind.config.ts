import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        sign: "#00264D",
        signHover: "#BFD5EB",
        login: "#CFD9DE",
      },
      backgroundImage: {
        "main-bg": "url('/images/color-1909977_1280.webp')",
      },
    },
  },
  plugins: [],
} satisfies Config;
