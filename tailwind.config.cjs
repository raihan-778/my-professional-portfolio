/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#dfed49",

          secondary: "#7fe2a2",

          accent: "#3311af",

          neutral: "#27212C",

          "base-100": "#27293F",

          info: "#1C48E9",

          success: "#218C55",

          warning: "#C4A403",

          error: "#E42565",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
