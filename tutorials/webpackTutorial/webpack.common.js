//var HTMLWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
module.exports = {
    /*mode:'development'- Commenting out mode */
    /*devtool:'none',/**By default, once the mode is Development, the code in main.js will usually be enclosed
    in multiple eval functions. To avoid this, we set the devtool selection to none. */
    entry:{
        //Now we have 2 entry points.
        main:'./src/index.js', //From now, we are explicitly stating that this should be the entry point
        vendor:'./src/vendor.js'//This is for the code in the vendor files
    },
      /* output:{
       /* filename: 'hello.js',
        path: path.resolve(__dirname,'trial')/*This will take the current directory name in any machine 
        that is running the code and change it to trial. This trial folder/directory will have a hello.js
        filename:'main.[contentHash].js',
        path: path.resolve(__dirname,'dist')
    },//Commenting it out from this file*/
    module:{
        rules:[
        /*{
            test:/\.css$/,//To check if the file has extension Css. If yes, use the loaders mentioned in use
            /**CSS-loader takes CSS and converts it into JS. Style-Loader takes this JS and injects it into the
             * DOM.But there is a particular order to this. Works something like a BODMAS form,something like
             * style-loder(css-loader). So the execution is from right to left.
             */
         /*   use:['style-loader','css-loader']
            
        },
        {
            test:/\.scss$/,
            /**sass-loader compiles a sass/scss file into a css file and css-loader converts it into a js
             * file and the style-loader injects it into the DOM.
            */
          /*  use:['style-loader','css-loader','sass-loader']
        },*/
        {
            test:/\.html$/,
            /**html loader is importing the asset into js but webpack does not know what to do with it. */
            use:['html-loader']
        },
        {
            test:/\.(svg|gif|jpeg|jpg|png)$/,
            use:{
                loader: "file-loader",
                options:{
                    /**What this does is , it will create a folder imgs in the dist folder and that
                     * folder will have all the images with the name followed by a hashing(for cache
                     * busting) followed by the extension.
                     */
                    name: "[name].[hash].[ext]",
                    outputPath: 'imgs'
                }
            }
        }
    ]
    },
   /* plugins:[new HTMLWebpackPlugin({
        template:'./src/template.html'
    })]*/

}