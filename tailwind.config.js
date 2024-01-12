/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      colors: {
        midnightBlue: "#191970",
        platinum: "#E5E4E2",
        neonGreen: "#39FF14",
        silver: "#C0C0C0",
        softGold: "#D4AF37",
      },
    },
  },
  plugins: [],
};
