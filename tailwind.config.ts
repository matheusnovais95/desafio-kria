import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#C8392D",
        secundary: "#FFF6F6",
        tertiary: "#373636",
        error: "#ef4444",
      },
    },
  },
  plugins: [],
};
export default config;

