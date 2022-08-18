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
        organge: "#F99838",
        primary20: "#C1EDFF",
        primary50: "#3975F2",
        primary100: "#3964BF",
        primary200: "#0643C3",
        primary300: "#756CCF",
        third100: "#758285",
        purple50: "#D9D9F9",
        purple100: "#A6A5EA",
        purple200: "#8584CF",
        purple300: "#C8CEE5",
        purple400: "#9097B4",
        tiber: "#274546",
        linkKa:"#C1EDFF",
        blueLagoon: "#006a6a",
        spindle: "#afc9dc",
        aliceBlue: "#f2f4f6",
        organgeWhite: "#f9d9c1",
        whitePastels:"#fcefdf",
        redFunky:"#ea336f"
      },
    },
  },
  plugins: [],
};
