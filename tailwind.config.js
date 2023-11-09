/* eslint-env node */

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{vue,js,ts}'],
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        light: {
          primary: '#FF3D00', // favicon
          secondary: '#4CAF50', // favicon
          neutral: '#27272a', // zinc-800
          'base-100': '#ffffff',
        },
      },
    ],
  },
};
