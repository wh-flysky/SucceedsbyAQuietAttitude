import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
export default new Router({
    mode: 'hash',
    routes: [
        {
            path: '/',
            redirect: '/home',
        },
        {
            path: '/home',
            name: 'home',
            component: () => import(/* webpackChunkName:'home' */ '@/views/home/home.vue'),
            meta: {
                title: '首页'
            }
        }
    ]
})
