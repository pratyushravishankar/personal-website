// See https://tailwindcss.com/docs/configuration for details
module.exports = {
  purge: [
    './src/**/*.js',
  ],
  theme: {
    extend: {
      colors: {
        'regal-blue': '#243c5a',
        'grape': '#9888A5',
        'celadon-green': '#00887A',
        'alabaster': '#F1F2EB',
        'timberwolf': '#D8DAD3',
        'coffee': '#403233',
      }
    }

  },
  variants: {},
  // https://github.com/tailwindcss/custom-forms
  plugins: [require("@tailwindcss/custom-forms")],
};
