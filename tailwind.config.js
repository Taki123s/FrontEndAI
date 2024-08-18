/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-dark": "#24252d",
        "custom-bg-orange":"#ec4c14",
        "custom-bg-orange-hover":"#ed3a0d"
      },
    },
  },
  plugins: [],
};
