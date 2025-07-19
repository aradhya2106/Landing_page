/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
     "./Component/**/*.{js,ts,jsx,tsx}",
    // if using `app/` dir (Next.js 13+)
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"], // adjust this to your folder structure
  theme: {
    extend: {
      textShadow: {
        glow: '0 0 4px #ffffff, 0 0 8px #7f00ff, 0 0 12px #7f00ff',
      },
      animation: {
        glow: 'glow 0.3s ease-in-out',
      },
      keyframes: {
        glow: {
          '0%, 100%': { textShadow: '0 0 4px #ffffff, 0 0 8px #7f00ff, 0 0 12px #7f00ff' },
        },
      },
    },
  },
  plugins: [
    require('tailwindcss-textshadow'),
  ],
};
