/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
    },
    fontWeight: {
      normal: 400,
      bold: 600,
    },
    colors: {
      white: "#FFFFFF",
      pallet: {
        1: "#3BB5F5",
        2: "#559CC2",
        3: "#5B7D8F",
        4: "#4D575C",
        5: "#272F33",
      },
    },
  },
  plugins: [],
};
