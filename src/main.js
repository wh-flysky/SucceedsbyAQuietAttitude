import Vue from 'vue'
import App from './App.vue'
import router from './router';
import store from './store';
import http from './utils/http.js';
import dsBridge from './utils/app.js';
import Vant from 'vant';
import 'vant/lib/index.css';

/**
 * 引入vantui
 */
Vue.use(Vant);

/**
 *  解决安卓input框自动弹起键盘并推起页面
 */
if (/Android [4-6]/.test(navigator.appVersion)) {
	window.addEventListener("resize", function() {
		if (document.activeElement.tagName == "INPUT" || document.activeElement.tagName == "TEXTAREA") {
			window.setTimeout(function() {
				document.activeElement.scrollIntoViewIfNeeded();
			}, 0);
		}
	})
}

/**
 * 解决移动端的双击会缩放导致click判断延迟
 */
var FastClick = require('fastclick');
FastClick.attach(document.body);

Vue.prototype.$http = http;
Vue.prototype.$dsBridge = dsBridge;
Vue.config.productionTip = false

new Vue({
	router,
	store,
	render: h => h(App),
}).$mount('#app')
