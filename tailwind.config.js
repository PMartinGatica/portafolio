/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#3B82F6',
        secondary: '#2563EB',
        accent: '#F59E0B',
        'light-bg': '#F9FAFB',
        'dark-bg': '#1F2937',
        'light-text': '#F9FAFB',
        'dark-text': '#1F2937',
      }
    }
  },
  plugins: [],
}
