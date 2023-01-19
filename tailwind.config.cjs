/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
    // "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: "class",
  // important: ".app-wrapper",
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#2fbba4",
        secondary: "#00f6ff",
        dimWhite: "rgba(255, 255, 255, 0.7)",
        dimBlue: "rgba(9, 151, 124, 0.1)",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        urbanist: ["Urbanist", "sans-serif"],
        sen: ["Sen", "sans-serif"],
        lato: ["Lato", "sans-serif"],
      },
      backgroundImage: (theme) => ({
        sample:
          "url('./src/assets/Images/keagan-henman-xPJYL0l5Ii8-unsplash.jpg')",
      }),
      maxWidth: {
        same: "90%",
      },
    },
    screens: {
      xs: "340px",
      ss: "620px",
      sm: "768px",
      md: "1120px",
      lg: "1200px",
      xl: "1550px",
    },
  },
  // plugins: [require("flowbite/plugin")],
};

// #2fbba4
// #fbeec1

// Avenir Next
// Lato
// Sen
// nunito sans
