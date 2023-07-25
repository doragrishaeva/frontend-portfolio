/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      'highlight': '#57e1c3',
      'bg': '#0a192f',
      'text': '#8892b0',
      'title': '#ccd6f6',
    },
    extend: {
     boxShadow: {
        'md': '0px 0px 3px 0px rgba(87, 225, 195, 1)',
        'lg': '0px 0px 6px 0px rgba(87, 225, 195, 1)',
      }
    },
  },
  plugins: [],
}

