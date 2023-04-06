module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    colors: {
      transparent: 'transparent',
      'yellow-light': '#f2ed76',
      'yellow-medium': '#f7e166',
      'yellow-dark': '#f2ca48',
      'purple': '#534173',
      'pink': '##f0b9c7',
      'gray-dark': '#273444',
      'gray': '#8492a6',
      'gray-light': '#d3dce6',
    },
    fontFamily: {
      sans: [ 'Graphik', 'sans-serif' ],
      serif: [ 'Merriweather', 'serif' ],
    },
    opacity: {
      '0': '0',
      '20': '0.2',
      '40': '0.4',
      '60': '0.6',
      '80': '0.8',
      '100': '1',
    },
    extend: {
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      }
    }
  },
  daisyui: {
    themes: [
      {
        themes: [
          {
            mytheme: {
            "primary": "#f2ed76",
            "secondary": "#f7e166",
            "accent": "#f0b9c7",
            "neutral": "#1D283A",
            "base-100": "#0F1729",
            "info": "#534173",
            "success": "#2BD4BD",
            "warning": "#f2ca48",
            "error": "#FB6F84",
            },
          },
        ],
      },
    ], 
  },
  plugins: [
    require('daisyui'),
    require('tw-elements/dist/plugin'),
    require('@tailwindcss/forms')
  ]
}