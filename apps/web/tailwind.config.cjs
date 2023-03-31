/* eslint-disable @typescript-eslint/no-var-requires */

/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [require('tailwind-config/tailwind.config.cjs')],
  content: [
    // app content
    `src/**/*.{ts,tsx}`,
    // include packages if not transpiling
    '../../packages/**/*.{ts,tsx}',
  ],
  darkMode: 'class',
};
