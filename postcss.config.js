module.exports = {
  plugins: [
    require('tailwindcss'),
    // But others, like autoprefixer, need to run after
    require('autoprefixer'),
    [
      'postcss-preset-env',
      {
        // Options
      },
    ],
  ],
}
