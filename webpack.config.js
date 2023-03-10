const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const FileManagerPlugin = require('filemanager-webpack-plugin');

module.exports = {
  entry: {
    main: './src/pages/main/index.js',
    destination: './src/pages/destination/index.js',
    crew: './src/pages/crew/index.js',
    technology: './src/pages/technology/index.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name]/[name].[chunkhash].js',
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(sass|css|scss)$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'resolve-url-loader',
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
            },
          },
        ],
      },
      {
        test: /\.(png|jpg|jpeg|gif|webp)$/i,
        type: 'asset/resource',
        use: [
          {
            loader: 'image-webpack-loader',
            options: {
              mozjpeg: {
                progressive: true,
                quality: 65,
              },
              optipng: {
                enabled: false,
              },
              pngquant: {
                quality: [0.65, 0.9],
                speed: 4,
              },
              gifsicle: {
                interlaced: false,
              },
            },
          },
        ],
        generator: {
          filename: 'assets/images/[name].[hash][ext]',
        },
      },
      {
        test: /\.svg$/,
        type: 'asset/resource',
        generator: {
          filename: 'assets/icons/[name].[hash][ext]',
        },
      },
      {
        test: /\.(woff2?|eot|ttf|otf)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'assets/fonts/[name].[hash][ext]',
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: 'body',
      filename: 'index.html',
      template: 'src/pages/main/index.html',
      chunks: ['main'],
    }),
    new HtmlWebpackPlugin({
      inject: 'body',
      filename: 'destination.html',
      template: 'src/pages/destination/index.html',
      chunks: ['destination'],
    }),
    new HtmlWebpackPlugin({
      inject: 'body',
      filename: 'crew.html',
      template: 'src/pages/crew/index.html',
      chunks: ['crew'],
    }),
    new HtmlWebpackPlugin({
      inject: 'body',
      filename: 'technology.html',
      template: 'src/pages/technology/index.html',
      chunks: ['technology'],
    }),
    new MiniCssExtractPlugin({
      filename: '[name]/[name].[contenthash].css',
    }),
    new FileManagerPlugin({
      events: {
        onStart: {
          delete: ['dist'],
        },
        onEnd: {
          copy: [
            {
              source: path.join('src', 'static'),
              destination: 'dist',
            },
          ],
        },
      },
    }),
  ],
  optimization: {
    minimizer: [`...`, new CssMinimizerPlugin()],
  },
  devServer: {
    watchFiles: path.join(__dirname, 'src'),
    port: 3000,
  },
};
