/**
 * Created by liweiliang 406320591@QQ.com on 2019/10/22 0022 17:03.
 */
const IS_PROD = ["production", "uat"].includes(process.env.NODE_ENV);
const path = require('path');
const resolve = (dir) => path.join(__dirname, dir);
module.exports = {
    configureWebpack: config => {
        config.externals = {
            vue: 'Vue',
            'element-ui': 'ELEMENT',
            'vue-router': 'VueRouter',
            vuex: 'Vuex',
            axios: 'axios'
        }
    },
    chainWebpack: config => {
        const cdn = {
            css: ['https://cdn.staticfile.org/element-ui/2.14.1/theme-chalk/index.min.css'],
            js: [
                'https://lib.baomitu.com/vue/2.6.11/vue.min.js',
                'https://lib.baomitu.com/vue-router/3.2.0/vue-router.min.js',
                'https://lib.baomitu.com/vuex/3.2.0/vuex.min.js',
                'https://lib.baomitu.com/axios/0.21.0/axios.min.js',
                'https://cdn.staticfile.org/element-ui/2.14.1/index.js'
            ]
        };
        // html中添加cdn
        config.plugin('html').tap(args => {
            args[0].title = "weiFramework";
            args[0].cdn = cdn;
            return args;
        })

        // 添加别名
        config.resolve.alias
            .set("vue$", "vue/dist/vue.esm.js")
            .set("@", resolve("src"))
            .set("@assets", resolve("src/assets"))
        // .set("@scss", resolve("src/assets/scss"))
        // .set("@components", resolve("src/components"))
        // .set("@plugins", resolve("src/plugins"))
        // .set("@views", resolve("src/views"))
        // .set("@router", resolve("src/router"))
        // .set("@store", resolve("src/store"))
        // .set("@layouts", resolve("src/layouts"))
        // .set("@static", resolve("src/static"));
    },

    lintOnSave: false,   // 取消 eslint 验证
    runtimeCompiler: true,
    publicPath: IS_PROD ? process.env.VUE_APP_PUBLIC_PATH : "/", // 设置打包文件相对路径
    // outputDir: `dist-${process.env.NODE_ENV}`,
    // assetsDir: "", // 相对于outputDir的静态资源(js、css、img、fonts)目录
    // indexPath:'index.html', //
    productionSourceMap: false,  // 设置上线后是否加载webpack文件
    devServer: {
        // overlay: { // 让浏览器 overlay 同时显示警告和错误
        //   warnings: true,
        //   errors: true
        // },
        open: true, //配置是否自动启动浏览器
        // host: "localhost",
        port: "8080", // 代理端口
        // https: false,
        // hotOnly: false, // 热更新
        // proxy: {
        //   '/v1': {
        //     target: 'http://www.example.com/v1/', // 目标代理接口地址
        //     changeOrigin: true, // 开启代理，在本地创建一个虚拟服务端
        //     ws: true, // 是否启用websockets
        //     pathRewrite: {
        //       '^/v1': ''
        //     }
        //   }
        // }
    },
}
