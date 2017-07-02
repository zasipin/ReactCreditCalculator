var webpack = require('webpack');
var path = require('path');

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

module.exports = {
  // entry: {
  //   vendor: ['script!jquery/dist/jquery.min.js',
  //            'script!foundation-sites/dist/foundation.min.js',
  //            'script!react/dist/react.min.js'],
  //   app: './app/app.jsx'
  // },
  entry: [
    'script!jquery/dist/jquery.min.js',
    'script!foundation-sites/dist/foundation.min.js',
    
    // 'script!foundation-sites/js/foundation.core.js',
    // 'script!foundation-sites/js/foundation.util.triggers.js',
    // 'script!foundation-sites/js/foundation.util.mediaQuery.js',
    // 'script!foundation-sites/js/foundation.responsiveMenu.js',

    './app/app.jsx'
  ],
  externals: {
    jquery: 'jQuery'
  },
  plugins: [
    new webpack.ProvidePlugin({
      '$': 'jquery',
      'jQuery': 'jquery'      
     })
  //   ,

  //   new webpack.optimize.CommonsChunkPlugin({
  //     name: "vendor",

  //     filename: "vendor.js",
  //     // (Give the chunk a different name)

  //     minChunks: Infinity,
  //     // (with more entries, this ensures that no other module
  //     //  goes into the vendor chunk)
  //   })
  ],
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  resolve: {
    root: __dirname,
    modulesDirectories: [
      'node_modules',
      './app/components',
      './app/api'
    ],

    alias: {
      // Main: 'app/components/Main.jsx',
      app: 'app',
      applicationStyles: 'app/styles/app.scss',
      actions: 'app/actions/actions.jsx',
      reducers: 'app/reducers/reducers.jsx',
      configureStore: 'app/store/configureStore.jsx',
      AnnuitetCredit: 'app/models/AnnuitetCredit.jsx',
      AnnuitetMonthlyPayment: 'app/models/AnnuitetMonthlyPayment.jsx'
    },
    extensions: ['', '.js', '.jsx']
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
      }
    ]
  },
  sassLoader: {
    includePaths: [
      path.resolve(__dirname, './node_modules/foundation-sites/scss')
    ]
  },
  devtool: process.env.NODE_ENV === 'production' ? undefined : 'cheap-module-eval-source-map'
};
