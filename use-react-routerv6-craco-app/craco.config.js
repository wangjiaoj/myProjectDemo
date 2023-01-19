const path = require('path');
const { name } = require('./package.json');
const { loaderByName } = require("@craco/craco");
const CracoLessPlugin = require("craco-less");
const pathResolve = pathUrl => path.join(__dirname, pathUrl);
const isDevelopment = process.env.NODE_ENV === 'development';
const lessModuleRegex = /\.module\.less$/;

module.exports = {
    reactScriptsVersion: 'react-scripts' /* (default value) */,

    babel: {
        plugins: [
          ['import', { libraryName: 'antd', style: true }],
        //   ['@babel/plugin-proposal-decorators', { legacy: true }]
        ]
    },
    webpack: {
        alias: {
        '@': path.resolve('./src'),
        '@assets': pathResolve('src/assets'),
        '@components': pathResolve('src/components'),
        '@hooks': pathResolve('src/hooks'),
        '@mocks': pathResolve('src/mocks'),
        '@routes': pathResolve('src/routes'),
        '@types': pathResolve('src/types'),
        '@utils': pathResolve('src/utils'),
        },
        configure(webpackConfig, { env, paths }) {
            // 配置扩展扩展名
            webpackConfig.resolve.extensions = [...webpackConfig.resolve.extensions, ...['.less', '.css']];
            // if(!isDevelopment)webpackConfig.output.publicPath = '/rplus-web';
            return webpackConfig;
          },
    },
   
    plugins: [
        {
        plugin: CracoLessPlugin,
        options: {
            // less loader options
            lessLoaderOptions: {
                lessOptions: {
                    modifyVars: { "@primary-color": "#3855EF" },
                    javascriptEnabled: true,
                },
            },
            
            // modifyLessModuleRule
            // 这个方法在新的版本中已经支持，可以直接来配置 css mdoules 
            modifyLessModuleRule: (lessModuleRule, context) => {
                lessModuleRule.test = lessModuleRegex;
                // lessModuleRule.exclude = /node_modules|antd\.css/;
                const cssLoader = lessModuleRule.use.find(loaderByName("css-loader"));
                cssLoader.options.modules = {
                    localIdentName: "[local]_[hash:base64:5]"
                }
                return lessModuleRule;
            },
        },
        },
    ],
    devServer: {
        // 本地服务的端口号
        port: 3001,
        // 本地服务的响应头设置
        headers: {
        // 允许跨域
        'Access-Control-Allow-Origin': '*',
        },
    },
};

