import type { Config } from 'tailwindcss'

const config: Config = {
  safelist: [
    'bg-severity-info', 'bg-severity-error', 'bg-severity-warning', 'bg-severity-success',
  ],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
        'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      keyframes: {
        iconsOpactiy: {
          "0%": {"opacity": "0", "right": "100%"},
          "100%": {"opacity": "1", "right": "-10px"},
        }
      },
      colors: {
        'main-base': '#7E8A50',
        'main-accent': '#343B25',
        'main-neutral': '#F3F4EF',

        'aux-base': '#F0DBB9',
        'aux-accent': '#D94541',
        'aux-neutral': '#FFF0DE',

        'content-base': '#020202',
        'content-accent': '#343B25',
        'content-neutral': '#7E8A50',
        'content-muted': '#eeeeee',
        'content-bright': '#FFFFFF',

        'severity-info': "#0096FF",
        'severity-error': "#EE4B2B",
        'severity-warning': "#FFEA00",
        'severity-success': "#50C878",
      },
      spacing: {
        'section-top': '7rem'
      }
    },
    screens: {
      'tablet': {max: '640px'},
      'laptop': {max: '1024px'},
      'desktop': {max: '1280px'},
    },
  },
  plugins: [],
}
export default config;

        // 'light': "#F5EBD7",
        // 'light-warm': "#EAD7B1",
        // 'gold-white': "#D8B972",
        // 'gold': "#C89B3C",
        // 'coffee': "#a88853ff",
        // 'brown': "#933E13",
        // 'brown-dark': "#4D3A10",
        // 'green-light': "#9BA96F",
        // 'green': "#7C8F5A",
        // 'green-dark': "#6F7D4E",
        // 'menthol': "#8D9E75",

        // 'severity-info': "#0096FF",
        // 'severity-error': "#EE4B2B",
        // 'severity-warning': "#FFEA00",
        // 'severity-success': "#50C878",

        // 'light-rgb': "245, 235, 215",
        // 'light-warm-rgb': "234, 215, 177",
        // 'gold-white-rgb': "216, 185, 114",
        // 'gold-rgb': "200, 155, 60",
        // 'coffee-rgb': "168, 136, 83",
        // 'brown-rgb': "147, 62, 19",
        // 'brown-dark-rgb': "77, 58, 16",
        // 'green-light-rgb': "155, 169, 111",
        // 'green-rgb': "124, 143, 90",
        // 'green-dark-rgb': "111, 125, 78",
        // 'menthol-rgb': "141, 158, 117",