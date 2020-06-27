const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
	mode: 'development',

	entry: ['@babel/polyfill', './src/index.js'],

	output: {
		path: path.resolve(__dirname, 'public/js'),
		filename: '[name].bundle.js',
	},

	devtool: 'inline-source-map',

	plugins: [
		new CleanWebpackPlugin(),
		new HtmlWebpackPlugin({
			title: 'Mobile Authentication',
			filename: './index.html',
		}),
	],

	module: {
		rules: [
			{
				test: /\.js$/,
				include: [path.resolve(__dirname, 'src/')],
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env'],
						plugins: ['@babel/plugin-proposal-class-properties'],
					},
				},
			},
		],
	},

	devServer: {
		port: 8000,
		inline: true,
		overlay: true,
		historyApiFallback: true,
		hot: true,
		open: true,
		compress: true,
		contentBase: path.join(__dirname, 'public'),
	},
};
