module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        radialGradientMove: {
          '0%': {
            background: 'radial-gradient(circle at 30% 30%, white 0%, #ece4d9 100%)',
            backgroundSize: '150% 150%',
          },
          '50%': {
            background: 'radial-gradient(circle at 70% 70%, #ece4d9 0%, white 100%)',
            backgroundSize: '150% 150%',
          },
          '100%': {
            background: 'radial-gradient(circle at 30% 30%, white 0%, #ece4d9 100%)',
            backgroundSize: '150% 150%',
          },
        },
      },
      animation: {
        'radial-bg-move': 'radialGradientMove 10s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
