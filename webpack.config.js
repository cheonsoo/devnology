const webpack = require('webpack');
// const { webpack } = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const dotenv = require('dotenv');
const path = require('path');
// const marked = require("marked");

const rules = [
  {
    test: /\.tsx?$/,
    exclude: /node_modules/,
    loader: 'babel-loader'
  },
  {
    test: /\.css$|.scss$/,
    use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
  },
  {
    test: /\.(png|jpg|jpeg|svg)$/,
    use: {
      loader: 'file-loader',
      options: {
        name: 'assets/img/[name].[contenthash].[ext]'
      }
    }
  },
  {
    test: /\.md$/,
    use: [
      {
        loader: 'html-loader'
      }
      /*
      // Using another renderer in react component
      , {
          loader: "markdown-loader",
          options: {
            pedantic: true,
            renderer: new marked.Renderer()
          }
      }
      */
    ]
  },
  {
    test: /\.bak$/,
    loader: 'ignore-loader'
  }
];

module.exports = (env, options) => {
  // console.log(env);
  // console.log(options);
  console.log(`### running in ${options.mode} mode`);
  const mode = options.mode;
  dotenv.config(); // loads .env
  dotenv.config({
    path: `.env.${mode}`
  }); // loads & overwrite .env.[MODE] to .env
  console.log(process.env);

  const config = {
    target: 'web',
    mode: options.mode,
    entry: '/src/index.tsx',
    output: {
      // filename: 'main.[chunkhash].js',
      // path: path.resolve(__dirname, 'dist/assets/js'),
      filename: 'assets/js/main.[chunkhash].js',
      path: path.resolve(__dirname, 'dist'),
      publicPath: '/', // to make static resources in the asset directory absolute path
      clean: true
    },
    module: {
      rules
    },
    resolve: {
      extensions: ['.ts', '.tsx', '.js', '.md'],
      alias: {
        '@': path.resolve(__dirname, 'src')
      }
    },
    devServer: {
      static: path.join(__dirname, './'),
      port: 3000,
      historyApiFallback: { index: '/', disableDotRule: true }
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: 'index.html',
        inject: 'body',
        favicon: 'favicon.ico'
      }),
      new MiniCssExtractPlugin({
        filename: 'assets/css/[name].[chunkhash].css'
      }),
      new CopyWebpackPlugin({
        patterns: [
          { from: 'src/static/pages', to: 'pages', globOptions: { dot: true, ignore: ['**/*.bak'] } },
          { from: 'src/static/posts', to: 'posts', globOptions: { dot: true, ignore: ['**/*.bak'] } }
        ]
      }),
      new webpack.DefinePlugin({
        'process.env': JSON.stringify(process.env)
      }),
      new BundleAnalyzerPlugin({
        analyzerMode: 'static',
        openAnalyzer: false,
        generateStatsFile: true,
        statsFilename: 'bundle-report.json'
      })
    ]
  };
  return config;
};
