const path = require("path");
const webpack = require("webpack");

const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const ScriptExtHtmlWebpackPlugin = require("script-ext-html-webpack-plugin");

const assetsDir = path.resolve(__dirname, "src/assets/");
const srcDir = path.resolve(__dirname, "src/");
const distDir = path.resolve(__dirname, "dist/client");

module.exports = {
	watch: false,
	context: srcDir,
	entry: {
		app: "./index.js",
	},
	output: {
		path: distDir,
		filename: "[name].js", //[hash]; Assume single bundle for this demo
		publicPath: "/",
	},
	resolve: {
		modules: [
			path.resolve(__dirname, "node_modules"),
			path.resolve(__dirname, "src"),
			path.resolve(__dirname, "./"),
		],
		extensions: [
			".js",
			".jsx",
			".css",
			".html",
			".jpg",
			".jpeg",
			".svg",
			".png",
			".woff2",
			".woff",
		],
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				use: [
					{
						loader: "babel-loader",
					},
				],
				exclude: /node_modules/,
			},
			{
				test: /\.css$/i,
				use: ["style-loader", "css-loader"],
			},
			{
				test: /\.(jpg|jpeg|svg|png|woff2|woff)$/,
				use: [
					{
						loader: "file-loader",
						options: {
							name: "[path][name].[ext]",
							emitFile: false,
						},
					},
				],
				include: assetsDir,
				exclude: /node_modules/,
			},
			{
				test: /\.html$/,
				use: [
					{
						loader: "html-loader",
					},
				],
				exclude: /node_modules/,
			},
		],
	},
	plugins: [
		new CopyWebpackPlugin([
			{
				from: `${srcDir}/assets/`,
				to: `${distDir}/assets/`, // Ugly as shit, but is a fix until we manage to get paths to work correctly again
			},
		]),
		new HtmlWebpackPlugin({
			template: path.join(srcDir, "index.html"),
			path: distDir,
			filename: "index.html",
			minify: {
				collapseInlineTagWhitespace: true,
				collapseWhitespace: true,
				removeComments: true,
				removeRedundantAttributes: true,
			},
		}),
	],
};
