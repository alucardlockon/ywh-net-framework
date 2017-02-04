//Webpack配置文件
var webpack = require('webpack');
//引用插件
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

const projDir = __dirname + '/ywh-net-framework/ywh-net-framework/content';

module.exports = {
  //devtool选项:source-map,cheap-module-source-map,eval-source-map,cheap-module-eval-source-map
  devtool: 'eval-source-map', 
  entry: projDir + "/src/js/main.js",
  output: {
    path: projDir + "/build/js",
    filename: "framework-main.js"
  },
  // loader配置
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        }
      },
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        loader: 'ts-loader'
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({ fallbackLoader: 'style-loader', loader: 'css-loader!postcss-loader' })
      },
      {
        test: /\.less$/,
        loader: ExtractTextPlugin.extract({ fallbackLoader: 'style-loader', loader: 'css-loader!less-loader!postcss-loader' })
      }
    ]
  },
  
  //插件配置
  plugins: [
    new HtmlWebpackPlugin({
      template: projDir+"/src/index.html"
    }),
    new webpack.optimize.UglifyJsPlugin(),
    new ExtractTextPlugin("[name]-[hash].css"),
    new webpack.LoaderOptionsPlugin({
      options: {
        //postcss调用添加前缀
        postcss: [
          require('autoprefixer')
        ],
        //devServer配置
        devServer: {
          contentBase: projDir + "/build/",
          colors: true,
          historyApiFallback: true,
          inline: true
        }
      }
    })
  ]
}