/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      lobster: ['lobster']
    },
    extend: [
      'plugin:react/recommended',
      'plugin:@typescript-eslint/recommended',
    ],
  },
  plugins: [],
}

