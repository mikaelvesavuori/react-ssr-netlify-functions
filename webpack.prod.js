const webpack = require("webpack");
const merge = require("webpack-merge");
const common = require("./webpack.common.js");

const WorkboxPlugin = require("workbox-webpack-plugin");

module.exports = merge(common, {
	optimization: {
		minimize: true
		// Just assuming a single bundle in this demo
		// splitChunks: {
		// 	chunks: "all"
		// }
	},
	plugins: [
		new webpack.HashedModuleIdsPlugin(),
		new webpack.optimize.ModuleConcatenationPlugin(),
		new WorkboxPlugin.GenerateSW({
			clientsClaim: true,
			directoryIndex: "index.html",
			navigateFallback: "index.html",
			skipWaiting: true,
			swDest: "sw.js"
		})
	],
	performance: {
		maxEntrypointSize: 256000,
		maxAssetSize: 256000,
		hints: "warning"
	}
});
