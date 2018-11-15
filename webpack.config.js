
var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');

module.exports = {
    entry: [
           '@babel/polyfill',
           './students.js'
        ],

    module: {
        rules: [
        {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        },
        ],
    },
    plugins: [
           //Generate index.html in /dist => https://github.com/ampedandwired/html-webpack-plugin
           new HtmlWebpackPlugin({
             filename: 'index.html', //Name of file in ./dist/
             template: 'index.html', //Name of template in ./src
             hash:true,
            }),
            new webpack.ProvidePlugin({
                     $: "jquery",
                     jQuery: "jquery"
                   }),    
         ],
};