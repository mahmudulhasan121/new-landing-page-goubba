/** @type {import('tailwindcss').Config} */
module.exports = {
  prefix: "tw-",
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/**/*.{html,js}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  theme: {
    extend: {
      screens: {
        "3xl": "1920px",
        // => @media (min-width: 1920px) { ... }
      },
    },
  },
  plugins: [require("tw-elements/dist/plugin")],
};
