/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      './app/**/*.{js,ts,jsx,tsx}',
      './ui/**/*.{js,ts,jsx,tsx}',
      './components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
      extend: {
        boxShadow: {
          "BC": "0px 0px 0px 2px #e7223e inset"
        },
        animation: {
          'fade-in': 'fadeIn 1.5s ease-out',
          'slide-up': 'slideUp 1s ease-out',
          'slide-right': 'slideRight 1s ease-out',
        },
        keyframes: {
          fadeIn: {
            '0%': { opacity: 0 },
            '100%': { opacity: 1 },
          },
          slideUp: {
            '0%': { transform: 'translateY(20px)', opacity: 0 },
            '100%': { transform: 'translateY(0)', opacity: 1 },
          },
          slideRight: {
            '0%': { transform: 'translateX(-20px)', opacity: 1 },
            '100%': { transform: 'translateY(0)', opacity: 1 },
          }
        }
      },
    },
    plugins: [
      require('@tailwindcss/typography'),
    ],
  };
  