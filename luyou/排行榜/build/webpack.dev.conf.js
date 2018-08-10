'use strict'
const utils = require('./utils')
const webpack = require('webpack')
const config = require('../config')
const merge = require('webpack-merge')
const path = require('path')
const baseWebpackConfig = require('./webpack.base.conf')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
const portfinder = require('portfinder');
const axios = require('axios');
const HOST = process.env.HOST
const PORT = process.env.PORT && Number(process.env.PORT);
const url = require('url');
const devWebpackConfig = merge(baseWebpackConfig, {
    module: {
        rules: utils.styleLoaders({ sourceMap: config.dev.cssSourceMap, usePostCSS: true })
    },
    // cheap-module-eval-source-map is faster for development
    devtool: config.dev.devtool,

    // these devServer options should be customized in /config/index.js
    devServer: {
        before(app) {
            app.get('/api/list', (req, res) => {
                    let url = 'https://c.y.qq.com/v8/fcg-bin/fcg_myqq_toplist.fcg';
                    axios.get(url, {
                        headers: {
                            referer: 'https://y.qq.com',
                            post: 'y.qq.com'
                        },
                        params: {
                            g_tk: 5381,
                            uin: 0,
                            format: 'json',
                            inCharset: 'utf-8',
                            outCharset: 'utf-8',
                            notice: 0,
                            platform: 'h5',
                            needNewCode: 1,
                            _: Math.round(new Date() / 1000),
                        }
                    }).then((request) => {
                        res.json(request.data)
                    })
                }),
                app.get('/api/particulars', (req, res) => {
                    let id = url.parse(req.url, true).query
                    let search = 'https://c.y.qq.com/v8/fcg-bin/fcg_v8_toplist_cp.fcg'
                    axios.get(search, {
                        headers: {
                            referer: 'https://y.qq.com',
                            post: 'y.qq.com'
                        },
                        params: {
                            g_tk: 5381,
                            uin: 0,
                            format: 'json',
                            inCharset: 'utf-8',
                            outCharset: 'utf-8',
                            notice: 0,
                            platform: 'h5',
                            needNewCode: 1,
                            tpl: 3,
                            page: 'detail',
                            type: 'top',
                            topid: id.id,
                            _: Math.round(new Date() / 1000),
                        }
                    }).then((request) => {
                        res.json(request.data)
                    })
                })
        },
        clientLogLevel: 'warning',
        historyApiFallback: {
            rewrites: [
                { from: /.*/, to: path.posix.join(config.dev.assetsPublicPath, 'index.html') },
            ],
        },
        hot: true,
        contentBase: false, // since we use CopyWebpackPlugin.
        compress: true,
        host: HOST || config.dev.host,
        port: PORT || config.dev.port,
        open: config.dev.autoOpenBrowser,
        overlay: config.dev.errorOverlay ? { warnings: false, errors: true } : false,
        publicPath: config.dev.assetsPublicPath,
        proxy: config.dev.proxyTable,
        quiet: true, // necessary for FriendlyErrorsPlugin
        watchOptions: {
            poll: config.dev.poll,
        }
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': require('../config/dev.env')
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(), // HMR shows correct file names in console on update.
        new webpack.NoEmitOnErrorsPlugin(),
        // https://github.com/ampedandwired/html-webpack-plugin
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'index.html',
            inject: true
        }),
        // copy custom static assets
        new CopyWebpackPlugin([{
            from: path.resolve(__dirname, '../static'),
            to: config.dev.assetsSubDirectory,
            ignore: ['.*']
        }])
    ]
})

module.exports = new Promise((resolve, reject) => {
    portfinder.basePort = process.env.PORT || config.dev.port
    portfinder.getPort((err, port) => {
        if (err) {
            reject(err)
        } else {
            // publish the new Port, necessary for e2e tests
            process.env.PORT = port
                // add port to devServer config
            devWebpackConfig.devServer.port = port

            // Add FriendlyErrorsPlugin
            devWebpackConfig.plugins.push(new FriendlyErrorsPlugin({
                compilationSuccessInfo: {
                    messages: [`Your application is running here: http://${devWebpackConfig.devServer.host}:${port}`],
                },
                onErrors: config.dev.notifyOnErrors ?
                    utils.createNotifierCallback() : undefined
            }))

            resolve(devWebpackConfig)
        }
    })
})