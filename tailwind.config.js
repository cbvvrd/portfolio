/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        marker: ["Permanent Marker", "serif"],
        questrial: ["Questrial", "serif"]
      }
    },
  },
  plugins: [],
}

