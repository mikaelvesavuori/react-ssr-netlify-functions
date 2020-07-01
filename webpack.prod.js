const webpack = require("webpack");
const merge = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
	optimization: {
		minimize: true,
		// Just assuming a single bundle in this demo
		// splitChunks: {
		// 	chunks: "all"
		// }
	},
	plugins: [
		new webpack.HashedModuleIdsPlugin(),
		new webpack.optimize.ModuleConcatenationPlugin(),
	],
});
