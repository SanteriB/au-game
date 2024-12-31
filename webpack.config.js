const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    mode: "development",
    entry: "./src/app.js",
    output: { 
        filename: "bundle.js", 
        path: path.resolve(__dirname, "dist"), 
    },
    devServer: { 
        static: { 
            directory: path.join(__dirname, "dist"),
        }, 
        compress: true, 
        port: 8000,
        open: true,
    },
    plugins: [ 
        new HtmlWebpackPlugin({ 
            template: "./src/index.html",
            inject: "body"
        }), 
        new MiniCssExtractPlugin({ 
            filename: "styles.css", 
        }),
    ],
    module: { 
        rules: [ 
            { 
                test: /\.js$/, 
                exclude: /node_modules/, 
                use: { loader: "babel-loader", }, 
            }, 
            { 
                test: /\.scss$/, 
                use: [ 
                    MiniCssExtractPlugin.loader, 
                    "css-loader", 
                    "sass-loader", 
                ], 
            },
        ], 
    }, 
};