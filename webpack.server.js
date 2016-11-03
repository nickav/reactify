var webpack = require('webpack')
var WebpackDevServer = require('webpack-dev-server')
var config = require('./webpack.config')
var spawn = require('child_process').spawn

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  contentBase: './dist',
  hot: true,
  historyApiFallback: true,
  stats: { colors: true, errorDetails: true },
  proxy: {
    '/api': {
      target: 'http://localhost:3000/',
      secure: false
    }
  }
}).listen(3001, 'localhost', function (err, result) {
  if (err) {
    return console.log(err)
  }

  console.log('Listening on http://localhost:3001/')
  spawn('open', ['http://localhost:3001/'])
});
