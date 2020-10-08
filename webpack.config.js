const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');
const webpack = require('webpack');

module.exports = {
	context: path.join(__dirname, 'src'),
	resolve: { extensions: ['.js', '.ts', '.tsx'] },
	entry: ['@babel/polyfill', './index.tsx'],
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js',
	},
	devtool: 'source-map',
	devServer: {
		contentBase: './dist',
		inline: true,
		host: 'localhost',
		port: 3000,
		stats: 'errors-only',
	},
	mode: 'development',
	module: {
		rules: [
			{
				test: /\.(ts|tsx)$/,
				exclude: /node_modules/,
				loader: 'awesome-typescript-loader',
				options: {
					useBabel: true,
					babelCore: '@babel/core',
				},
			},
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader'],
			},
			{
				test: /\.svg$/,
				use: [
					{
						loader: 'svg-url-loader',
						options: {
							limit: 10000,
						},
					},
				],
			},

			{
				test: /\.(sa|sc|c)ss$/,
				exclude: /node_modules/,
				use: [
					{
						loader: MiniCssExtractPlugin.loader,
						options: {
							hmr: true,
						},
					},
					'css-loader',
					'sass-loader',
				],
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			filename: 'index.html',
			template: 'index.html',
			hash: true,
		}),
		new webpack.HotModuleReplacementPlugin(),
		new MiniCssExtractPlugin({
			filename: '[name].css',
			chunkFilename: '[id].css',
		}),
	],
};
