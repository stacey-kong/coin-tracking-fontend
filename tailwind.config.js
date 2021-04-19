module.exports = {
  purge: ["./src/**/*.html", "./src/**/*.js"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      borderColor: ["focus"],
      // outline: ["focus"],
      ringColor: ["focus"],
      appearance: ["hover", "focus"],
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
