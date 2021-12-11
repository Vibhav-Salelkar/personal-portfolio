module.exports = {
  purge: [
    "./pages/**/*.tsx",
    "./components/**/*.tsx",
  ],  
  theme: {
    fontFamily: {
      'Courgette': ['Courgette','cursive'],
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
        }
      }
    },
  },
  plugins: [],
}
