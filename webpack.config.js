const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
	mode: 'development',

	entry: ['@babel/polyfill', './src/js/index.js', './src/sass/main.scss'],

	output: {
		path: path.resolve(__dirname, 'public'),
		filename: '[name].bundle.js',
	},

	devtool: 'inline-source-map',

	plugins: [
		new CleanWebpackPlugin(),
		new MiniCssExtractPlugin({ filename: 'style.css' }),
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
			{
				test: /\.scss$/,
				use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
				exclude: /node_modules/,
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
