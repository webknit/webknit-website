/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{ts,tsx,jsx,js}"],
  theme: {
    extend: {
      container: {
        padding: "1rem",
      },
      colors: {
        "webknit-blue": "#0026ff",
      },
      fontFamily: {
        gtreg: "GTReg",
        gtbolb: "GTBold",
      },
    },
  },
  plugins: [],
};
