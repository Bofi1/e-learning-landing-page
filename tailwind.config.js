/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    extend: {
      fontFamily: {
        jakarta: ["'Plus Jakarta Sans'", "sans-seriff"],
      },
      colors: {
        bluedark: "#13183E",
        mygray: "#848494",
        mypink: "#ff2ba1",
      },
    },
  },
  plugins: [],
};
