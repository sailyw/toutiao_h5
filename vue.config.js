module.exports = {
    publicPath: "./",
    assetsDir: "static",
    outputDir: process.env.outputDir,
    devServer: {
        headers: {
            "Access-Control-Allow-Origin": "*",
        },
        hotOnly: false,
        disableHostCheck: true,
        open: true,
        port: 7012,
        proxy: {
            // 配置跨域
            "/api": {
                // target: 'https://mh.nj119.com.cn:14369/dataCent/',
                target: 'http://192.168.2.104:14369/',
                ws: true,
                changOrigin: true,
                pathRewrite: {
                    "^/api": "",
                },
            },
        },
    },
    configureWebpack: {
        externals: {
            'AMap': 'AMap' // 高德地图配置
        }
    },
    css: {
        loaderOptions: {
            css: {},
            postcss: {
                plugins: [
                    require('postcss-px2rem')({
                        remUnit: 37.5
                    })
                ]
            }
        }
    },
};
