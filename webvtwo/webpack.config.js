const webpack = require('webpack');

module.exports = {
  // other webpack configuration...
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery'
    })
  ]
};
