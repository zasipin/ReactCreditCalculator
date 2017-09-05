var webpack = require('webpack');
var path = require('path');

var NODE_ENV = process.env.NODE_ENV = process.env.NODE_ENV || 'development';

module.exports = {
  context: __dirname, // string (absolute path!)
  // the home directory for webpack
  // the entry and module.rules.loader option
  //   is resolved relative to this directory

  // entry: {
  //   vendor: ['script!jquery/dist/jquery.min.js',
  //            'script!foundation-sites/dist/foundation.min.js',
  //            'script!react/dist/react.min.js'],
  //   app: './app/app.jsx'
  // },
  entry: [
    //  'script!jquery/dist/jquery.min.js',
    //  'script!foundation-sites/dist/foundation.min.js',
    
    // 'script!foundation-sites/js/foundation.core.js',
    // 'script!foundation-sites/js/foundation.util.triggers.js',
    // 'script!foundation-sites/js/foundation.util.mediaQuery.js',
    // 'script!foundation-sites/js/foundation.responsiveMenu.js',

    './app/app.jsx'
  ],
  externals: {
    // jquery: 'jQuery'
  },
  plugins: [
    // new webpack.ProvidePlugin({
    //  '$': 'jquery',
    //  'jQuery': 'jquery'      
    // })
    // ,

    // new webpack.optimize.CommonsChunkPlugin({
    //   name: "common",

    //   filename: "./public/common.js"
    // //   // (Give the chunk a different name)

    // //   minChunks: Infinity,
    // //   // (with more entries, this ensures that no other module
    // //   //  goes into the vendor chunk)
    // })
  ],
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  resolve: {
    // root: __dirname,
    modules: [
      'node_modules',
      path.resolve(__dirname, "app/components"),
      path.resolve(__dirname, "app/api"),
      './app/components',
      './app/api'
    ],
    // extensions: [".js", ".json", ".jsx", ".css", ".scss"],
    // extensions that are used

    alias: {
      // Main: 'app/components/Main.jsx',
      app: path.resolve(__dirname, 'app'),
      applicationStyles: path.resolve(__dirname, 'app/styles/app.scss'),
      actions: path.resolve(__dirname, 'app/actions/actions.jsx'),
      reducers: path.resolve(__dirname, 'app/reducers/reducers.jsx'),
      configureStore: path.resolve(__dirname, 'app/store/configureStore.jsx'),
      AnnuitetCredit: path.resolve(__dirname, 'app/models/AnnuitetCredit.jsx'),
      AnnuitetMonthlyPayment: path.resolve(__dirname, 'app/models/AnnuitetMonthlyPayment.jsx')
    },
    extensions: ['.js', '.jsx']
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0']
        },
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/        
      },
      {
        loader: 'sass-loader',
        test: /\.scss?$/,
        include: [
          path.resolve(__dirname, './node_modules/foundation-sites/scss')
        ]
      }
    ]
  },
  //noParse: /(jquery)/, 
  devtool: process.env.NODE_ENV === 'production' ? undefined : 'cheap-module-eval-source-map'
};

if(NODE_ENV == 'production'){
  module.exports.plugins.push(
    new webpack.optimize.UglifyJsPlugin({
      // warnings: false,
      // drop_console: true,
      compress: {
        warnings: false,
        drop_console: false,
        unsafe: true,
      }
    })
  );
  module.exports.plugins.push(
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')      
    })
  )
}