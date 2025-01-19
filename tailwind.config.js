/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'catamaran': ["Catamaran", 'serif'],
        'outfit': ["Outfit", 'serif']
      },
      colors: {
        "primary" : "var(--clr-primary)",
        "secondary" : "var(--clr-secondary)",
        "dark-blue" : "var(--clr-dark-blue)",
        "main-bg" : "var(--clr-main-bg)",
        "LinkHoverClr" : "var(--LinkHoverClr)",
        "global-1" : "var(--global-1)",
        "global-2" : "var(--global-2)",
      },
      keyframes: {
        mbounce: {
          "0%, 100%" : {
            transform: "translateY(-10px)",
            'animation-timing-function': "cubic-bezier(0.8, 0, 1, 1)",
          },
          "50%": {
            transform: "translateY(0%)",
            'animation-timing-function': "cubic-bezier(0, 0, 0.2, 1)",
          }
        },
        mbounce2: {
          "0%, 100%" : {
            transform: "translateY(0%)",
            'animation-timing-function': "cubic-bezier(0.8, 0, 1, 1)",
          },
          "50%": {
            transform: "translateY(-10px)",
            'animation-timing-function': "cubic-bezier(0, 0, 0.2, 1)",
          }
        }
      },
      animation: {
        mbounce: "mbounce 3s infinite",
        mbounce2: "mbounce2 3s infinite"
      }
    },
  },
  plugins: [],
}