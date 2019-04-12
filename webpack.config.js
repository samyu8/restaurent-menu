const path = require('path');
const webpack = require('webpack');

var HTMLWebpackPlugin = require('html-webpack-plugin');
var HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
	template: __dirname+ '/app/index.html',
	filename: 'index.html',
	inject: 'body'
});
module.exports = {
	entry: __dirname + '/app/index.js',
	module: {
		rules: [
			{
				test: '/\.js$/',
				exclude: /node_modules/,
				loaders: ["babel-loader"],
			},
			{
		        test: /\.jsx?$/,
		        loaders: ["babel-loader"],
		        exclude: /node_modules/
		    },
		    {
		        test: /\.css$/,
		        use: ['style-loader', 'css-loader'],
		    }
		]
	},
	output: {
		filename: 'transformed.js',
		path: __dirname + '/build'
	},
	plugins: [HTMLWebpackPluginConfig]
};