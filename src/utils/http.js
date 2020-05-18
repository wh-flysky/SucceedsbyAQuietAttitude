import axios from 'axios';
import { Toast } from 'vant';
import dsBridge from './app.js';
const service = axios.create({
    baseURL: '/app2',
    timeout: 5000,
});

// request interceptor
service.interceptors.request.use(config => {
    return new Promise(resolve => {      
        dsBridge.getToken(e => {
            sessionStorage.setItem("token", JSON.parse(e).snInfo);
            config.headers.Accept = 'application/json, text/plain';
            config.headers.snInfo = JSON.parse(e).snInfo;
            config.headers.version = JSON.parse(e).version;
            config.headers.source = JSON.parse(e).source;
            config.headers.tagEnd = JSON.parse(e).tagEnd;
            dsBridge.getInfo(e => {
                config.headers.shopId = JSON.parse(e).shopId;
                resolve(config);
            })
        })
        
    });
    // return config;
}, error => {
    Promise.reject(error)
})

service.interceptors.response.use(
    response => {
        const res = response.data;
        // Indicator.close();
        if (res.responseCode != 'SUCCESS') {
            return Promise.reject(res.msg);
        } else {
            return res;
        }
    },
    error => {
        // Indicator.close();
        Toast('网络异常');
        return Promise.reject('网络异常!')
    }
);

export default {
    post(url, params, hasFailTip = true) {
        // hasFailTip && Indicator.open({
        //     text: '加载中...',
        //     spinnerType: 'fading-circle'
        // });
        return service.post(url, params).then(res => {
            return res;
        }, err => {
            hasFailTip && Toast(err);
            return Promise.reject(err);
        })
    },
    get(url, params, hasFailTip = false) {
        // hasFailTip && Indicator.open({
        //     text: '加载中...',
        //     spinnerType: 'fading-circle'
        // });
        return service({
            method: 'get',
            url,
            params
        }).then(
            res => {
                return res;
            },
            err => {
                hasFailTip && Toast(err);
                return Promise.reject(err);
            }
        )
    }
}

