import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#003A70",
        marine: "#0067B4",
        steel: "#008ED0",
        sky: "#00CCD6",
        mist: "#F2FAFC",
        panel: "#E9F8FB",
        line: "#D8ECF3",
        muted: "#4D789F",
        quiet: "#84A9C4",
        ember: "#EA7B1F",
        amber: "#F39A3D",
      },
      fontFamily: {
        sans: ["var(--font-dm-sans)", "system-ui", "sans-serif"],
        serif: ["var(--font-dm-serif)", "Georgia", "serif"],
      },
      boxShadow: {
        soft: "0 18px 55px rgba(12, 45, 90, 0.1)",
        card: "0 14px 35px rgba(12, 45, 90, 0.08)",
      },
      backgroundImage: {
        "blue-depth": "linear-gradient(135deg, #003A70, #0067B4 62%, #00CCD6)",
        "blue-flow": "linear-gradient(160deg, #0067B4, #00CCD6)",
        "orange-flow": "linear-gradient(135deg, #EA7B1F, #F39A3D)",
      },
    },
  },
  plugins: [],
};

export default config;
