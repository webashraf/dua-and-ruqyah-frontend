const { fontFamily } = require('tailwindcss/defaultTheme');
const { nextui } = require('@nextui-org/theme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1fa45b',
      },
      fontFamily: {
        sans: ['Inter', ...fontFamily.sans], // Default sans-serif fonts with Inter
        poppins: ['Poppins', 'sans-serif'], // Explicit Poppins font family
        mono: ['var(--font-mono)'], // Custom mono font
      },
    },
  },
  darkMode: 'class', // Enables dark mode using the `class` strategy
  plugins: [nextui()], // Enables NextUI theme integration
};
