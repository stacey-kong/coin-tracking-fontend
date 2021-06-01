module.exports = {
  purge: {
    content: [
      "./src/pages/*.tsx",
      "./src/components/**/*.tsx",
      "./src/utils/**/*.tsx",
    ],
  },
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
