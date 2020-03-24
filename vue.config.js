module.exports = {
  publicPath: process.env.PUBLIC_PATH || '/',
  devServer: {
    proxy: {
      '/api': {
        target: 'http://yapi.hikcreate.com/mock/260',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
}
