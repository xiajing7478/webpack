/**
 * @author xiajing
 * @date 2019/5/23 17:22
 */
const path = require('path')
const getPath = (dir) => path.resolve(__dirname, dir)
const CleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  mode: 'production', // 2种, development 和 production
  entry: getPath('src/index.js'), // 入口文件
  output: {  // 打包的输出文件
    filename: 'bundle.[hash:8].js',
    path: getPath('dist'),
  },
  module: { // 模块
    rules: [ // 规则
      { test: /\.css$/, use: ['style-loader', 'css-loader']}
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: getPath('index.html'),
      filename: 'index.html',
      hash: true,
      minify: { // 压缩
        removeAttributeQuotes: true, // 是否去除引号
        collapseWhitespace: true // 是否去掉空行
      }
    })
  ]
}
