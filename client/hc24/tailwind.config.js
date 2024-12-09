module.exports = {
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      animation: {
        // Default animation speed (for larger screens)
        marquee: 'marquee 20s linear infinite',
        // Faster animation speed for mobile screens
        'marquee-mobile': 'marquee 2s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
    },
  },
  plugins: [],
};
