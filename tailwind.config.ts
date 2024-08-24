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
        poppins: ["var(--font-sans)", "sans-serif"],
      },
      colors: {
        white: {
          1: "#F9FAFB",
        },
        grey: {
          1: "#DDDEDF",
          2: "#CCCCCC",
          3: "#F3F4F6",
          4: "#F3F4F5",
          5: "#828282",
        },
        slate: {
          1: "#111827",
          2: "#1F2937",
          3: "#333333",
          4: "#374151",
        },
        linear: {},
      },
    },
  },
  plugins: [],
};
export default config;
