const colors = require('tailwindcss/colors');
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      slate: colors.slate,
      white: colors.white,
      pink: colors.pink,
      main: {
        rosa: '#E063A3',
        amarillo: '#FFC911',
      },
      secondary: {
        rosa: '#F49CC0',
        marron: '#F4D197',
        negro: '#1B1616',
        sombra: '#887675',
        'rosa-puro': '#F3EAE8',
        fondo: '#F2F2F2',
        'texto-ayuda': '#939393',
        comentario: '#F5C3D7', // => rosa 50% of opacity
        bordo: '#860B3D',
        gris: '#656565',
        'gris-claro': '#D9D8D8',
      },
      third: {
        check: '#22A900',
        rojo: '#F0281D',
        link: '#2D33C8',
      },
    },
    extend: {},
  },
  plugins: [],
};
