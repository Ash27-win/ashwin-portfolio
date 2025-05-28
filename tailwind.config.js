/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'cover-bg': "url('/assets/cover_bg.jpg')",
      },
    },
  },
  plugins: [],
}

