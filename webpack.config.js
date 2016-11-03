const autoprefixer = require('autoprefixer')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const path = require('path')
const webpack = require('webpack')

const sassExtractor = new ExtractTextPlugin('[name].css')
const htmlExtractor = new ExtractTextPlugin('html', '[name].html')

const isProd = process.env.NODE_ENV == 'production'
const srcPath = path.join(__dirname, 'src')
const destPath = path.join(__dirname, 'dist')

const entries = isProd ? [] : [
  'webpack-dev-server/client?http://localhost:3001/',
  'webpack/hot/only-dev-server',
]

const sassLoaders = [
  'css-loader?sourceMap',
  'postcss-loader',
  'sass-loader?sourceMap&indentedSyntax=sass&includePaths[]=' + srcPath
]

module.exports = {
  devtool: isProd ? '' : 'cheap-module-source-map',
  entry: {
    index: entries.concat([
      './src/entry.js'
    ])
  },
  output: {
    path: destPath,
    filename: '[name].js',
    publicPath: '/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    sassExtractor,
    htmlExtractor
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['react-hot', 'babel'],
        exclude: /node_modules/,
        include: srcPath
      },
      {
        test: /\.json$/,
        loader: 'json'
      },
      {
        test: /\.html$/,
        loader: htmlExtractor.extract('html?attrs=script:src:href')
      },
      {
        test: /\.scss$/,
        loader: sassExtractor.extract('style-loader', sassLoaders.join('!'))
      },
      {
        test: /\.(png|otf|eot|svg|ttf|woff2?)(\?.*)?$/,
        loader: 'url?limit=8192&name=[path][name].[ext]&context=./src'
      }
    ]
  },
  postcss: [
    autoprefixer({
      browsers: ['last 2 versions']
    })
  ],
  resolve: {
    extensions: ['', '.js', '.json', '.scss'],
    root: [srcPath]
  }
}
