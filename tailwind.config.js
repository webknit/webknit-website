/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{ts,tsx,jsx,js}"],
  theme: {
    extend: {
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
