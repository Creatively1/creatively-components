/** @type {import('tailwindcss').Config} */
module.exports = {
  output: "./tailwind.css",
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  plugins: [require("tailwindcss-animate")],
  corePlugins: {},
};
