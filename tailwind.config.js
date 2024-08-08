/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'login-image': "url('/neflixloginbg.jpg')",
      },
      backdropBrightness: ['responsive'],
      boxShadow: {
        'custom-black':
          '0 4px 6px -1px rgba(100, 20, 90, 0.1), 0 2px 4px -1px rgba(100, 90, 2000, 0.06)',
      },
    },
  },
  plugins: [],
};
