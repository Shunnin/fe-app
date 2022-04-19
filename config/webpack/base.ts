import HtmlWebpackPlugin from 'html-webpack-plugin';
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
import ESLintPlugin from 'eslint-webpack-plugin';

import settings from '../setting';

const { paths, hosts, ports } = settings;

const baseSettings = {
  settings: {
    paths,
    commonLoaders: [
      /* ts files */
      {
        test: /.(ts|tsx)$/,
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true,
          },
        },
        exclude: /node_modules/,
      },
      /* images */
      {
        test: /\.(jpg|jpeg|gif|png|ico)$/,
        use: ['url-loader'],
      },
      /* svg */
      {
        test: /\.svg$/,
        use: [
          {
            loader: '@svgr/webpack',
            options: {
              svgoConfig: {
                plugins: [
                  {
                    name: 'removeViewBox',
                    active: false,
                  },
                ],
              },
            },
          },
          'url-loader',
        ],
      },
      /* SCSS || CSS */
      {
        test: /\.s?css$/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              sassOptions: {
                includePaths: ['./src/assets'],
              },
            },
          },
        ],
      },
    ],
    hosts: hosts,
    ports: ports,
    entry: "./src/index.tsx",
  },
  webpack: {
    resolve: {
      extensions: ['.tsx', '.ts', '.js', '.html', '.css', '.scss'],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: "src/index.html",
      }),
      new ForkTsCheckerWebpackPlugin({
        async: false,
      }),
      new ESLintPlugin({
        extensions: ['js', 'jsx', 'ts', 'tsx'],
        emitError: true,
        emitWarning: false,
      }),
    ]
  },
}

export default baseSettings;
