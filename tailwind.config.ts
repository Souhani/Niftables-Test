import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        MonumentExtended_R: ['MonumentExtended-Regular', 'serif'],
        Satoshi_B: ['Satoshi-Bold', 'serif'],
        Satoshi_M: ['Satoshi-Medium', 'serif'],
        Satoshi_R: ['Satoshi-Regular', 'serif'],
       },
      screens: {
        "1000px": "1000px",
        "1100px": "1100px",
        "1200px": "1200px",
        "1300px": "1300px",
        "1500px": "1500px",
        "1800px": "1800px",
        "1900px": "1900px",
        "800px": "800px",
        "400px": "400px",
      }

    },
  },
  plugins: [],
};
export default config;
