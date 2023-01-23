const { fontFamily } = require('tailwindcss/defaultTheme');
const config = require('tailwind-config/tailwind.config.js');

/** @type {import('tailwindcss').Config} */
module.exports = {
  ...config,
  darkMode: 'class',
  theme: {
    ...config.theme,
    extend: {
      ...config.theme.extend,
      fontFamily: { ...fontFamily, ...config.theme.extend.fontFamily, sans: ['var(--font-lato)', ...fontFamily.sans] },
    },
  },
};
