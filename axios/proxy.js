module.exports = {
  proxy: {
    '/devproxy': {
      changeOrigin: true,
      target: 'http://production.env',
      pathRewrite: {
        '^/devproxy': '/',
      }
    }
  }
}
