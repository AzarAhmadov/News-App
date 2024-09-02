/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "selector",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryDarker: "#0768B5",
        primaryDark: "#0768B5",
        primary: "#2F9FF8",
        amberBlack: "#072D4B",
        bodyBack: "#F4F9F8",
        activeLink: "#E0F0F8",
        textWhite: "#fff",
        inputBg: "#ECF5F8",
        paragraphColor: "#6A8193",
        infoText: "#9CABB7",
      },
    },
  },
  plugins: [],
};
