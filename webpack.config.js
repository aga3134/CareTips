//
var path = require("path");
var webpack = require("webpack");
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
	mode: "production", // "production" | "development" | "none"
	entry: {
		main: "./src/js/main.js"
	},
	output:{
		path: path.resolve(__dirname,'dist'),
		filename: "[name].js",
		publicPath: "/dist"
	},
	module:{
		rules: [
			{
				test: /\.js$/,
                loader: "babel-loader",
                include: [
					path.resolve(__dirname, "src")
				],
                exclude: /node_modules/
			},
			{
				test: /\.scss$/,
				use: ["style-loader","css-loader","sass-loader"]
			},
			{
				test: /\.vue$/,
				loader: "vue-loader"
			}
		]
	},
	plugins:[
		new VueLoaderPlugin()
	],
	devtool: "source-map"
};