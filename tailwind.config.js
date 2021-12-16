module.exports = {
  purge: [
    "./pages/**/*.tsx",
    "./components/**/*.tsx",
  ],  
  darkMode: "class",
  theme: {
    fontFamily: {
      'Courgette': ['Courgette','cursive'],
    },
    boxShadow: {
      'vs-light': "0 0 10px #b5b3b3",
      'vs-dark': "5px 5px 10px #0a0c0e, -5px -5px 10px #14161c"
    },
    extend: {
      colors: {
        vstext: {
          DEFAULT: '#66fcf1',
        },
        vstext2: {
          DEFAULT: '#45a29e',
        },
        vsback: {
          DEFAULT: '#1f2833',
        },
        vsback2: {
          DEFAULT: '#0b0c10',
        },
        vspanel: {
          DEFAULT: '#c5c6c7',
        },
        dark: {
          DEFAULT: "#010101",
          100: "#0a0b0e",
          200: "#16181d",
          300: "#16181d",
          500: "#0f1115",
          700: "#202125",
        }
      }
    },
  },
  variants: {
    extend: {
      boxShadow: ['dark']
    }
  },
  plugins: [],
}
