var envs = ['development', 'production']
module.exports = {
  reactStrictMode: true,
  webpack5: true,
  webpack: (config) => {
    // Important: return the modified config
    // passes for Cypress
    if (!envs.includes(process.env.NODE_ENV)) {
      config.module.rules.push(
        {
          test: /\.css$/i,
          include: require('path').resolve(__dirname, 'styles'),
          use: [
            'style-loader',
            'css-loader',
            {
              loader: 'postcss-loader',
              options: {
                postcssOptions: {
                  plugins: [
                    [
                      'postcss-preset-env',
                      {
                        /* Options */
                      },
                    ],
                  ],
                },
              },
            },
          ],
        },
        {
          test: /\.s[ac]ss$/i,
          use: ['style-loader', 'css-loader', 'sass-loader'],
        },
      )
    }

    return config
  },
}
