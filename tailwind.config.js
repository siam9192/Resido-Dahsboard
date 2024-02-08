/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors:{
        color_primary:'#216fed',
        color_main: '#171622',
        color_main_light:'#212130',
        color_action:'#ffa755',
        color_action_light:'#ffa755',
        color_success:'#68e365',
        text_main:'#f4fff1',
        text_light:'#585d6e'
      },
      fontFamily: {
        jost:"'Jost', sans-serif;"
      }
    },
  },
  plugins: [require("daisyui")],
};
