const webpack = require('webpack')
const UglifyjsWebpackPlugin = require('uglifyjs-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCSSAssetsWebpackPlugin = require ('optimize-css-assets-webpack-plugin')
const HtmlWeebpackPlugin = require('html-webpack-plugin')

module.exports = {
       mode : 'development',
       entry: './src/principal.js',
       output: {
          filename: 'principal.js',
          path: __dirname + '/build'
       },
       devServer: {
           contentBase: "./build",
           port: 9000
       },
       plugins: [
          new MiniCssExtractPlugin ({
              filename: "estilo.css"
          })
       ]
}