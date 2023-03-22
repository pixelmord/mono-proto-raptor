/* eslint-disable @typescript-eslint/no-var-requires */
const { fontFamily } = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');
/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [require('tailwind-config/tailwind.config.cjs')],
  content: [
    // app content
    `src/**/*.{ts,tsx}`,
    // include packages if not transpiling
    '../../packages/**/*.{ts,tsx}',
    '../../packages-*/**/*.{ts,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-lato)', ...fontFamily.sans],
      },
      colors: {
        base: colors.zinc,
        primary: colors.emerald,
        secondary: colors.orange,
        accent: colors.emerald,
        success: colors.green,
        warning: colors.yellow,
        danger: colors.red,
      },
    },
  },
};
