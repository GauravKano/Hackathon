/** @type {import('tailwindcss').Config} */
module.exports = {
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

        "background-color": "#11131F",
        "card-color": "#1D2E62",
        "card-border-color": "#3A4F97",
        "text-color": "#D6E1FF",
      },
    },
  },
  plugins: [],
};
