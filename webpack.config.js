/**
 * @author xiajing
 * @date 2019/5/23 17:22
 */
const path = require('path')
const webpack = require('webpack')
const getPath = (dir) => path.resolve(__dirname, dir)
const CleanWebpackPlugin = require('clean-webpack-plugin') // 清除目录
const HtmlWebpackPlugin = require('html-webpack-plugin') // html模板
const CssExtractPlugin = require('mini-css-extract-plugin') // css提取
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
// const HtmlWithImgLoader = require('html-withimg-loader')
// const TerserWebpackPlugin = require('terser-webpack-plugin')
module.exports = {
  mode: 'development', // 2种, development 和 production
  entry: ['@babel/polyfill', getPath('src/index.js'),], // 入口文件
  output: {  // 打包的输出文件
    filename: 'bundle.[hash:8].js',
    path: getPath('dist')
  },
  devServer: {
    contentBase: getPath('dist'), // 指定了服务器资源的根目录,如果不写入contentBase的值，那么contentBase默认是项目的目录
    port: 8888,
    // hot: true,
    // progress: true,
    // compress: true, // 设置为true的时候对所有的服务器资源采用gzip压缩
    historyApiFallback: true, //用来应对返回404页面时定向到特定页面用
    // inline: true,
    overlay: true // 编译出错的时候，在浏览器页面上显示错误
    // historyApiFallback:{
    //   rewrites:[
    //     {from: /.*/g, to:'/404.html'}
    //   ]
    // }
  },
  module: { // 模块
    rules: [ // 规则
      { test: /\.js$/, use: 'babel-loader', include: getPath('src'), exclude: /node_modules/},
      { test: /\.css$/, use: [CssExtractPlugin.loader, 'css-loader', 'postcss-loader']},
      { test: /\.less/,
        use: [
          CssExtractPlugin.loader, 'css-loader', 'less-loader', 'postcss-loader'
        ]
      },
      { test: /\.scss/,
        use: [
          CssExtractPlugin.loader, 'css-loader', 'sass-loader', 'postcss-loader'
        ]
      },
      {
        test: /\.(jpg|jpeg|png)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 100 * 1024,
            name: '[name].[ext]'
          }
        }
      },
      {
        test: /\.html$/,
        use: 'html-withimg-loader'
      }
    ]
  },
  // optimization: { // 优化
  //   minimizer: [
  //     new OptimizeCSSAssetsPlugin({})
  //   ]
  // },
  plugins: [
    new CleanWebpackPlugin(),
    new CssExtractPlugin({
      filename: 'main.[hash:8].css'
    }),
    new OptimizeCSSAssetsPlugin(),
    new CopyWebpackPlugin([
      {
        from : getPath('static'),
        to: './static',
        ingore: ['.*']
      }
    ]),
    new HtmlWebpackPlugin({
      template: getPath('index.html'),
      filename: 'index.html'
      // hash: true,
      // minify: { // 压缩
      //   removeAttributeQuotes: true, // 是否去除引号
      //   collapseWhitespace: true // 是否去掉空行
      // }
    })
    // new webpack.HotModuleReplacementPlugin()
  ]
}
