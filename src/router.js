import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
export default new Router({
	mode: 'hash',
	routes: [{
			path: '/',
			redirect: '/home',
		},
		{
			path: '/home',
			name: 'home',
			component: () => import( /* webpackChunkName:'home' */ '@/views/home/home.vue'),
			meta: {
				title: '首页'
			}
		},
		{
			path: '/book/:postid',
			name: 'book',
			component: () => import( /* webpackChunkName:'home' */ '@/views/book/book.vue'),
			meta: {
				title: '书籍'
			}
		},
		{
			path: '/categories',
			component: () => import( /* webpackChunkName:'category' */ '@/views/categoryList/categoryList'),
			name: 'categorylist'
		},
		{
			path: '/categories/:number',
			component: () => import( /* webpackChunkName:'category' */ '@/views/categoryList/category'),
			name: 'category'
		},
	]
})


/**
 * vue-router 高版本使用的是promise捕获造成router重复点击报错
 * npm i vue-router@3.0 -S 重新安装版本解决
 * 或者下面方法，不建议
 */

const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
	return originalPush.call(this, location).catch(err => err)
}
