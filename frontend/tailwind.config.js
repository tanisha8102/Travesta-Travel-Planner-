export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
   extend: {
    fontFamily: {
      sans: ["Inter", "sans-serif"], // for normal text
      serif: ["Playfair Display", "serif"], // for italic part
    },
  },
  },
  plugins: [],
}
