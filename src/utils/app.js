import router from '@/router';
import store from '@/store';
var dsBridge = require("dsbridge");
var backUrl = {},
	lastUrl = [];

//路由守卫获取当前路由
router.beforeEach((to, from, next) => {
	// document.title = to.meta.title;

	// 记录返回键路径
	if ((backUrl && backUrl.fullPath != to.fullPath) || !backUrl) {
		backUrl = from;
		lastUrl.push(from);
	} else {
		lastUrl.pop();
		backUrl = lastUrl.pop();
	}

	/**
	 * 缓存页面
	 */
	let isBack = router.isBack;
	let arr = store.state.keepAlivePages.slice();
	if (isBack) {
		// 从数组中移除
		let index = arr.indexOf(from.name)
		if (index !== -1) {
			arr.splice(index, 1)
		}
	} else {
		// 加入数组,push操作都要加入缓存数组
		let index = arr.indexOf(from.name)
		if (index === -1) {
			arr.push(from.name)
		}
		let indexTo = arr.indexOf(to.name)
		if (indexTo === -1) {
			arr.push(to.name)
		}
	}
	store.commit('setKeepPages', arr)
	next();
});

//安卓原生的返回键设置,兼容go(-1);
dsBridge.register('back', (data) => {
    if (backUrl && backUrl.path != '/') {
        router.isBack = true
        router.push(backUrl.fullPath);
        return true
    } else {
        return false
    }

});

export default {

}
