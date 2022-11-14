/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    ripple: (theme) => ({
      colors: theme("colors"),
    }),
  },
  plugins: [require("tailwindcss-ripple")()],
};
