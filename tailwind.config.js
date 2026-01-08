// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // all your React components
    "./index.html"                // HTML if you have classes there
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
