import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        lightOrange: "#FE6E44",
        white: "#white",
        black: "#black",
        lightgrey: "#lightgrey",
        orange: "#orange",
        brown: "#brown",


      },
    },
  },
  plugins: [],
};
export default config;
