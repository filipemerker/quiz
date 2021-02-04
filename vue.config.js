module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/' : '/',
  outputDir: 'docs',
  pwa: {
    themeColor: '#312e81',
  },
}
