const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    //changin dev mode to development
    mode : "development",
    //for removing eval
    devtool : false,
    //entrypoint
    entry : "./src/index.js",
    //modifying outputs
    output : {
        filename : "main.[contenthash].js",
        path : path.resolve(__dirname,"dist")
    },
    plugins: [new HtmlWebpackPlugin({
        template : "./src/template.html"
    })],
    module:{
        rules : [
            {
                // test: /\.css$/, //selects all css files
                test: /\.scss$/,
                //style loader adds css to the dom by inject a style tag
                //css loader collects all the css files
                use: [
                     //order should be the same
                    'style-loader', //3rd Inject styles into dom
                    'css-loader', //2nd Turns css into commonJS
                    'sass-loader' //1st This happens first
                ]
            }
        ]
    }
}