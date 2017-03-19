//AMD - asyncrous module difinition
//['d1', 'd2', function (d1, d2) {  }]

//CommonJS
//module.exports = {  };
//var m = require('module');

//es6
//import React from 'react';
//import ReactDOM from 'react-dom';

//import { render, .... } from 'react-dom';

//module.js
//export default class Human { }
//import Human from './module.js';


//export class Human1 { }
//export class Human2 { }
//...
//import { Human1 as 'H1', Human2 as 'H2' } from './module.js';



var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var BrowserSyncPlugin = require('browser-sync-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');


module.exports = {
    //entry: path.join(__dirname, 'src', 'main'),
    //entry: ['', '', ''],
    entry: {
        app: path.join(__dirname, 'src', 'main')
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].js'
    },
    module: {
        loaders: [{
            test: /\.jsx?$/,
            exclude: /node_modules|bower_components/,
            loader: 'babel-loader',
            //loader: 'babel!loader!loader',
            //loaders: ['babel', '', ''],
            query: {
                presets: [
                    'react',
                    'es2015',
                    'stage-0'
                ]
            }
        }]
    },
    resolve: {
        extensions: ['', '.js', '.jsx', '.css']
    },
    plugins: [
        new webpack.NoErrorsPlugin(),
        new webpack.ProvidePlugin({
            React: 'react',
            ReactDOM: 'react-dom',
        }),
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'src', 'index.html'),
            filename: path.join(__dirname, 'dist', 'index.html')
        }),
        new BrowserSyncPlugin({
            host: 'localhost',
            port: 3000,
            server: {
                baseDir: ['dist']
            }
        }),
        new CleanWebpackPlugin(['dist'])
    ]
};