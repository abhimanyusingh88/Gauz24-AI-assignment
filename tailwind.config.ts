import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",        // Scans your app folder
    "./components/**/*.{js,ts,jsx,tsx,mdx}", // Scans your components folder
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
export default config;