module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'primary': '#00C885',
        'green': '#00C885',
        'blue': '#076AFF',
        'orange': '#FF9900',
        'green2': '#083640',
        'graybg': '#e0e0e021',
        'orange-light': '#ffcc8954',
        'blue-light': '#076aff1a',
        'green-light': '#00c8851a',
        'gray-dark': '#273444',
        'footer-gray': '#69707D',
        'footer-bg': '#FAFAFA',
        'gray': '#c2c2c2',
        'gray-light': '#E5E5E5',
      },
      fontSize: {
        xs: ["clamp(0.65rem, calc(0.5rem + 0.3vw), 0.75rem)", "1.4"],
        sm: ["clamp(0.78rem, calc(0.77rem + 0.5vw), 0.85rem)", "1.4"],
        base: ["clamp(0.9rem, calc(0.92rem + 0.13vw), 1.00rem)", "1.4"],
        // lg: ["clamp(1.05rem, calc(1.08rem + 0.22vw), 1.20rem)", "1.4"],
        "lg": ["clamp(1.13rem, calc(0.98rem + 0.25vw), 1.2rem)", "1.5"],
        "xl": ["clamp(1.35rem, calc(1.28rem + 0.37vw), 1.5rem)", "1.4"],
        "2xl": ["clamp(1.62rem, calc(1.50rem + 0.58vw), 1.875rem)", "1.4"],
        "3xl": ["clamp(1.94rem, calc(1.77rem + 0.87vw), 2.3rem)", "1.2"],
        "4xl": ["clamp(2.33rem, calc(2.08rem + 1.25vw), 3.05rem)", "1.1"],
        "5xl": ["clamp(2.80rem, calc(2.45rem + 1.77vw), 3.82rem)", "1"],
        xsm: ['0.625rem', '0.8rem'],
        smm: ['0.8125rem', '1.15rem'],
        '25': ["clamp(1.00rem, calc(0.92rem + 0.39vw), 1.20rem)", "1.4"],
        '3xlm': ["clamp(1.27rem, calc(1.03rem + 1.19vw), 1.8rem)", "1.4"],
        '40': ["clamp(1.60rem, calc(1.45rem + 0.45vw), 1.7rem)", "1.2"],
      },
      // fontSize: {
      // },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        arialsans: ['Arial', 'Helvetica', 'sans-serif'],
      },
      backgroundImage: {
        'hero-pattern': "url('src/assets/hero.svg')",
        'audience': "url('src/assets/audience.svg')",
        'new-job-listing': "url('src/assets/new-job-listing.svg')",
      },
      width: {
        '68': '17rem',
      },
      height: {
        '104': '26rem',
        '128': '32rem',
      },
      padding: {
        '22': '5.5rem',
      },
      gridTemplateColumns: {
        // Business grids
        'bus1': 'repeat(1, minmax(17rem, 1fr))',
        'bus2': 'repeat(2, minmax(17rem, 1fr))',
        'bus3': 'repeat(3, minmax(17rem, 1fr))',
        'bus4': 'repeat(4, minmax(17rem, 1fr))',
        'auto': 'repeat(autofit, minmax(24rem, 1fr))',
        'sub': 'repeat(autofit, minmax(18rem, 1fr))',

        // Complex site-specific column configuration
        'business-info': 'repeat(1, minmax(300px, 1fr))',
      },
      keyframes: {
        wiggle: {
          '0%': { transform: 'scale(1.04)' },
          '50%': { transform: 'scale(0.96))' },
          '75%': { transform: 'scale(1.01)' },
          '100%': { transform: 'scale(1)' },
        },
        slideIn: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(350%)' },
        },
        around: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        button_click: 'wiggle 200ms ease-in-out',
        slideIn: 'slideIn 0.3s linear infinite',
      }
    },
  },
  plugins: [],
};
