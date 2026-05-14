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
        ink: "#0C2D5A",
        marine: "#154FA0",
        steel: "#3C7AA7",
        sky: "#499DE8",
        mist: "#F5F8FC",
        panel: "#EEF2F7",
        line: "#E0E8F0",
        muted: "#6B89A8",
        quiet: "#94ADBE",
        ember: "#D97A3E",
        amber: "#E8893A",
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
        "blue-depth": "linear-gradient(135deg, #062E5B, #1B3A5E)",
        "blue-flow": "linear-gradient(160deg, #154FA0, #3C7AA7)",
        "orange-flow": "linear-gradient(135deg, #D97A3E, #E8893A)",
      },
    },
  },
  plugins: [],
};

export default config;
