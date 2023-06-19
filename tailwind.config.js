/** @type {import('tailwindcss').Config} */
module.exports = {
  
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/flowbite-react/**/*.js",
  ],
  theme: {
    colors:{
      "primary": "#FF2E00",
      "primary-hover": "#ff2f00d5",
      "primary-soft": "#FDEBED"
    },
    extend: {
      darkMode:false,
      backgroundImage: {
      },
    },
  },
  plugins: [
    require("flowbite/plugin")
  ],
}
