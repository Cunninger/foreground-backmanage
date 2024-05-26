const { defineConfig } = require('@vue/cli-service')
const webpack = require('webpack')
module.exports = defineConfig({
  configureWebpack: {
    plugins: [
      new webpack.ProvidePlugin(
        { 'window.Quill': 'quill/dist/quill.js',
         'Quill': 'quill/dist/quill.js' 
        })
    ]
  },
  transpileDependencies: true,
  devServer: {
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:7788', // 目标服务器地址
        changeOrigin: true, // 需要虚拟托管站点，以能够代理 websocket
        pathRewrite: {
          '^/api': '' // 将/api重写为""，即去掉路径中的/api
        }
      },
      '/chatapi': {
        target: 'http://127.0.0.1:7788', // 目标服务器地址
        changeOrigin: true, // 需要虚拟托管站点，以能够代理 websocket
        pathRewrite: {
          '^/chatapi': '' // 将/api重写为""，即去掉路径中的/api
        }
      },
      '/savechatapi': {
        target: 'http://127.0.0.1:7788', // 目标服务器地址
        changeOrigin: true, // 需要虚拟托管站点，以能够代理 websocket
        pathRewrite: {
          '^/savechatapi': '' // 将/api重写为""，即去掉路径中的/api
        }
      }

    }
  }
});
