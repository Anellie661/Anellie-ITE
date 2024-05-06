const webpack = require('webpack');

module.exports = {
chainWebpack: config => {
config.module
.rule('vue')
.use('vue-loader')
.tap(options => {
  options.compilerOptions = {
isCustomElement: tag => tag.startsWith('v-')
};
return options;
});
},
configureWebpack: {
plugins: [
new webpack.DefinePlugin({
__VUE_PROD_HYDRATION_MISMATCH_DETAILS__: 'false',
}),
],
devServer: {
  proxy: {
    '/api': { // Matches all requests starting with '/api'
      target: 'http://localhost:8000', // Replace with your backend URL
      pathRewrite: {'^/api' : ''}, // Remove '/api' prefix from proxied requests
      changeOrigin: true // Allow requests to have the target server's origin
    }
  }
}
}
};