module.exports = {
  reactStrictMode: true,
  webpack5: true,
  webpack: (config) => {
    // Important: return the modified config
    config.module.rules.push(
      {
        test: /\.css$/i,
        include: require('path').resolve(__dirname, 'styles'),
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
      {
        test: /\.s[ac]ss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    )

    return config
  },
}
