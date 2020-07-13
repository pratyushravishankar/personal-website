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
        'coral': '#F76C6C',
        'bluelightest': '#A8D0E6',
        'bluedark': '#0D19A3',
        'bluedarkest': '#080F5B',
        'aquamarine': '#15DB93',
        'champagne': '#F8E9A1',
        'blush': '#DE6C83',
      },
      boxShadow: {
        coral: '0 4px 14px 0 rgba(168, 208, 230, 0.39)',
      },
    }


  },
  variants: {},
  // https://github.com/tailwindcss/custom-forms
  plugins: [require("@tailwindcss/custom-forms")],
};
