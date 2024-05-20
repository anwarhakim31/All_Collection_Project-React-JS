/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "1rem",
    },
    extend: {
      colors: {
        primary: "#14b8a6",
        dark: "#0f172a",
      },
      screens: {
        lg: "940px",
        xl: "1200px",
        "2xl": "1400px",
      },
      width: {
        noll: "0%",
        foll: "100%",
      },
      transitionProperty: {
        width: "width",
      },
    },
  },
  variants: {
    extend: {
      width: ["hover"],
    },
  },
  plugins: [],
};
