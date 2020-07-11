var HTMLWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const common = require('./webpack.common');
const merge = require('webpack-merge');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');

module.exports = merge(common,{
    mode:'production',/**By default, the mode is Production. In this case Webpack will minify the 
    contents of the main.js file.*/
    /*devtool:'none',/**By default, once the mode is Development, the code in main.js will usually be enclosed
    in multiple eval functions. To avoid this, we set the devtool selection to none. */
    output:{
       /* filename: 'hello.js',
        path: path.resolve(__dirname,'trial')/*This will take the current directory name in any machine 
        that is running the code and change it to trial. This trial folder/directory will have a hello.js*/
        filename:'[name].[contentHash].bundle.js',//name is in [] as we have multiple entry points
        path: path.resolve(__dirname,'dist')
    },
    optimization:{
        minimizer:[new OptimizeCSSAssetsWebpackPlugin(), 
            new TerserWebpackPlugin(),
            new HTMLWebpackPlugin({
                template:'./src/template.html',
                minify:{
                    removeAttributeQuotes: true,
                    removeComments:true,
                    collapseWhitespace: true
                }
            })    
        ]
    },
    plugins:[new MiniCSSExtractPlugin({
        filename:"[name].[contentHash].css"}),
        new CleanWebpackPlugin()],
        module:{
            rules:[
            {
                test:/\.css$/,//To check if the file has extension Css. If yes, use the loaders mentioned in use
                /**CSS-loader takes CSS and converts it into JS. MiniCSSExtractPlugin.loader extracts CSS
                 * into files.But there is a particular order to this. Works something like a BODMAS form,something like
                 * MiniCSSExtractPlugin.loaderloder(css-loader). So the execution is from right to left.
                 */
                use:[MiniCSSExtractPlugin.loader,
                'css-loader']
                
            },
            {
                test:/\.scss$/,
                /**MiniCSSExtractPlugin extracts CSS into files and css-loader converts it into a js
                 * file and the style-loader injects it into the DOM.
                */
                use:[MiniCSSExtractPlugin.loader,
                'css-loader',
                'sass-loader']
            }
        ]
    }
});