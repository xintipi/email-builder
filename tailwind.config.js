/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  corePlugins: {
    preflight: false,
  },
  content: [
    './src/components/**/*.{js,jsx,mdx}',
    './src/app/**/*.{js,jsx,mdx}',
    './src/layouts/**/*.{js,jsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'persian-indigo': '#2C1574',
        boulder: '#767676',
      },
      borderColor: {
        'gray-light': '#D9D9D9',
        'purple-light': '#7A69AD',
      },
      backgroundColor: {
        'purple-light': '#7A69AD',
        'purple-darker': '#5F4A8B',
        'cloud-burst': '#1C274C',
        'cloud-burst-darker': '#1A233F',
      },
      backgroundImage: {
        'circle-user': "url('../../public/images/icons/bg-circle-user.svg')",
        'circle-home': "url('../../public/images/icons/bg-circle-gray.svg')",
        'new-template': "url('../../public/images/new-template.svg')",
      },
      animation: {
        'fade-out': 'fadeOut 5ms ease-out forwards',
        'fade-in': 'fadeIn 5ms ease-in forwards',
      },
      keyframes: (theme) => ({
        fadeOut: {
          '0%': { opacity: 1 },
          '30%': { opacity: 0.3, width: '30%' },
          '50%': { opacity: 0.5, width: '50%' },
          '70%': { opacity: 0.7, width: '70%' },
          '100%': { opacity: 0, width: '0' },
        },
        fadeIn: {
          '0%': { opacity: 0 },
          '30%': { opacity: 0.3 },
          '50%': { opacity: 0.5 },
          '70%': { opacity: 0.7 },
          '100%': { opacity: 1 },
        },
      }),
    },
  },
  plugins: [],
}
