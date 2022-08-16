/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        primary: ["Poppins", "sans-serif;"],
        secondary: ["Montserrat", "sans-serif;"],
        third: ["DM Sans", "sans-serif;"],
      },
      colors: {
        primary: "#0B0547",
        secondary: "#0D1539",
        third: "#000000",
        white: "#fff",
        white50: "#F0EEFF",
        green: "#63B8B1",
        organge: "##F99838",
        primary20: "#C1EDFF",
        primary50: "#3975F2",
        primary100: "#3964BF",
        primary200: "#0643C3",
        primary300: "#756CCF",
        third100:"#758285"
      },
    },
  },
  plugins: [],
};
