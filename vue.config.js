module.exports = {
  publicPath: process.env.BASE_URL || '/',
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
