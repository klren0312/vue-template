module.exports = {
  baseUrl: '/',
  "devServer": {
    "proxy": {
      "/api": {
        "target": "https://easy-mock.com/mock/5ab30f2c196746052ecd49ee/example",
        "ws": true,
        "changeOrigin": true,
        "pathRewrite": {
          "^/api": ""
        }
      }
    }
  }
}