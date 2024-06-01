import axios from 'axios'
import {Message} from 'element-ui' // 项目用的element ui
import router from '../router'

const service = axios.create({
    timeout: 7000, // 超过7秒提示超时
    baseUrl: 'https://www.baidu.com'
})

// 请求拦截器
service.interceptors.request.use(
    config => {
        if(localStorage.token) {
            config.headers.token = localStorage.token;
        }
        return config;
    },
    error => {
        console.log(error);
        return Promise.reject(error);
    }
)

// 响应拦截器
service.interceptors.response.use(
    response => {
        // 接收后台参数状态
        const res = response.data;
        if(res.code == 20000 || res.status == 200 || res.success || res.ErrorCode == 20000) {
            return res;
        }else {
            let message = (res.error && res.error.message) || res.message || res.msg || '未知错误';
            Message({
                message,
                type: 'error',
                duration: 5 * 1000
            });
            console.log('拦截器打印错误:', res);
            // 这里可以设置后台返回状态码是500或者是其他,然后重定向跳转
            // if(res.ErrorCode == 500) {
            //     router.push('/login')
            // }
            return Promise.reject(
                new Error(res.message || (res.error &&res.error.message) || '未知错误')
            );
        }
    },
    error => {
        console.log('服务器错误信息:', error);
        if(error.response) {
            // error.response有错误信息,是接口错误,不是取消请求
            // 获取错误码,弹出提示信息,reject()
            let code = error.response.status;
            if(res.code == 401) {
                // router.push('/login');
                return Promise.reject(
                    new Error('登录过期,请重新登录')
                );
            }
            Message({
                message: '服务器繁忙, 请稍后再试!  ' + code,
                type: 'error',
                duration: 3 * 1000
            });
            return Promise.reject(error.message);
        }else {
            // 是取消请求
            // 直接reject
            return Promise.reject(error.message);
        }
    }
)
export default service;