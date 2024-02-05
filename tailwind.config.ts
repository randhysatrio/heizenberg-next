import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        "rubik-thin": ["var(--font-rubik-thin)"],
        rubik: ["var(--font-rubik)"],
        "rubik-bold": ["var(--font-rubik-bold)"],
        "rubik-extrabold": ["var(--font-rubik-extrabold)"],
      },
      backgroundColor: {
        "hzn-gray-1": "#d1dbe4",
        "hzn-blue-1": "#a3b7ca",
        "hzn-blue-2": "#7593af",
        "hzn-blue-3": "#476f95",
        "hzn-blue-4": "#194a7a",
      },
      gradientColorStops: {
        "hzn-gray-1": "#d1dbe4",
        "hzn-blue-1": "#a3b7ca",
        "hzn-blue-2": "#7593af",
        "hzn-blue-3": "#476f95",
        "hzn-blue-4": "#194a7a",
      },
    },
  },
  plugins: [],
};
export default config;
