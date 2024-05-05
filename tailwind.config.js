/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#00B207",
        secondary: "#1A1A1A",
        tertiary: "#999999",
        orange: "#FF8A00",
        grey: "#E6E6E6",
      },
    },
  },
  plugins: [],
};
