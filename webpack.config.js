const autoprefixer = require('autoprefixer')
const assets = require('postcss-assets')

module.exports = [{
	entry: ['./app.scss', './app.js'],
	output: {
		filename: 'bundle.js',
	},
	module: {
		rules: [
			{
				test: /\.scss$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: 'bundle.css',
						}
					},
					{ loader: 'extract-loader' },
					{ loader: 'css-loader' },
					{
						loader: 'postcss-loader',
						options: {
							plugins: () => [autoprefixer(), assets()]
						}
					},
					{
						loader: 'sass-loader',
						options: {
							sassOptions: {
								includePaths: ['./node_modules']
							}
						}
					}
				]
			},
			{
				test: /\.js$/,
				loader: 'babel-loader',
				query: {
					presets: ['@babel/preset-env'],
				},
			}
		]
	}
}]