var webpack = require('webpack');
var htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	watch: true,
	entry: {
		app: ['./src/app.js'],
	},
	output: {
		path: __dirname + '/dist',
		filename: '[name].js'
		// filename: '[name]-[hash].js'
	},
	module: {
		loaders: [
			{
		        test: /\.vue$/,
		        loader: 'vue-loader'
		    },
			{
				test: /\.js$/,
				loader: 'babel-loader',
				exclude: /node_modules/
			},
			{ 
				test: /\.(png|jpg|gif|svg|ttf|woff|eot)$/, 
				loader: 'url-loader', 
				query: { 
					limit: 10000, 
					name: '[name].[ext]?[hash]'
				} 
			},
			{ 
				test: /\.css$/, 
				loader: ['style-loader', 'css-loader'] 
			},
		]
	},
	devServer: {
		historyApiFallback: true,
    	noInfo: true
	},
	resolve: {
		alias: {
			'src': './src'
		}
	},
	plugins: [
		/*new webpack.optimize.UglifyJsPlugin({
		    compress: {
		        warnings: false
		    }
		}),*/
		new htmlWebpackPlugin({
			template: './src/index.html',
			filename: 'index.html',
			inject: 'body'
		})
	],
	devtool: 'eavl-source-map'
};