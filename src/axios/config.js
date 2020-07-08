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

// axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
// axios.defaults.headers.post['Content-Type'] = 'application/json';
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;

// create an axios instance
const service = axios.create({
    baseURL: '/api', // url = base url + request url
    // baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
    // withCredentials: true, // send cookies when cross-domain requests
    timeout: 15000 // request timeout
})
// request interceptor
service.interceptors.request.use(config => {
        // do something before request is sent
        // if (store.state.user.token) {
        //     config.headers.Authorization = localStorage.token;
        // }
        return config
    },
    error => {
        // do something with request error
        console.log(error) // for debug
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
        return Promise.reject(error)
    }
)

// response interceptor
service.interceptors.response.use(response => {
        // if (response.data.code == '600209') {
        //     console.log("------------------------Token已过期----------------------");
        //     // 清除登录的token
        //     store.commit('setUserToken', '');
        //     router.replace({
        //         name: 'login',
        //         query: {redirect: router.currentRoute.fullPath}
        //     })
        // }
        return response;
    },
    error => {
        console.log('err' + error) // for debug
        // Message({
        //     message: error.message,
        //     type: 'error',
        //     duration: 5 * 1000
        // })
        return Promise.reject(error)
    }
)

// export default service

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
        service.post(url, params).then(response => {
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
        service.get(url, {params: params}).then(response => {
            resolve(response.data);
        }, err => {
            reject(err);
        }).catch(error => {
            reject(error);
        })
    })
}
