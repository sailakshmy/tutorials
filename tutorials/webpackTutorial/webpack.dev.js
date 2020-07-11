var HTMLWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const common = require('./webpack.common');
const merge = require('webpack-merge');

module.exports = merge(common, {
    mode:'development',/**By default, the mode is Production. In this case Webpack will minify the 
    contents of the main.js file. Now, when we specify the mode as development, webpack will no longer
    minify the contents of the main.js file. */
    /*devtool:'none',/**By default, once the mode is Development, the code in main.js will usually be enclosed
    in multiple eval functions. To avoid this, we set the devtool selection to none. */
    //entry:'./src/index.js', //From now, we are explicitly stating that this should be the entry point
    output:{
       /* filename: 'hello.js',
        path: path.resolve(__dirname,'trial')/*This will take the current directory name in any machine 
        that is running the code and change it to trial. This trial folder/directory will have a hello.js*/
        filename:'[name].bundle.js',//Removing contentHash from the dev config file. 
        //name is in [] because we have multiple entry points now.
        path: path.resolve(__dirname,'dist')/**The path.resolve() method resolves a sequence of paths or 
        path segments into an absolute path.*/
    },
    module:{
        rules:[
        {
            test:/\.css$/,//To check if the file has extension Css. If yes, use the loaders mentioned in use
            /**CSS-loader takes CSS and converts it into JS. Style-Loader takes this JS and injects it into the
             * DOM.But there is a particular order to this. Works something like a BODMAS form,something like
             * style-loder(css-loader). So the execution is from right to left.
             */
            use:['style-loader','css-loader']
            
        },
        {
            test:/\.scss$/,
            /**sass-loader compiles a sass/scss file into a css file and css-loader converts it into a js
             * file and the style-loader injects it into the DOM.
            */
            use:['style-loader','css-loader','sass-loader']
        }]
    },
    plugins:[new HTMLWebpackPlugin({
        template:'./src/template.html'
    })]
   
   });