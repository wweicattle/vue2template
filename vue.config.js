module.exports = {
  
  lintOnSave: false,
  css: {
    loaderOptions: {
      css: {},
      postcss: {
        plugins: [
          require('postcss-px2rem')({
            remUnit: 37.5
          })
        ]
      }
    }
  },
  devServer: {
    proxy: {
      '/api': {
        target: 'http://webt.lilang.com:8901/svr-develop/',
        pathRewrite: {
          changeOrigin: true,
          '^/api': ''
        }
      },
      '/user': {
        target: 'http://tm.lilanz.com/oa/project/MobileApplyCheck/applycheckcore.ashx',
        changeOrigin: true,
        pathRewrite: {
          '^/user': ''
        }
      }
    }
  },
  configureWebpack: {
    resolve: {
      alias: {
        "assets": "@/assets",
        "network": "@/network",
        "components": "@/components",
        "views": "@/views",
        "utils": "@/utils",
      }
    }
  }
}
