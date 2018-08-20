//
var path = require("path");
var webpack = require("webpack");
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

var extractCSSPlugin = new MiniCssExtractPlugin({
	filename: "[name].css",
	chunkFilename: "[id].css"
});

module.exports = {
	mode: "production", // "production" | "development" | "none"
	entry: {
		main: ["./src/js/main.js","./src/scss/main.scss"]
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
			{	//for vue component style
				test: /\.scss$/,
				include: [
					path.resolve(__dirname, "src/vue")
				],
				use: ["style-loader","css-loader","sass-loader"]
			},
			{
				test: /\.vue$/,
				loader: "vue-loader"
			},
			{	//convert scss to css
            	test: /\.scss$/,
            	include: [
					path.resolve(__dirname, "src/scss")
				],
            	use: [
		          MiniCssExtractPlugin.loader,
		          'css-loader',
		          'sass-loader',
		        ]
            },
		]
	},
	plugins:[
		new VueLoaderPlugin(),
		extractCSSPlugin
	],
	devtool: "source-map"
};