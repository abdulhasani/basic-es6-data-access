/**
 * Created by Hasani on 3/8/2017.
 */
var path = require ('path');
var webpack = require ('webpack');

module.exports = {
    entry: './js/app.js',
    output: {
        path: path.resolve(__dirname,'build'),
        filename: 'main.bundle.js'
    },
    module:{
        loaders:[{
            test:/\.js$/,
            loader: 'babel-loader',
            query:{
                presets:['es2015']
            }
        }]
    },
    stats:{
        colors:true,
    },
    devtool:'source-map'
};
