const autoprefixer = require('autoprefixer')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const path = require('path')
const StringReplacePlugin = require('string-replace-webpack-plugin')
const webpack = require('webpack')

const sassExtractor = new ExtractTextPlugin('[name].css')
const htmlExtractor = new ExtractTextPlugin('html', '[name].html')

const isProd = process.env.NODE_ENV == 'production'
const srcPath = path.join(__dirname, 'src')
const jsRootPath = path.join(__dirname, 'src', 'js')
const destPath = path.join(__dirname, 'dist')

console.log(`Packaging for ${(isProd ? 'production' : 'dev')}...`)

const entries = isProd ? [] : [
  'webpack-dev-server/client?http://localhost:3001/',
  'webpack/hot/only-dev-server',
  'react-hot-loader/patch'
]

const sassLoaders = [
  'css-loader?sourceMap',
  'postcss-loader',
  'sass-loader?sourceMap&indentedSyntax=sass&includePaths[]=' + srcPath
]

const plugins = isProd ? [
  new webpack.DefinePlugin({
    'process.env':{
      'NODE_ENV': JSON.stringify('production')
    }
  }),
  new webpack.optimize.UglifyJsPlugin({
    compress: {
      warnings: true
    }
  })
] : [
]

const evalDoubleBracesLoader = (context) => {
  for (var key in context) {
    var value = context[key]
    eval('var ' + key + ' = ' + JSON.stringify(value))
  }

  return StringReplacePlugin.replace({
    replacements: [{
      pattern: /{{\s(.*)\s}}/g,
      replacement: function(match, p1, offset, string) {
        return eval(p1)
      }
    }]
  })
}

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
  plugins: plugins.concat([
    new StringReplacePlugin(),
    sassExtractor,
    htmlExtractor
  ]),
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: isProd ? ['babel'] : ['react-hot-loader/webpack', 'babel'],
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
      },
      {
        test: /index\.html$/,
        loader: evalDoubleBracesLoader(require('./config.json'))
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
    root: [jsRootPath]
  }
}
