/** 
 * iDeparture
 * @type {import('tailwindcss').Config} 
**/

module.exports = {
  content: [
    './src/**/*.{html,ts}',
  ],
  theme: {
    extend: {
      fontFamily: {
        futura: ['Futura', 'sans-serif'],  // Add Futura as a font family
        roboto: ['Roboto', 'sans-serif'],  // Add Roboto as a font family
      },
      fontSize: {
        'h1': ['40px', '1.2'], // H1 Futura 40px
        'h2': ['32px', '1.3'], // H2 Futura 32px
        'h3': ['28px', '1.35'], // H3 Roboto 28px
        'h4': ['24px', '1.4'], // H4 Roboto 24px
        'h5': ['22px', '1.5'], // H5 Roboto 22px
        'h6': ['20px', '1.6'], // H6 Roboto 20px
        'p': ['18px', '1.7'],  // P Roboto 18px
      },
      colors: {
        primary: {
          100: '#E1E6EA',
          200: '#B2BBC2',
          300: '#83919A',
          400: '#546771',
          500: '#1B2E40',
          600: '#162638',
          700: '#101C2A',
          800: '#0B121B',
          900: '#05090D',
        },
        secondary: {
          100: '#E1EAF1',
          200: '#B3C8D7',
          300: '#85A5BD',
          400: '#5783A3',
          500: '#2D4D67',
          600: '#254256',
          700: '#1C3444',
          800: '#132633',
          900: '#0A1922',
        },
        accent: {
          100: '#FDF1D9',
          200: '#FBE4B2',
          300: '#F9D78B',
          400: '#F7CA63',
          500: '#F5B753',
          600: '#D39A44',
          700: '#B17C36',
          800: '#8F5F28',
          900: '#6D411A',
        },
        neutral: {
          100: '#FCFCFC',
          200: '#F9F9F9',
          300: '#F6F6F6',
          400: '#F3F3F3',
          500: '#F0F0F0',
          600: '#D6D6D6',
          700: '#BDBDBD',
          800: '#A3A3A3',
          900: '#898989',
        },
        complementary: {
          100: '#F8E3E5',
          200: '#F1C7CA',
          300: '#EAACAE',
          400: '#E39093',
          500: '#A74C55',
          600: '#8E4149',
          700: '#75363C',
          800: '#5C2B30',
          900: '#431F23',
        },
      },
    },
  },
  plugins: [],
}
