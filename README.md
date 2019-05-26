webpack learn
1. css html 打包
   style-loader css-loader html-webpack-plugin
   css 提取(外联) mini-css-extract-plugin
2. less sass
   less less-loader
   node-sass sass-loader
3. postcss  autoprefixer
   postcss-loader autoprefixer
4. css, js压缩
   optimize-css-assets-webpack-plugin
   terser-webpack-plugin
5. CleanWebpackPlugin CopyWebpackPlugin
6. url-loader file-loader html-withimg-loader 处理图片
   html-withimg-loader 主要是处理<img src='../src/logo.png'/>
7. webpack-dev-server
8. es6 -> es5
   @babel-core babel-loader @babel/preset-env .babel.rc
   @babel/plugin-proposal-class-properties
   @babel/plugin-proposal-decorators
   @babel/plugin-transform-runtime
   @babel/polyfill
   @babel/runtime
9  eslint eslint-loader .eslintrc.json

10 解析第三方包
   expose-loader -> 暴露方法到window
   reslove -> 解析第三方包
   ProvidePlugin -> 内置插件，在每个模块中都会被注入
   cdn,externals
11 环境打包变量
    cross-env NODE_ENV='development' 可以定义环境变量， 获取的时候用process.env.NODE_ENV
    webpack.DefinePlugin({ DEV: '"development"'}) 可以通过DEV获取






