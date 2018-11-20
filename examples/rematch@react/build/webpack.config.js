const path = require('path')
const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin')
const HappyPack = require('happypack')
const os = require('os')
const { getDllReferencePlugin, getHtmlWebpackPlugin, environmentPlugin } = require('./utils')
const project = require('../project.config')
const deploy = require('../deploy.config')

const context = project.globals.__DESKTOP__ ? '' : '/'
const environment = environmentPlugin(deploy)
const happyThreadPool = HappyPack.ThreadPool({ size: os.cpus().length })
const scssLoader = [
  {
    loader: 'css-loader?minimize',
    options: {
      sourcemap: true
    }
  },
  {
    loader: 'postcss-loader',
    
  },
  {
    loader: 'sass-loader',
    options: {
      sourcemap: true
    }
  }
]

const config = {
  context: path.resolve(process.cwd(), project.srcDir),
  entry: project.entry,
  output: {
    path: path.resolve(process.cwd(), project.outDir),
    filename: '[name].bundle.js',
    publicPath: project.publicPath
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
    alias: project.alias
  },
  plugins: getDllReferencePlugin(
    new webpack.DefinePlugin({
      'PROJECT_ENV': JSON.stringify({ ...environment, context }),
      ...project.globals
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css"
    }),
    ...getHtmlWebpackPlugin(context, project.htmlplugins),
    new CopyWebpackPlugin(project.copys || []),
    new LodashModuleReplacementPlugin({
      'shorthands'  : true,
      'collections' : true,
      'paths'       : true
    }),
    new HappyPack({
      id: 'happy-babel-js',
      loaders: ['babel-loader?cacheDirectory=true'],
      threadPool: happyThreadPool
    }),
    new HappyPack({
      id: 'happy-json',
      loaders: ['json-loader'],
      threadPool: happyThreadPool
    }),
  ),
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules|vendor|bootstrap/,
        loader: 'happypack/loader?id=happy-babel-js'
      },
      {
        test : /\.json$/,
        exclude: /src/,
        loader: 'happypack/loader?id=happy-json'
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader'
        ]
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          ...scssLoader
        ]
      },
      {
        test: /\.(png|jpe?g|gif)$/,
        loader: 'url-loader',
        options: {
          limit: 8192,
          name: '[path][name].[ext]?[hash]'
        }
      },
      {
        test: /\.(ttf|eot|svg|woff|woff2)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file-loader',
        options: {
          limit: 8192,
          name: '[path][name].[ext]'
        }
      }
    ]
  },
  performance: {
    maxEntrypointSize: 4000000,
    maxAssetSize: 3000000
  },
  devtool: 'source-map'
}

module.exports = config