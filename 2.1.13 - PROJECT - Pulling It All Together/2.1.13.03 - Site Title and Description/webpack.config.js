var path = require('path');
var UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  entry: ['./src/App.js'],
  output: {
    filename: 'bundle.min.js',
    path: path.resolve(__dirname, 'dist')
  },
	devtool: "cheap-eval-source-map",
	devServer: {
		port: 9000,
		contentBase: path.join(__dirname, "dist")
	},
	module: {
	  rules: [
	    {
	      test: /\.js$/,
	      exclude: /(node_modules)/,
	      loader: 'babel-loader',
	      query: {
	        presets: ['es2015']
	      }
	    }
	  ]
	},
	plugins: [
    new UglifyJSPlugin()
  ]
};
