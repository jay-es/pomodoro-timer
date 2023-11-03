/* eslint-env node */

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{vue,js,ts}'],
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: '#dc2626', // red-600
          secondary: '#a1a1aa', // zinc-400
          neutral: '#27272a', // zinc-800
          'base-100': '#ffffff',
        },
      },
    ],
  },
};
