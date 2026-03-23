const path = require("path"); // Caminho do arquivo
const HtmlWebPackPlugin = require("html-webpack-plugin"); // Plugin para html do webpack
const CopyWebPackPlugin = require("copy-webpack-plugin"); // Plugin para o css do webpoack
const MiniCssExtractPlugin = require("mini-css-extract-plugin")


module.exports = {
	target: "web",
	mode: "development",
	entry: path.resolve(__dirname, "src", "main.js"),
	output: {
		filename: "main.js",
		path: path.resolve(__dirname, "dist"),
	},
	devServer: {
		static: {
			directory: path.resolve(__dirname, "dist"),
		},
		port: 3000,
		open: true,
		liveReload: true,
	},
	plugins: [
		new HtmlWebPackPlugin({
			template: path.resolve(__dirname, "index.html"),
			favicon: path.resolve("src", "assets", "pen.png"),
		}),

		new CopyWebPackPlugin({
			patterns: [
				{
					from: path.resolve(__dirname, "src", "assets"),
					to: path.resolve(__dirname, "dist", "src", "assets"),
				},
			],
		}),
		new MiniCssExtractPlugin({
			filename: "styles.css"
		})
	],
	module: {
		rules: [
			{
				test: /\.css$/,
				use: [
					MiniCssExtractPlugin.loader,
					"css-loader"
				],
			},
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env"]
                    }
                }
            }
		],
	},
};
