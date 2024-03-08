const webpack = require('webpack');

module.exports = {
  // other webpack configuration...
  resolve: {
    fallback: {
      "stream": require.resolve("stream-browserify")
    }
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery'
    })
  ]
};
