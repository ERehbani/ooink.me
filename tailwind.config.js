const { nextui } = require('@nextui-org/react');

/** @type {import('tailwindcss').Config} */
module.exports = {
    plugins: [nextui({
      addCommonColors: true
    })],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'ooink': '#FF78A9',
        'primary': '#FF78A9',
        'gray-ooink': '#8DA3AF',
        'gray-dark-ooink': '#1D1D1D',
        'gray-border-ooink': '#474747',
        'secondary': '#1D1D1D',
        'black-ooink': '#111111',
        'disabled-ooink': '#3F3F46'
      }
    },
  },
  darkMode: "class",

}
