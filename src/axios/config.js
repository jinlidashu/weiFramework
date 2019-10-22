/**
 * Created by liweiliang 406320591@QQ.com on 2019/10/21 0021 17:39.
 */
/**
 * axios 基本配置
 * @type {number}
 */

import axios from 'axios'
import store from '@/store'
import router from '@/router'

// axios.defaults.baseURL = 'https://api.example.com';
axios.defaults.timeout = 15000;
axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
axios.defaults.headers.post['Content-Type'] = 'application/json';
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;

// 添加请求拦截器
axios.interceptors.request.use(config => {
    // console.log("请求信息封装前：" + JSON.stringify(config));
    // if (store.state.user.token) {
    //     config.headers.Authorization = localStorage.token;
    // }
    // 在发送请求之前做些什么
    return config;
}, error => {
    console.log(JSON.stringify(error));
    // if (error.response) {
    //     switch (error.response.status) {
    //         case 401:
    //             // 这里写清除token的代码
    //             router.replace({
    //                 path: 'login',
    //                 query: {redirect: router.currentRoute.fullPath}//登录成功后跳入浏览的当前页面
    //             })
    //     }
    // }
    // 对请求错误做些什么
    return Promise.reject(error);
});

// 添加响应拦截器
axios.interceptors.response.use(response => {
    // console.log("返回信息：" + JSON.stringify(response));
    // if (response.data.code == '600209') {
    //     console.log("------------------------Token已过期----------------------");
    //     // 清除登录的token
    //     store.commit('setUserToken', '');
    //     router.replace({
    //         name: 'login',
    //         query: {redirect: router.currentRoute.fullPath}
    //     })
    // }
    // 对响应数据做点什么
    return response;
}, error => {
    // 对响应错误做点什么
    return Promise.reject(error);
});

/**
 * 处理POST请求
 * @param url
 * @param params
 */

export function fetch(url, params) {
    if (!params) {
        params = {};
    }
    return new Promise((resolve, reject) => {
        axios.post(url, params).then(response => {
            resolve(response.data);
        }, err => {
            reject(err);
        }).catch(error => {
            reject(error);
        })
    })
}

/**
 * 处理GET
 * @param url
 */

export function fetchGet(url, params) {
    return new Promise((resolve, reject) => {
        axios.get(url, {params: params}).then(response => {
            resolve(response.data);
        }, err => {
            reject(err);
        }).catch(error => {
            reject(error);
        })
    })
}
