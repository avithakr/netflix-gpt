/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'login-image': "url('/neflixloginbg.jpg')",
      },
      backdropBrightness: ['responsive'],
    },
  },
  plugins: [],
};
