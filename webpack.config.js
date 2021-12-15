const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const rules = [
  {
    test: /\.tsx?$/,
    exclude: /node_modules/,
    loader: 'babel-loader'
  }, {
    test: /\.css$/,
    use: [MiniCssExtractPlugin.loader, "css-loader"]
  }, {
    test: /\.(png|jpg|jpeg|svg)$/,
    use: {
      loader: 'file-loader',
      options: {
        name: 'assets/img/[name].[contenthash].[ext]',
      }
    }
  }
];

const plugins = [
  new HtmlWebpackPlugin({
    template: './index.html',
    inject: 'body',
    favicon: 'favicon.ico'
  }),
  new MiniCssExtractPlugin({
    filename: 'assets/css/[name].[chunkhash].css'
  })
]

module.exports = {
  target: 'web',
  mode: 'development',
  entry: './src/index.tsx',
  output: {
    filename: 'assets/js/main.[chunkhash].js',
    path: path.resolve(__dirname, 'dist'),
    clean: true
  },
  module: {
    rules
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  devServer: {
    static: path.join(__dirname, './'),
    port: 3000
  },
  plugins
};
