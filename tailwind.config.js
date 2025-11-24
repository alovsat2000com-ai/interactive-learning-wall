/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1565C0",
        secondary: "#2E7D32",
        accent: "#FFB300",
      },
    },
  },
  plugins: [],
};
