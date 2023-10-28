/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
    theme: {
      fontFamily: {
        sans: ['Noto Sans SC', 'sans-serif']
      },
      extend: {
        spacing: {
          '8xl': '96rem',
          '9xl': '128rem',
        },
        colors: {
          'primary-text': '#025A55',
          'black-text': '#373737'
        },
        borderRadius: {
          '4xl': '2rem',
        }
      }
    },
  plugins: [require('@tailwindcss/typography')],
}

