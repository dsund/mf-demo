const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack').container.ModuleFederationPlugin;
const path = require('path');
const deps = require('./package.json').dependencies;

module.exports = {
	entry: './src/index',
	mode: 'development',
	devServer: {
		contentBase: path.join(__dirname, 'dist'),
		port: 3010,
	},
	output: {
		publicPath: 'auto',
	},
	resolve: {
		extensions: ['.ts', '.tsx', '.js', '.jsx'],
	},
	module: {
		rules: [
			{
				test: /bootstrap\.tsx$/,
				loader: 'bundle-loader',
				options: {
					lazy: true,
				},
			},
			{
				test: /\.tsx?$/,
				loader: 'babel-loader',
				exclude: /node_modules/,
				options: {
					presets: ['@babel/preset-react', '@babel/preset-typescript'],
				},
			},
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader'],
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './public/index.html',
		}),
		new ModuleFederationPlugin({
			name: 'main',
			remotes: {
				components: 'components@http://localhost:3001/remoteEntry.js',
				//userinfo: 'userinfo@http://localhost:3011/remoteEntry.js',
			},
			exposes: {},
			shared: {
				react: {
					singleton: true,
					eager: true,
					requiredVersion: deps['react'],
				},
				'react-dom': {
					singleton: true,
					eager: true,
					requiredVersion: deps['react-dom'],
				},
				'styled-components': {
					singleton: true,
					eager: true,
					requiredVersion: deps['styled-components'],
				},
				
			},
		}),
	],
};
